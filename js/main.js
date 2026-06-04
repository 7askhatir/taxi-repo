const translations = {
  en: {
    nav_home: 'Home', nav_services: 'Services', nav_routes: 'Routes & Pricing',
    nav_activities: 'Activities', nav_fleet: 'Fleet', nav_booking: 'Booking', nav_about: 'About', nav_contact: 'Contact',
    hero_title: 'Private Taxi & Transfers<br><span>in Morocco</span>',
    hero_subtitle: 'Reliable, safe and comfortable transfers across Morocco. Airport transfers, intercity travel and custom tours — available 24/7.',
    hero_btn_book: 'Book Now', hero_btn_whatsapp: 'WhatsApp',
    stat_trips: 'Trips Completed', stat_years: 'Years Experience', stat_clients: 'Happy Clients', stat_support: 'Customer Support',
    trust_safe: 'Safe & Insured', trust_licensed: 'Licensed Drivers', trust_247: '24/7 Availability',
    trust_wifi: 'Free WiFi', trust_water: 'Bottled Water', trust_ac: 'Air Conditioned',
    services_tag: 'What We Offer', services_title: 'Premium Transfer Services',
    services_desc: 'From airport pickups to custom Morocco tours — we provide safe, comfortable transportation for every need.',
    service1_title: 'Airport Transfers', service1_desc: 'Pickup and drop-off at Marrakech, Essaouira, Agadir airports. Flight monitoring included.',
    service2_title: 'City to City Transfers', service2_desc: 'Comfortable intercity travel between Essaouira, Marrakech, Agadir, Casablanca and more.',
    service3_title: 'Private Chauffeur', service3_desc: 'Professional driver at your service for the day. Ideal for business or sightseeing.',
    service4_title: 'Tourist Excursions', service4_desc: "Discover Morocco's hidden gems with our guided excursions to Atlas Mountains, Sahara & more.",
    service5_title: 'VIP Transport', service5_desc: 'Luxury vehicles with premium amenities for a first-class travel experience.',
    service6_title: 'Custom Trips', service6_desc: "Tailor-made itineraries across Morocco. Tell us your plans and we'll drive you there.",
    routes_tag: 'Fixed Prices', routes_title: 'Routes & Pricing',
    routes_desc: 'Transparent pricing per vehicle (not per person). No hidden fees — what you see is what you pay.',
    vehicle_sedan: 'Sedan', vehicle_suv: 'SUV', vehicle_minivan: 'Minivan',
    fleet_tag: 'Our Vehicles', fleet_title: 'Modern & Comfortable Fleet',
    fleet_desc: 'Choose from our range of well-maintained vehicles to suit your group size and travel style.',
    fleet_sedan_title: 'Sedan', fleet_sedan_desc: 'Perfect for couples or solo travelers. Comfortable and economical.',
    fleet_suv_title: 'SUV', fleet_suv_desc: 'Extra space and comfort. Ideal for mountain roads and longer trips.',
    fleet_van_title: 'Minivan', fleet_van_desc: 'Spacious and versatile. Great for families and groups.',
    fleet_vip_title: 'VIP Luxury', fleet_vip_desc: 'First-class experience with a luxury vehicle and premium amenities.',
    fleet_vip_badge: 'VIP',
    testimonials_tag: 'Testimonials', testimonials_title: 'What Our Clients Say',
    activities_tag: 'Excursions', activities_title: 'Morocco Activities & Tours',
    activities_desc: 'Explore Morocco with our curated selection of excursions and activities. From the Sahara to the coast, we\'ve got you covered.',
    act_per: '/ person',
    act1_title: 'Atlas Mountains Day Trip', act1_desc: 'Explore the High Atlas, visit Berber villages, and enjoy panoramic views. Lunch included.', act1_dur: 'Full day', act1_people: '1–8 people',
    act2_title: 'Essaouira City Tour', act2_desc: 'Discover the coastal charm of Essaouira: medina, port, ramparts, and fresh seafood.', act2_dur: 'Half day', act2_people: '1–8 people',
    act3_title: 'Sahara Desert Experience', act3_desc: '2-day camel trek, camp under the stars, watch sunset over Erg Chebbi dunes.', act3_dur: '2 days', act3_people: '2–8 people',
    act4_title: 'Agadir & Taghazout Coast', act4_desc: 'Beach day on the Atlantic coast. Visit Agadir\'s marina, souk, and surf spots.', act4_dur: 'Full day', act4_people: '1–8 people',
    act5_title: 'Marrakech City Discovery', act5_desc: 'Visit Jemaa el-Fnaa, Bahia Palace, Majorelle Garden, and the vibrant souks.', act5_dur: 'Full day', act5_people: '1–8 people',
    act6_title: 'Moroccan Wine & Food Tour', act6_desc: 'Taste Moroccan cuisine and local wines on a guided culinary tour near Marrakech.', act6_dur: 'Half day', act6_people: '2–8 people',
    booking_tag: 'Book Online', booking_title: 'Book Your Transfer',
    booking_desc: "Fill in the form below and we'll confirm your booking within minutes. Or simply reach out via WhatsApp.",
    form_name: 'Full Name *', form_phone: 'Phone Number *', form_email: 'Email',
    form_passengers: 'Passengers *', form_pickup: 'Pickup Location *', form_dropoff: 'Drop-off Location *',
    form_date: 'Date *', form_time: 'Time *', form_message: 'Special Requests',
    form_submit: 'Send Booking Request', form_whatsapp: 'Book via WhatsApp',
    booking_confirm_title: 'Instant Confirmation', booking_confirm_desc: "We'll respond within minutes to confirm your booking.",
    booking_payment_title: 'Flexible Payment', booking_payment_desc: 'Pay cash or by card. Secure payment on arrival.',
    booking_support_title: '24/7 Support', booking_support_desc: 'Need help? Contact us anytime, day or night.',
    faq_tag: 'FAQ', faq_title: 'Frequently Asked Questions',
    faq1_q: 'How do I book a transfer?', faq1_a: "You can book directly through our online form, send us a message on WhatsApp, or call us. We'll confirm your booking within minutes.",
    faq2_q: 'What payment methods do you accept?', faq2_a: 'We accept cash (EUR, MAD, USD) and card payments. You can pay at the end of your journey.',
    faq3_q: 'Can I cancel or modify my booking?', faq3_a: 'Yes, you can cancel or modify your booking free of charge up to 24 hours before your scheduled pickup.',
    faq4_q: 'Are child seats available?', faq4_a: 'Yes, we can provide child seats on request. Please let us know in advance when booking.',
    faq5_q: 'Do you operate at night?', faq5_a: 'Yes, we offer 24/7 service including late-night and early-morning transfers.',
    faq6_q: 'How do I find my driver at the airport?', faq6_a: "Your driver will be waiting at the arrivals hall holding a sign with your name. We'll also share their contact details before your trip.",
    about_tag: 'About Us', about_title: 'Why Choose Askhatir Tours?',
    about_text: 'Askhatir Tours is a family-owned transport company based in Morocco, specializing in private taxi services, airport transfers, intercity travel, and guided tours. With years of experience and a passion for hospitality, we ensure every journey is safe, comfortable, and memorable.',
    about_feat1_title: 'Professional Drivers', about_feat1_desc: 'Licensed, experienced, and courteous drivers who know Morocco inside out.',
    about_feat2_title: 'Safety First', about_feat2_desc: 'Regularly maintained vehicles with full insurance for your peace of mind.',
    about_feat3_title: 'Always on Time', about_feat3_desc: 'Punctuality is our promise. We monitor flights and traffic to ensure timely pickups.',
    about_feat4_title: '24/7 Availability', about_feat4_desc: "Day or night, we're here to serve you. Book anytime, travel anytime.",
    contact_tag: 'Get in Touch', contact_title: 'Contact Us',
    contact_desc: 'Have a question? Need a custom quote? Reach out — we\'re here to help.',
    contact_phone: 'Phone', contact_location: 'Location', contact_send: 'Send Message',
    footer_desc: 'Your trusted partner for private taxi and transfer services across Morocco. Safe, reliable, and always on time.',
    footer_quick: 'Quick Links', footer_services: 'Services', footer_contact: 'Contact',
    footer_rights: 'All rights reserved.',
    booking_success: 'Thank you! Your booking request has been sent. We will contact you shortly.',
    contact_success: 'Thank you! Your message has been sent. We will get back to you soon.'
  },
  fr: {
    nav_home: 'Accueil', nav_services: 'Services', nav_routes: 'Tarifs & Itinéraires',
    nav_activities: 'Activités', nav_fleet: 'Flotte', nav_booking: 'Réservation', nav_about: 'À Propos', nav_contact: 'Contact',
    hero_title: 'Taxi Privé & Transferts<br><span>au Maroc</span>',
    hero_subtitle: 'Transferts fiables, sûrs et confortables à travers le Maroc. Transferts aéroport, voyages interurbains et circuits sur mesure — disponibles 24h/24.',
    hero_btn_book: 'Réserver', hero_btn_whatsapp: 'WhatsApp',
    stat_trips: 'Trajets Effectués', stat_years: "Années d'Expérience", stat_clients: 'Clients Satisfaits', stat_support: 'Support Client',
    trust_safe: 'Sûr & Assuré', trust_licensed: 'Chauffeurs Agréés', trust_247: 'Disponible 24/7',
    trust_wifi: 'WiFi Gratuit', trust_water: 'Eau Minérale', trust_ac: 'Climatisé',
    services_tag: 'Nos Services', services_title: 'Services de Transfert Premium',
    services_desc: "Des transferts aéroport aux circuits personnalisés au Maroc — nous offrons un transport sûr et confortable pour tous vos besoins.",
    service1_title: 'Transferts Aéroport', service1_desc: "Prise en charge à Marrakech, Essaouira, Agadir. Suivi des vols inclus.",
    service2_title: 'Transferts Interurbains', service2_desc: "Voyages confortables entre Essaouira, Marrakech, Agadir, Casablanca et plus.",
    service3_title: 'Chauffeur Privé', service3_desc: "Chauffeur professionnel à votre service pour la journée. Idéal pour affaires ou visites.",
    service4_title: 'Excursions Touristiques', service4_desc: "Découvrez les trésors du Maroc avec nos excursions guidées à l'Atlas, Sahara et plus.",
    service5_title: 'Transport VIP', service5_desc: 'Véhicules de luxe avec équipements premium pour une expérience de voyage haut de gamme.',
    service6_title: 'Circuits Sur Mesure', service6_desc: "Itinéraires personnalisés à travers le Maroc. Dites-nous vos plans et nous vous y emmenons.",
    routes_tag: 'Prix Fixes', routes_title: 'Itinéraires & Tarifs',
    routes_desc: 'Tarification transparente par véhicule (pas par personne). Sans frais cachés.',
    vehicle_sedan: 'Berline', vehicle_suv: 'SUV', vehicle_minivan: 'Minibus',
    fleet_tag: 'Notre Flotte', fleet_title: 'Flotte Moderne & Confortable',
    fleet_desc: 'Choisissez parmi notre gamme de véhicules bien entretenus adaptés à votre groupe.',
    fleet_sedan_title: 'Berline', fleet_sedan_desc: 'Parfait pour les couples ou voyageurs seuls. Confortable et économique.',
    fleet_suv_title: 'SUV', fleet_suv_desc: 'Espace supplémentaire et confort. Idéal pour les routes de montagne.',
    fleet_van_title: 'Minibus', fleet_van_desc: ' spacieux et polyvalent. Idéal pour les familles et groupes.',
    fleet_vip_title: 'Luxe VIP', fleet_vip_desc: 'Expérience première classe avec un véhicule de luxe et équipements premium.',
    fleet_vip_badge: 'VIP',
    testimonials_tag: 'Témoignages', testimonials_title: 'Ce Que Disent Nos Clients',
    activities_tag: 'Excursions', activities_title: 'Activités & Circuits au Maroc',
    activities_desc: 'Explorez le Maroc avec notre sélection d\'excursions et d\'activités. Du Sahara à la côte, nous avons tout prévu.',
    act_per: '/ personne',
    act1_title: 'Journée dans l\'Atlas', act1_desc: 'Explorez le Haut Atlas, visitez des villages berbères et profitez de vues panoramiques. Déjeuner inclus.', act1_dur: 'Journée complète', act1_people: '1–8 pers.',
    act2_title: 'Visite d\'Essaouira', act2_desc: 'Découvrez le charme côtier d\'Essaouira: médina, port, remparts et fruits de mer frais.', act2_dur: 'Demi-journée', act2_people: '1–8 pers.',
    act3_title: 'Expérience Sahara', act3_desc: 'Randonnée à dos de chameau de 2 jours, campement sous les étoiles, coucher de soleil sur les dunes.', act3_dur: '2 jours', act3_people: '2–8 pers.',
    act4_title: 'Côte d\'Agadir & Taghazout', act4_desc: 'Journée à la plage sur la côte atlantique. Visite de la marina, souk et spots de surf.', act4_dur: 'Journée complète', act4_people: '1–8 pers.',
    act5_title: 'Découverte de Marrakech', act5_desc: 'Visitez Jemaa el-Fnaa, le Palais Bahia, le Jardin Majorelle et les souks animés.', act5_dur: 'Journée complète', act5_people: '1–8 pers.',
    act6_title: 'Tour Gastronomique', act6_desc: 'Dégustez la cuisine marocaine et les vins locaux lors d\'un tour culinaire près de Marrakech.', act6_dur: 'Demi-journée', act6_people: '2–8 pers.',
    booking_tag: 'Réserver', booking_title: 'Réservez Votre Transfert',
    booking_desc: "Remplissez le formulaire et nous confirmons votre réservation en quelques minutes.",
    form_name: 'Nom Complet *', form_phone: 'Téléphone *', form_email: 'Email',
    form_passengers: 'Passagers *', form_pickup: 'Lieu de Prise en Charge *', form_dropoff: 'Lieu de Dépose *',
    form_date: 'Date *', form_time: 'Heure *', form_message: 'Demandes Spéciales',
    form_submit: 'Envoyer la Demande', form_whatsapp: 'Réserver via WhatsApp',
    booking_confirm_title: 'Confirmation Immédiate', booking_confirm_desc: 'Nous répondons en quelques minutes pour confirmer.',
    booking_payment_title: 'Paiement Flexible', booking_payment_desc: 'Payez en espèces ou par carte. Paiement sécurisé à l\'arrivée.',
    booking_support_title: 'Support 24/7', booking_support_desc: 'Besoin d\'aide? Contactez-nous à tout moment.',
    faq_tag: 'FAQ', faq_title: 'Questions Fréquentes',
    faq1_q: 'Comment réserver un transfert?', faq1_a: "Vous pouvez réserver via notre formulaire en ligne, WhatsApp ou par téléphone. Nous confirmons sous quelques minutes.",
    faq2_q: 'Quels modes de paiement acceptez-vous?', faq2_a: 'Nous acceptons les espèces (EUR, MAD, USD) et les cartes bancaires.',
    faq3_q: 'Puis-je annuler ou modifier ma réservation?', faq3_a: 'Oui, gratuitement jusqu\'à 24h avant votre prise en charge.',
    faq4_q: 'Des sièges enfants sont-ils disponibles?', faq4_a: 'Oui, sur demande. Veuillez nous informer lors de la réservation.',
    faq5_q: 'Opérez-vous la nuit?', faq5_a: 'Oui, nous offrons un service 24h/24 incluant les transferts tardifs et matinaux.',
    faq6_q: 'Comment trouver mon chauffeur à l\'aéroport?', faq6_a: 'Votre chauffeur vous attendra dans le hall arrivées avec un panneau à votre nom.',
    about_tag: 'À Propos', about_title: 'Pourquoi Choisir Askhatir Tours?',
    about_text: "Askhatir Tours est une société de transport familiale basée au Maroc, spécialisée dans les taxis privés, transferts aéroport, voyages interurbains et circuits guidés.",
    about_feat1_title: 'Chauffeurs Professionnels', about_feat1_desc: 'Chauffeurs agréés, expérimentés et courtois qui connaissent le Maroc sur le bout des doigts.',
    about_feat2_title: 'Sécurité Avant Tout', about_feat2_desc: 'Véhicules régulièrement entretenus avec assurance complète pour votre tranquillité.',
    about_feat3_title: "Toujours à l'Heure", about_feat3_desc: "La ponctualité est notre promesse. Nous suivons les vols et le trafic.",
    about_feat4_title: 'Disponible 24/7', about_feat4_desc: 'Nuit et jour, nous sommes là pour vous servir.',
    contact_tag: 'Contact', contact_title: 'Contactez-Nous',
    contact_desc: 'Une question? Besoin d\'un devis? Contactez-nous.',
    contact_phone: 'Téléphone', contact_location: 'Adresse', contact_send: 'Envoyer',
    footer_desc: 'Votre partenaire de confiance pour les taxis privés et transferts au Maroc.',
    footer_quick: 'Liens Rapides', footer_services: 'Services', footer_contact: 'Contact',
    footer_rights: 'Tous droits réservés.',
    booking_success: 'Merci! Votre demande a été envoyée. Nous vous contacterons sous peu.',
    contact_success: 'Merci! Votre message a été envoyé.'
  },
  ar: {
    nav_home: 'الرئيسية', nav_services: 'الخدمات', nav_routes: 'المسارات والأسعار',
    nav_activities: 'الأنشطة', nav_fleet: 'الأسطول', nav_booking: 'الحجز', nav_about: 'من نحن', nav_contact: 'اتصل بنا',
    hero_title: 'سيارة أجرة خاصة ونقل<br><span>في المغرب</span>',
    hero_subtitle: 'نقل موثوق وآمن ومريح في جميع أنحاء المغرب. نقل المطار والسفر بين المدن والجولات السياحية - متاح 24/7.',
    hero_btn_book: 'احجز الآن', hero_btn_whatsapp: 'واتساب',
    stat_trips: 'رحلات مكتملة', stat_years: 'سنوات الخبرة', stat_clients: 'عملاء سعداء', stat_support: 'دعم العملاء',
    trust_safe: 'آمن ومؤمن', trust_licensed: 'سائقون مرخصون', trust_247: 'متاح 24/7',
    trust_wifi: 'واي فاي مجاني', trust_water: 'مياه معبأة', trust_ac: 'مكيف هواء',
    services_tag: 'ما نقدمه', services_title: 'خدمات نقل متميزة',
    services_desc: 'من استقبال المطار إلى الجولات السياحية المخصصة في المغرب - نقدم نقل آمن ومريح لكل احتياج.',
    service1_title: 'نقل المطار', service1_desc: 'الاستقبال والتوصيل من وإلى مطارات مراكش والصويرة وأكادير. متابعة الرحلات الجوية مشمولة.',
    service2_title: 'نقل بين المدن', service2_desc: 'سفر مريح بين المدن: الصويرة، مراكش، أكادير، الدار البيضاء والمزيد.',
    service3_title: 'سائق خاص', service3_desc: 'سائق محترف في خدمتك طوال اليوم. مثالي للأعمال أو السياحة.',
    service4_title: 'رحلات سياحية', service4_desc: 'اكتشف كنوز المغرب مع رحلاتنا الموجهة إلى جبال الأطلس والصحراء والمزيد.',
    service5_title: 'نقل VIP', service5_desc: 'سيارات فاخرة مع وسائل راحة فاخرة لتجربة سفر من الدرجة الأولى.',
    service6_title: 'رحلات مخصصة', service6_desc: 'مسارات مصممة حسب طلبك في جميع أنحاء المغرب.',
    routes_tag: 'أسعار ثابتة', routes_title: 'المسارات والأسعار',
    routes_desc: 'أسعار شفافة لكل مركبة (وليس للشخص). لا رسوم خفية.',
    vehicle_sedan: 'سيدان', vehicle_suv: 'دفع رباعي', vehicle_minivan: 'حافلة صغيرة',
    fleet_tag: 'أسطولنا', fleet_title: 'أسطول حديث ومريح',
    fleet_desc: 'اختر من مجموعتنا من المركبات المجهزة جيداً لتناسب حجم مجموعتك وأسلوب سفرك.',
    fleet_sedan_title: 'سيدان', fleet_sedan_desc: 'مثالي للأزواج أو المسافرين منفردين. مريح واقتصادي.',
    fleet_suv_title: 'دفع رباعي', fleet_suv_desc: 'مساحة وراحة إضافية. مثالي للطرق الجبلية والرحلات الطويلة.',
    fleet_van_title: 'حافلة صغيرة', fleet_van_desc: 'واسع ومتعدد الاستخدامات. رائع للعائلات والمجموعات.',
    fleet_vip_title: 'فاخر VIP', fleet_vip_desc: 'تجربة من الدرجة الأولى مع سيارة فاخرة ووسائل راحة فاخرة.',
    fleet_vip_badge: 'VIP',
    testimonials_tag: 'آراء العملاء', testimonials_title: 'ماذا يقول عملاؤنا',
    activities_tag: 'الرحلات', activities_title: 'الأنشطة والجولات في المغرب',
    activities_desc: 'استكشف المغرب مع مجموعتنا المختارة من الرحلات والأنشطة. من الصحراء إلى الساحل، لدينا كل ما تحتاجه.',
    act_per: '/ للشخص',
    act1_title: 'رحلة جبال الأطلس', act1_desc: 'استكشف جبال الأطلس الكبير، قم بزيارة القرى الأمازيغية واستمتع بالمناظر البانورامية. الغداء مشمول.', act1_dur: 'يوم كامل', act1_people: '1-8 أشخاص',
    act2_title: 'جولة في الصويرة', act2_desc: 'اكتشف سحر الصويرة الساحلي: المدينة القديمة، الميناء، الأسوار، والمأكولات البحرية الطازجة.', act2_dur: 'نصف يوم', act2_people: '1-8 أشخاص',
    act3_title: 'تجربة الصحراء الكبرى', act3_desc: 'رحلة جمل لمدة يومين، مخيم تحت النجوم، غروب الشمس على كثبان رملية.', act3_dur: 'يومان', act3_people: '2-8 أشخاص',
    act4_title: 'ساحل أكادير وتاغازوت', act4_desc: 'يوم شاطئي على ساحل المحيط الأطلسي. زيارة مارينا أكادير، السوق، وأماكن ركوب الأمواج.', act4_dur: 'يوم كامل', act4_people: '1-8 أشخاص',
    act5_title: 'اكتشاف مراكش', act5_desc: 'قم بزيارة ساحة جامع الفنا، قصر البديع، حديقة ماجوريل، والأسواق النابضة بالحياة.', act5_dur: 'يوم كامل', act5_people: '1-8 أشخاص',
    act6_title: 'جولة الطعام والنبيذ', act6_desc: 'تذوق المأكولات المغربية والنبيذ المحلي في جولة طهي قرب مراكش.', act6_dur: 'نصف يوم', act6_people: '2-8 أشخاص',
    booking_tag: 'احجز عبر الإنترنت', booking_title: 'احجز نقلك',
    booking_desc: 'املأ النموذج أدناه وسنؤكد حجزك في غضون دقائق.',
    form_name: 'الاسم الكامل *', form_phone: 'رقم الهاتف *', form_email: 'البريد الإلكتروني',
    form_passengers: 'عدد الركاب *', form_pickup: 'موقع الاستلام *', form_dropoff: 'موقع التوصيل *',
    form_date: 'التاريخ *', form_time: 'الوقت *', form_message: 'طلبات خاصة',
    form_submit: 'إرسال طلب الحجز', form_whatsapp: 'احجز عبر واتساب',
    booking_confirm_title: 'تأكيد فوري', booking_confirm_desc: 'سنرد في غضون دقائق لتأكيد حجزك.',
    booking_payment_title: 'دفع مرن', booking_payment_desc: 'ادفع نقداً أو ببطاقة. دفع آمن عند الوصول.',
    booking_support_title: 'دعم 24/7', booking_support_desc: 'تحتاج مساعدة؟ اتصل بنا في أي وقت.',
    faq_tag: 'الأسئلة الشائعة', faq_title: 'الأسئلة المتكررة',
    faq1_q: 'كيف يمكنني حجز نقل؟', faq1_a: 'يمكنك الحجز مباشرة عبر النموذج الإلكتروني أو عبر واتساب أو الاتصال بنا. سنؤكد حجزك في غضون دقائق.',
    faq2_q: 'ما طرق الدفع التي تقبلونها؟', faq2_a: 'نقبل الدفع نقداً (يورو، درهم، دولار) والبطاقات البنكية.',
    faq3_q: 'هل يمكنني إلغاء أو تعديل حجزي؟', faq3_a: 'نعم، يمكنك الإلغاء أو التعديل مجاناً قبل 24 ساعة من موعد الاستلام.',
    faq4_q: 'هل تتوفر مقاعد أطفال؟', faq4_a: 'نعم، يمكننا توفير مقاعد أطفال عند الطلب. يرجى إخبارنا مسبقاً.',
    faq5_q: 'هل تعملون في الليل؟', faq5_a: 'نعم، نقدم خدمة 24 ساعة طوال أيام الأسبوع.',
    faq6_q: 'كيف أجد سائقي في المطار؟', faq6_a: 'سينتظرك سائقك في صالة الوصول حاملاً لافتة باسمك.',
    about_tag: 'من نحن', about_title: 'لماذا تختار أصخير تورز؟',
    about_text: 'أصخير تورز هي شركة نقل عائلية مقرها المغرب، متخصصة في سيارات الأجرة الخاصة ونقل المطار والسفر بين المدن والجولات السياحية.',
    about_feat1_title: 'سائقون محترفون', about_feat1_desc: 'سائقون مرخصون وذوو خبرة يعرفون المغرب جيداً.',
    about_feat2_title: 'السلامة أولاً', about_feat2_desc: 'مركبات مجهزة بانتظام مع تأمين كامل لراحة بالك.',
    about_feat3_title: 'في الموعد دائماً', about_feat3_desc: 'الالتزام بالمواعيد هو وعدنا. نتابع الرحلات وحركة المرور.',
    about_feat4_title: 'متاح 24/7', about_feat4_desc: 'ليلاً ونهاراً، نحن هنا لخدمتك.',
    contact_tag: 'اتصل بنا', contact_title: 'تواصل معنا',
    contact_desc: 'لديك سؤال؟ تحتاج عرض سعر؟ تواصل معنا.',
    contact_phone: 'الهاتف', contact_location: 'الموقع', contact_send: 'إرسال',
    footer_desc: 'شريكك الموثوق لخدمات سيارات الأجرة الخاصة والنقل في جميع أنحاء المغرب.',
    footer_quick: 'روابط سريعة', footer_services: 'الخدمات', footer_contact: 'اتصل بنا',
    footer_rights: 'جميع الحقوق محفوظة.',
    booking_success: 'شكراً! تم إرسال طلب الحجز. سنتصل بك قريباً.',
    contact_success: 'شكراً! تم إرسال رسالتك.'
  }
};

let currentLang = 'en';

function changeLang(lang) {
  currentLang = lang;
  const t = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  const html = document.documentElement;
  if (lang === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
  } else if (lang === 'fr') {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'fr');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
  }
  localStorage.setItem('askhatir-lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => changeLang(btn.dataset.lang));
});

const savedLang = localStorage.getItem('askhatir-lang');
if (savedLang && translations[savedLang]) changeLang(savedLang);

// HERO SLIDESHOW
(function() {
  const slides = document.querySelectorAll('.hero__slide');
  if (slides.length < 2) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
})();

// HEADER SCROLL
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const scrollY = window.scrollY;
  header.classList.toggle('scrolled', scrollY > 50);
  lastScroll = scrollY;
});

// MOBILE NAV TOGGLE
document.getElementById('navToggle').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('nav').classList.toggle('open');
});
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navToggle').classList.remove('active');
    document.getElementById('nav').classList.remove('open');
  });
});

// ACTIVE NAV LINK
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  document.querySelectorAll('.nav__link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

// SCROLL ANIMATIONS
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));

// COUNTER ANIMATION
function animateCounters() {
  document.querySelectorAll('.stat__number[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.nextElementSibling?.textContent || '';
    const animate = () => {
      const duration = 2000;
      const start = performance.now();
      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
      }
      requestAnimationFrame(update);
    };
    const checkVisible = () => {
      const rect = el.closest('.hero__stats').getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        animate();
        window.removeEventListener('scroll', checkVisible);
      }
    };
    window.addEventListener('scroll', checkVisible);
    checkVisible();
  });
}
animateCounters();

// TESTIMONIAL SLIDER
let currentSlide = 0;
const track = document.getElementById('testimonialTrack');
const slides = track?.querySelectorAll('.testimonial-card');
const dotsContainer = document.getElementById('testDots');
let slideCount = slides?.length || 0;

if (dotsContainer && slideCount) {
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function goToSlide(index) {
  if (!track) return;
  currentSlide = index;
  if (currentSlide < 0) currentSlide = slideCount - 1;
  if (currentSlide >= slideCount) currentSlide = 0;
  track.scrollTo({ left: currentSlide * track.offsetWidth, behavior: 'smooth' });
  document.querySelectorAll('.testimonials__dots span').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

document.getElementById('testNext')?.addEventListener('click', () => goToSlide(currentSlide + 1));
document.getElementById('testPrev')?.addEventListener('click', () => goToSlide(currentSlide - 1));
if (slides?.length) goToSlide(0);

let autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
document.querySelector('.testimonials__slider')?.addEventListener('mouseenter', () => clearInterval(autoSlide));
document.querySelector('.testimonials__slider')?.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
});

// FAQ ACCORDION
document.querySelectorAll('.faq__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq__item');
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});

// BOOKING FORM
document.getElementById('bookingForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  let msg = 'Hello Askhatir Tours, I would like to book a transfer:\n';
  formData.forEach((val, key) => { msg += `- ${key}: ${val}\n`; });
  const waUrl = `https://wa.me/212600000000?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
  alert(translations[currentLang]?.booking_success || translations.en.booking_success);
  this.reset();
});

// CONTACT FORM
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  let msg = 'New message from Askhatir Tours website:\n';
  formData.forEach((val, key) => { msg += `- ${key}: ${val}\n`; });
  const waUrl = `https://wa.me/212600000000?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
  alert(translations[currentLang]?.contact_success || translations.en.contact_success);
  this.reset();
});

// SET MIN DATE
const dateInput = document.getElementById('bDate');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}
