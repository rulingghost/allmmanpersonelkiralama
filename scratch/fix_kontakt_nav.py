import os
import glob
import re

html_files = glob.glob('*.html')

old_nav = r'<li>\s*<a href="kontakt\.html" class="nav-link" id="nav-apply-link" data-translate="nav_apply">\s*Kontakt\s*</a>\s*</li>'
new_nav = '''        <li class="nav-item-dropdown">
          <a href="kontakt.html" class="nav-link" id="nav-apply-link">
            <span data-translate="nav_apply">Kontakt</span>
            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
          </a>
          <ul class="dropdown-menu">
            <li><a href="kontakt-bewerber.html" data-translate="nav_contact_cand">Für Bewerber</a></li>
            <li><a href="kontakt-arbeitgeber.html" data-translate="nav_contact_emp">Für Arbeitgeber</a></li>
          </ul>
        </li>'''

count = 0
for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # We will use string replace or regex depending on if it exists.
    # Because of indentation, regex might be safer.
    if re.search(old_nav, content):
        content = re.sub(old_nav, new_nav, content)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        count += 1
        print(f'Updated {f}')
    else:
        print(f'Skipped {f} (pattern not found)')

print(f'Done. Updated {count} files.')
