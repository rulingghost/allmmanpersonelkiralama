import os
import re

html_dir = r"c:\Users\gebca\Desktop\iş\allmmanpersonelkiralama"

# Comprehensive mapping of all remaining broken/corrupted characters in HTML files
# These are fallback texts in HTML that don't get replaced by JS translations
fixes = {
    # ========== INDEX.HTML SPECIFIC ==========
    # 1. Hero signature: "Fr immer" -> "Für immer"
    "Heute. Morgen. Fr immer.": "Heute. Morgen. Für immer.",
    # 2. Broken FontAwesome icon class (broom got corrupted by earlier fix)
    'fa-Büroom': 'fa-broom',
    # 3. Double Ü: "ÜÜbertarifliche" -> "Übertarifliche"
    "ÜÜbertarifliche": "Übertarifliche",
    # 4. "überuflich" typo -> "beruflich"
    "überuflich": "beruflich",
    # 5. Old iGZ/DGB in stat label fallback
    "Tariftreu (iGZ/DGB)": "DGB/GVP - Tarifwerk",
    # 6. Old iGZ/DGB in marquee fallback
    "100% Tariftreu (iGZ/DGB)": "100% Tariftreu (DGB/GVP)",
    # 7. Old iGZ/DGB trust badge
    "iGZ / DGB Tarif": "DGB / GVP Tarif",
    # 8. "Vollstndige" -> "Vollständige" and old iGZ reference in why_feat1_desc fallback
    "Vollstndige Einhaltung des AG, iGZ/DGB-Tarifvertrge und Equal-Pay-Regelungen  ohne Kompromisse.": "Vollständige Einhaltung des AÜG, DGB/GVP-Tarifwerke und Equal-Pay-Regelungen — ohne Kompromisse.",
    # 9. "Schweitechnik" -> "Schweißtechnik" in multiple files
    "Schweitechnik": "Schweißtechnik",
    # 10. "Produktionsstraen" -> "Produktionsstraßen"
    "Produktionsstraen": "Produktionsstraßen",
    # 11. "Gesprch" -> "Gespräch"
    "Gesprch": "Gespräch",
    # 12. "bewhrter" -> "bewährter"
    "bewhrter": "bewährter",
    # 13. "Verlngerung" -> "Verlängerung"
    "Verlngerung": "Verlängerung",
    # 14. "whlen" -> "wählen"
    " whlen ": " wählen ",
    # 15. "persnlich" -> "persönlich" (residual in fallback)
    "persnlich": "persönlich",
    # 16. "RekrutierungsBüro" -> "Rekrutierungsbüro" (wrong capitalization from earlier fix)
    "RekrutierungsBüro": "Rekrutierungsbüro",
    # 17. "Trkei" -> "Türkei"
    "Trkei": "Türkei",
    # 18. "Augenhhe" -> "Augenhöhe"
    "Augenhhe": "Augenhöhe",
    # 19. "mglich" -> "möglich"
    " mglich ": " möglich ",
    # 20. Old iGZ/DGB-Tarifvertrag reference in philosophy pages
    "iGZ/DGB-Tarifvertrag": "DGB/GVP-Tarifvertrag",
    # 21. "Tarifvertrge BAP / iGZ / DGB" -> "Tarifvertrag DGB/GVP - Tarifwerk" in compliance
    "Tarifvertrge BAP / iGZ / DGB": "Tarifvertrag DGB/GVP - Tarifwerk",
    "Tarifverträge BAP / iGZ / DGB": "Tarifvertrag DGB/GVP - Tarifwerk",
    # 22. "iGZ/DGB-Tarifgehlter plus Branchenzuschlge" in karriere.html
    "iGZ/DGB-Tarifgehlter plus Branchenzuschlge für Nacht-, Wochenend- und Feiertagsarbeit.": "Tarifvertrag DGB/GVP - Tarifwerk + Fahrgeld + tägliche Spesen (VMA) + einsatzbezogene Leistungszulage.",
    # 23. "hnderingend" -> "händeringend"
    "hnderingend": "händeringend",
    # 24. "Über unser" at start of sentence should be "über unser" (lowercase after "und")
    "und Über unser": "und über unser",
    # 25. "prsentieren" -> "präsentieren"
    "prsentieren": "präsentieren",
    # 26. "ausschlielich" -> "ausschließlich"
    "ausschlielich": "ausschließlich",
    # 27. "luft" -> "läuft"
    " luft ": " läuft ",
    # 28. "Übertarifliche Bezahlung" with capital Ü in testimonial 3
    "erhalte Übertarifliche Bezahlung": "erhalte übertarifliche Bezahlung",
    # 29. map_subtitle left in Turkish in DE translations  
    # (This is in index.js, we'll handle HTML fallbacks)
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
    # Skip .git, scratch, scripts
    dirs[:] = [d for d in dirs if d not in ('.git', 'scratch', 'scripts', 'assets')]
    for file in files:
        if file.endswith((".html", ".js")):
            file_path = os.path.join(root, file)
            if fix_file(file_path):
                fixed_files.append(os.path.basename(file_path))
                fixed_count += 1

print(f"Fixed {fixed_count} files: {', '.join(fixed_files)}")
