import os

html_dir = "c:\\Users\\gebca\\Desktop\\iş\\allmmanpersonelkiralama"

# Define mappings from specific German typos where special characters were omitted or mistranslated
typo_replacements = {
    "Personalengpsse": "Personalengpässe",
    "Einsatzkrften": "Einsatzkräften",
    "Verfgung": "Verfügung",
    "verfgen": "verfügen",
    "europischen": "europäischen",
    "Lojistikdienstleistern": "Logistikdienstleistern",
    " groen ": " großen ",
    " groen": " großen",
    " fr ": " für ",
    " fr": " für",
    " ber ": " über ",
    " ber": " über",
    "pnktlich": "pünktlich",
    "zuverlssig": "zuverlässig",
    "Abschlsse": "Abschlüsse",
    "knnen": "können",
    "bentigt": "benötigt",
    "bentigten": "benötigten",
    "nchsten": "nächsten",
    "Schweier": "Schweißer",
    "Qualittsprfer": "Qualitätsprüfer",
    "Maschinen- & Anlagenfhrer": "Maschinen- & Anlagenführer",
    "Fachkrfte": "Fachkräfte",
    "CNC-Frser": "CNC-Fräser",
    "Geprfte": "Geprüfte",
    "Rechtssicherheit": "Rechtssicherheit",
    "Arbeitnehmerberlassung": "Arbeitnehmerüberlassung",
    "Personalberlassung": "Personalüberlassung",
    "zeitgeme": "zeitgemäße",
    "Gladbecker Strae": "Gladbecker Straße",
}

def fix_typos_in_file(file_path):
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    
    original = content
    for src, dst in typo_replacements.items():
        content = content.replace(src, dst)
        
    if content != original:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Fixed typos in: {os.path.basename(file_path)}")
        return True
    return False

# Scan and fix all HTML files
fixed_count = 0
for root, dirs, files in os.walk(html_dir):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            if fix_typos_in_file(file_path):
                fixed_count += 1

print(f"Done. Fixed typos in {fixed_count} files.")
