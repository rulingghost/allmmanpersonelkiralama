import os

html_path = r"c:\Users\gebca\Desktop\iş\allmmanpersonelkiralama\unternehmen.html"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Schram's block
schram_old = """          <h3>Schram Özpay</h3>
          <p style="color: var(--accent); font-weight: 700; margin-bottom: 0; font-size: 13px;" data-translate="mgmt_pos_2">HR-Manager</p>"""

schram_new = """          <h3>Schram Özpay</h3>
          <p style="color: var(--accent); font-weight: 700; margin-bottom: 12px; font-size: 14px;" data-translate="mgmt_pos_2">HR-Manager</p>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;" data-translate="mgmt_bio_2">Verantwortlich für das Personalmanagement und das Recruiting von neuen Mitarbeitern.</p>"""

content = content.replace(schram_old, schram_new)

# Replace Fikret's block
fikret_old = """          <h3>Fikret Altıntaş</h3>
          <p style="color: var(--accent); font-weight: 700; margin-bottom: 0; font-size: 13px;" data-translate="mgmt_pos_3">CCO</p>"""

fikret_new = """          <h3>Fikret Altıntaş</h3>
          <p style="color: var(--accent); font-weight: 700; margin-bottom: 12px; font-size: 14px;" data-translate="mgmt_pos_3">CCO</p>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;" data-translate="mgmt_bio_3">Leitet das operative Geschäft und kümmert sich um die Kundenbeziehungen.</p>"""

content = content.replace(fikret_old, fikret_new)

# Replace Atahan's block
atahan_old = """          <h3>Atahan Altıntaş</h3>
          <p style="color: var(--accent); font-weight: 700; margin-bottom: 0; font-size: 13px;" data-translate="mgmt_pos_4">Social Media</p>"""

atahan_new = """          <h3>Atahan Altıntaş</h3>
          <p style="color: var(--accent); font-weight: 700; margin-bottom: 12px; font-size: 14px;" data-translate="mgmt_pos_4">Social Media</p>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;" data-translate="mgmt_bio_4">Zuständig für den digitalen Auftritt, Social-Media-Marketing und Content-Erstellung.</p>"""

content = content.replace(atahan_old, atahan_new)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(content)

print("unternehmen.html updated with bios.")
