import os
import re

html_dir = "c:\\Users\\gebca\\Desktop\\iş\\allmmanpersonelkiralama"

# Define mappings from broken patterns (special chars corrupted as ?) to correct German/Turkish characters
replacements = {
    # German umlauts and special characters
    "Alt?nta?": "Altıntaş",
    "Alt?nta": "Altınta",
    "Fhrung": "Führung",
    "Geschftsfhrung": "Geschäftsführung",
    "geschftsfhrenden": "geschäftsführenden",
    "Geschftsfhrender": "Geschäftsführender",
    "kaufmnnischer": "kaufmännischer",
    "kaufmnnischen": "kaufmännischen",
    "Branchenerfahrung": "Branchenerfahrung",
    "Zufriedenheitsquote": "Zufriedenheitsquote",
    "persnlichen": "persönlichen",
    "persnliche": "persönliche",
    "bertarifliche": "Übertarifliche",
    "Zustzliche": "Zusätzliche",
    "gem ": "gemäß ",
    "pnktlich": "pünktlich",
    "zuverlssig": "zuverlässig",
    "zuverlssiger": "verlässlicher",
    "Persnliche": "Persönliche",
    "Schutzausrstung": "Schutzausrüstung",
    "bernommen": "übernommen",
    "Hufige": "Häufige",
    "mssen": "müssen",
    "gewnschten": "gewünschten",
    "bentigt": "benötigt",
    "bentigten": "benötigten",
    "Teamfhigkeit": "Teamfähigkeit",
    "Abschlsse": "Abschlüsse",
    "knnen": "können",
    "nchsten": "nächsten",
    "Dsseldorf": "Düsseldorf",
    "Wlfrath": "Wülfrath",
    "Qualittsprfer": "Qualitätsprüfer",
    "Maschinen- & Anlagenfhrer": "Maschinen- & Anlagenführer",
    "Fachkrfte": "Fachkräfte",
    "Schweier": "Schweißer",
    "CNC-Frser": "CNC-Fräser",
    "Geprfte": "Geprüfte",
    "Rechtssicherheit": "Rechtssicherheit",
    "Arbeitnehmerberlassung": "Arbeitnehmerüberlassung",
    "Personalberlassung": "Personalüberlassung",
    "zeitgeme": "zeitgemäße",
    "Gladbecker Strae": "Gladbecker Straße",
    "ber uns": "Über uns",
    "ber Uns": "Über uns",
    "ber Altıntaş": "Über Altıntaş",
    
    # Turkish special characters
    "Uluslararas": "Uluslararası",
    "ubemiz": "şubemiz",
    "araclyla": "aracılığıyla",
    "i gc": "iş gücü",
    "ihtiyalan": "ihtiyaçlarını",
    "karlyor": "karşılıyor",
    "srelerini": "süreçlerini",
    "ynetiyoruz": "yönetiyoruz",
    "letiim": "İletişim",
    "Trkiye": "Türkiye",
    "Blgesi": "Bölgesi",
    "GSTERL AILIR PENCERE": "GÖSTERİŞLİ AÇILIR PENCERE",
    "Yzen WhatsApp": "Yüzen WhatsApp",
    
    # General symbols/typos
    "processes": "Prozesse",
    "bro": "Büro",
    "Bro": "Büro",
    "verlsslicher": "verlässlicher",
    "zuverlssigkeit": "Zuverlässigkeit",
    "Zuverlssigkeit": "Zuverlässigkeit",
}

def fix_file(file_path):
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    
    original = content
    for src, dst in replacements.items():
        content = content.replace(src, dst)
        
    # Also replace raw "?" occurrences that represent missing letters
    # E.g. "Alt?nta?" -> "Altıntaş"
    # E.g. "F?hrung" -> "Führung"
    content = content.replace("Alt?nta?", "Altıntaş")
    content = content.replace("F?hrung", "Führung")
    content = content.replace("Alt?nta? Logo", "Altıntaş Logo")
    content = content.replace("Alt?nta? Personalmanagement", "Altıntaş Personalmanagement")
    
    if content != original:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Fixed spelling/character issues in: {os.path.basename(file_path)}")
        return True
    return False

# Scan all html files in directory
fixed_count = 0
for root, dirs, files in os.walk(html_dir):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            if fix_file(file_path):
                fixed_count += 1

print(f"Done. Fixed character encoding/spelling in {fixed_count} files.")
