/* Reversible UI translation: keeps controls, application state and WebGL intact. */
(() => {
  window.busolaStopArabicObserver?.();
  const translations = {...en};
  for (const [english, arabic] of Object.entries(arabicOnly)) {
    if (english === english.toUpperCase() && /[A-Z]/.test(english)) translations[arabic] = english;
  }
  Object.assign(translations, {
    'بوصلة':'Busola','أثير':'Aether','بوصلة | منصة ذكاء القرار':'Busola | Decision intelligence',
    '/ منصة فرص التوطين':'/ Localization opportunities platform','المظهر':'Theme',
    'آخر تحديث للبيانات: اليوم، 09:40':'Data updated: today, 09:40',
    'بيئة عرض الهاكاثون':'Hackathon demo environment','ذكاء القرار':'Decision intelligence',
    'من المخاطر إلى':'From risks to','فرصٍ تُبنى':'opportunities to build',
    'رؤية موحّدة تكشف أين يضغط الاستيراد على سلاسل الإمداد، ثم تترجم الإشارة إلى مسار قرار وفرصة استثمار قابلة للمراجعة.':'See where import dependency strains supply chains, then turn each signal into a decision path and an investment opportunity for review.',
    'استكشاف الفرص ←':'Explore opportunities →',
    '↑ 12% مقارنة بالربع السابق':'↑ 12% compared with last quarter','7 منها جاهزة للعرض على اللجنة':'7 ready for committee review','عبر 4 شركات محفظة':'Across 4 portfolio companies','لأعلى فرصة أولوية':'For the highest-priority opportunity',
    'مسار العمل المقترح':'Suggested workflow','خطوات تنفيذية مرتبة بحسب ما يجب فعله الآن':'Actions ordered by what needs to happen next',
    'اسأل أثير':'Ask Aether','اعتماد نطاق الفرصة':'Confirm the opportunity scope',
    'تأكيد وحدات تخزين الطاقة كحالة أولوية مع الطلب المجمّع البالغ 184 مليون ريال.':'Confirm energy storage modules as the priority case with SAR 184 million in aggregated demand.',
    'عرض جواز الفرصة ←':'View opportunity passport →','التحقق الفني من القدرات':'Validate technical capabilities',
    'طلب تحقق مبدئي من قدرة الربط والتغليف الحراري قبل ترشيح مسار التوطين.':'Request an initial check of thermal interconnection and packaging capabilities before proposing localization.',
    'فتح مُركّب القدرات ←':'Open capability composer →','إحالة القرار للجنة':'Submit the decision for committee review',
    'مقارنة كلفة تخفيف المخاطر مع بناء القدرة المحلية ضمن افتراضات شفافة.':'Compare mitigation costs with building local capability using transparent assumptions.',
    'تشغيل محاكي القرار ←':'Open decision simulator →','قيمة الحل':'Solution value',
    'لا نكتفي بتحديد ما لا يمكن توريده محليًا.':'Go beyond identifying what cannot be sourced locally.',
    'بوصلة تحوّل الفجوة إلى «جواز فرصة» يربط المشتريات والقدرات الوطنية والجدوى الاستثمارية في قرار واحد قابل للتدقيق.':'Busola turns each gap into an opportunity passport connecting procurement, national capabilities and investment feasibility in one auditable decision.',
    'شاهد مُركّب القدرات':'Explore capability composer',
    'الأرقام والموردون والسيناريوهات في النموذج بيانات تجريبية واقعية الهيكل، وليست بيانات تشغيلية أو توصيات اعتماد.':'Numbers, suppliers and scenarios are illustrative demo data, not operational records or approval recommendations.',
    'حدود جغرافية مبسطة من ناتشورال إيرث • مواقع المدن بالإحداثيات • بيانات الفرص تجريبية':'Simplified Natural Earth boundaries • Geolocated cities • Illustrative opportunity data',
    'الرياض':'Riyadh','جدة':'Jeddah','الدمام':'Dammam','تبوك':'Tabuk',
    'محفظة فرص التوطين':'Localization opportunity portfolio','جواز التوطين':'Localization passport',
    'الفرصة':'Opportunity','المجال':'Sector','الطلب السنوي':'Annual demand','جاهزية التوطين':'Localization readiness',
    'المبالغ والدرجات تجريبية للعرض فقط.':'Amounts and scores are illustrative.',
    'مفهوم «جواز الفرصة» مقصود ليخدم قرار المشتريات وقرار الاستثمار معًا، مع فصلٍ واضح بين البيانات والمخرجات التقديرية.':'The opportunity passport supports both procurement and investment decisions, with data clearly separated from estimates.',
    'معايرة ومحركات دقيقة':'Calibration and precision motors','معالجة حرارية وضبط جودة':'Heat treatment and quality control','إلكترونيات قدرة واختبار':'Power electronics and testing',
    'مُركّب القدرات · مختبر التوطين':'Capability composer · Localization lab',
    'اختر منتجًا. اكتشف مكوناته. حدّد فرصة توطينه.':'Choose a product. Explore its parts. Find its localization opportunity.',
    'ابحث في الكتالوج الصناعي، ثم فكّك المنتج إلى أجزائه. لكل جزء طلب وقدرات تصنيع وفجوة يمكن تحويلها إلى فرصة.':'Search the industrial catalog and separate a product into parts. Explore demand, manufacturing capabilities and localization gaps for each part.',
    'البحث عن منتج أو مكوّن':'Search products or components','القطاع':'Sector','جميع القطاعات':'All sectors','الإلكترونيات الصناعية':'Industrial electronics','المواد المتقدمة':'Advanced materials',
    'ابحث: أشباه الموصلات، سيمي كوندكتر، بطارية، ألمنيوم…':'Search: semiconductor, battery, solar panel, aluminum…',
    'أشباه الموصلات':'Semiconductor','حزمة دائرة متكاملة':'Integrated circuit package',
    'وحدة بطارية صناعية':'Industrial battery module','تخزين الطاقة':'Energy storage','لوح شمسي':'Solar panel','مكونات توليد الطاقة':'Power generation components','مبادل حراري ألمنيوم':'Aluminum heat exchanger','المعادن والتصنيع':'Metals and manufacturing',
    'قالب السيليكون':'Silicon die','أسلاك الربط':'Bond wires','طبقة تثبيت القالب':'Die attach layer','الإطار والأطراف المعدنية':'Lead frame and terminals','الغلاف الواقي':'Protective molding',
    'الخلايا':'Battery cells','قضبان التوصيل':'Busbars','صفيحة التبريد':'Cooling plate','الهيكل الواقي':'Protective enclosure','الزجاج الأمامي':'Front glass','الخلايا الشمسية':'Solar cells','الطبقة الخلفية':'Backsheet','إطار الألمنيوم':'Aluminum frame','الزعانف':'Fins','الأنابيب':'Tubes','مجمعات التدفق':'Flow headers',
    'مصدر الأرقام':'Data source','بيانات السيناريو التجريبية':'Illustrative scenario data','البيانات الوطنية الموثقة فقط':'Verified national data only',
    'كتالوج عرض قابل للبحث؛ ليس قاعدة التجارة السعودية الكاملة. النسب والأحجام الموسومة «تجريبية» افتراضات للسيناريو، وليست إحصاءات وطنية.':'Searchable demo catalog, not a complete Saudi trade database. Values labeled illustrative are scenario assumptions, not national statistics.',
    'فكّك المنتج':'Explode product','إعادة التجميع':'Reassemble','التفكيك':'Explosion','إعادة المنظور':'Reset view','جارٍ تحميل المجسم…':'Loading 3D model…',
    'اسحب لتدوير المجسم • استخدم عجلة الفأرة للتكبير • اختر جزءًا أو استخدم القائمة التالية. النموذج توضيحي لبنية المنتج.':'Drag to rotate • Scroll to zoom • Select a part or use the list below. This model illustrates the product structure.',
    'بيانات تجريبية':'Illustrative data','لم تُربط بيانات موثقة بعد':'Verified data is not connected yet','غير متاح':'Unavailable',
    'الطلب السنوي على المنتج':'Annual product demand','حصة الجزء من قيمة الطلب':'Part share of demand value','نسبة القيمة المحلية':'Local value share','تغطية الطلب بالاستيراد':'Demand covered by imports','التصدير من الإنتاج المحلي':'Exports as a share of local production','قيمة الطلب السنوي على الجزء':'Annual demand value for this part','القدرة المطلوبة':'Required capability','الفجوة المرشحة للدراسة':'Gap to investigate',
    'مرجع بنية الحزم — تكساس إنسترومنتس':'Package structure reference — Texas Instruments','المرجع يشرح البنية، ولا يثبت النسب التجريبية.':'This reference explains the structure; it does not validate the illustrative percentages.',
    'قارن قرار التوطين والاستيراد':'Compare localization and importing','اسأل أثير عن هذا المكوّن':'Ask Aether about this part',
    '١. المادة والعملية':'1. Material and process','٢. الفجوة المطلوب تطويرها':'2. Capability gap','٣. مسار التحقق':'3. Validation path',
    'مطابقة المواصفات ثم اختبار العينة والطاقة الإنتاجية؛ لا يوجد مورد معتمد تلقائيًا في هذا العرض.':'Verify specifications, samples and production capacity. No supplier is automatically qualified in this demo.',
    'مكونات المنتج وبيانات الطلب والتجارة':'Product parts, demand and trade data','الجزء':'Part','حصة قيمة الطلب':'Share of demand value','التوطين':'Localization','الاستيراد لتغطية الطلب':'Imports covering demand','تصدير من الإنتاج المحلي':'Exports from local production','الحالة':'Status','افتراض تجريبي':'Illustrative assumption',
    'الاستيراد: حصة الواردات من الطلب المحلي في السيناريو. التصدير: حصة الإنتاج المحلي المصدّر للخارج. التوطين: حصة القيمة المحلية المفترضة. حصة الطلب: نصيب الجزء من قيمة طلب المنتج؛ لا تُجمع كطلب مستقل إضافي.':'Imports: share of local demand supplied from abroad. Exports: share of local production exported. Localization: assumed local value share. Demand share: part of the product demand value, not additional independent demand.',
    'مرجع الإحصاءات الوطنية — الهيئة العامة للإحصاء ↗':'National statistics reference — GASTAT ↗',
    'لا توجد منتجات مطابقة في كتالوج العرض. جرّب اسم منتج أو مكوّن آخر.':'No matching products in the demo catalog. Try another product or component.',
    'تصنيع الرقاقة ومعالجتها واختبارها':'Wafer fabrication, processing and testing','تصنيع القوالب الدقيقة والتحقق من الأداء':'Precision die fabrication and performance validation','سحب أسلاك دقيقة وربطها كهربائيًا':'Fine-wire drawing and electrical bonding','دقة الربط والفحص البصري':'Bonding accuracy and visual inspection','مواد لاصقة وتثبيت حراري':'Adhesives and thermal die attachment','اختبار الالتصاق والتوصيل الحراري':'Adhesion and thermal conductivity testing','تشكيل النحاس والطلاء والقطع':'Copper forming, plating and cutting','تأهيل دقة الأبعاد والطلاء':'Dimensional and plating qualification','قولبة راتنج واقٍ واختبار الإحكام':'Protective resin molding and seal testing','تأهيل مواد التغليف والاختبار البيئي':'Packaging material qualification and environmental testing',
    'تجميع الخلايا واختبارها':'Cell assembly and testing','تصنيع الخلايا وتأهيلها':'Cell manufacturing and qualification','تشكيل النحاس والعزل':'Copper forming and insulation','اختبار العزل':'Insulation testing','تشكيل ولحام الألمنيوم':'Aluminum forming and welding','اختبار تسرب السوائل':'Fluid leak testing','قص وتشكيل وتجميع':'Cutting, forming and assembly','اعتماد المتانة':'Durability qualification','معالجة الزجاج وتقسيته':'Glass processing and tempering','اختبار نفاذية الضوء':'Light transmission testing','توصيل الخلايا وتغليفها':'Cell interconnection and encapsulation','كفاءة الخلايا وتأهيلها':'Cell efficiency and qualification','تصفيح وعزل':'Lamination and insulation','بثق وقطع الألمنيوم':'Aluminum extrusion and cutting','دقة التجميع':'Assembly accuracy','درفلة وتشكيل الألمنيوم':'Aluminum rolling and forming','اللحام الحراري':'Thermal welding','بثق وسحب الأنابيب':'Tube extrusion and drawing','اختبار الضغط':'Pressure testing','صب وتشغيل المعادن':'Metal casting and machining','اختبار الإحكام':'Seal testing',
    'هل نستمر في الاستيراد أم نستثمر في قدرة محلية؟':'Continue importing or invest in local capability?',
    'حدد المنتج وحجم الطلب واضطراب الإمداد، ثم قارن كلفة البدائل خلال الفترة نفسها. اكتشف متى يصبح تطوير القدرة المحلية مجديًا.':'Choose a product, demand volume and supply disruption, then compare alternatives over the same period to explore when local capability becomes viable.',
    '١. اختر المنتج وافتراضاته':'1. Choose a product and assumptions','٢. قارن الاستجابات':'2. Compare responses','٣. راجع السبب والأثر':'3. Review rationale and impact',
    'المنتج':'Product','الطلب السنوي · وحدة':'Annual demand · units','تكلفة الوحدة المستوردة · ريال':'Imported unit cost · SAR','تكلفة الوحدة المحلية · ريال':'Local unit cost · SAR','استثمار تطوير القدرة · مليون ريال':'Capability investment · SAR million','تشغيل ثابت إضافي · مليون ريال سنويًا':'Additional fixed costs · SAR million/year','أفق المقارنة · سنوات':'Comparison horizon · years','سنة واحدة':'One year','تأخير الاستيراد المتوقع · أيام سنويًا':'Expected import delay · days/year','تكلفة يوم التأخير · ريال':'Cost per day of delay · SAR','مدة تأهيل القدرة الجديدة · شهر':'New capability qualification · months',
    'جميع المدخلات افتراضات تجريبية قابلة للتعديل. لا تمثل عروض أسعار أو جدوى استثمارية معتمدة.':'All inputs are editable illustrative assumptions, not quotations or an approved feasibility study.',
    'استعادة افتراضات المنتج':'Reset product assumptions','أقل كلفة ضمن افتراضاتك':'Lowest cost under your assumptions','الاستمرار في الاستيراد':'Continue importing','تغيير مسار الشحن':'Alternative shipping route','زيادة مخزون الأمان':'Increase safety stock','مورد خارجي بديل':'Alternative overseas supplier','توريد محلي مرشح':'Candidate local supplier','الأقل كلفة':'Lowest cost','الكلفة الكلية خلال الفترة نفسها':'Total cost over the same period','ناقش النتيجة مع أثير':'Discuss the result with Aether','كيف حُسبت النتائج؟':'How are results calculated?',
    'الكلفة الكلية = شراء الوحدات خلال فترة المقارنة + الاستثمار الأولي + التشغيل الإضافي + كلفة أيام التأخير المتبقية. نعتمد طلبًا ثابتًا؛ لا يشمل النموذج الخصم المالي والضرائب والقيمة المتبقية.':'Total cost = unit purchases over the comparison period + initial investment + additional operating costs + remaining delay costs. Demand is constant. Discounting, taxes and residual value are excluded.',
    'تطوير القدرة: تغطية محلية مستهدفة ٧٠٪ بعد مدة التأهيل. التوريد المحلي المرشح: تغطية ٣٠٪ بعد نصف سنة مع علاوة تكلفة ١٠٪. المسار البديل يضيف ٦٪ لسعر الاستيراد ويخفض أيام التأخير ٤٠٪. المورد الخارجي البديل يضيف ٣٪ ويخفضها ٢٥٪. مخزون الأمان يضيف ٨٪ ويخفضها ٦٠٪. جميعها فرضيات مقارنة.':'New capability targets 70% local supply after qualification. A candidate local supplier covers 30% after six months with a 10% cost premium. An alternative route adds 6% to import cost and reduces delay by 40%. An alternative overseas supplier adds 3% and reduces delay by 25%. Safety stock adds 8% and reduces delay by 60%. These are comparison assumptions.',
    'خفض التعرض في المسارين المحليين = حصة الوحدات التي تُورّد محليًا خلال الفترة، وليس تقديرًا شاملًا لجميع المخاطر. تُشترط المواصفات والاعتمادات وتوفر الطاقة قبل التنفيذ.':'Exposure reduction in local supply paths is the share of units sourced locally during the period, not a comprehensive risk estimate. Specifications, approvals and capacity must be verified before execution.',
    'راجع القيم المدخلة':'Check your inputs','أدخل قيمًا موجبة وضمن الحدود الموضحة لإجراء المقارنة.':'Enter positive values within the stated limits to run the comparison.',
    'يستمر شراء جميع الوحدات من الخارج مع تحمل التأخير المفترض.':'All units remain imported, with the assumed delay costs.',
    'علاوة شحن ٦٪ مقابل انخفاض أيام التأخير ٤٠٪.':'A 6% shipping premium reduces delay days by 40%.','كلفة شراء وحيازة إضافية ٨٪ مقابل تقليل أيام التأخير ٦٠٪.':'An 8% purchasing and holding premium reduces delay days by 60%.','علاوة توريد ٣٪ مقابل تقليل التأخير ٢٥٪.':'A 3% sourcing premium reduces delays by 25%.','تأهيل مورد مرشح وتغطية ٣٠٪ من الوحدات بعد ستة أشهر.':'Qualify a candidate supplier to cover 30% of units after six months.','استثمار في القدرة الناقصة وتغطية ٧٠٪ من الوحدات بعد فترة التأهيل.':'Invest in missing capability to cover 70% of units after qualification.',
    'مدة التأهيل تتجاوز أفق المقارنة؛ لا يتحقق توريد محلي خلال هذه الفترة.':'Qualification exceeds the comparison horizon; no local supply is achieved during this period.',
    'المستشار الذكي «أثير»':'Aether, your intelligent adviser','أثير، مستشار القرار':'Aether, decision adviser','مستشار ذكي مستند إلى الأدلة':'Evidence-based intelligent adviser','وضع الأدلة مفعّل':'Evidence mode enabled',
    'مساعد ذكي يجيب من نطاق الفكرة والبيانات المعروضة، ويبيّن أساس الإجابة بدل اختراع معلومة أو توصية تنفيذية.':'An intelligent assistant that answers within the project scope and displayed data, explaining the basis of each answer.',
    'تستطيع سؤاله عن الفرص أو محاكي القرار أو منهجية المشروع. الإجابات محاكاة واجهة لسيناريو استرجاع المعرفة محكوم الصلاحيات.':'Ask about opportunities, the decision simulator or project methodology. Answers demonstrate a permission-controlled retrieval scenario.',
    'يصرّح بحدود البيانات التجريبية.':'Explains the limitations of illustrative data.','يربط الإجابة بمصدر أو افتراض.':'Links answers to sources or assumptions.','لا ينفذ قرار شراء أو استثمار.':'Does not execute purchasing or investment decisions.',
    'لماذا بوصلة مناسبة لاستراتيجية صندوق الاستثمارات العامة؟':'Why does Busola fit PIF strategy?','ما أعلى فرصة أولوية الآن؟':'What is the highest-priority opportunity?','كيف تختلف بوصلة عن منصة للموردين فقط؟':'How does Busola differ from a supplier platform?','ما حدود النتيجة المعروضة؟':'What are the limitations of these results?',
    'أثير — مساعد معرفة بوصلة':'Aether — Busola knowledge assistant','وضع العرض — يجيب ضمن المصادر المسموح بها':'Demo mode — approved sources only','ذكاء اصطناعي + أدلة':'AI + evidence','ذكاء اصطناعي وأدلة':'AI + evidence',
    'مرحبًا، أنا أثير. أستطيع شرح الفرص المعروضة، ومنطق محاكي القرار، وعلاقة الحل بالمحتوى المحلي. ما السؤال الذي تريد تحليله؟':'Hello, I am Aether. I can explain the opportunities, simulator logic and local-content approach. What would you like to analyze?',
    'النطاق: موجز مشروع بوصلة + البيانات التجريبية':'Scope: Busola project brief + illustrative data','أثير يحلل السؤال ويسترجع الأدلة...':'Aether is reviewing your question and retrieving evidence…','اكتب سؤالك للمستشار أثير':'Write your question to Aether','اسأل أثير عن فرصة أو تقرير أو قرار...':'Ask Aether about an opportunity, report or decision…',
    'مستكشف التقارير':'Report explorer','اسأل عن تقرير، أو افتح أثير لتحليل قرار أعمق قائم على الأدلة.':'Ask about a report, or open Aether for a deeper evidence-based discussion.','كيف يحلل بوصلة التقارير؟':'How does Busola analyze reports?','فتح المستشار الذكي الكامل ←':'Open the full adviser →',
    'المصادر التالية تؤطر الملاءمة الاستراتيجية؛ لا تُستخدم لتأكيد أرقام البيانات التجريبية.':'These sources explain strategic alignment; they do not validate the illustrative figures.',
    'استراتيجية صندوق الاستثمارات العامة 2026–2030':'PIF strategy 2026–2030','برنامج مساهمة':'Musahama program','هاكاثون ابتكار 2026':'Innovate Hackathon 2026','المصدر الرسمي ↗':'Official source ↗','صفحة الهاكاثون الرسمية ↗':'Official hackathon page ↗',
    'تؤكد تطوير المنظومات الاقتصادية التنافسية، نضج سلاسل القيمة، والذكاء الاصطناعي على أسس بيانات قوية.':'Focuses on competitive economic ecosystems, mature value chains and AI supported by strong data foundations.',
    'يركز على المحتوى المحلي، تطوير الصناعات، تنافسية الموردين، وابتكار المنظومة.':'Focuses on local content, industrial development, supplier competitiveness and ecosystem innovation.',
    'يتطلب حلًا ديناميكيًا يكتشف القدرات والخامات والشركات المحلية لتلبية الطلب المجمّع لشركات المحفظة.':'Calls for a dynamic solution that discovers local capabilities, materials and companies to meet aggregated portfolio demand.',
    'تبديل المظهر':'Toggle theme','التبديل بين المظهر الفاتح والداكن':'Switch between light and dark mode','فتح روبوت الدردشة':'Open chat assistant','شعار بوصلة':'Busola logo','التنقل الرئيسي':'Main navigation','مساحات العمل':'Workspaces','تصفية الفرص':'Filter opportunities',
    'مجسم المنتج ثلاثي الأبعاد؛ تتوفر قائمة الأجزاء كبديل قابل للاستخدام بلوحة المفاتيح':'Interactive 3D product; a keyboard-accessible parts list is also available',
    'خريطة المملكة العربية السعودية، المدن محددة بإحداثياتها الجغرافية':'Saudi Arabia map with geographically positioned cities','خريطة السعودية توضح فرصاً تجريبية':'Saudi Arabia map showing illustrative opportunities',
    'العرض ثلاثي الأبعاد غير متاح على هذا الجهاز؛ اختر المكونات من القائمة أدناه.':'3D rendering is unavailable on this device. Select components from the list below.',
    'تعذر تحميل المجسم. افتح الموقع عبر الخادم المحلي؛ جميع تفاصيل الأجزاء متاحة في القائمة.':'Unable to load the model. Open the site through its server; part details are available in the list.',
    'التغطية المحلية المعروضة لا تعادل نسبة المحتوى المحلي المحاسبية.':'Local supply coverage is not the accounting measure of local content.',
    'التوطين مقابل تخفيف المخاطر':'Localization vs mitigation','المسار الموصى به':'Recommended path','ذكاء اصطناعي قابل للتفسير':'Explainable AI',
    'تغطية محلية للوحدات خلال الفترة:':'Local unit coverage over the period:',
    'مقارنة بالاستيراد خلال':'compared with importing over','سنوات. اختر أي بديل لمراجعة تفاصيله.':'years. Select an alternative to review its details.',
    'لماذا تختار':'Why choose','مقابل الاستيراد:':'compared with importing:',
    'التعرض للاستيراد':'import exposure','أيام التأخير':'delay days','المفترض:':'assumed:',
    'حصة الطلب':'Demand share','حصة طلب':'Demand share','توطين':'Localization',
    'مليون ريال':'million SAR','ريال':'SAR','نقطة محتوى محلي':'local-content points','نقطة':'points',
    'يوفر':'Saves','كلفة إضافية':'Additional cost','وفر':'Savings','خفض':'Reduction in',
    'سنوات':'years','يومًا':'days','وحدة':'units','جاهزية':'Readiness','فرص ':'Opportunities in ',
    'طلب تجريبي رقم':'Demo demand ID','شركات محفظة':'portfolio companies','ثقة المطابقة':'match confidence','أساس التحليل:':'Analysis basis:',
  });
  Object.assign(translations,{'مُركّب القدرات':'Capability composer','المكوّن المحدد:':'Selected component:','يتطلب':'Requires','الفجوة المقترحة للدراسة هي':'The gap to investigate is','نسبة القيمة المحلية المفترضة':'Assumed local value share','في السيناريو التجريبي.':'in this illustrative scenario.','لا تتوفر نسبة وطنية موثقة في النموذج.':'No verified national percentage is available in this demo.','كتالوج بوصلة · دراسة تجريبية للمكوّن':'Busola catalog · illustrative component study','ما القدرات المطلوبة لتوطين':'What capabilities are required to localize',' في ':' in '});
  const entries = Object.entries(translations).filter(([key]) => /[\u0600-\u06ff]/.test(key)).sort((a,b)=>b[0].length-a[0].length);
  const pattern = new RegExp(entries.map(([key])=>key.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
  function english(text) {
    return text.replace(pattern, value=>translations[value]).replace(/\bRasd\b/g,'Busola').replace(/\bNuha\b/g,'Aether')
      .replace(/[٠-٩]/g,n=>String('٠١٢٣٤٥٦٧٨٩'.indexOf(n))).replace(/٪/g,'%').replace(/٬/g,',').replace(/٫/g,'.').replace(/؟/g,'?');
  }
  window.busolaEnglish=english;
  const originals=new WeakMap();
  const attributes=new WeakMap();
  function translateNode(node) {
    if (!node.parentElement || node.parentElement.closest('script,style,canvas,.message.user,#lang-toggle')) return;
    const prior=originals.get(node);
    const source=prior && node.nodeValue===prior.output ? prior.source : node.nodeValue;
    const output=locale==='en'?english(source):source;
    originals.set(node,{source,output});
    if (node.nodeValue!==output) node.nodeValue=output;
  }
  function translateElement(el) {
    if (el.matches('option:not([value])')) el.setAttribute('value',el.textContent);
    if (el.id==='lang-toggle') return;
    const record=attributes.get(el)||{};
    for (const attr of ['placeholder','aria-label','title','data-name','alt']) {
      if (!el.hasAttribute(attr)) continue;
      const value=el.getAttribute(attr), prior=record[attr];
      const source=prior&&value===prior.output?prior.source:value;
      const output=locale==='en'?english(source):source;
      record[attr]={source,output};
      if(value!==output)el.setAttribute(attr,output);
    }
    attributes.set(el,record);
  }
  function scan(root) {
    if(root.nodeType===3){translateNode(root);return;}
    if(root.nodeType!==1)return;
    translateElement(root);
    root.querySelectorAll('[placeholder],[aria-label],[title],[data-name],[alt],option').forEach(translateElement);
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;
    while(n=walker.nextNode())translateNode(n);
  }
  const observer=new MutationObserver(records=>{
    observer.disconnect();
    for(const r of records){if(r.type==='characterData')translateNode(r.target);else if(r.type==='attributes')translateElement(r.target);else r.addedNodes.forEach(scan);}
    watch();
  });
  function watch(){observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','title','data-name']});}
  function setLanguage(next) {
    observer.disconnect();locale=next==='en'?'en':'ar';
    document.documentElement.lang=locale;document.documentElement.dir=locale==='en'?'ltr':'rtl';
    document.querySelector('.app').style.direction=document.documentElement.dir;
    document.title=locale==='en'?'Busola | Decision intelligence':'بوصلة | منصة ذكاء القرار';
    scan(document.body);
    const toggle=document.getElementById('lang-toggle');toggle.textContent=locale==='en'?'العربية':'English';
    toggle.setAttribute('aria-label',locale==='en'?'Switch to Arabic':'التبديل إلى الإنجليزية');
    localStorage.setItem('rasd-locale',locale);watch();
  }
  document.getElementById('lang-toggle').addEventListener('click',event=>{
    event.stopImmediatePropagation();setLanguage(locale==='en'?'ar':'en');
  },true);
  window.busolaSetLanguage=setLanguage;
  const originalSeedQuestion=window.seedQuestion;
  window.seedQuestion=q=>originalSeedQuestion(locale==='en'?english(q):q);
  setLanguage(localStorage.getItem('rasd-locale')||'ar');
})();
