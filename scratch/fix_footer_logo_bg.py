import os

html_dir = r"c:\Users\gebca\Desktop\iş\allmmanpersonelkiralama"

# The style string to replace
old_style = 'style="height: 48px; object-fit: contain; background: #fff; padding: 4px; border-radius: 4px;"'
new_style = 'style="height: 48px; object-fit: contain;"'

fixes = 0

for root, dirs, files in os.walk(html_dir):
    dirs[:] = [d for d in dirs if d not in ('.git', 'scratch', 'scripts', 'assets')]
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            original = content
            
            if old_style in content:
                content = content.replace(old_style, new_style)
                fixes += 1
                
            if content != original:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"Removed white background from logo in {file}")

print(f"Total logo background fixes: {fixes}")
