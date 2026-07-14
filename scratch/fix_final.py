import os

html_dir = r"c:\Users\gebca\Desktop\iş\allmmanpersonelkiralama"

# Final wave of fixes
fixes = {
    # 1. "smtliche" -> "sämtliche"
    "smtliche": "sämtliche",
    # 2. "bernehmen" -> "übernehmen" (missing ü)
    " bernehmen": " übernehmen",
    # 3. "Stzen" -> "Sätzen" or similar
    "bermitteln": "übermitteln",
    # 4. More missing umlauts
    "beschftigt": "beschäftigt",
    "Beschftigungs": "Beschäftigungs",
    "Arbeitsstttenverordnung": "Arbeitsstättenverordnung",
    "Nachfügen": "Nachfügen",
    "zuknftig": "zukünftig",
    "Fhigkeiten": "Fähigkeiten",
    "Gehlter": "Gehälter",
    "Branchenzuschlge": "Branchenzuschläge",
    "Tarifgehlter": "Tarifgehälter",
    "Gebudeunterkunften": "Gebäudeunterkunften",
    "Gebude": "Gebäude",
    "erfllt": "erfüllt",
    "Erfllung": "Erfüllung",
    "auerhalb": "außerhalb",
    "stndigen": "ständigen",
    "gngigen": "gängigen",
    "selbstverstndlich": "selbstverständlich",
}

def fix_file(file_path):
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    original = content
    for src, dst in fixes.items():
        content = content.replace(src, dst)
    if content != original:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False

fixed_count = 0
fixed_files = []
for root, dirs, files in os.walk(html_dir):
    dirs[:] = [d for d in dirs if d not in ('.git', 'scratch', 'scripts', 'assets')]
    for file in files:
        if file.endswith((".html", ".js")):
            file_path = os.path.join(root, file)
            if fix_file(file_path):
                fixed_files.append(os.path.basename(file_path))
                fixed_count += 1

print(f"Fixed {fixed_count} files: {', '.join(fixed_files)}")
