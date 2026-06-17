/* index.js - Comprehensive Error-Proof script for Altıntaş Personalmanagement */

// 1. Full Multi-Page Translations Dictionary
const translations = {
  de: {
    // Navigation
    nav_home: "Startseite",
    nav_about: "Unternehmen",
    nav_services: "Dienstleistungen",
    nav_sectors: "Branchen",
    nav_map: "Standorte",
    nav_apply: "Kontakt",
    nav_cta: "Jetzt anfragen",

    // Hero Section
    hero_badge: "Arbeitnehmerüberlassung & Logistik",
    hero_title: "Personallösungen für Ihr Wachstum",
    hero_title_span: "Qualifizierte",
    hero_desc: "Altıntaş Personalmanagement GmbH ist Ihr zuverlässiger Partner in Essen und bundesweit. Wir verbinden engagierte Fachkräfte mit führenden Industrie- und Logistikunternehmen.",
    hero_btn_employer: "Personalbedarf melden",
    hero_btn_applicant: "Jetzt bewerben",
    hero_signature: "Heute. Morgen. Für immer.",

    // Stats
    stat_compliance: "Tariftreu (iGZ/DGB)",
    stat_cities: "Standorte in DE",
    stat_employees: "Mitarbeiter vermittelt",
    stat_support: "Bereitschafts-Service",

    // Learn more
    learn_more: "Mehr erfahren",

    // CTA Banner
    cta_banner_title: "Effiziente Logistik & Express-Personalgestellung",
    cta_banner_desc: "Wir verfügen über einen großen Pool qualifizierter Staplerfahrer, Kommissionierer und Logistikhelfer, die sofort einsatzbereit sind.",

    // About Page (unternehmen.html)
    about_hero_title: "Über Altıntaş Personalmanagement",
    about_hero_desc: "Erfahren Sie mehr über unsere Werte, unsere geschäftsführenden Inhaber und unseren Anspruch an Qualität und Rechtssicherheit.",
    about_subtitle: "Über uns",
    about_title: "Jahrzehntelange Erfahrung in Logistik & Industrie",
    about_desc1: "Altıntaş Personalmanagement GmbH steht für vertrauensvolle Personaldienstleistungen. Mit Hauptsitz in Essen (Gladbecker Straße 427) und einer starken Präsenz im Ruhrgebiet unterstützen wir Unternehmen dabei, Personalengpässe flexibel und rechtssicher abzusichern.",
    about_desc2: "Unsere Führungskräfte Hasan Altıntaş und Tuncer Çakmak leiten das Unternehmen mit dem Fokus auf faire Arbeitsbedingungen, tariftreue Bezahlung (iGZ/DGB) und höchste Kundenzufriedenheit. Ob kurzfristige Einsätze oder dauerhafte Arbeitsvermittlung - wir sind Ihr starker Partner.",
    about_stat1: "15+ Jahre",
    about_stat1_lbl: "Branchenerfahrung",
    about_stat2_lbl: "Zufriedenheitsquote",
    philosophy: "Philosophie",
    phil_title: "Wertschätzung und Zuverlässigkeit",
    phil_desc1: "Als inhabergeführtes Personaldienstleistungsunternehmen mit tiefen Wurzeln im Herzen von Essen verstehen wir uns als Brückenbauer. Unser täglicher Antrieb ist es, für unsere Bewerber den idealen Arbeitsplatz und für unsere Kundenunternehmen die passenden Fachkräfte zu finden.",
    phil_desc2: "Wir stehen für faire Arbeitskonditionen nach dem iGZ/DGB-Tarifvertrag, pünktliche Bezahlung und eine persönliche Betreuung auf Augenhöhe. Wir sind überzeugt, dass nachhaltiger wirtschaftlicher Erfolg nur durch zufriedene Mitarbeiter möglich ist.",
    management: "Führung",
    mgmt_title: "Unsere Geschäftsführung",
    mgmt_desc: "Hasan Altıntaş und Tuncer Çakmak leiten das Unternehmen mit kaufmännischer Kompetenz und profundem Branchenwissen.",
    mgmt_pos_1: "Geschäftsführender Gesellschafter",
    mgmt_bio_1: "Gründer der Altıntaş Personalmanagement. Zuständig für strategische Ausrichtung, Kundenberatung und Expansionsplanung.",
    mgmt_pos_2: "Geschäftsführer / Prokurist",
    mgmt_bio_2: "Zuständig für Finanzen, Compliance und das arbeitsrechtliche On-Site Management unserer Kundenbetriebe.",
    comp_title: "Rechtssicherheit nach deutschem Arbeitsrecht",
    comp_desc1: "Als zugelassenes Unternehmen für Arbeitnehmerüberlassung halten wir uns streng an alle gesetzlichen Vorgaben. Die Einhaltung des Arbeitnehmerüberlassungsgesetzes (AÜG), die Erteilung der Erlaubnis der Bundesagentur für Arbeit und die Beachtung der Equal-Pay-Regelungen sind für uns selbstverständlich.",
    comp_feat_1: "Tarifverträge BAP / iGZ / DGB",
    comp_feat_2: "Erlaubnis zur ANÜ vorhanden",
    comp_feat_3: "Einhaltung aller ISO/SCP Standards",
    comp_feat_4: "Laufende Sicherheitsunterweisungen",

    // Services Page (dienstleistungen.html)
    srv_hero_title: "Unsere Personaldienstleistungen",
    srv_hero_desc: "Erfahren Sie, wie wir Sie als strategischer Partner flexibel und effizient in allen Personalbereichen entlasten.",
    services_subtitle: "Dienstleistungen",
    services_title: "Flexible Lösungen für Arbeitgeber & Bewerber",
    services_desc: "Erfahren Sie, wie wir Unternehmen durch flexible Arbeitnehmerüberlassung unterstützen und Bewerbern zukunftssichere Perspektiven bieten.",
    tab_employer: "Für Arbeitgeber",
    tab_candidate: "Für Bewerber",
    employer_title: "Schnell. Rechtssicher. Zuverlässig.",
    employer_desc: "Vermeiden Sie Produktionsausfälle bei Auftragsspitzen oder Personalmangel. Unsere Zeitarbeitskräfte stehen Ihnen flexibel zur Verfügung. Wir kümmern uns um die gesamte Abwicklung des On-Site-Managements.",
    emp_feat_1: "Schnelle Disposition",
    emp_feat_2: "100% Rechtskonform",
    emp_feat_3: "Erfahrenes Fachpersonal",
    emp_feat_4: "Volle Kostenkontrolle",
    emp_feat_5: "Branchenzuschläge",
    emp_feat_6: "Persönlicher Ansprechpartner",
    btn_request_staff: "Personalbedarf melden",
    candidate_title: "Faire Bezahlung. Sichere Zukunft.",
    candidate_desc: "Starten Sie beruflich durch. Wir bieten Ihnen feste Verträge in Industrie- und Logistikbetrieben der Region. Profitieren Sie von Tarifgehältern und guten Aufstiegsmöglichkeiten.",
    cand_feat_1: "Unbefristeter Arbeitsvertrag",
    cand_feat_2: "Übertarifliche Bezahlung",
    cand_feat_3: "Urlaubs- und Weihnachtsgeld",
    cand_feat_4: "Arbeitsschutz & Kleidung",
    cand_feat_5: "Starke Übernahmeoptionen",
    cand_feat_6: "Weiterbildungen",
    btn_apply_now: "Jetzt bewerben",
    srv_anue_title: "Klassische Arbeitnehmerüberlassung (ANÜ)",
    srv_anue_desc1: "Mit unserer Arbeitnehmerüberlassung reagieren Sie schnell auf kurzfristige Auftragsschwankungen oder Personalengpässe. Wir stellen Ihnen qualifizierte Mitarbeiter zur Verfügung, die sofort in Ihrem Betrieb einsatzbereit sind.",
    srv_anue_desc2: "Sie zahlen ausschließlich für die tatsächlich geleisteten Arbeitsstunden. Alle Nebenkosten wie Krankheitsausfälle, Urlaub und Lohnfortzahlung liegen vollständig in unserer Verantwortung. Das minimiert Ihre Fixkosten und maximiert Ihre Liquidität.",
    srv_perm_title: "Direkte Personalvermittlung",
    srv_perm_desc1: "Wenn Sie langfristig feste Mitarbeiter für Ihr Team suchen, übernehmen wir den gesamten Rekrutierungsprozess für Sie. Wir schalten Stellenanzeigen, führen Bewerbungsgespräche und treffen eine qualifizierte Vorauswahl.",
    srv_perm_desc2: "Sie sparen wertvolle Zeit und Ressourcen in Ihrer Personalabteilung. Wir präsentieren Ihnen ausschließlich Kandidaten, die sowohl fachlich als auch persönlich perfekt zu Ihrem Anforderungsprofil passen.",
    srv_onsite_title: "On-Site Management vor Ort",
    srv_onsite_desc1: "Bei einem hohen Bedarf an Zeitarbeitnehmern etablieren wir ein Büro direkt in Ihrem Hause. Ein On-Site Manager von Altıntaş koordiniert sämtliche processes der Personalüberlassung vor Ort.",
    srv_onsite_desc2: "Unser Koordinator übernimmt die Einsatzplanung, die Betreuung der Zeitarbeitnehmer, die Zeiterfassung und sorgt für die Einhaltung aller Sicherheitsvorschriften direkt an Ihren Produktionslinien.",

    // Sectors Page (branchen.html)
    sec_hero_title: "Schwerpunkt-Branchen",
    sec_hero_desc: "Unsere Personalexperten sind spezialisiert auf die operativen Bereiche Logistik, Produktion und industrielle Services.",
    sectors_subtitle: "Unsere Kernkompetenzen",
    sectors_title: "Spezialisiert auf Ihre Branche",
    sectors_desc: "Mit fachlichem Verständnis stellen wir schnell die passenden Mitarbeiter für Ihre betrieblichen Anforderungen.",
    sect_log_title: "Lager, Logistik & Versand",
    sect_log_desc: "Kommissionierer, Staplerfahrer, Fachkräfte für Lagerlogistik und Versandmitarbeiter zur Absicherung Ihrer gesamten Lieferkette.",
    sec_log_h2: "Logistik und Distributionszentren",
    sec_log_desc1: "Das Ruhrgebiet und Deutschland sind Drehkreuze des europäischen Warenverkehrs. Altıntaş Personalmanagement stellt namhaften Logistikdienstleistern erfahrenes Personal zur Verfügung.",
    sec_log_item1: "Staplerfahrer & Hochregalstapler",
    sec_log_item2: "Kommissionierer & Picker",
    sec_log_item3: "Fachkräfte für Lagerlogistik",
    sec_log_item4: "Versandmitarbeiter & Verpacker",
    sect_ind_title: "Industrie & Produktion",
    sect_ind_desc: "Erfahrene Produktionshelfer, Maschinenbediener, Metallbauer und Facharbeiter für anspruchsvolle Produktionsstraßen.",
    sec_ind_h2: "Industrielle Produktion und Montage",
    sec_ind_desc1: "Vom Automobilzulieferer bis zur Chemiebranche - wir decken das gesamte Spektrum ab. Wir vermitteln geschulte Produktionshelfer und spezialisierte Facharbeiter direkt an Ihre Produktionslinien.",
    sec_ind_item1: "Produktions- und Montagehelfer",
    sec_ind_item2: "Maschinen- & Anlagenführer",
    sec_ind_item3: "Industriemechaniker",
    sec_ind_item4: "Qualitätsprüfer",
    sect_metal_title: "Metall- & Elektroindustrie",
    sec_metal_h2: "Schweißtechnik & Metallbau",
    sec_metal_desc1: "Fachkräfte in der Schweißtechnik und im Metallbau werden händeringend gesucht. Altıntaş Personalmanagement rekrutiert Facharbeiter national und über unser Partnernetzwerk in Bursa (Türkei) direkt für Ihren Bedarf.",
    sec_met_item1: "Geprüfte Schweißer (MIG, MAG, WIG)",
    sec_met_item2: "Schlosser & Metallbauer",
    sec_met_item3: "CNC-Fräser & Dreher",
    sec_met_item4: "Elektroinstallateure",
    sect_srv_title: "Industriedienstleistungen",
    sect_srv_desc: "Kompetente Teams für Maschinenreinigung, Wartung, Gebäudereinigung und logistische Spezialaufgaben vor Ort.",
    sec_srv_h2: "Maschinen- & Industriereinigung",
    sec_srv_desc1: "Sauberkeit und Instandhaltung sind entscheidend für die Langlebigkeit Ihrer Anlagen. Wir stellen Ihnen qualifizierte Reinigungstrupps für Hallen- und Industrieanlagen zur Verfügung.",
    sec_srv_item1: "Industriereiniger für Chemie/Metall",
    sec_srv_item2: "Wartungs- & Instandhaltungshelfer",
    sec_srv_item3: "Sonderreiniger mit Atemschutz",
    sec_srv_item4: "Gebäudereiniger & Facility Services",

    // Locations Page (standorte.html)
    map_hero_title: "Niederlassungen & Reichweite",
    map_hero_desc: "Entdecken Sie unsere Standorte in Deutschland und unser internationales Rekrutierungsbüro in Bursa, Türkei.",
    map_subtitle: "Erişim Ağımız",
    map_title: "Immer in Ihrer Nähe",
    map_desc: "Altıntaş Personalmanagement deckt mit zahlreichen Standorten in Deutschland und einer Niederlassung in Bursa (Türkei) alle Kundenwünsche ab.",
    filter_all: "Alle",
    filter_logistics: "Lager & Logistik",
    filter_industrial: "Industrie National",
    filter_international: "International",
    tag_logistics: "Logistik",
    tag_industrial: "Industrie",
    tag_international: "International",
    intl_title: "Uluslararası Temsilcilik",
    intl_desc: "Bursa (Türkei) şubemiz aracılığıyla, Almanya'daki sanayi und lojistik devlerinin nitelikli iş gücü ihtiyaçlarını karşılıyor und küresel işe alım süreçlerini yönetiyoruz.",

    // Contact Page (kontakt.html)
    form_subtitle: "Kontaktaufnahme",
    form_title: "Bewerbung & Anfragen",
    form_desc: "Nutzen Sie unsere Online-Formulare für Personalanfragen oder laden Sie als Bewerber Ihren Lebenslauf direkt hoch.",
    form_emp_title: "Für Arbeitgeber",
    form_emp_desc: "Senden Sie uns Ihre Personalanfrage und wir setzen uns innerhalb von 24 Stunden mit Ihnen in Verbindung.",
    lbl_company: "Firmenname *",
    lbl_contact_person: "Ansprechpartner *",
    lbl_email: "E-Mail *",
    lbl_phone: "Telefon *",
    lbl_need: "Personalbedarf in Sektor *",
    opt_select: "Bitte auswählen...",
    opt_logistics: "Lager / Logistik / Versand",
    opt_production: "Produktion / Industrie",
    opt_cleaning: "Industriereinigung & Service",
    opt_other: "Andere",
    lbl_message: "Nachricht / Anforderungen",
    agree_privacy: "Ich stimme den ",
    privacy_policy: "Datenschutzbestimmungen",
    agree_privacy_2: " zu. *",
    btn_send_request: "Personalanfrage senden",
    form_cand_title: "Hinterlassen Sie Ihren Lebenslauf",
    form_cand_desc: "Bewerben Sie sich initiativ oder auf unsere Sektoren. Wir kontaktieren Sie bezüglich passender offener Stellen.",
    lbl_fullname: "Name, Vorname *",
    lbl_pref_sector: "Gewünschter Arbeitsbereich *",
    lbl_cv: "Lebenslauf / Dokumente",
    file_upload_text: "Datei hier ablegen oder klicken zum Hochladen",
    file_formats: "PDF, DOCX (Max. 5MB)",
    lbl_cand_message: "Nachricht / Bewerbungstext",
    btn_send_apply: "Bewerbung abschicken",

    // Footer
    footer_brand_desc: "Ihr verlässlicher Partner für zeitgemäße Arbeitnehmerüberlassung und Personalmanagement in Deutschland und Europa.",
    footer_services: "Dienstleistungen",
    footer_quicklinks: "Navigation",
    footer_contact: "Kontakt",
    all_rights_reserved: "Alle Rechte vorbehalten.",
    impressum: "Impressum",
    privacy: "Datenschutz",
    cookies: "Cookies",

    // Toast
    toast_employer_success: "Vielen Dank! Ihre Personalanfrage wurde erfolgreich gesendet. Wir kontaktieren Sie in Kürze.",
    toast_candidate_success: "Bewerbung erfolgreich eingegangen! Unser HR-Team wird Ihren Lebenslauf prüfen und sich melden.",
    toast_fill_fields: "Bitte füllen Sie alle erforderlichen Felder aus."
  },
  tr: {
    // Navigation
    nav_home: "Ana Sayfa",
    nav_about: "Kurumsal",
    nav_services: "Hizmetler",
    nav_sectors: "Sektörler",
    nav_map: "Lokasyonlar",
    nav_apply: "İletişim",
    nav_cta: "Şimdi Sorun",

    // Hero Section
    hero_badge: "Personel Kiralama & Lojistik",
    hero_title: "Büyümeniz İçin Nitelikli Personel Çözümleri",
    hero_title_span: "Nitelikli",
    hero_desc: "Altıntaş Personalmanagement GmbH, Essen'de ve ülke genelinde güvenilir ortağınızdır. Nitelikli uzmanları önde gelen lojistik ve sanayi kuruluşlarıyla buluşturuyoruz.",
    hero_btn_employer: "Personel İhtiyacı Bildir",
    hero_btn_applicant: "Hemen Başvur",
    hero_signature: "Bugün. Yarın. Her Zaman.",

    // Stats
    stat_compliance: "Toplu Sözleşme Güvencesi",
    stat_cities: "Almanya Genelinde Şubeler",
    stat_employees: "Yerleştirilen Personel",
    stat_support: "7/24 Kesintisiz Destek",

    // Learn more
    learn_more: "Daha Fazla Bilgi",

    // CTA Banner
    cta_banner_title: "Etkin Lojistik ve Hızlı Personel Desteği",
    cta_banner_desc: "Hemen işe başlamaya hazır, büyük bir forklift operatörü, sipariş hazırlama elemanı ve lojistik yardımcısı kadrosuna sahibiz.",

    // About Page (unternehmen.html)
    about_hero_title: "Altıntaş Personalmanagement Hakkında",
    about_hero_desc: "Değerlerimiz, yöneticilerimiz ve yüksek kalite ve yasal uygunluk standartlarımız hakkında daha fazla bilgi edinin.",
    about_subtitle: "Hakkımızda",
    about_title: "Lojistik & Endüstride Yılların Deneyimi",
    about_desc1: "Altıntaş Personalmanagement GmbH, güvenilir personel hizmetlerini temsil eder. Essen (Gladbecker Straße 427) merkezli ve Ruhr bölgesindeki güçlü yapımızla şirketlerin personel açıklarını esnek ve yasal güvenceyle kapatmalarına destek oluyoruz.",
    about_desc2: "Yöneticilerimiz Hasan Altıntaş ve Tuncer Çakmak firmamızı adil çalışma koşulları, toplu sözleşmeli ücretlendirme (iGZ/DGB) ve maksimum müşteri memnuniyeti odağında yönetmektedir. Kısa vadeli iş gücünden kalıcı istihdama kadar yanınızdayız.",
    about_stat1: "15+ Yıl",
    about_stat1_lbl: "Sektörel Deneyim",
    about_stat2_lbl: "Memnuniyet Oranı",
    philosophy: "Felsefemiz",
    phil_title: "Değer Vermek ve Güvenilirlik",
    phil_desc1: "Essen'in kalbinde derin köklere sahip yönetici ortaklı bir insan kaynakları firması olarak kendimizi bir köprü olarak görüyoruz. Günlük motivasyonumuz, adaylarımız için ideal işi ve ortak şirketlerimiz için en doğru nitelikli personeli bulmaktır.",
    phil_desc2: "iGZ/DGB toplu iş sözleşmesine uygun adil çalışma koşullarını, zamanında maaş ödemelerini ve karşılıklı güvene dayalı kişisel danışmanlığı savunuyoruz. Sürdürülebilir ekonomik başarının ancak memnun çalışanlarla mümkün olduğuna inanıyoruz.",
    management: "Yönetim",
    mgmt_title: "Yönetim Kurulumuz",
    mgmt_desc: "Hasan Altıntaş ve Tuncer Çakmak firmamızı ticari yetkinlik ve derin sektörel birikim ile yönetmektedir.",
    mgmt_pos_1: "Kurucu / Yönetici Ortak",
    mgmt_bio_1: "Altıntaş Personalmanagement'ın kurucusu. Stratejik yönelim, müşteri danışmanlığı ve büyüme planlamasından sorumludur.",
    mgmt_pos_2: "Genel Müdür / Ticari Temsilci",
    mgmt_bio_2: "Finans, yasal uyumluluk ve müşteri tesislerimizdeki çalışma hukuku odaklı On-Site yönetim süreçlerinden sorumludur.",
    comp_title: "Alman İş Hukukuna Uygun Güvence",
    comp_desc1: "Lisanslı bir geçici istihdam kuruluşu olarak, tüm yasal düzenlemelere harfiyen uymaktayız. Geçici İstihdam Yasası (AÜG) gereklilikleri, Federal İş Ajansı izinleri ve Equal-Pay (Eşit Ücret) prensiplerine uygunluk bizim için esastır.",
    comp_feat_1: "BAP / iGZ / DGB Toplu Sözleşmeleri",
    comp_feat_2: "ANÜ Personel Kiralama İzni",
    comp_feat_3: "Tüm ISO/SCP Standartlarına Uyum",
    comp_feat_4: "Düzenli İş Güvenliği Eğitimleri",

    // Services Page (dienstleistungen.html)
    srv_hero_title: "İnsan Kaynakları Hizmetlerimiz",
    srv_hero_desc: "Stratejik ortağınız olarak, tüm personel süreçlerinizde size nasıl esneklik ve verimlilik sağladığımızı keşfedin.",
    services_subtitle: "Hizmetlerimiz",
    services_title: "İşverenler ve Adaylar İçin Esnek Çözümler",
    services_desc: "Şirketleri esnek personel kiralama süreçleriyle nasıl desteklediğimizi ve adaylara nasıl güvenli bir gelecek sunduğumuzu inceleyin.",
    tab_employer: "İşverenler İçin",
    tab_candidate: "İş Arayanlar İçin",
    employer_title: "Hızlı. Hukuken Güvenli. Sorumluluk Sahibi.",
    employer_desc: "Sipariş yoğunlukları, hastalık izinleri veya mevsimsel dalgalanmalar operasyonel kapasitenizi zorlayabilir. Profesyonel personel kiralama (ANÜ) hizmetimizle, uzun vadeli risk almadan verimliliğinizi koruyun.",
    emp_feat_1: "Hızlı Organizasyon",
    emp_feat_2: "%100 Mevzuata Uygunluk",
    emp_feat_3: "Deneyimli Uzman Kadro",
    emp_feat_4: "Tam Maliyet Kontrolü",
    emp_feat_5: "Sektörel Ek Ödemeler",
    emp_feat_6: "Kişisel Danışman Desteği",
    btn_request_staff: "Personel İhtiyacı Bildir",
    candidate_title: "Adil Ücretlendirme. Güvenli Gelecek.",
    candidate_desc: "Kariyerinizde yeni bir sayfa açın. Bölgenin prestijli lojistik ve sanayi tesislerinde uzun vadeli iş olanakları sunuyoruz. Toplu sözleşmeli dolgun maaş ve yükselme şansından yararlanın.",
    cand_feat_1: "Süresiz İş Sözleşmesi",
    cand_feat_2: "Tarife Üstü Ücretler",
    cand_feat_3: "Yıllık İzin ve Bayram İkramiyeleri",
    cand_feat_4: "İş Güvenliği & Kıyafet Desteği",
    cand_feat_5: "Kadroya Alınma Fırsatları",
    cand_feat_6: "Mesleki Eğitim İmkanları",
    btn_apply_now: "Özgeçmişinizi Bırakın",
    srv_anue_title: "Geçici İş İlişkisi / Personel Kiralama (ANÜ)",
    srv_anue_desc1: "Personel kiralama (ANÜ) modelimizle sipariş dalgalanmalarına veya geçici iş gücü ihtiyaçlarına anında yanıt verin. Tesislerinizde hemen görev almaya hazır kalifiye ekipler sağlıyoruz.",
    srv_anue_desc2: "Sadece çalışılan saatler için fatura ödersiniz. Hastalık izinleri, yıllık izin ve resmi tatil ödemeleri tamamen bizim yükümlülüğümüzdedir. Bu sayede sabit giderleriniz azalır, operasyonel esnekliğiniz artar.",
    srv_perm_title: "Doğrudan İşe Yerleştirme / İşe Alım Danışmanlığı",
    srv_perm_desc1: "Ekiplerinize doğrudan katılması hedeflenen uzun vadeli kadrolar için tüm aday arama ve mülakat süreçlerini üstleniyoruz. İlan çıkılması, ön elemelerin yapılması süreçlerini yönetiyoruz.",
    srv_perm_desc2: "İnsan kaynakları departmanınızın zaman ve kaynak tasarrufu yapmasını sağlıyoruz. Size yalnızca teknik ve kültürel kriterlerinize tam uyum sağlayan adayları raporluyoruz.",
    srv_onsite_title: "Yerinde (On-Site) Yönetim Hizmetleri",
    srv_onsite_desc1: "Büyük ölçekli geçici personel ihtiyaçlarınızda, fabrikanızın veya deponuzun içinde doğrudan bir Altıntaş temsilciliği kuruyoruz. Özel On-Site yöneticimiz süreçleri yerinde yönetiyor.",
    srv_onsite_desc2: "Temsilcimiz; vardiya planlamasını, çalışan oryantasyonunu, mesai takibini ve iş güvenliği kurallarının uygulanmasını doğrudan üretim sahasında denetler.",

    // Sectors Page (branchen.html)
    sec_hero_title: "Hizmet Verdiğimiz Sektörler",
    sec_hero_desc: "Personel uzmanlarımız; lojistik, sanayi üretimi ve endüstriyel destek hizmetleri alanlarında uzmanlaşmıştır.",
    sectors_subtitle: "Uzmanlık Alanlarımız",
    sectors_title: "Sektörünüze Özel Çözümler",
    sectors_desc: "Sektörel yetkinliğimiz sayesinde operasyonel gereksinimlerinize en uygun personeli hızla sağlıyoruz.",
    sect_log_title: "Depo, Lojistik & Sevk",
    sect_log_desc: "Tüm tedarik zincirinizi güvence altına almak için sipariş hazırlama elemanları, forklift operatörleri ve sevk görevlileri.",
    sec_log_h2: "Lojistik ve Dağıtım Merkezleri",
    sec_log_desc1: "Ruhr Havzası ve tüm Almanya, Avrupa lojistik ağının merkezidir. Altıntaş Personalmanagement, tanınmış lojistik devlerine deneyimli ekipler sağlamaktadır.",
    sec_log_item1: "Forklift ve Dar Alan İstifleme Operatörleri",
    sec_log_item2: "Sipariş Hazırlama (Picker) Elemanları",
    sec_log_item3: "Lojistik Yönetimi Uzmanları",
    sec_log_item4: "Paketleme ve Sevkiyat Görevlileri",
    sect_ind_title: "Endüstri & Üretim",
    sect_ind_desc: "Zorlu üretim hatları için deneyimli üretim yardımcıları, makine operatörleri, metal işçileri ve kalifiye ustalar.",
    sec_ind_h2: "Endüstriyel Üretim ve Montaj",
    sec_ind_desc1: "Otomotiv yan sanayinden kimya tesislerine kadar geniş bir yelpazede hizmet sunuyoruz. Eğitimli üretim elemanlarını ve teknik uzmanları üretim hatlarınıza yönlendiriyoruz.",
    sec_ind_item1: "Üretim ve Montaj Elemanları",
    sec_ind_item2: "Makine ve Tesis Operatörleri",
    sec_ind_item3: "Endüstriyel Mekanikerler",
    sec_ind_item4: "Kalite Kontrol Uzmanları",
    sect_metal_title: "Metal ve Elektrik Sanayisi",
    sec_metal_h2: "Kaynak Teknolojileri ve Metal Yapı",
    sec_metal_desc1: "Kaynak teknolojileri ve metal yapı alanlarında uzman bulmak zordur. Altıntaş Personalmanagement hem Almanya genelinde hem de Bursa (Türkiye) ağımız üzerinden hızlıca kaynakçı temin eder.",
    sec_met_item1: "Sertifikalı Kaynakçılar (MIG, MAG, WIG)",
    sec_met_item2: "Metal Konstrüksiyon İşçileri / Çilingirler",
    sec_met_item3: "CNC Torna ve Freze Operatörleri",
    sec_met_item4: "Elektrik Tesisat Ustaları",
    sect_srv_title: "Endüstriyel Hizmetler",
    sect_srv_desc: "Yerinde makine temizliği, bakım, bina temizliği ve özel lojistik görevleri üstlenen yetkin ekipler.",
    sec_srv_h2: "Makine ve Endüstriyel Temizlik",
    sec_srv_desc1: "Tesislerinizin temizliği ve bakımı, makinelerinizin ömrünü uzatır. Fabrika sahaları ve makineleriniz için özel temizlik ekipleri görevlendiriyoruz.",
    sec_srv_item1: "Kimya ve Metal Tesisleri Endüstriyel Temizlik Elemanları",
    sec_srv_item2: "Bakım ve Onarım Yardımcı Personeli",
    sec_srv_item3: "Maskeli Özel Alan Temizlik Görevlileri",
    sec_srv_item4: "Bina Temizliği ve Tesis Hizmetleri Personeli",

    // Locations Page (standorte.html)
    map_hero_title: "Şubelerimiz ve Erişim Ağımız",
    map_hero_desc: "Almanya'daki şube ağımızı ve Türkiye (Bursa) merkezli uluslararası işe alım ofisimizi keşfedin.",
    map_subtitle: "Erişim Ağımız",
    map_title: "Size Her Zaman Yakınız",
    map_desc: "Altıntaş Personalmanagement, Almanya genelindeki çok sayıda lokasyonu ve Bursa (Türkiye) temsilciliği ile tüm talepleri karşılar.",
    filter_all: "Tümü",
    filter_logistics: "Depo & Lojistik",
    filter_industrial: "Endüstriyel (Ulusal)",
    filter_international: "Uluslararası",
    tag_logistics: "Lojistik",
    tag_industrial: "Endüstri",
    tag_international: "Uluslararası",
    intl_title: "Uluslararası Temsilcilik",
    intl_desc: "Bursa (Türkiye) şubemiz aracılığıyla, Almanya'daki sanayi ve lojistik devlerinin nitelikli iş gücü ihtiyaçlarını karşılıyor ve küresel işe alım süreçlerini yönetiyoruz.",

    // Contact Page (kontakt.html)
    form_subtitle: "İletişim Formu",
    form_title: "Projenizi Bugün Başlatın",
    form_desc: "İster kalifiye personel arıyor olun, ister yeni bir kariyere başlamak isteyin – formu doldurarak ilk adımı atın.",
    form_emp_title: "İşverenler İçin",
    form_emp_desc: "Personel talebinizi bize iletin, 24 saat içinde sizinle iletişime geçelim.",
    lbl_company: "Şirket Adı *",
    lbl_contact_person: "Yetkili Kişi *",
    lbl_email: "E-Posta *",
    lbl_phone: "Telefon *",
    lbl_need: "Talep Edilen Sektör *",
    opt_select: "Lütfen seçiniz...",
    opt_logistics: "Depolama / Lojistik / Sevk",
    opt_production: "Üretim / Endüstri",
    opt_cleaning: "Endüstriyel Temizlik & Servis",
    opt_other: "Diğer",
    lbl_message: "Mesaj / Özel Talepler",
    agree_privacy: "Gizlilik ve ",
    privacy_policy: "kişisel verilerin korunması şartlarını",
    agree_privacy_2: " kabul ediyorum. *",
    btn_send_request: "Personel Talebini Gönder",
    form_cand_title: "Özgeçmişinizi Bırakın",
    form_cand_desc: "Açık pozisyonlarımız için genel başvuru yapın veya ilgilendiğiniz sektörü seçin. Uygun roller için size döneceğiz.",
    lbl_fullname: "Adınız Soyadınız *",
    lbl_pref_sector: "Tercih Ettiğiniz Sektör *",
    lbl_cv: "Özgeçmiş / Belge Yükle",
    file_upload_text: "Dosyayı buraya sürükleyin veya seçmek için tıklayın",
    file_formats: "PDF, DOCX (Maks. 5MB)",
    lbl_cand_message: "Mesaj / Ön Yazı",
    btn_send_apply: "Başvuruyu Gönder",

    // Footer
    footer_brand_desc: "Almanya ve Avrupa genelinde modern personel kiralama ve insan kaynakları yönetimi alanında güvenilir ortağınız.",
    footer_services: "Hizmetler",
    footer_quicklinks: "Gezinti",
    footer_contact: "İletişim",
    all_rights_reserved: "Tüm hakları saklıdır.",
    impressum: "Yasal Uyarı",
    privacy: "Veri Koruma",
    cookies: "Çerez Politikası",

    // Success notifications
    toast_employer_success: "Teşekkürler! Personel talebiniz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.",
    toast_candidate_success: "Başvurunuz başarıyla alındı! İK ekibimiz özgeçmişinizi değerlendirip sizinle iletişime geçecektir.",
    toast_fill_fields: "Lütfen gerekli tüm alanları doldurun."
  }
};

// 2. State Management
let currentLanguage = localStorage.getItem("allman_lang") || "de";

// DOM Elements - Shared across all pages
const langBtn = document.getElementById("lang-btn");
const langDropdown = document.getElementById("lang-dropdown");
const activeFlag = document.getElementById("active-flag");
const activeLangText = document.getElementById("active-lang-text");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const header = document.getElementById("header");

// 3. Translation Functions
function translatePage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
  
  // Set html document properties
  document.documentElement.lang = lang;
  document.title = lang === "tr" ? "Altıntaş Personalmanagement | İK Hizmetleri & Personel Kiralama" : "Altıntaş Personalmanagement | Arbeitnehmerüberlassung & Personaldienstleistungen";
}

function selectLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("allman_lang", lang);
  
  // Update Dropdown UI Selection State
  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("selected", opt.getAttribute("data-lang") === lang);
  });
  
  // Update Flag button display
  if (activeFlag) activeFlag.src = `https://flagcdn.com/w20/${lang}.png`;
  if (activeLangText) activeLangText.innerText = lang.toUpperCase();
  
  // Translate terms
  translatePage(lang);
  
  // Close dropdown
  if (langDropdown) langDropdown.classList.remove("active");
}

// Language selector event handlers
if (langBtn) {
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (langDropdown) langDropdown.classList.toggle("active");
  });
}

document.querySelectorAll(".lang-option").forEach(opt => {
  opt.addEventListener("click", () => {
    selectLanguage(opt.getAttribute("data-lang"));
  });
});

document.addEventListener("click", () => {
  if (langDropdown) langDropdown.classList.remove("active");
});

// Initialize translation on load
translatePage(currentLanguage);
selectLanguage(currentLanguage);


// 4. Header Scroll State & Active Nav Link Highlight
function highlightActiveLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");
  
  navLinks.forEach(link => link.classList.remove("active"));
  
  if (currentPath === "index.html" || currentPath === "") {
    const link = document.getElementById("nav-home-link");
    if (link) link.classList.add("active");
  } else if (["unternehmen.html", "philosophie.html", "management.html", "compliance.html"].includes(currentPath)) {
    const link = document.getElementById("nav-about-link");
    if (link) link.classList.add("active");
  } else if (["dienstleistungen.html", "arbeitnehmerueberlassung.html", "personalvermittlung.html", "onsite-management.html"].includes(currentPath)) {
    const link = document.getElementById("nav-services-link");
    if (link) link.classList.add("active");
  } else if (["branchen.html", "lager-logistik.html", "produktion-industrie.html", "metall-elektro.html", "industriedienstleistungen.html"].includes(currentPath)) {
    const link = document.getElementById("nav-sectors-link");
    if (link) link.classList.add("active");
  } else if (currentPath === "standorte.html") {
    const link = document.getElementById("nav-map-link");
    if (link) link.classList.add("active");
  } else if (currentPath === "kontakt.html") {
    const link = document.getElementById("nav-apply-link");
    if (link) link.classList.add("active");
  }
}

window.addEventListener("scroll", () => {
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

// Run highlight on load
highlightActiveLink();


// 5. Responsive mobile menu
const MOBILE_BREAKPOINT = 768;
let mobileMenuOverlay = document.getElementById("mobile-menu-overlay");

function isMobileNav() {
  return window.innerWidth <= MOBILE_BREAKPOINT;
}

function getMenuIcon() {
  return menuToggle ? menuToggle.querySelector("i") : null;
}

function closeMobileMenu() {
  if (navMenu) navMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
  if (mobileMenuOverlay) mobileMenuOverlay.classList.remove("active");

  const icon = getMenuIcon();
  if (icon) icon.classList.replace("fa-xmark", "fa-bars");

  document.querySelectorAll(".nav-item-dropdown").forEach(dropdown => {
    dropdown.classList.remove("open");
  });
}

function openMobileMenu() {
  if (!navMenu) return;
  navMenu.classList.add("active");
  document.body.classList.add("menu-open");
  if (mobileMenuOverlay) mobileMenuOverlay.classList.add("active");

  const icon = getMenuIcon();
  if (icon) icon.classList.replace("fa-bars", "fa-xmark");
}

function ensureMobileMenuOverlay() {
  if (mobileMenuOverlay) return mobileMenuOverlay;

  mobileMenuOverlay = document.createElement("button");
  mobileMenuOverlay.id = "mobile-menu-overlay";
  mobileMenuOverlay.className = "mobile-menu-overlay";
  mobileMenuOverlay.type = "button";
  mobileMenuOverlay.setAttribute("aria-label", "Menüyü kapat");
  mobileMenuOverlay.addEventListener("click", closeMobileMenu);
  document.body.appendChild(mobileMenuOverlay);
  return mobileMenuOverlay;
}

ensureMobileMenuOverlay();

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    if (!navMenu) return;
    if (navMenu.classList.contains("active")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

document.querySelectorAll(".nav-menu > li:not(.nav-item-dropdown) > .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    if (isMobileNav()) closeMobileMenu();
  });
});

document.querySelectorAll(".dropdown-menu a").forEach(link => {
  link.addEventListener("click", () => {
    if (isMobileNav()) closeMobileMenu();
  });
});

document.querySelectorAll(".nav-item-dropdown").forEach(dropdown => {
  const link = dropdown.querySelector(".nav-link");
  const icon = dropdown.querySelector(".dropdown-icon");

  const toggleDropdown = (e) => {
    if (!isMobileNav()) return;
    e.preventDefault();
    e.stopPropagation();

    const isOpen = dropdown.classList.contains("open");
    document.querySelectorAll(".nav-item-dropdown").forEach(other => {
      if (other !== dropdown) other.classList.remove("open");
    });
    dropdown.classList.toggle("open", !isOpen);
  };

  if (link) link.addEventListener("click", toggleDropdown);
  if (icon) icon.addEventListener("click", toggleDropdown);
});

window.addEventListener("resize", () => {
  if (!isMobileNav()) closeMobileMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileMenu();
});


// 6. Service Portal Tab Switcher
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".portal-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));
    
    btn.classList.add("active");
    const activeTab = document.getElementById(`tab-${btn.getAttribute("data-tab")}`);
    if (activeTab) {
      activeTab.classList.add("active");
    }
  });
});


// 7. Branch Details Database for Modal Popup
const branchesData = {
  essen: {
    name: "Essen (Hauptsitz)",
    category: { de: "Hauptsitz / Industrie - National", tr: "Merkez Ofis / Ulusal Endüstri" },
    address: "Gladbecker Straße 427, 45329 Essen",
    phone: "+49 178 4589604",
    email: "essen@altintas-pm.de"
  },
  duisburg: {
    name: "Duisburg",
    category: { de: "Industrie - National", tr: "Ulusal Endüstri" },
    address: "Franzstraße 9, 47166 Duisburg",
    phone: "+49 203 45676040",
    email: "duisburg@altintas-pm.de"
  },
  moers: {
    name: "Moers",
    category: { de: "Lager, Logistik & Produktion", tr: "Depo, Lojistik & Üretim" },
    address: "Homberger Straße 12, 47441 Moers",
    phone: "+49 178 4589604",
    email: "moers@altintas-pm.de"
  },
  frankfurt: {
    name: "Frankfurt am Main",
    category: { de: "Lager, Logistik & Produktion", tr: "Depo, Lojistik & Üretim" },
    address: "Kaiserstraße 18, 60311 Frankfurt am Main",
    phone: "+49 178 4589604",
    email: "frankfurt@altintas-pm.de"
  },
  wiesbaden: {
    name: "Wiesbaden",
    category: { de: "Lager, Logistik & Produktion", tr: "Depo, Lojistik & Üretim" },
    address: "Bahnhofstraße 22, 65185 Wiesbaden",
    phone: "+49 178 4589604",
    email: "wiesbaden@altintas-pm.de"
  },
  duesseldorf: {
    name: "Düsseldorf",
    category: { de: "Industrie - National", tr: "Ulusal Endüstri" },
    address: "Königsallee 60, 40212 Düsseldorf",
    phone: "+49 178 4589604",
    email: "duesseldorf@altintas-pm.de"
  },
  aschaffenburg: {
    name: "Aschaffenburg",
    category: { de: "Industrie - National", tr: "Ulusal Endüstri" },
    address: "Luitpoldstraße 4, 63741 Aschaffenburg",
    phone: "+49 178 4589604",
    email: "aschaffenburg@altintas-pm.de"
  },
  bursa: {
    name: "Bursa (Türkiye)",
    category: { de: "Industrie - International", tr: "Uluslararası Endüstri" },
    address: "Kükürtlü Caddesi No:14, Osmangazi, Bursa, Türkiye",
    phone: "+90 224 233 44 55",
    email: "bursa@altintas-pm.de"
  }
};

function getBranchDetails(branchId) {
  if (branchesData[branchId]) {
    return branchesData[branchId];
  }
  const capitalized = branchId.charAt(0).toUpperCase() + branchId.slice(1);
  return {
    name: capitalized,
    category: { de: "Industrie - National", tr: "Ulusal Endüstri" },
    address: `Musterstraße 10, ${capitalized}, Deutschland`,
    phone: "+49 178 4589604",
    email: `${branchId}@altintas-pm.de`
  };
}

// Interactive Map Pins and Syncing
const mapPins = document.querySelectorAll(".map-pin");
const branchItems = document.querySelectorAll(".branch-item");
const filterChips = document.querySelectorAll(".filter-chip");
const modalOverlay = document.getElementById("branch-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");

function openBranchModal(branchId) {
  const data = getBranchDetails(branchId);
  
  document.getElementById("modal-branch-name").innerText = data.name;
  document.getElementById("modal-branch-cat").innerText = data.category[currentLanguage];
  document.getElementById("modal-branch-addr").innerText = data.address;
  document.getElementById("modal-branch-phone").innerText = data.phone;
  document.getElementById("modal-branch-email").innerText = data.email;
  
  if (modalOverlay) {
    modalOverlay.classList.add("active");
  }
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", () => {
    if (modalOverlay) modalOverlay.classList.remove("active");
  });
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });
}

// Click on pins or list items triggers modal popup (Açılabilir pencere)
if (mapPins.length > 0) {
  mapPins.forEach(pin => {
    pin.addEventListener("click", (e) => {
      const branchId = pin.getAttribute("data-branch");
      openBranchModal(branchId);
    });
    
    // Hover visual effect
    pin.addEventListener("mouseenter", () => {
      pin.classList.add("active");
      const branchId = pin.getAttribute("data-branch");
      const item = document.querySelector(`.branch-item[data-branch="${branchId}"]`);
      if (item) item.classList.add("active");
    });
    
    pin.addEventListener("mouseleave", () => {
      pin.classList.remove("active");
      const branchId = pin.getAttribute("data-branch");
      const item = document.querySelector(`.branch-item[data-branch="${branchId}"]`);
      if (item) item.classList.remove("active");
    });
  });
}

if (branchItems.length > 0) {
  branchItems.forEach(item => {
    item.addEventListener("click", () => {
      const branchId = item.getAttribute("data-branch");
      openBranchModal(branchId);
    });
    
    item.addEventListener("mouseenter", () => {
      const branchId = item.getAttribute("data-branch");
      const pin = document.getElementById(`pin-${branchId}`);
      if (pin) pin.classList.add("active");
    });
    
    item.addEventListener("mouseleave", () => {
      const branchId = item.getAttribute("data-branch");
      const pin = document.getElementById(`pin-${branchId}`);
      if (pin) pin.classList.remove("active");
    });
  });
}

if (filterChips.length > 0) {
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      
      const filter = chip.getAttribute("data-filter");
      
      branchItems.forEach(item => {
        const type = item.getAttribute("data-type");
        if (filter === "all" || type === filter) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
      
      mapPins.forEach(pin => {
        const branchId = pin.getAttribute("data-branch");
        const listItem = document.querySelector(`.branch-item[data-branch="${branchId}"]`);
        if (listItem) {
          const type = listItem.getAttribute("data-type");
          if (filter === "all" || type === filter) {
            pin.style.display = "block";
          } else {
            pin.style.display = "none";
          }
        }
      });
      
      const intlWidget = document.getElementById("intl-widget");
      if (intlWidget) {
        if (filter === "all" || filter === "international") {
          intlWidget.style.display = "block";
        } else {
          intlWidget.style.display = "none";
        }
      }
    });
  });
}


// 8. Custom File Upload logic
const cvUploadArea = document.getElementById("cv-upload-area");
const cvInput = document.getElementById("cand-cv");
const fileNameDisplay = document.getElementById("file-name-display");

if (cvUploadArea && cvInput) {
  cvUploadArea.addEventListener("click", () => {
    cvInput.click();
  });

  cvUploadArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    cvUploadArea.style.borderColor = "var(--accent)";
    cvUploadArea.style.background = "var(--bg-mint)";
  });

  cvUploadArea.addEventListener("dragleave", () => {
    cvUploadArea.style.borderColor = "var(--border-color)";
    cvUploadArea.style.background = "#ffffff";
  });

  cvUploadArea.addEventListener("drop", (e) => {
    e.preventDefault();
    cvUploadArea.style.borderColor = "var(--border-color)";
    cvUploadArea.style.background = "#ffffff";
    
    if (e.dataTransfer.files.length > 0) {
      cvInput.files = e.dataTransfer.files;
      showUploadedFile(e.dataTransfer.files[0].name);
    }
  });

  cvInput.addEventListener("change", () => {
    if (cvInput.files.length > 0) {
      showUploadedFile(cvInput.files[0].name);
    }
  });
}

function showUploadedFile(name) {
  if (fileNameDisplay) {
    fileNameDisplay.innerText = `📎 ${name}`;
    fileNameDisplay.style.display = "block";
  }
  const uploadText = cvUploadArea.querySelector("span");
  if (uploadText) {
    uploadText.innerText = name;
  }
}


// 9. Toast Notifications Feedback System
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = `toast`;
  toast.style.borderLeftColor = type === "success" ? "var(--accent)" : "#ef4444";
  
  const icon = type === "success" ? "fa-circle-check" : "fa-circle-exclamation";
  const iconColor = type === "success" ? "var(--accent)" : "#ef4444";
  
  toast.innerHTML = `
    <i class="fa-solid ${icon}" style="color: ${iconColor}; font-size: 20px;"></i>
    <span style="font-size: 14px; font-weight: 600;">${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 5000);
}


// 10. Form Submissions Mock Logic
const employerForm = document.getElementById("employer-form");
const candidateForm = document.getElementById("candidate-form");

if (employerForm) {
  employerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const submitBtn = employerForm.querySelector("button[type='submit']");
    const originalText = submitBtn.innerText;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
    
    setTimeout(() => {
      showToast(translations[currentLanguage].toast_employer_success, "success");
      employerForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerText = originalText;
    }, 1500);
  });
}

// ============================================================
// 11. SCROLL ANIMATIONS — Intersection Observer
// ============================================================

(function initScrollAnimations() {
  // Create scroll progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.prepend(progressBar);

  // Update progress bar on scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = Math.min(100, (scrolled / total) * 100) + '%';
  }, { passive: true });

  // Add floating dots to hero section
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    const dotsWrap = document.createElement('div');
    dotsWrap.className = 'hero-dots';
    for (let i = 0; i < 4; i++) {
      const dot = document.createElement('div');
      dot.className = 'hero-dot';
      dotsWrap.appendChild(dot);
    }
    heroSection.appendChild(dotsWrap);
  }

  // Auto-inject data-anim on key elements
  const animTargets = [
    { sel: '.section-subtitle',           anim: 'fade',  base: 0 },
    { sel: '.section-title',              anim: 'up',    base: 100 },
    { sel: '.about-text',                 anim: 'left',  base: 0 },
    { sel: '.about-section .portal-img',  anim: 'right', base: 200 },
    { sel: '.about-accent-bar',           anim: 'scale', base: 150 },
    { sel: '.about-badges .about-badge',  anim: 'up',    base: 200, stagger: 80 },
    { sel: '.service-card',               anim: 'up',    base: 0,   stagger: 80 },
    { sel: '.sector-card',                anim: 'scale', base: 0,   stagger: 60 },
    { sel: '.stat-item',                  anim: 'up',    base: 0,   stagger: 80 },
    { sel: '.portal-img:not(.about-section .portal-img)', anim: 'right', base: 0 },
    { sel: '.portal-text',                anim: 'left',  base: 0 },
    { sel: '.mgmt-card',                  anim: 'up',    base: 0,   stagger: 100 },
    { sel: '.feature-card',               anim: 'up',    base: 0,   stagger: 80 },
    { sel: '.emp-feature',                anim: 'up',    base: 0,   stagger: 80 },
    { sel: '.cta-banner',                 anim: 'up',    base: 0 },
    { sel: '.footer-col',                 anim: 'up',    base: 0,   stagger: 80 },
    { sel: '.compliance-grid .feat-item', anim: 'up',    base: 0,   stagger: 80 },
  ];

  animTargets.forEach(({ sel, anim, base, stagger }) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      if (!el.hasAttribute('data-anim')) {
        el.setAttribute('data-anim', anim);
        const delay = base + (stagger ? i * stagger : 0);
        if (delay > 0) {
          const allowed = [100, 200, 300, 400, 500, 600];
          const clamped = allowed.reduce((prev, curr) =>
            Math.abs(curr - delay) < Math.abs(prev - delay) ? curr : prev
          );
          el.setAttribute('data-anim-delay', String(clamped));
        }
      }
    });
  });

  // Intersection Observer to trigger animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
})();

// ============================================================
// 12. COUNTER ANIMATION for stat numbers
// ============================================================

(function initCounters() {
  function countUp(el) {
    const raw = el.getAttribute('data-count') || el.textContent.trim();
    const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
    const suffix = raw.replace(/[0-9.]/g, '').trim();
    if (!num || isNaN(num)) return;

    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = num / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= num) { start = num; clearInterval(timer); }
      el.textContent = (Number.isInteger(num) ? Math.floor(start) : start.toFixed(1)) + (suffix || '');
    }, step);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number, .about-stat h5, [data-count]').forEach(el => {
    const val = el.textContent.trim();
    if (/\d/.test(val)) {
      el.setAttribute('data-count', val);
      counterObserver.observe(el);
    }
  });
})();
if (candidateForm) {
  candidateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const submitBtn = candidateForm.querySelector("button[type='submit']");
    const originalText = submitBtn.innerText;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
    
    setTimeout(() => {
      showToast(translations[currentLanguage].toast_candidate_success, "success");
      candidateForm.reset();
      if (fileNameDisplay) fileNameDisplay.style.display = "none";
      const uploadText = cvUploadArea.querySelector("span");
      if (uploadText) {
        uploadText.innerText = translations[currentLanguage].file_upload_text;
      }
      submitBtn.disabled = false;
      submitBtn.innerText = originalText;
    }, 1500);
  });
}

// ============================================================
// 13. BACK-TO-TOP BUTTON
// ============================================================
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ============================================================
// 14. 3D MOUSE TILT ON CARDS
// ============================================================
(function initCardTilt() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const cards = document.querySelectorAll('.service-card, .sector-card, .mgmt-card, .feature-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -6; // max ±6deg
      const rotY = ((x - cx) / cx) * 6;

      card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

// ============================================================
// 16. SECTION TITLE UNDERLINE — animate on visible
// ============================================================
(function initTitleUnderlines() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.section-title').forEach(el => {
    observer.observe(el);
  });
})();
