import os
import re

html_dir = r"c:\Users\gebca\Desktop\iş\allmmanpersonelkiralama"
files_to_fix = ['kontakt.html', 'kontakt-arbeitgeber.html', 'kontakt-bewerber.html']

for file in files_to_fix:
    path = os.path.join(html_dir, file)
    if not os.path.exists(path):
        continue
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # company input
    content = re.sub(r'(id="emp-company"[^>]*)placeholder="[^"]*"', r'\1placeholder="z.B. Muster GmbH" data-translate="pl_company"', content)
    # contact person input
    content = re.sub(r'(id="emp-name"[^>]*)placeholder="[^"]*"', r'\1placeholder="z.B. Max Mustermann" data-translate="pl_contact"', content)
    # email input employer
    content = re.sub(r'(id="emp-email"[^>]*)placeholder="[^"]*"', r'\1placeholder="name@firma.de" data-translate="pl_email_emp"', content)
    # phone input employer
    content = re.sub(r'(id="emp-phone"[^>]*)placeholder="[^"]*"', r'\1placeholder="+49 (0) 123 4567" data-translate="pl_phone"', content)
    # message input employer
    content = re.sub(r'(id="emp-message"[^>]*)placeholder="[^"]*"', r'\1placeholder="Beschreiben Sie kurz Ihre Anforderungen..." data-translate="pl_msg_emp"', content)

    # applicant name
    content = re.sub(r'(id="cand-name"[^>]*)placeholder="[^"]*"', r'\1placeholder="z.B. Maria Muster" data-translate="pl_cand_name"', content)
    # applicant email
    content = re.sub(r'(id="cand-email"[^>]*)placeholder="[^"]*"', r'\1placeholder="name@beispiel.de" data-translate="pl_email_cand"', content)
    # applicant phone
    content = re.sub(r'(id="cand-phone"[^>]*)placeholder="[^"]*"', r'\1placeholder="+49 (0) 123 4567" data-translate="pl_phone"', content)
    # applicant message
    content = re.sub(r'(id="cand-message"[^>]*)placeholder="[^"]*"', r'\1placeholder="Erzählen Sie uns kurz etwas über sich..." data-translate="pl_msg_cand"', content)

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

print("Updated placeholders in HTML.")
