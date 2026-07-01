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
    nav_career: "Karriere",
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
    about_desc2: "Unser geschäftsführender Inhaber Hasan Altıntaş leitet das Unternehmen mit dem Fokus auf faire Arbeitsbedingungen, tariftreue Bezahlung (iGZ/DGB) und höchste Kundenzufriedenheit. Ob kurzfristige Einsätze oder dauerhafte Arbeitsvermittlung - wir sind Ihr starker Partner.",
    about_stat1: "15+ Jahre",
    about_stat1_lbl: "Branchenerfahrung",
    about_stat2_lbl: "Zufriedenheitsquote",
    philosophy: "Philosophie",
    phil_title: "Wertschätzung und Zuverlässigkeit",
    phil_desc1: "Als inhabergeführtes Personaldienstleistungsunternehmen mit tiefen Wurzeln im Herzen von Essen verstehen wir uns als Brückenbauer. Unser täglicher Antrieb ist es, für unsere Bewerber den idealen Arbeitsplatz und für unsere Kundenunternehmen die passenden Fachkräfte zu finden.",
    phil_desc2: "Wir stehen für faire Arbeitskonditionen nach dem iGZ/DGB-Tarifvertrag, pünktliche Bezahlung und eine persönliche Betreuung auf Augenhöhe. Wir sind überzeugt, dass nachhaltiger wirtschaftlicher Erfolg nur durch zufriedene Mitarbeiter möglich ist.",
    management: "Führung",
    mgmt_title: "Unsere Geschäftsführung",
    mgmt_desc: "Hasan Altıntaş leitet das Unternehmen mit kaufmännischer Kompetenz und profundem Branchenwissen.",
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
    toast_fill_fields: "Bitte füllen Sie alle erforderlichen Felder aus.",

    // Homepage new sections
    mq_anue: "Arbeitnehmerüberlassung",
    mq_logistics: "Lager & Logistik",
    mq_production: "Produktion & Industrie",
    mq_metal: "Metall & Elektro",
    mq_compliance: "100% Tariftreu (iGZ/DGB)",
    mq_onsite: "On-Site Management",
    mq_ruhr: "Ruhrgebiet & Bundesweit",
    home_sectors_title: "Spezialisiert auf Ihre Branche",
    home_sectors_desc: "Von der Lagerlogistik bis zur Schweißtechnik — wir kennen die Anforderungen Ihrer Branche und liefern passgenaues Fachpersonal.",
    home_metal_short: "Geprüfte Schweißer, CNC-Fachkräfte und Elektroinstallateure — national und international.",
    srv_anue_short: "Arbeitnehmerüberlassung",
    srv_anue_short_desc: "Flexible Zeitarbeitskräfte für Produktionsspitzen",
    srv_perm_short: "Personalvermittlung",
    srv_perm_short_desc: "Direkte Rekrutierung für Festanstellungen",
    srv_onsite_short: "On-Site Management",
    srv_onsite_short_desc: "Persönlicher Koordinator direkt bei Ihnen vor Ort",
    process_subtitle: "So arbeiten wir",
    process_title: "In 4 Schritten zum passenden Personal",
    process_desc: "Vom ersten Gespräch bis zum produktiven Einsatz — unser bewährter Prozess garantiert schnelle und rechtssichere Ergebnisse.",
    process_step1_title: "Bedarf analysieren",
    process_step1_desc: "Wir besprechen Ihre Anforderungen, Qualifikationen und den gewünschten Einsatzzeitraum persönlich.",
    process_step2_title: "Matching & Auswahl",
    process_step2_desc: "Aus unserem Pool qualifizierter Fachkräfte wählen wir die besten Kandidaten für Ihren Betrieb aus.",
    process_step3_title: "Schneller Einsatz",
    process_step3_desc: "Nach Vertragsabschluss stehen die Mitarbeiter innerhalb weniger Tage einsatzbereit bei Ihnen.",
    process_step4_title: "Laufende Betreuung",
    process_step4_desc: "Unser Team begleitet den gesamten Einsatz — von der Zeiterfassung bis zur Verlängerung.",
    why_subtitle: "Warum Altıntaş?",
    why_title: "Ihr Vorteil mit uns als Partner",
    why_feat1_title: "100% Rechtssicherheit",
    why_feat1_desc: "Vollständige Einhaltung des AÜG, iGZ/DGB-Tarifverträge und Equal-Pay-Regelungen — ohne Kompromisse.",
    why_feat2_title: "Express-Disposition",
    why_feat2_desc: "Personalengpässe? Wir reagieren innerhalb von 24 Stunden mit qualifizierten Einsatzkräften.",
    why_feat3_title: "International vernetzt",
    why_feat3_desc: "20+ Standorte in Deutschland plus Rekrutierungsbüro in Bursa (Türkei) für Fachkräfte weltweit.",
    why_feat4_title: "Volle Kostenkontrolle",
    why_feat4_desc: "Transparente Abrechnung nur für geleistete Stunden — alle Nebenkosten liegen bei uns.",
    why_feat5_title: "Persönliche Betreuung",
    why_feat5_desc: "Fester Ansprechpartner für jeden Kunden — kein Callcenter, sondern echte Partnerschaft.",
    why_feat6_title: "Branchenexpertise",
    why_feat6_desc: "Jahrelange Erfahrung in Logistik, Produktion und Industrie — wir sprechen Ihre Sprache.",
    testimonial_subtitle: "Stimmen unserer Partner",
    testimonial_title: "Vertrauen, das sich auszahlt",
    testimonial_1: "Altıntaş hat uns in der Hochsaison innerhalb von 48 Stunden ein komplettes Logistikteam gestellt. Professionell, zuverlässig und absolut tariftreu.",
    testimonial_1_name: "Michael K.",
    testimonial_1_role: "Betriebsleiter, Logistikunternehmen Ruhrgebiet",
    testimonial_2: "Seit drei Jahren arbeiten wir mit Altıntaş im On-Site-Modell zusammen. Die Betreuung vor Ort ist erstklassig und unsere Produktion läuft reibungslos.",
    testimonial_2_name: "Sabine L.",
    testimonial_2_role: "HR-Leiterin, Automobilzulieferer",
    testimonial_3: "Als Bewerber wurde ich fair behandelt, schnell vermittelt und erhalte übertarifliche Bezahlung. Ich kann Altıntaş nur empfehlen!",
    testimonial_3_name: "Ahmet Y.",
    testimonial_3_role: "Staplerfahrer, Essen",

    // Career page
    career_hero_title: "Starten Sie Ihre Karriere bei Altıntaş",
    career_hero_desc: "Faire Arbeitsbedingungen, tarifliche Bezahlung und echte Perspektiven in Logistik und Industrie — bundesweit.",
    career_benefits_sub: "Ihre Vorteile",
    career_benefits_title: "Warum bei uns arbeiten?",
    career_benefits_desc: "Als Mitarbeiter von Altıntaş Personalmanagement profitieren Sie von fairen Konditionen und einer persönlichen Betreuung.",
    career_ben1_desc: "Sichere Anstellung bei Altıntaş — kein befristeter Vertrag, keine Unsicherheit.",
    career_ben2_desc: "iGZ/DGB-Tarifgehälter plus Branchenzuschläge für Nacht-, Wochenend- und Feiertagsarbeit.",
    career_ben3_desc: "Zusätzliche finanzielle Vorteile gemäß Tarifvertrag — pünktlich und zuverlässig.",
    career_ben4_desc: "Persönliche Schutzausrüstung und Arbeitskleidung werden von uns gestellt.",
    career_ben5_desc: "Viele unserer Mitarbeiter werden nach erfolgreichem Einsatz vom Kundenunternehmen übernommen.",
    career_ben6_desc: "Staplerschein, Sicherheitsunterweisungen und fachliche Qualifizierungen — wir investieren in Sie.",
    faq_subtitle: "Häufige Fragen",
    faq_title: "FAQ — Alles, was Sie wissen müssen",
    faq_q1: "Wie bewerbe ich mich bei Altıntaş?",
    faq_a1: "Nutzen Sie unser Online-Bewerbungsformular auf der Kontaktseite. Laden Sie Ihren Lebenslauf hoch und geben Sie Ihren gewünschten Arbeitsbereich an. Unser HR-Team meldet sich innerhalb von 48 Stunden bei Ihnen.",
    faq_q2: "Welche Qualifikationen werden benötigt?",
    faq_a2: "Das hängt vom Einsatzbereich ab. Für Logistik helfen ein Staplerschein oder Lagererfahrung. In der Produktion sind Zuverlässigkeit und Teamfähigkeit oft wichtiger als formale Abschlüsse. Wir beraten Sie gerne individuell.",
    faq_q3: "Wie schnell kann ich eingesetzt werden?",
    faq_a3: "In der Regel können wir Sie innerhalb von 3–5 Werktagen nach Vertragsabschluss in einem passenden Betrieb einsetzen. Bei dringendem Bedarf geht es auch schneller.",
    faq_q4: "In welchen Regionen gibt es Einsatzstellen?",
    faq_a4: "Unser Schwerpunkt liegt im Ruhrgebiet und in NRW, aber wir vermitteln bundesweit an über 20 Standorten in ganz Deutschland.",
    faq_q5: "Was bedeutet Arbeitnehmerüberlassung für mich?",
    faq_a5: "Sie haben einen unbefristeten Vertrag bei Altıntaş und arbeiten im Kundenbetrieb. Sie erhalten tarifliche Bezahlung, alle Sozialleistungen und werden von uns betreut — rechtlich abgesichert nach deutschem Arbeitsrecht.",
    career_cta_title: "Bereit für den nächsten Schritt?",
    career_cta_desc: "Senden Sie uns Ihre Bewerbung — wir finden den passenden Arbeitsplatz für Sie."
  },
  tr: {
    // Navigation
    nav_home: "Ana Sayfa",
    nav_about: "Kurumsal",
    nav_services: "Hizmetler",
    nav_sectors: "Sektörler",
    nav_map: "Lokasyonlar",
    nav_career: "Kariyer",
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
    about_desc2: "Yöneticimiz Hasan Altıntaş firmamızı adil çalışma koşulları, toplu sözleşmeli ücretlendirme (iGZ/DGB) ve maksimum müşteri memnuniyeti odağında yönetmektedir. Kısa vadeli iş gücünden kalıcı istihdama kadar yanınızdayız.",
    about_stat1: "15+ Yıl",
    about_stat1_lbl: "Sektörel Deneyim",
    about_stat2_lbl: "Memnuniyet Oranı",
    philosophy: "Felsefemiz",
    phil_title: "Değer Vermek ve Güvenilirlik",
    phil_desc1: "Essen'in kalbinde derin köklere sahip yönetici ortaklı bir insan kaynakları firması olarak kendimizi bir köprü olarak görüyoruz. Günlük motivasyonumuz, adaylarımız için ideal işi ve ortak şirketlerimiz için en doğru nitelikli personeli bulmaktır.",
    phil_desc2: "iGZ/DGB toplu iş sözleşmesine uygun adil çalışma koşullarını, zamanında maaş ödemelerini ve karşılıklı güvene dayalı kişisel danışmanlığı savunuyoruz. Sürdürülebilir ekonomik başarının ancak memnun çalışanlarla mümkün olduğuna inanıyoruz.",
    management: "Yönetim",
    mgmt_title: "Yönetim Kurulumuz",
    mgmt_desc: "Hasan Altıntaş firmamızı ticari yetkinlik ve derin sektörel birikim ile yönetmektedir.",
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
    toast_fill_fields: "Lütfen gerekli tüm alanları doldurun.",

    // Homepage new sections
    mq_anue: "Personel Kiralama (ANÜ)",
    mq_logistics: "Depo & Lojistik",
    mq_production: "Üretim & Endüstri",
    mq_metal: "Metal & Elektrik",
    mq_compliance: "%100 Toplu Sözleşme (iGZ/DGB)",
    mq_onsite: "Yerinde Yönetim",
    mq_ruhr: "Ruhr Bölgesi & Almanya Geneli",
    home_sectors_title: "Sektörünüze Özel Çözümler",
    home_sectors_desc: "Depo lojistiğinden kaynak teknolojisine — sektörünüzün gereksinimlerini biliyor ve doğru personeli sağlıyoruz.",
    home_metal_short: "Sertifikalı kaynakçılar, CNC uzmanları ve elektrikçiler — ulusal ve uluslararası.",
    srv_anue_short: "Personel Kiralama",
    srv_anue_short_desc: "Üretim zirveleri için esnek geçici personel",
    srv_perm_short: "Doğrudan İşe Alım",
    srv_perm_short_desc: "Kalıcı pozisyonlar için doğrudan yerleştirme",
    srv_onsite_short: "Yerinde Yönetim",
    srv_onsite_short_desc: "Tesisinizde kişisel koordinatör",
    process_subtitle: "Nasıl Çalışıyoruz",
    process_title: "4 Adımda Doğru Personele Ulaşın",
    process_desc: "İlk görüşmeden üretken göreve kadar — kanıtlanmış sürecimiz hızlı ve yasal güvence sağlar.",
    process_step1_title: "İhtiyaç Analizi",
    process_step1_desc: "Gereksinimlerinizi, nitelikleri ve istenen görev süresini birlikte değerlendiriyoruz.",
    process_step2_title: "Eşleştirme & Seçim",
    process_step2_desc: "Nitelikli personel havuzumuzdan işletmenize en uygun adayları seçiyoruz.",
    process_step3_title: "Hızlı Görevlendirme",
    process_step3_desc: "Sözleşme sonrası personel birkaç gün içinde göreve hazır.",
    process_step4_title: "Sürekli Destek",
    process_step4_desc: "Ekibimiz tüm görev süresince yanınızda — mesai takibinden uzatmalara kadar.",
    why_subtitle: "Neden Altıntaş?",
    why_title: "Ortak Olarak Avantajlarınız",
    why_feat1_title: "%100 Yasal Güvence",
    why_feat1_desc: "AÜG, iGZ/DGB toplu sözleşmeleri ve Equal-Pay kurallarına tam uyum — tavizsiz.",
    why_feat2_title: "Hızlı Organizasyon",
    why_feat2_desc: "Personel açığı mı? 24 saat içinde nitelikli ekiplerle yanıt veriyoruz.",
    why_feat3_title: "Uluslararası Ağ",
    why_feat3_desc: "Almanya'da 20+ lokasyon ve Bursa (Türkiye) işe alım ofisi ile küresel erişim.",
    why_feat4_title: "Tam Maliyet Kontrolü",
    why_feat4_desc: "Sadece çalışılan saatler için şeffaf faturalandırma — tüm yan maliyetler bizde.",
    why_feat5_title: "Kişisel Danışmanlık",
    why_feat5_desc: "Her müşteriye sabit danışman — çağrı merkezi değil, gerçek ortaklık.",
    why_feat6_title: "Sektörel Uzmanlık",
    why_feat6_desc: "Lojistik, üretim ve endüstride yılların deneyimi — dilinizi konuşuyoruz.",
    testimonial_subtitle: "Ortaklarımızın Görüşleri",
    testimonial_title: "Güven, Karşılığını Verir",
    testimonial_1: "Altıntaş yoğun sezonda 48 saat içinde tam bir lojistik ekibi sağladı. Profesyonel, güvenilir ve tamamen toplu sözleşmeli.",
    testimonial_1_name: "Michael K.",
    testimonial_1_role: "Operasyon Müdürü, Ruhr Lojistik Firması",
    testimonial_2: "Üç yıldır Altıntaş ile yerinde yönetim modelinde çalışıyoruz. Sahadaki destek mükemmel, üretimimiz sorunsuz.",
    testimonial_2_name: "Sabine L.",
    testimonial_2_role: "İK Müdürü, Otomotiv Tedarikçisi",
    testimonial_3: "Aday olarak adil muamele gördüm, hızla yerleştirildim ve tarife üstü maaş alıyorum. Altıntaş'ı kesinlikle tavsiye ederim!",
    testimonial_3_name: "Ahmet Y.",
    testimonial_3_role: "Forklift Operatörü, Essen",
    career_hero_title: "Altıntaş'ta Kariyerinize Başlayın",
    career_hero_desc: "Adil çalışma koşulları, toplu sözleşmeli ücretler ve lojistik/endüstride gerçek fırsatlar — Almanya genelinde.",
    career_benefits_sub: "Avantajlarınız",
    career_benefits_title: "Neden Bizimle Çalışmalısınız?",
    career_benefits_desc: "Altıntaş Personalmanagement çalışanı olarak adil koşullardan ve kişisel danışmanlıktan yararlanırsınız.",
    career_ben1_desc: "Altıntaş'ta güvenli istihdam — belirsiz süreli sözleşme yok.",
    career_ben2_desc: "iGZ/DGB tarife maaşları artı gece, hafta sonu ve tatil ek ödemeleri.",
    career_ben3_desc: "Toplu sözleşmeye göre ek mali avantajlar — zamanında ve güvenilir.",
    career_ben4_desc: "Kişisel koruyucu ekipman ve iş kıyafetleri tarafımızdan sağlanır.",
    career_ben5_desc: "Çalışanlarımızın çoğu başarılı görev sonrası müşteri firmasına geçirilir.",
    career_ben6_desc: "Forklift ehliyeti, iş güvenliği eğitimleri ve mesleki sertifikalar — size yatırım yapıyoruz.",
    faq_subtitle: "Sık Sorulan Sorular",
    faq_title: "SSS — Bilmeniz Gereken Her Şey",
    faq_q1: "Altıntaş'a nasıl başvurabilirim?",
    faq_a1: "İletişim sayfasındaki online başvuru formunu kullanın. Özgeçmişinizi yükleyin ve istediğiniz çalışma alanını belirtin. İK ekibimiz 48 saat içinde sizinle iletişime geçer.",
    faq_q2: "Hangi nitelikler gerekli?",
    faq_a2: "Görev alanına bağlıdır. Lojistik için forklift ehliyeti veya depo deneyimi yardımcı olur. Üretimde güvenilirlik ve takım çalışması genellikle formal diplomalardan daha önemlidir.",
    faq_q3: "Ne kadar hızlı göreve başlayabilirim?",
    faq_a3: "Genellikle sözleşme sonrası 3-5 iş günü içinde uygun bir işletmede görevlendirilirsiniz. Acil durumlarda daha hızlı da olabilir.",
    faq_q4: "Hangi bölgelerde görev var?",
    faq_a4: "Odak noktamız Ruhr bölgesi ve NRW, ancak Almanya genelinde 20'den fazla lokasyonda yerleştirme yapıyoruz.",
    faq_q5: "Personel kiralama benim için ne anlama geliyor?",
    faq_a5: "Altıntaş'ta süresiz sözleşmeniz var ve müşteri işletmesinde çalışırsınız. Tarifeli maaş, tüm sosyal haklar ve bizim desteğimizle Alman iş hukununa göre korunursunuz.",
    career_cta_title: "Bir Sonraki Adıma Hazır mısınız?",
    career_cta_desc: "Başvurunuzu gönderin — sizin için doğru işi bulalım."
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

  document.documentElement.style.setProperty(
    "--mobile-menu-label",
    lang === "tr" ? '"Menü"' : '"Menü"'
  );
  
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
if (!mobileMenuOverlay) {
  mobileMenuOverlay = document.createElement("div");
  mobileMenuOverlay.id = "mobile-menu-overlay";
  mobileMenuOverlay.className = "mobile-menu-overlay";
  mobileMenuOverlay.setAttribute("aria-hidden", "true");
  document.body.appendChild(mobileMenuOverlay);
  mobileMenuOverlay.addEventListener("click", () => closeMobileMenu());
}

document.body.classList.remove("menu-open");
if (header) header.classList.remove("menu-expanded");

function isMobileNav() {
  return window.innerWidth <= MOBILE_BREAKPOINT;
}

function getMenuIcon() {
  return menuToggle ? menuToggle.querySelector("i") : null;
}

function closeMobileMenu() {
  if (navMenu) navMenu.classList.remove("active");
  if (menuToggle) menuToggle.classList.remove("active");
  document.body.classList.remove("menu-open");
  if (mobileMenuOverlay) mobileMenuOverlay.setAttribute("aria-hidden", "true");

  const icon = getMenuIcon();
  if (icon) icon.classList.replace("fa-xmark", "fa-bars");

  document.querySelectorAll(".nav-item-dropdown").forEach(dropdown => {
    dropdown.classList.remove("open");
  });
}

function openMobileMenu() {
  if (!navMenu) return;
  navMenu.classList.add("active");
  if (menuToggle) menuToggle.classList.add("active");
  document.body.classList.add("menu-open");
  if (mobileMenuOverlay) mobileMenuOverlay.setAttribute("aria-hidden", "false");

  const icon = getMenuIcon();
  if (icon) icon.classList.replace("fa-bars", "fa-xmark");
}

if (menuToggle) {
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!navMenu) return;
    if (navMenu.classList.contains("active")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    if (!isMobileNav()) return;
    const isDropdownParent =
      link.classList.contains("nav-link") &&
      link.parentElement?.classList.contains("nav-item-dropdown");
    if (isDropdownParent) return;
    closeMobileMenu();
  });
});

function toggleMobileDropdown(dropdown, e) {
  if (!isMobileNav()) return;
  e.preventDefault();
  e.stopPropagation();

  const isOpen = dropdown.classList.contains("open");
  document.querySelectorAll(".nav-item-dropdown").forEach(other => {
    if (other !== dropdown) other.classList.remove("open");
  });
  dropdown.classList.toggle("open", !isOpen);
}

document.querySelectorAll(".nav-item-dropdown").forEach(dropdown => {
  const parentLink = dropdown.querySelector(":scope > .nav-link");
  if (parentLink) {
    parentLink.addEventListener("click", (e) => toggleMobileDropdown(dropdown, e));
  }
});

document.addEventListener("click", (e) => {
  if (!isMobileNav() || !navMenu) return;
  if (!navMenu.classList.contains("active")) return;
  if (navMenu.contains(e.target) || menuToggle.contains(e.target)) return;
  if (mobileMenuOverlay && mobileMenuOverlay.contains(e.target)) return;
  closeMobileMenu();
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

const branchCoords = {
  essen: { lat: 51.4564, lng: 7.0103 },
  duisburg: { lat: 51.4344, lng: 6.7623 },
  moers: { lat: 51.4514, lng: 6.6406 },
  frankfurt: { lat: 50.1109, lng: 8.6821 },
  wiesbaden: { lat: 50.0782, lng: 8.2398 },
  duesseldorf: { lat: 51.2277, lng: 6.7735 },
  aschaffenburg: { lat: 49.977, lng: 9.1521 },
  bocholt: { lat: 51.8388, lng: 6.6153 },
  dorsten: { lat: 51.6611, lng: 7.0022 },
  gelsenkirchen: { lat: 51.5177, lng: 7.0857 },
  gladbeck: { lat: 51.5706, lng: 6.9856 },
  gronau: { lat: 52.2109, lng: 7.0234 },
  haltern: { lat: 51.7428, lng: 7.1819 },
  marl: { lat: 51.6567, lng: 7.0904 },
  neuss: { lat: 51.198, lng: 6.685 },
  recklinghausen: { lat: 51.6138, lng: 7.1973 },
  schermbeck: { lat: 51.6717, lng: 6.8764 },
  witten: { lat: 51.4436, lng: 7.3306 },
  wuelfrath: { lat: 51.2833, lng: 7.0333 },
  bursa: { lat: 40.1885, lng: 29.061 }
};

function getBranchCoords(branchId) {
  return branchCoords[branchId] || null;
}

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

// Interactive Map — Leaflet + branch list sync
const branchItems = document.querySelectorAll(".branch-item");
const filterChips = document.querySelectorAll(".filter-chip");
const modalOverlay = document.getElementById("branch-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
let locationsMap = null;
const mapMarkers = {};

function createBranchMarkerIcon(type) {
  if (typeof L === "undefined") return null;
  return L.divIcon({
    className: `leaflet-branch-marker marker-${type}`,
    html: "<span></span>",
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
}

function setActiveMapBranch(branchId) {
  document.querySelectorAll(".branch-item").forEach((item) => {
    item.classList.toggle("active", item.getAttribute("data-branch") === branchId);
  });

  Object.entries(mapMarkers).forEach(([id, entry]) => {
    const el = entry.marker.getElement();
    if (el) el.classList.toggle("active", id === branchId);
  });
}

function clearActiveMapBranch() {
  document.querySelectorAll(".branch-item").forEach((item) => item.classList.remove("active"));
  Object.values(mapMarkers).forEach((entry) => {
    const el = entry.marker.getElement();
    if (el) el.classList.remove("active");
  });
}

function initLocationsMap() {
  const mapEl = document.getElementById("locations-map");
  if (!mapEl || typeof L === "undefined" || locationsMap) return;

  locationsMap = L.map(mapEl, {
    scrollWheelZoom: true,
    zoomControl: true
  }).setView([51.3, 10.5], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(locationsMap);

  const markerGroup = [];

  branchItems.forEach((item) => {
    const branchId = item.getAttribute("data-branch");
    const type = item.getAttribute("data-type");
    const coords = getBranchCoords(branchId);
    if (!coords) return;

    const icon = createBranchMarkerIcon(type);
    if (!icon) return;

    const data = getBranchDetails(branchId);
    const marker = L.marker([coords.lat, coords.lng], { icon })
      .addTo(locationsMap)
      .bindPopup(`<strong>${data.name}</strong><br>${data.category[currentLanguage] || data.category.de}`)
      .on("click", () => {
        setActiveMapBranch(branchId);
        openBranchModal(branchId);
      });

    marker.on("mouseover", () => setActiveMapBranch(branchId));
    marker.on("mouseout", () => clearActiveMapBranch());

    mapMarkers[branchId] = { marker, type };
    markerGroup.push(marker);
  });

  if (markerGroup.length > 0) {
    const bounds = L.featureGroup(markerGroup).getBounds().pad(0.15);
    locationsMap.fitBounds(bounds, { maxZoom: 7 });
  }

  requestAnimationFrame(() => locationsMap.invalidateSize());
  window.addEventListener("resize", () => {
    if (locationsMap) locationsMap.invalidateSize();
  });
}

function setMapMarkerVisibility(branchId, visible) {
  const entry = mapMarkers[branchId];
  if (!entry || !locationsMap) return;
  if (visible) {
    entry.marker.addTo(locationsMap);
  } else {
    locationsMap.removeLayer(entry.marker);
  }
}

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

// Click on list items triggers modal; map markers handled in initLocationsMap
if (branchItems.length > 0) {
  branchItems.forEach(item => {
    item.addEventListener("click", () => {
      const branchId = item.getAttribute("data-branch");
      setActiveMapBranch(branchId);
      openBranchModal(branchId);
      const entry = mapMarkers[branchId];
      if (entry && locationsMap) {
        locationsMap.setView(entry.marker.getLatLng(), Math.max(locationsMap.getZoom(), 9), { animate: true });
      }
    });
    
    item.addEventListener("mouseenter", () => {
      setActiveMapBranch(item.getAttribute("data-branch"));
    });
    
    item.addEventListener("mouseleave", () => {
      clearActiveMapBranch();
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
        const visible = filter === "all" || type === filter;
        item.style.display = visible ? "flex" : "none";
        setMapMarkerVisibility(item.getAttribute("data-branch"), visible);
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

if (document.getElementById("locations-map")) {
  initLocationsMap();
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
    cvUploadArea.classList.add("dragover");
  });

  cvUploadArea.addEventListener("dragleave", () => {
    cvUploadArea.classList.remove("dragover");
  });

  cvUploadArea.addEventListener("drop", (e) => {
    e.preventDefault();
    cvUploadArea.classList.remove("dragover");
    
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
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = Math.min(100, (scrolled / total) * 100) + '%';
    }, { passive: true });
  }

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
    { sel: '.bento-card',               anim: 'up',    base: 0,   stagger: 80 },
    { sel: '.process-step',             anim: 'up',    base: 0,   stagger: 100 },
    { sel: '.feature-card-v2',          anim: 'up',    base: 0,   stagger: 80 },
    { sel: '.testimonial-card',         anim: 'scale', base: 0,   stagger: 100 },
    { sel: '.service-mini-card',        anim: 'up',    base: 0,   stagger: 80 },
    { sel: '.career-benefit',           anim: 'left',  base: 0,   stagger: 60 },
    { sel: '.faq-item',                 anim: 'up',    base: 0,   stagger: 60 },
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

    // Keep literal values like 24/7 unchanged
    if (raw.includes('/')) return;

    // German thousands separator: 2.500+ → 2500+
    let normalized = raw;
    if (/^\d{1,3}(\.\d{3})+/.test(raw)) {
      normalized = raw.replace(/\.(?=\d{3})/g, '');
    }

    const num = parseFloat(normalized.replace(/[^0-9.]/g, ''));
    const suffix = normalized.replace(/[0-9.]/g, '').trim();
    if (!num || isNaN(num)) return;

    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = num / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= num) { start = num; clearInterval(timer); }
      const display = Number.isInteger(num) ? Math.floor(start) : Math.floor(start);
      el.textContent = display.toLocaleString('de-DE') + (suffix || '');
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

  document.querySelectorAll('.service-card, .sector-card, .mgmt-card, .feature-card, .bento-card, .feature-card-v2, .testimonial-card, .service-mini-card').forEach(card => {
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

// ============================================================
// 17. FAQ ACCORDION
// ============================================================
(function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();
