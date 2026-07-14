import os
import re

html_path = r"c:\Users\gebca\Desktop\iş\allmmanpersonelkiralama\unternehmen.html"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Remove the about-grid for Hasan and put him in the team-grid
old_hasan_block = """      <div class="about-grid" style="grid-template-columns: 1fr; max-width: 500px; margin: 40px auto 0;">
        <!-- Profile 1 -->
        <div class="sector-card" style="text-align: center; align-items: center; background: #ffffff;">
          <div class="profile-avatar">
            <img src="assets/team_consultant.png" alt="Hasan Altintas">
          </div>
          <h3>Hasan Altintas</h3>
          <p style="color: var(--accent); font-weight: 700; margin-bottom: 12px;" data-translate="mgmt_pos_1">Geschäftsführender Gesellschafter</p>
          <p style="font-size: 14px; color: var(--text-muted);" data-translate="mgmt_bio_1">Gründer der Altintas Personalmanagement. Zuständig für strategische Ausrichtung, Kundenberatung und Expansionsplanung.</p>
        </div>
      </div>

      <!-- Additional Management Team -->
      <div class="team-grid">"""

new_team_grid = """      <!-- Management Team -->
      <div class="team-grid">
        <!-- Profile 1 -->
        <div class="sector-card" style="text-align: center; align-items: center; background: #ffffff;">
          <div class="profile-avatar">
            <img src="assets/team_consultant.png" alt="Hasan Altıntaş">
          </div>
          <h3>Hasan Altıntaş</h3>
          <p style="color: var(--accent); font-weight: 700; margin-bottom: 12px;" data-translate="mgmt_pos_1">Geschäftsführender Gesellschafter</p>
        </div>"""

content = content.replace(old_hasan_block, new_team_grid)

# Change team_recruiter.png to team_consultant.png
content = content.replace("team_recruiter.png", "team_consultant.png")

# Fix Altintas to Altıntaş in names
content = content.replace("Hasan Altintas", "Hasan Altıntaş")
content = content.replace("Fikret Altintas", "Fikret Altıntaş")
content = content.replace("Atahan Altintas", "Atahan Altıntaş")

# Fix Schram Özpay to Şehriban Özpay? The user didn't specify. I'll just leave Schram alone, or maybe it's Şehram. I will leave it as Schram Özpay.

with open(html_path, "w", encoding="utf-8") as f:
    f.write(content)

print("unternehmen.html updated.")
