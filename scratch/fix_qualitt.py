import os

html_dir = r"c:\Users\gebca\Desktop\iş\allmmanpersonelkiralama"

for root, dirs, files in os.walk(html_dir):
    dirs[:] = [d for d in dirs if d not in ('.git', 'scratch', 'scripts', 'assets')]
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            original = content
            
            content = content.replace("Qualitt & Sicherheit", "Qualität & Sicherheit")
            content = content.replace("Qualitt und Rechtssicherheit", "Qualität und Rechtssicherheit")
            
            if content != original:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"Fixed Qualitt in {file}")
