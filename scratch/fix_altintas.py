import os
import re

html_dir = r"c:\Users\gebca\Desktop\iş\allmmanpersonelkiralama"

def fix_german_altintas_in_html(file_path):
    """Fix Altıntaş -> Altintas in HTML fallback texts (German default lang)"""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    original = content
    
    # Replace all Turkish special chars in "Altıntaş" within German fallback text
    # ı -> i, ş -> s
    content = content.replace("Altıntaş", "Altintas")
    content = content.replace("ALTINTA", "ALTINTA")  # keep as is for logo
    
    if content != original:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False

def fix_german_altintas_in_js(file_path):
    """Fix Altıntaş -> Altintas ONLY in the German (de) translations block of index.js"""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    original = content
    
    # Find the DE block: starts after "de: {" and ends before "tr: {"
    de_start = content.find('de: {')
    tr_start = content.find('tr: {')
    
    if de_start == -1 or tr_start == -1:
        return False
    
    de_block = content[de_start:tr_start]
    fixed_de = de_block.replace("Altıntaş", "Altintas")
    
    content = content[:de_start] + fixed_de + content[tr_start:]
    
    if content != original:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False

# Fix HTML files
fixed = []
for root, dirs, files in os.walk(html_dir):
    dirs[:] = [d for d in dirs if d not in ('.git', 'scratch', 'scripts', 'assets')]
    for file in files:
        if file.endswith(".html"):
            fp = os.path.join(root, file)
            if fix_german_altintas_in_html(fp):
                fixed.append(file)

# Fix index.js (only DE block)
js_path = os.path.join(html_dir, "index.js")
if fix_german_altintas_in_js(js_path):
    fixed.append("index.js (DE block only)")

print(f"Fixed {len(fixed)} files: {', '.join(fixed)}")
