#!/usr/bin/env python3
"""
Script om formele 'u' vorm te vervangen door informele 'je' vorm
met correcte grammaticale werkwoordsvormen.
"""

import os
import re
from pathlib import Path

def convert_u_to_je(text):
    """
    Converteer formele 'u' vorm naar informele 'je' vorm met correcte grammatica.
    Vervangingen worden in specifieke volgorde gedaan om conflicten te voorkomen.
    """

    # Eerst specifieke werkwoordscombinaties (van specifiek naar algemeen)
    replacements = [
        # Werkwoordsvormen met 'heeft' -> 'hebt'
        (r'\bu heeft\b', 'je hebt'),
        (r'\bU heeft\b', 'Je hebt'),

        # Werkwoordsvormen met 'kunt' (blijft 'kunt')
        (r'\bu kunt\b', 'je kunt'),
        (r'\bU kunt\b', 'Je kunt'),

        # Werkwoordsvormen met 'bent' (blijft 'bent')
        (r'\bu bent\b', 'je bent'),
        (r'\bU bent\b', 'Je bent'),

        # Werkwoordsvormen met 'wilt' (blijft 'wilt')
        (r'\bu wilt\b', 'je wilt'),
        (r'\bU wilt\b', 'Je wilt'),

        # Werkwoordsvormen met 'moet' (blijft 'moet')
        (r'\bu moet\b', 'je moet'),
        (r'\bU moet\b', 'Je moet'),

        # Bezittelijk voornaamwoord
        (r'\buw\b', 'je'),
        (r'\bUw\b', 'Je'),

        # Algemene 'u' vorm (na specifieke werkwoorden)
        (r'\bu\b', 'je'),
        (r'\bU\b', 'Je'),
    ]

    result = text
    for pattern, replacement in replacements:
        result = re.sub(pattern, replacement, result)

    return result

def process_file(filepath):
    """Process een enkel markdown bestand."""
    print(f"Processing: {filepath}")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    converted = convert_u_to_je(content)

    if converted != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(converted)
        print(f"  ✓ Updated")
        return True
    else:
        print(f"  - No changes needed")
        return False

def main():
    """Process alle markdown bestanden in de Documentation folder."""
    doc_path = Path('Documentation')

    if not doc_path.exists():
        print(f"Error: {doc_path} does not exist")
        return

    md_files = list(doc_path.rglob('*.md'))
    print(f"Found {len(md_files)} markdown files\n")

    updated_count = 0
    for md_file in md_files:
        if process_file(md_file):
            updated_count += 1

    print(f"\n✓ Finished! Updated {updated_count} out of {len(md_files)} files")

if __name__ == '__main__':
    main()
