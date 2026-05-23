# Watch all site files and automatically commit and push changes.
# Run this script in PowerShell from the project folder.

$projectPath = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $projectPath

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $projectPath
$watcher.Filter = '*.*'
$watcher.IncludeSubdirectories = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]'LastWrite'
$watcher.EnableRaisingEvents = $true

function Commit-And-Push {
    try {
        $status = git status --short 2>&1
        if (-not $status) {
            Write-Host "[watch-index] No new changes found." -ForegroundColor Yellow
            return
        }

        Write-Host "[watch-index] Change detected. Committing and pushing..." -ForegroundColor Cyan
        git add .
        $message = "Auto deploy site update $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        git commit -m $message
        git push origin HEAD
        Write-Host "[watch-index] Change pushed to GitHub successfully." -ForegroundColor Green
    }
    catch {
        Write-Host "[watch-index] Commit/push failed: $_" -ForegroundColor Red
    }
}

$timer = $null
$debounceDelayMs = 1200

$action = {
    if ($timer) {
        $timer.Stop()
    }
    if (-not $timer) {
        $timer = New-Object System.Timers.Timer $debounceDelayMs
        $timer.AutoReset = $false
        $timer.Add_Elapsed({
            $timer.Stop()
            Commit-And-Push
        })
    }
    $timer.Start()
}

Register-ObjectEvent $watcher Changed -Action $action | Out-Null

Write-Host "[watch-index] Watching site files. Save any file to auto push updates to GitHub." -ForegroundColor Green
Write-Host "Press Ctrl+C to stop." -ForegroundColor DarkGray

try {
    while ($true) { Start-Sleep -Seconds 1 }
}
finally {
    Unregister-Event -SourceIdentifier * | Out-Null
    $watcher.Dispose()
}
