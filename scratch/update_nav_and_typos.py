import os
import re

html_dir = r"c:\Users\gebca\Desktop\iş\allmmanpersonelkiralama"

# The old nav link for kontakt
old_nav = r'<li><a href="kontakt\.html" class="nav-link" id="nav-apply-link" data-translate="nav_apply">Kontakt</a></li>'

# The new dropdown nav for kontakt
new_nav = '''<li class="nav-item-dropdown">
          <a href="kontakt.html" class="nav-link" id="nav-apply-link">
            <span data-translate="nav_apply">Kontakt</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </a>
          <ul class="dropdown-menu">
            <li><a href="kontakt-arbeitgeber.html" data-translate="nav_contact_emp">Für Arbeitgeber</a></li>
            <li><a href="kontakt-bewerber.html" data-translate="nav_contact_cand">Für Bewerber</a></li>
          </ul>
        </li>'''

fixes = 0

for root, dirs, files in os.walk(html_dir):
    dirs[:] = [d for d in dirs if d not in ('.git', 'scratch', 'scripts', 'assets')]
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            original = content
            
            # Fix 1: Navigation dropdown
            if old_nav in content:
                content = content.replace(old_nav, new_nav)
                fixes += 1
                
            # Fix 2: ALTINTAPersonal missing 'Ş'
            # In header/footer it might be ALTINTA<span>Personal</span>
            if "ALTINTA<span>" in content:
                content = content.replace("ALTINTA<span>", "ALTINTAŞ<span>")
                fixes += 1
            if "ALTINTA <span>" in content:
                content = content.replace("ALTINTA <span>", "ALTINTAŞ <span>")
                fixes += 1
                
            # Fix 3: Altintas Logo alt text
            if 'alt="Altintas Logo"' in content:
                content = content.replace('alt="Altintas Logo"', 'alt="Altıntaş Logo"')
                fixes += 1
                
            # Fix 4: footer Altintas -> Altıntaş
            if '© 2026 Altintas Personalmanagement' in content:
                content = content.replace('© 2026 Altintas Personalmanagement', '© 2026 Altıntaş Personalmanagement')
                fixes += 1

            if content != original:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"Updated {file}")

print(f"Total systematic errors fixed: {fixes}")
