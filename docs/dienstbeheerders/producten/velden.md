# Producten - Velden (DRAFT)

## Overzicht

Het tabblad **Velden** bepaalt welke gegevens burgers moeten invullen wanneer ze een afspraak maken voor dit product. Jekunt kiezen uit standaardvelden en aangepaste velden toevoegen die specifiek zijn voor dit product.

## Toegang

1. Ga naar **Producten** > **Alle producten**
2. Klik op een product
3. Selecteer het tabblad **Velden**

## Standaardvelden

Standaardvelden zijn voorgedefinieerde velden die beschikbaar zijn voor alle producten.

### Contactgegevens

Deze velden zijn vaak verplicht voor alle producten om de burger te kunnen contacteren:

| Veld | Beschrijving | Standaard verplicht |
|------|--------------|---------------------|
| **Voornaam** | Voornaam van de burger | Ja |
| **Achternaam** | Achternaam van de burger | Ja |
| **E-mailadres** | E-mailadres voor bevestigingsmail | Ja |
| **Telefoonnummer** | Telefoonnummer voor contact | Optioneel |
| **Gsm-nummer** | Mobiel nummer voor sms-notificaties | Optioneel |

### Identificatiegegevens

Velden voor unieke identificatie van de burger:

| Veld | Beschrijving | Gebruik |
|------|--------------|---------|
| **Rijksregisternummer** | Uniek identificatienummer | Voor officiële documenten |
| **Geboortedatum** | Geboortedatum van de burger | Voor leeftijdscontroles |
| **Geboorteplaats** | Geboorteplaats | Voor identiteitsdocumenten |

### Adresgegevens

| Veld | Beschrijving |
|------|--------------|
| **Straat** | Straatnaam |
| **Huisnummer** | Huisnummer |
| **Bus** | Busnummer (optioneel) |
| **Postcode** | Postcode |
| **Gemeente** | Gemeente |

### Extra gegevens

| Veld | Beschrijving |
|------|--------------|
| **Opmerking** | Vrij tekstveld voor extra informatie |
| **Taal** | Voorkeurstaal van de burger |

## Velden toevoegen aan jeproduct

### Een standaardveld toevoegen

1. Klik op **+ Veld toevoegen**
2. Selecteer een veld uit de lijst met standaardvelden
3. Bepaal of het veld **verplicht** of **optioneel** is
4. Klik op **Toevoegen**

Het veld verschijnt nu in de lijst van actieve velden voor dit product.

### Volgorde van velden wijzigen

Jekunt de volgorde waarin velden worden getoond aan burgers aanpassen:

1. Klik op het **≡** icoontje naast een veld
2. Sleep het veld naar de gewenste positie
3. Laat los

De nieuwe volgorde wordt automatisch opgeslagen.

### Een veld verwijderen

1. Klik op het **prullenbak** icoontje naast het veld
2. Bevestig de verwijdering

Het veld wordt verwijderd uit dit product.

**Let op:** Als er al afspraken zijn gemaakt waarbij burgers dit veld hebben ingevuld, blijven die gegevens bewaard. Nieuwe afspraken vragen dit veld niet meer.

## Aangepaste velden

Als de standaardvelden niet voldoen, kunt jeaangepaste velden aanmaken die specifiek zijn voor dit product.

### Een aangepast veld aanmaken

1. Klik op **+ Aangepast veld**
2. Vul de volgende gegevens in:

#### Veldnaam
De naam van het veld zoals burgers deze zien.

**Voorbeeld:** "Aantal personen", "Huidige geldigheid rijbewijs", "Bouwadres"

#### Veldtype
Kies het type invoer:

| Type | Beschrijving | Voorbeeld |
|------|--------------|-----------|
| **Tekst (kort)** | Enkele regel tekst | Naam, straat |
| **Tekst (lang)** | Meerdere regels tekst | Opmerkingen, toelichting |
| **Nummer** | Alleen cijfers | Aantal, leeftijd |
| **Datum** | Datumkiezer | Geboortedatum, vervaldatum |
| **Keuzelijst** | Dropdown met opties | Keuze uit meerdere opties |
| **Meerkeuze** | Checkboxes | Meerdere opties mogelijk |
| **Ja/Nee** | Checkbox | Akkoord verklaring |

#### Helptekst (optioneel)
Een korte uitleg die onder het veld wordt getoond aan burgers.

**Voorbeeld:**
- Veldnaam: "Vervaldatum huidig rijbewijs"
- Helptekst: "Jevindt de vervaldatum op de voorkant van jerijbewijs onderaan"

#### Verplicht
Bepaal of burgers dit veld moeten invullen.

#### Standaardwaarde (optioneel)
Een vooraf ingevulde waarde die burgers kunnen aanpassen.

### Voorbeelden van aangepaste velden

**Voorbeeld 1: Aantal personen bij groepsafspraak**
- Veldnaam: "Aantal personen"
- Veldtype: Nummer
- Helptekst: "Voor hoeveel personen wilt jedeze afspraak maken?"
- Verplicht: Ja

**Voorbeeld 2: Type vergunning**
- Veldnaam: "Type vergunning"
- Veldtype: Keuzelijst
- Opties:
  - Stedenbouwkundige vergunning
  - Milieuvergunning
  - Kapvergunning
- Verplicht: Ja

**Voorbeeld 3: Benodigde documenten**
- Veldnaam: "Ik beschik over de volgende documenten"
- Veldtype: Meerkeuze
- Opties:
  - Bewijs van identiteit
  - Attest van woonst
  - Kadastrale gegevens
- Verplicht: Nee

**Voorbeeld 4: Akkoordverklaring**
- Veldnaam: "Ik ga akkoord met de privacyverklaring"
- Veldtype: Ja/Nee
- Helptekst: "Lees onze privacyverklaring op www.gemeente.be/privacy"
- Verplicht: Ja

## Keuzelijsten configureren

Voor veldtypes **Keuzelijst** en **Meerkeuze** moet jede beschikbare opties definiëren.

### Opties toevoegen

1. Klik op **+ Optie toevoegen**
2. Vul de optietekst in
3. Herhaal voor elke optie

### Opties wijzigen

- Klik op het **potlood** icoontje om een optie te wijzigen
- Klik op het **prullenbak** icoontje om een optie te verwijderen
- Gebruik **≡** om de volgorde van opties te wijzigen

## Validatieregels

Voor bepaalde veldtypes kunt jevalidatieregels instellen:

### Tekstvelden
- **Minimale lengte** - Minimaal aantal karakters
- **Maximale lengte** - Maximaal aantal karakters
- **Patroon** - Reguliere expressie (voor gevorderde gebruikers)

### Nummervelden
- **Minimale waarde** - Laagste toegestane getal
- **Maximale waarde** - Hoogste toegestane getal

### Datumvelden
- **Minimale datum** - Vroegste toegestane datum
- **Maximale datum** - Laatste toegestane datum
- **Relatief** - Bijvoorbeeld "minimaal 18 jaar geleden"

**Voorbeeld validatie:**
- Veld: "Aantal personen"
- Type: Nummer
- Min. waarde: 1
- Max. waarde: 10
- Foutmelding: "Jekunt voor maximaal 10 personen tegelijk een afspraak maken"

## Meertaligheid

Als jegemeente meertaligheid heeft ingeschakeld, moet jede volgende zaken vertalen voor aangepaste velden:
- Veldnaam
- Helptekst
- Opties (bij keuzelijst en meerkeuze)
- Foutmeldingen

Wissel tussen talen via de taaltabbladen bovenaan.

## Gebruik van veldgegevens

De gegevens die burgers invullen in de velden worden:
- Opgeslagen bij de afspraak
- Zichtbaar voor medewerkers in de Backoffice-app
- Gebruikt in bevestigingsmails (indien geconfigureerd)
- Niet gedeeld met derden (conform AVG/GDPR)

## Best practices

### Vraag alleen wat nodig is
- Houd de velden beperkt tot wat echt noodzakelijk is
- Hoe minder velden, hoe sneller de burger de afspraak kan maken
- Vermijd "nice to have" velden

### Gebruik duidelijke labels
- Maak veldnamen duidelijk en eenduidig
- Gebruik helptekst om onduidelijkheid weg te nemen
- Test of burgers de velden begrijpen

### Groepeer logisch
- Plaats gerelateerde velden bij elkaar
- Volg een logische volgorde (eerst contactgegevens, dan specifieke vragen)

### Maak alleen verplicht wat echt moet
- Maak velden alleen verplicht als ze echt noodzakelijk zijn
- Te veel verplichte velden kan burgers afschrikken

## Veelgestelde vragen

**Kan ik achteraf velden toevoegen?**
Ja, jekunt altijd velden toevoegen. Let op: bestaande afspraken hebben deze gegevens niet.

**Wat gebeurt er met gegevens van verwijderde velden?**
De gegevens van bestaande afspraken blijven bewaard, maar nieuwe afspraken vragen dit veld niet meer.

**Kan ik rijksregisternummer verplicht maken?**
Ja, maar overweeg goed of dit echt nodig is. Niet alle burgers willen dit delen.

**Kunnen burgers hun gegevens achteraf wijzigen?**
Nee, burgers kunnen hun gegevens niet zelf wijzigen. Ze moeten contact opnemen met de gemeente.

**Kan ik voorwaardelijke velden maken?**
(Veld B enkel tonen als veld A een bepaalde waarde heeft)
Deze functionaliteit is momenteel niet beschikbaar, maar staat op de planning.

---

## Navigatie

- [Terug naar handleiding dienstbeheerders](../index.md)
- [Vorige: Teksten](teksten.md)
- [Volgende: Beschikbaarheden](beschikbaarheden.md)

---

*Laatst bijgewerkt: 16 februari 2026*
