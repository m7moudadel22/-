const defaultDiseases = [
    {
        id: 'cold',
        name: 'نزلة برد',
        category: 'فيروسية',
        description: 'عدوى فيروسية خفيفة تصيب الجهاز التنفسي العلوي وتسبب سيلان الأنف وسعالاً طفيفاً.',
        symptoms: ['سيلان أنف', 'عطس', 'سعال خفيف', 'احتقان في الحلق', 'صداع منخفض'],
        treatment: 'راحة الجسم، تناول السوائل الدافئة، ومسكنات خفيفة مثل الباراسيتامول. لا تحتاج عادةً لأدوية قوية.',
        medications: ['باراسيتامول', 'مضاد احتقان أنفي', 'شراب سعال لطيف'],
        remedies: 'شرب شاي الزنجبيل بالعسل، الراحة الكافية، استخدام بخار الماء للتخفيف من الاحتقان.',
        foodRecipes: ['شوربة دجاج بالخضار لتعويض السوائل والأملاح', 'مشروب الزنجبيل والليمون والعسل لتهدئة الحلق', 'عصير البرتقال الطبيعي لفيتامين سي']
    },
    {
        id: 'flu',
        name: 'الإنفلونزا',
        category: 'فيروسية',
        description: 'عدوى فيروسية سريعة الانتشار تسبب حمى، آلام جسمية، وسعالاً حاداً.',
        symptoms: ['حمى', 'آلام عضلية', 'سعال جاف', 'إرهاق شديد', 'احتقان حلق'],
        treatment: 'استشارة الطبيب في وقت مبكر لتحديد العقار المناسب، الراحة، وشرب الكثير من السوائل.',
        medications: ['أوسيلتاميفير', 'باراسيتامول', 'مضاد سعال مهدئ'],
        remedies: 'الراحة في غرفة دافئة، استنشاق بخار الماء، وتناول العسل لتهدئة الحلق.',
        foodRecipes: ['مرق الدجاج مع الثوم والزنجبيل', 'شاي النعناع الدافئ مع العسل', 'عصير التفاح الطبيعي مع رشة قرفة']
    },
    {
        id: 'covid',
        name: 'كوفيد-19',
        category: 'فيروسية',
        description: 'فيروس تنفسي قد يؤثر على الرئة والجسم بشكل عام، ويتطلب متابعة طبية دقيقة.',
        symptoms: ['حمى', 'سعال جاف', 'ضيق تنفس', 'فقدان حاسة الشم', 'إرهاق'],
        treatment: 'علاج داعم، مراقبة الأكسجين، وأدوية بناءً على شدة الحالة بعد استشارة الطبيب.',
        medications: ['باراسيتامول', 'أوكسيجين داعم', 'أدوية مضادة للفيروسات حسب بروتوكول الطبيب'],
        remedies: 'شرب الكثير من السوائل، الراحة التامة، وتعزيز المناعة بالأغذية الطبيعية.',
        foodRecipes: ['شوربة الخضار الغنية بالبروتين', 'عصير الليمون والزنجبيل مع العسل', 'سلطة خضراء مع البروتين النباتي']
    },
    {
        id: 'strepThroat',
        name: 'التهاب الحلق البكتيري',
        category: 'بكتيرية',
        description: 'التهاب حاد في الحلق ينتج عن بكتيريا ويؤدي إلى ألم وصعوبة في البلع.',
        symptoms: ['ألم حاد في الحلق', 'حمى', 'تورم اللوزتين', 'صعوبة في البلع', 'رائحة فم كريهة'],
        treatment: 'مضادات حيوية تحت إشراف طبي مع مسكنات لتخفيف الأعراض.',
        medications: ['أموكسيسيلين', 'بنزيل بنسلين', 'أسيتامينوفين'],
        remedies: 'غرغرة ملح دافئ، شرب السوائل الدافئة، وتجنب المهيجات مثل التدخين.',
        foodRecipes: ['شوربة خضار دافئة', 'زبادي طبيعي لتحسين صحة الفم', 'مشروب العسل والليمون لتهدئة الحلق']
    },
    {
        id: 'gastritis',
        name: 'التهاب المعدة',
        category: 'هضمي',
        description: 'التهاب بطانة المعدة يسبب حرقاناً وألماً بعد الأكل، ويتطلب نظاماً غذائياً لطيفاً.',
        symptoms: ['حرقة', 'ألم في أعلى البطن', 'انتفاخ', 'غثيان', 'فقدان شهية'],
        treatment: 'أدوية مضادة للحموضة، تجنب المأكولات الحارة والدهنية، والوجبات المتقطعة الصغيرة.',
        medications: ['مثبطات مضخة البروتون', 'مضادات حموضة', 'مضادات غثيان'],
        remedies: 'شرب ماء دافئ، تناول الأطعمة الخفيفة والمطهية جيداً.',
        foodRecipes: ['شوفان بالحليب الخالي من الدسم', 'أرز أبيض مسلوق مع خضار مطبوخة', 'موز ناضج مع قليل من العسل']
    },
    {
        id: 'diabetes',
        name: 'السكري',
        category: 'مزمنة',
        description: 'خلل في تنظيم السكر في الدم يمكن السيطرة عليه بالغذاء والدواء والمتابعة اليومية.',
        symptoms: ['عطش مفرط', 'تكرار التبول', 'تعب', 'فقدان وزن غير مبرر', 'رؤية ضبابية'],
        treatment: 'مراقبة السكر، اتباع حمية منخفضة الكربوهيدرات، واستخدام الأدوية أو الأنسولين حسب الطبيب.',
        medications: ['ميتفورمين', 'أنسولين', 'محسنات حساسية الأنسولين'],
        remedies: 'ممارسة المشي يومياً، الإكثار من الخضار، وتقليل الأطعمة السكرية.',
        foodRecipes: ['سلطة خضار ورقية مع زيت الزيتون', 'شوربة العدس منخفضة الكربوهيدرات', 'سمك مشوي مع خضار مشوية']
    },
    {
        id: 'hypertension',
        name: 'ارتفاع ضغط الدم',
        category: 'مزمنة',
        description: 'ارتفاع مزمن في ضغط الشريان يزيد مخاطر القلب والسكتة الدماغية إذا لم يُضبط.',
        symptoms: ['صداع', 'دوار', 'خفقان', 'نزيف أنف', 'تعب غير مبرر'],
        treatment: 'دواء منتظم، تقليل الملح، ومراقبة ضغط الدم بانتظام.',
        medications: ['إنالابريل', 'أملوديبين', 'هيدروكلوروثيازيد'],
        remedies: 'تناول الفواكه والخضروات، المشي اليومي، وتخفيف التوتر النفسي.',
        foodRecipes: ['سلطة الخيار والطماطم مع الجرجير', 'شوربة خضار منخفضة الصوديوم', 'سمك مشوي مع الأعشاب']
    },
    {
        id: 'asthma',
        name: 'الربو',
        category: 'تنفسية',
        description: 'حالة مزمنة تسبب تضيق الممرات الهوائية مع سعال وصفير وصعوبة في التنفس.',
        symptoms: ['سعال متكرر', 'صفير', 'ضيق تنفس', 'ألم صدري', 'إرهاق سريع'],
        treatment: 'بخاخات موسعة، أدوية تثبيط الالتهاب، وتجنب المحفزات.',
        medications: ['سالبوتامول', 'ستيرويد استنشاقي', 'مضاد هيستامين'],
        remedies: 'تنظيف المنزل من الغبار، تجنب التدخين، والتحكم بالتوتر.',
        foodRecipes: ['شاي الزنجبيل بالليمون', 'سلطة خضار مطبوخة خالية من الكافيين', 'عصير الجزر الطازج']
    },
    {
        id: 'migraine',
        name: 'الصداع النصفي',
        category: 'عصبية',
        description: 'صداع نابض غالباً في جهة واحدة من الرأس مصحوبًا بحساسية للضوء والضوضاء.',
        symptoms: ['صداع نابض', 'حساسية للضوء', 'غثيان', 'تقيؤ', 'دوار'],
        treatment: 'مسكنات قوية، أدوية مضادة للغثيان، وتجنب محفزات الصداع.',
        medications: ['إيبوبروفين', 'ترامادول', 'مضاد غثيان'],
        remedies: 'الاسترخاء في غرفة مظلمة، شرب الماء، وتجنب الكافيين الزائد.',
        foodRecipes: ['ماء جوز الهند لترطيب الجسم', 'شاي النعناع البارد', 'وجبة خفيفة من اللوز غير المملح']
    },
    {
        id: 'eczema',
        name: 'الأكزيما',
        category: 'جلدية',
        description: 'حالة جلدية تسبب حكة وحساسية وجفافاً في مناطق مختلفة من الجسم.',
        symptoms: ['حكة', 'احمرار', 'تقشر الجلد', 'بقع جافة', 'تورم خفيف'],
        treatment: 'مرطبات وحمامات مطبوخة، كريمات ستيرويد خفيفة، وتجنب المهيجات.',
        medications: ['مرهم مرطب', 'كريم ستيرويد', 'مضاد هيستامين'],
        remedies: 'استخدام منتجات لطيفة، شرب ماء كافٍ، والحفاظ على نظافة البشرة.',
        foodRecipes: ['سلطة خضار طازجة مع بذور الشيا', 'سمك السلمون المشوي الغني بأوميغا 3', 'شاي البابونج المهدئ']
    },
    {
        id: 'anemia',
        name: 'الأنيميا (فقر الدم)',
        category: 'تغذية',
        description: 'نقص الهيموغلوبين يسبب تعباً وضعفاً ويحتاج إلى غذاء غني بالحديد والفيتامينات.',
        symptoms: ['تعب', 'خفقان', 'شحوب البشرة', 'دوار', 'برودة الأطراف'],
        treatment: 'مكملات حديد، مكملات فيتامين ب12، ونظام غذائي غني بالحديد.',
        medications: ['مكملات حديد', 'فيتامين ب12', 'مكمل حمض الفوليك'],
        remedies: 'تناول الأطعمة الغنية بالحديد والفيتامينات، وتجنب المشروبات المحتوية على الكافيين أثناء الوجبات.',
        foodRecipes: ['لحم أحمر مشوي مع السبانخ', 'حمص بالطحينة مع الخضار', 'عصير البرتقال مع الجزر']
    },
    {
        id: 'ibs',
        name: 'متلازمة القولون العصبي',
        category: 'هضمي',
        description: 'اضطراب مزمن في الأمعاء يسبب ألمًا وغازات وتغيرات في حركة الأمعاء.',
        symptoms: ['آلام بطنية', 'انتفاخ', 'إمساك أو إسهال', 'غازات', 'إحساس بعدم الإفراغ الكامل'],
        treatment: 'تعديل النظام الغذائي، أدوية لتخفيف الأعراض، ودعم الصحة النفسية.',
        medications: ['مضاد تشنج', 'ملين ألياف', 'أدوية مضادة للإسهال'],
        remedies: 'تناول الألياف القابلة للذوبان، شرب الماء بكثرة، وإدارة التوتر.',
        foodRecipes: ['شوفان بالحليب مع التفاح', 'مرق خضار لطيف', 'زبادي مع موز']
    },
    {
        id: 'depression',
        name: 'الاكتئاب',
        category: 'نفسية',
        description: 'حالة مزاجية تتضمن فقدان الاهتمام والطاقة، وتحتاج لدعم طبي ونفسي ثابت.',
        symptoms: ['حزن مستمر', 'فقدان الاهتمام', 'تعب', 'صعوبة في النوم', 'فقدان شهي ة'],
        treatment: 'جلسات علاج نفسي، أدوية مضادة للاكتئاب، ودعم اجتماعي.',
        medications: ['سيرترالين', 'فلوكسيتين', 'مضادات اكتئاب ثلاثية الحلقات'],
        remedies: 'ممارسة الرياضة الخفيفة، تنظيم النوم، والتغذية المتوازنة.',
        foodRecipes: ['سلطة السلمون مع البروتينات الصحية', 'سموثي الموز مع زبدة اللوز', 'شوربة العدس الغنية بالمغذيات']
    },
    {
        id: 'heartDisease',
        name: 'أمراض القلب التاجية',
        category: 'قلبية',
        description: 'تضيق الأوعية الدموية المسؤولة عن تغذية القلب، يتطلب نمط حياة صحي وعلاجاً طبياً دقيقاً.',
        symptoms: ['ألم صدر', 'ذعر', 'ضيق تنفس', 'تعب سريع', 'دوار'],
        treatment: 'أدوية مخفضة للكوليسترول، مضادات تجلط، وريجيم صحي للقلب.',
        medications: ['ستاتين', 'أسبرين منخفض الجرعة', 'مضادات تجلط خفيفة'],
        remedies: 'تخفيف الملح والدهون المشبعة، والمشي المنتظم.',
        foodRecipes: ['سلطة الكينوا مع الخضروات والمكسرات', 'سمك السلمون المشوي بزيت الزيتون', 'شاي البابونج دون سكر']
    },
    {
        id: 'kidneyStones',
        name: 'حصوات الكلى',
        category: 'كلوية',
        description: 'تكوين بلورات في الكلى يسبب ألماً حاداً وقد يحتاج لتدخل طبي أو جراحي.',
        symptoms: ['ألم في الخاصرة', 'دم في البول', 'غثيان', 'تردد التبول', 'بول عكر'],
        treatment: 'شرب الكثير من الماء، أدوية لتخفيف الألم، وفي بعض الحالات تفتيت الحصوات.',
        medications: ['مسكنات ألم قوية', 'أدوية لتوسيع المسالك البولية', 'أدوية تمنع تكوين الحصى'],
        remedies: 'زيادة شرب الماء، تقليل الملح، وتناول عصير الليمون.',
        foodRecipes: ['ماء الليمون مع قليل من العسل', 'شوربة خضار قليلة الصوديوم', 'عصير البطيخ الطبيعي']
    },
    {
        id: 'psoriasis',
        name: 'الصدفية',
        category: 'جلدية',
        description: 'مرض مناعي يؤثر على الجلد مسبباً تهيجاً وقشوراً، ويتطلب رعاية جلدية دقيقة.',
        symptoms: ['بقع حمراء', 'قشرة متقشرة', 'حكة', 'تشققات', 'ألم خفيف'],
        treatment: 'كريمات علاجية، أدوية مناعية في الحالات الشديدة، ورطوبة عالية للجلد.',
        medications: ['كريمات ستيرويد موضعية', 'محاليل قطرانية', 'أدوية مناعية بيولوجية'],
        remedies: 'استخدام مرطبات طبيعية، تجنب الصابون القاسي، والاستحمام بماء فاتر.',
        foodRecipes: ['سلطة الأفوكادو والخيار', 'سمك السلمون الغني بالأوميغا 3', 'شاي الكركم الدافئ']
    },
    {
        id: 'foodPoisoning',
        name: 'تسمم غذائي',
        category: 'بكتيرية',
        description: 'عدوى تحدث بعد تناول طعام ملوث وتسبب إسهالاً وغثياناً وقيئاً.',
        symptoms: ['قيء', 'إسهال', 'آلام بطن', 'حمى', 'تعب'],
        treatment: 'الترطيب المكثف، الراحة، ومضادات حيوية عند الضرورة.',
        medications: ['محاليل تعويض سوائل', 'أدوية مضادة للتقيؤ', 'مضادات حيوية إذا كان السبب بكتيريا'],
        remedies: 'شرب ماء دافئ، تجنب الأطعمة الثقيلة، وأخذ قسط كافٍ من الراحة.',
        foodRecipes: ['شوربة الأرز الخفيفة', 'موز ناضج', 'شاي البابونج المهدئ']
    },
    {
        id: 'insomnia',
        name: 'الأرق',
        category: 'نفسية',
        description: 'صعوبة في النوم العميق تؤثر على الأداء اليومي وتحتاج عادات صحية ونصائح استرخاء.',
        symptoms: ['صعوبة النوم', 'استيقاظ متكرر', 'إرهاق صباحي', 'تشتت', 'حساسية من الضوضاء'],
        treatment: 'تغيير نمط الحياة، تقنيات الاسترخاء، وفي بعض الأحيان أدوية خفيفة.',
        medications: ['مضادات القلق الخفيفة', 'مهدئات طبيعية', 'مكملات الميلاتونين'],
        remedies: 'روتين نوم منتظم، تجنب الشاشات قبل النوم، وشرب شاي البابونج.',
        foodRecipes: ['حليب دافئ مع عسل', 'عصير الكرز الطبيعي', 'وجبة خفيفة من اللوز']
    },
    {
        id: 'obesity',
        name: 'السمنة',
        category: 'تغذية',
        description: 'زيادة مفرطة في الدهون تؤثر على الصحة العامة وتزيد خطر الأمراض المزمنة.',
        symptoms: ['زيادة الوزن', 'صعوبة الحركة', 'تعرق سريع', 'تعب', 'تنفس ثقيل'],
        treatment: 'نظام غذائي متوازن، تمرين منتظم، ودعم طبي لتخفيض الوزن تدريجياً.',
        medications: ['مثبطات الشهية', 'أدوية تقليل امتصاص الدهون', 'مكملات فيتامينات'],
        remedies: 'تقليل السكريات، تناول الألياف، ومراقبة السعرات اليومية.',
        foodRecipes: ['سلطة الخضار مع البروتين المشوي', 'شوربة الخضار المنخفضة السعرات', 'عصير الخيار والليمون']
    },
    {
        id: 'hairLoss',
        name: 'تساقط الشعر',
        category: 'شعر',
        description: 'تساقط غير طبيعي للشعر بسبب التغذية أو الهرمونات أو الإجهاد، ويمكن دعمه بالغذاء والعلاجات.',
        symptoms: ['تساقط شعر زائد', 'ترقق الشعر', 'فروة رأس ضعيفة', 'بصيلات هشة', 'فقرة صلع جزئي'],
        treatment: 'فحص طبي لمعرفة السبب، مكملات غذائية، وعلاجات تكميلية لفروة الرأس.',
        medications: ['مينوكسيديل', 'فيتامينات للشعر', 'مكملات البيوتين'],
        remedies: 'التغذية السليمة، تجنب التوتر، وتدليك فروة الرأس بزيوت طبيعية.',
        foodRecipes: ['سموثي السبانخ مع الموز وزبدة اللوز', 'سلطة السلمون مع بذور الكينوا', 'عصير الجزر مع الزنجبيل']
    },
    }
];

let diseases = [...defaultDiseases];

const diseaseList = document.getElementById('diseaseList');
const detailSection = document.getElementById('detail');
const detailTitle = document.getElementById('detailTitle');
const detailDescription = document.getElementById('detailDescription');
const detailSymptoms = document.getElementById('detailSymptoms');
const detailTreatment = document.getElementById('detailTreatment');
const detailMedications = document.getElementById('detailMedications');
const detailRemedies = document.getElementById('detailRemedies');
const detailFoodRecipes = document.getElementById('detailFoodRecipes');

function renderDiseaseCards(list) {
    diseaseList.innerHTML = '';
    if (!list.length) {
        diseaseList.innerHTML = '<p class="empty-state">لم يتم العثور على حالات مطابقة. حاول تغيير كلمة البحث أو الفئة.</p>';
        return;
    }

    list.forEach(disease => {
        const card = document.createElement('article');
        card.className = 'disease-card';
        card.innerHTML = `
            <h3>${disease.name}</h3>
            <p>${disease.description}</p>
            <button class="btn" onclick="showDiseaseDetail('${disease.id}')">عرض التفاصيل</button>
        `;
        diseaseList.appendChild(card);
    });
}

function showDiseaseDetail(id) {
    const disease = diseases.find(item => item.id === id);
    if (!disease) return;

    detailSection.classList.remove('hidden');
    detailTitle.textContent = disease.name;
    detailDescription.textContent = disease.description;
    detailSymptoms.innerHTML = disease.symptoms.map(symptom => `<li>${symptom}</li>`).join('');
    detailTreatment.textContent = disease.treatment;
    detailMedications.innerHTML = disease.medications.map(med => `<li>${med}</li>`).join('');
    detailRemedies.textContent = disease.remedies;
    detailFoodRecipes.innerHTML = disease.foodRecipes.map(recipe => `<li>${recipe}</li>`).join('');
    detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function filterDiseases() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const filtered = diseases.filter(disease => {
        return disease.name.toLowerCase().includes(query)
            || disease.description.toLowerCase().includes(query)
            || disease.category.toLowerCase().includes(query)
            || disease.symptoms.some(symptom => symptom.toLowerCase().includes(query))
            || disease.foodRecipes.some(recipe => recipe.toLowerCase().includes(query))
            || disease.medications.some(med => med.toLowerCase().includes(query));
    });
    renderDiseaseCards(filtered);
}

function setCategoryFilter(category, button) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (button) button.classList.add('active');

    if (category === 'all') {
        renderDiseaseCards(diseases);
        return;
    }

    const filtered = diseases.filter(disease => disease.category === category);
    renderDiseaseCards(filtered);
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function addNewItem() {
    const name = document.getElementById('newName').value.trim();
    const category = document.getElementById('newCategory').value.trim();
    const description = document.getElementById('newDescription').value.trim();
    const symptoms = document.getElementById('newSymptoms').value.split(',').map(s => s.trim());
    const treatment = document.getElementById('newTreatment').value.trim();
    const medications = document.getElementById('newMedications').value.split(',').map(m => m.trim());
    const remedies = document.getElementById('newRemedies').value.trim();
    const foodRecipes = document.getElementById('newRecipes').value.split(',').map(r => r.trim());

    if (!name || !category || !description || !treatment || !medications.length || !foodRecipes.length) {
        alert('⚠️ الرجاء ملء جميع الحقول المطلوبة');
        return;
    }

    const newId = 'custom_' + Date.now();
    const newItem = {
        id: newId,
        name: name,
        category: category,
        description: description,
        symptoms: symptoms.filter(s => s),
        treatment: treatment,
        medications: medications.filter(m => m),
        remedies: remedies,
        foodRecipes: foodRecipes.filter(r => r)
    };

    const customDiseases = JSON.parse(localStorage.getItem('customDiseases') || '[]');
    customDiseases.unshift(newItem);
    saveDiseasesToStorage(customDiseases);

    diseases.unshift(newItem);
    
    document.getElementById('newName').value = '';
    document.getElementById('newCategory').value = '';
    document.getElementById('newDescription').value = '';
    document.getElementById('newSymptoms').value = '';
    document.getElementById('newTreatment').value = '';
    document.getElementById('newMedications').value = '';
    document.getElementById('newRemedies').value = '';
    document.getElementById('newRecipes').value = '';

    renderDiseaseCards(diseases);
    scrollToSection('diseases');
    alert('✅ تمت إضافة العنصر الجديد بنجاح!');
}

function saveDiseasesToStorage(customDiseases) {
    try {
        localStorage.setItem('customDiseases', JSON.stringify(customDiseases));
    } catch (e) {
        console.log('تنبيه: تعذر حفظ البيانات بشكل دائم');
    }
}

function loadCustomDiseases() {
    try {
        const custom = localStorage.getItem('customDiseases');
        if (custom) {
            const customItems = JSON.parse(custom);
            diseases = [...customItems, ...defaultDiseases];
        }
    } catch (e) {
        console.log('تنبيه: تعذر تحميل البيانات المحفوظة');
    }
}

function copyPageLink() {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
        alert('✅ تم نسخ الرابط بنجاح!');
    }).catch(() => {
        alert('⚠️ تعذر نسخ الرابط. حاول يدوياً.');
    });
}

function shareOnWhatsApp() {
    const message = encodeURIComponent('🏥 الصياد - دليلك الصحي الشامل! اكتشف آلاف الأمراض والعلاجات والوصفات الغذائية المتخصصة. أضف معلوماتك الخاصة وشارك الصحة مع الجميع! 💪');
    const link = window.location.href;
    window.open(`https://wa.me/?text=${message}%20${encodeURIComponent(link)}`, '_blank');
}

loadCustomDiseases();
renderDiseaseCards(diseases);
