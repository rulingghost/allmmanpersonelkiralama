import os

html_dir = r"c:\Users\gebca\Desktop\iş\allmmanpersonelkiralama"

# The old text and the new text for copyright
old_copy = '© 2026 Altintas Personalmanagement GmbH'
new_copy = '© 2026 Altıntaş Personalmanagement GmbH'

fixes = 0

for root, dirs, files in os.walk(html_dir):
    dirs[:] = [d for d in dirs if d not in ('.git', 'scratch', 'scripts', 'assets')]
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            original = content
            
            if old_copy in content:
                content = content.replace(old_copy, new_copy)
                fixes += 1
                
            if content != original:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"Fixed copyright in {file}")

print(f"Total copyright fixes: {fixes}")
