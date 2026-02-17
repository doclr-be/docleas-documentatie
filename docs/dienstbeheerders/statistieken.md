# Statistieken (DRAFT)

## Overzicht

De statistiekenmodule in Docleas biedt inzicht in het gebruik van het afsprakensysteem. Als dienstbeheerder heeft jetoegang tot uitgebreide statistieken en rapporten die jehelpen om:

- Het gebruik van producten en diensten te monitoren
- Piekmomenten te identificeren
- De efficiëntie van het afsprakensysteem te evalueren
- Beslissingen te nemen over capaciteit en openingsuren
- Trends en patronen te ontdekken

## Toegang tot statistieken

1. Log in op de Backoffice-app
2. Navigeer naar **Statistieken** in het hoofdmenu
3. Jekomt op het statistiekendashboard

## Dashboard

Het dashboard geeft een overzicht van de belangrijkste cijfers:

### Kerngetallen (huidige maand)

```
📊 Totaal afspraken deze maand: 456
✅ Uitgevoerde afspraken: 398
❌ Geannuleerde afspraken: 42
⏭️ No-shows: 16
📈 Groeipercentage t.o.v. vorige maand: +12%
```

### Grafieken

**Afspraken per dag (laatste 30 dagen)**
Lijngrafiek die het aantal afspraken per dag toont. Gebruik dit om:
- Piekmomenten te identificeren
- Rustige periodes te herkennen
- Trends te ontdekken

**Afspraken per product (huidige maand)**
Taartdiagram dat de verdeling van afspraken per product toont. Gebruik dit om:
- Populaire producten te identificeren
- Ongebruikte producten te ontdekken
- Capaciteit aan te passen

**Afspraken per locatie (huidige maand)**
Staafdiagram met het aantal afspraken per locatie. Gebruik dit om:
- Drukte per locatie te vergelijken
- Capaciteit te herverdelen
- Openingsuren per locatie te optimaliseren

## Rapporten

### Afsprakenrapport

**Toegang:** Statistieken > Afspraken

Dit rapport toont gedetailleerde informatie over alle afspraken.

#### Filters

**Periode**
- Vandaag
- Deze week
- Deze maand
- Dit jaar
- Aangepaste periode (kies start- en einddatum)

**Status**
- Alle afspraken
- Geboekt (toekomstig)
- Uitgevoerd (verleden)
- Geannuleerd
- No-show

**Product**
- Alle producten
- Specifiek product

**Locatie**
- Alle locaties
- Specifieke locatie

**Agenda**
- Alle agenda's
- Specifieke agenda

#### Kolommen in het rapport

| Kolom | Beschrijving |
|-------|--------------|
| **Datum** | Datum en tijd van de afspraak |
| **Product** | Welk product is geboekt |
| **Burger** | Naam van de burger (geanonimiseerd in export) |
| **Locatie** | Waar de afspraak plaatsvindt |
| **Agenda** | Op welke agenda de afspraak staat |
| **Status** | Geboekt, uitgevoerd, geannuleerd, no-show |
| **Aangemaakt door** | Burger zelf of medewerker |
| **Aangemaakt op** | Wanneer de afspraak gemaakt is |

#### Acties

**Exporteren**
- Excel (.xlsx)
- CSV (.csv)
- PDF

**Printen**
- Print het rapport of sla op als PDF

### Productrapport

**Toegang:** Statistieken > Producten

Overzicht van het gebruik per product.

#### Wat ziet u?

| Product | Totaal afspraken | Uitgevoerd | Geannuleerd | No-show | Gemiddelde duur |
|---------|------------------|------------|-------------|---------|-----------------|
| Identiteitskaart | 156 | 142 | 12 | 2 | 28 min |
| Rijbewijs | 89 | 81 | 6 | 2 | 32 min |
| Attest | 67 | 65 | 2 | 0 | 15 min |

**Gebruik dit om:**
- Populairste producten te identificeren
- Producten met hoog annulatiepercentage te ontdekken
- Afspraakduur te optimaliseren (te kort/te lang?)

#### Sorteren

Sorteer op:
- Meeste afspraken
- Hoogste annulatiepercentage
- Meeste no-shows
- Langste gemiddelde duur

### Locatierapport

**Toegang:** Statistieken > Locaties

Vergelijk de drukte en prestaties per locatie.

#### Wat ziet u?

| Locatie | Afspraken | Bezettingsgraad | Top 3 producten |
|---------|-----------|-----------------|-----------------|
| Gemeentehuis Centrum | 312 | 78% | Identiteitskaart, Rijbewijs, Attest |
| Deelgemeente Noord | 144 | 62% | Attest, Identiteitskaart, Uittreksel |

**Bezettingsgraad** = Percentage van beschikbare tijdslots dat daadwerkelijk geboekt is.

**Gebruik dit om:**
- Capaciteit te herverdelen tussen locaties
- Openingsuren aan te passen
- Producten op de juiste locatie aan te bieden

### Agendarapport

**Toegang:** Statistieken > Agenda's

Bekijk de prestaties per agenda (loket of medewerker).

#### Wat ziet u?

| Agenda | Afspraken | Bezetting | Gemiddelde duur | No-show rate |
|--------|-----------|-----------|-----------------|--------------|
| Loket Burgerlijke Stand | 198 | 82% | 26 min | 2.5% |
| Medewerker Sarah | 145 | 75% | 24 min | 1.8% |

**Gebruik dit om:**
- Werkbelasting te monitoren
- Efficiëntie te vergelijken
- Capaciteit te balanceren

### Tijdslotrapport

**Toegang:** Statistieken > Tijdslots

Analyseer welke tijdstippen het meest en minst populair zijn.

#### Wat ziet u?

**Afspraken per uur (gemiddeld per dag)**

```
08:00 - 09:00: ████░░░░░░ 8 afspraken
09:00 - 10:00: ████████░░ 16 afspraken
10:00 - 11:00: ██████████ 22 afspraken (piek)
11:00 - 12:00: ████████░░ 18 afspraken
12:00 - 13:00: ░░░░░░░░░░ 0 afspraken (gesloten)
13:00 - 14:00: ████░░░░░░ 9 afspraken
14:00 - 15:00: ██████░░░░ 14 afspraken
15:00 - 16:00: ████████░░ 17 afspraken
16:00 - 17:00: ██████░░░░ 12 afspraken
```

**Afspraken per dag van de week**

```
Maandag:    ██████████ 98 afspraken
Dinsdag:    ████████░░ 76 afspraken
Woensdag:   ██████████ 102 afspraken (piek)
Donderdag:  ████████░░ 81 afspraken
Vrijdag:    ██████░░░░ 67 afspraken
Zaterdag:   ████░░░░░░ 32 afspraken
```

**Gebruik dit om:**
- Openingsuren te optimaliseren
- Extra capaciteit in te plannen tijdens pieken
- Rustige momenten te gebruiken voor andere taken

### Annulatierapport

**Toegang:** Statistieken > Annulaties

Analyseer annulaties en no-shows.

#### Wat ziet u?

**Annulatiepercentage per product**

| Product | Totaal | Geannuleerd | % Annulaties | No-show | % No-show |
|---------|--------|-------------|--------------|---------|-----------|
| Rijbewijs | 89 | 6 | 6.7% | 2 | 2.2% |
| Identiteitskaart | 156 | 12 | 7.7% | 2 | 1.3% |

**Annulatietiming**

Hoeveel tijd voor de afspraak wordt er geannuleerd?

```
> 7 dagen: 34% van annulaties
3-7 dagen: 28% van annulaties
1-3 dagen: 22% van annulaties
< 24 uur: 16% van annulaties (problematisch - moeilijk opnieuw in te vullen)
```

**Gebruik dit om:**
- Producten met hoge annulatie te identificeren en onderzoeken
- Annulatiebeleid aan te passen
- Herinneringen te versturen om no-shows te verminderen

## Trends en vergelijkingen

### Periode-vergelijking

Vergelijk verschillende periodes:

**Voorbeeld:**
- Maart 2026 vs Maart 2025
- Q1 2026 vs Q4 2025
- Zomer 2026 vs Zomer 2025

**Wat kunt jevergelijken?**
- Totaal aantal afspraken
- Afspraken per product
- Annulatiepercentages
- Bezettingsgraad

### Trendanalyse

Ontdek trends over langere periodes:

**12-maanden trendlijn**
Zie hoe het aantal afspraken evolueert over een jaar.

**Groeipercentages**
- Maand-op-maand groei
- Jaar-op-jaar groei
- Groei per product

## Exporteren en delen

### Export opties

Alle rapporten kunnen geëxporteerd worden naar:

**Excel (.xlsx)**
- Voor verdere analyse
- Pivot-tabellen maken
- Grafieken aanpassen

**CSV (.csv)**
- Voor import in andere systemen
- Voor data-analyse met andere tools

**PDF**
- Voor presentaties
- Voor archivering
- Voor rapporten aan directie

### Automatische rapporten

Stel in dat bepaalde rapporten automatisch gegenereerd en verstuurd worden:

1. Ga naar **Statistieken** > **Geplande rapporten**
2. Klik op **+ Nieuw gepland rapport**
3. Configureer:
   - **Type rapport** - Welk rapport?
   - **Frequentie** - Dagelijks, wekelijks, maandelijks?
   - **Ontvangers** - Naar welke e-mailadressen?
   - **Formaat** - PDF, Excel of CSV?
4. Klik op **Opslaan**

**Voorbeeld:**
```
Type: Afsprakenrapport
Frequentie: Maandelijks (1e dag van de maand)
Periode: Vorige maand
Ontvangers: directie@gemeente.be, dienstbeheerder@gemeente.be
Formaat: PDF
```

## Dashboards aanpassen

### Widgets toevoegen

Personaliseer jedashboard door widgets toe te voegen:

1. Klik op **Dashboard bewerken**
2. Klik op **+ Widget toevoegen**
3. Kies uit beschikbare widgets:
   - Kerngetallen
   - Grafiek afspraken per dag
   - Top 5 producten
   - Bezettingsgraad per locatie
   - Recente afspraken
   - Komende afspraken
4. Sleep widgets om de volgorde te wijzigen
5. Klik op **Opslaan**

### Dashboard delen

Deel jeaangepaste dashboard met collega's:

1. Klik op **Dashboard delen**
2. Selecteer medewerkers
3. Klik op **Delen**

## Praktische toepassingen

### Scenario 1: Capaciteit uitbreiden

**Doel:** Bepalen of extra capaciteit nodig is.

**Analyse:**
1. Bekijk bezettingsgraad per locatie en agenda
2. Analyseer tijdslotrapport voor piekmomenten
3. Vergelijk met vorige periodes (is er groei?)

**Beslissing:**
- Bezetting > 85%? → Overweeg extra capaciteit
- Specifieke pieken? → Plan extra medewerkers tijdens die momenten
- Structurele groei? → Nieuwe agenda's of uitgebreide openingsuren

### Scenario 2: Product optimaliseren

**Doel:** Een product met hoog annulatiepercentage verbeteren.

**Analyse:**
1. Identificeer producten met > 10% annulaties
2. Bekijk wanneer geannuleerd wordt (kort van tevoren?)
3. Analyseer of er specifieke periodes zijn met meer annulaties

**Mogelijke oorzaken en oplossingen:**
- Te lang wachten? → Verlaag max. boekingsperiode
- Onduidelijke productinformatie? → Verbeter productbeschrijving
- Te veel no-shows? → Verstuur herinneringsmails

### Scenario 3: Openingsuren optimaliseren

**Doel:** Bepalen of openingsuren aangepast moeten worden.

**Analyse:**
1. Bekijk tijdslotrapport
2. Identificeer rustige momenten (< 50% bezetting)
3. Identificeer pieken (> 90% bezetting)

**Beslissing:**
- Rustige vrijdagnamiddagen? → Overweeg vroeger sluiten
- Piek op woensdagvoormiddag? → Extra capaciteit inplannen
- Vraag naar zaterdagdiensten? → Experimenteer met zaterdag openen

## Best practices

### Regelmatige monitoring
- **Wekelijks** - Bekijk kerngetallen en komende afspraken
- **Maandelijks** - Analyseer productrapport en annulaties
- **Kwartaal** - Doe grondige trendanalyse en vergelijk periodes

### Gebruik statistieken voor beslissingen
- **Op basis van data** - Niet op gevoel, maar op feiten
- **Vergelijk periodes** - Contextualiseer cijfers
- **Let op trends** - Eenmalige uitschieters vs structurele patronen

### Deel inzichten
- **Met het team** - Bespreek statistieken in teamvergaderingen
- **Met directie** - Rapporteer maandelijks of kwartaal
- **Transparantie** - Deel successen én verbeterpunten

### Privacy
- **Anonimiseer** - Persoonlijke gegevens van burgers worden geanonimiseerd in exports
- **AVG-compliant** - Bewaar statistieken niet langer dan nodig
- **Intern gebruik** - Deel rapporten niet publiekelijk

## Veelgestelde vragen

**Hoe ver terug in de tijd kan ik statistieken bekijken?**
Alle data sinds de start van Docleas in jegemeente is beschikbaar.

**Kan ik statistieken voor een specifieke medewerker zien?**
Ja, filter het agendarapport op de persoonlijke agenda van de medewerker.

**Waarom zie ik een dip in het aantal afspraken?**
Controleer of er feestdagen, vakantieperiodes of andere uitzonderingen waren in die periode.

**Kan ik statistieken vergelijken met andere gemeenten?**
Nee, elke gemeente heeft zijn eigen afgeschermde omgeving. Benchmarking met andere gemeenten is niet mogelijk binnen het systeem.

**Hoe wordt de bezettingsgraad berekend?**
Bezetting = (Aantal geboekte tijdslots / Totaal beschikbare tijdslots) × 100%

**Worden geannuleerde afspraken meegeteld in de totalen?**
Ja, tenzij jefiltert op status "Uitgevoerd". Jeziet altijd alle afspraken inclusief geannuleerde.

---

## Navigatie

- [Terug naar handleiding dienstbeheerders](index.md)
- [Vorige: Gebruikers](gebruikers.md)
- [Volgende: FAQ](faq.md)

---

*Laatst bijgewerkt: 16 februari 2026*
