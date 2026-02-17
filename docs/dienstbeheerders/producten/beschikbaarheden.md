# Producten - Beschikbaarheden (DRAFT)

## Overzicht

Het tabblad **Beschikbaarheden** bepaalt wanneer een product beschikbaar is voor boeking door burgers. Hiermee kunt jebijvoorbeeld instellen dat bepaalde producten alleen op specifieke dagen of tijdens bepaalde periodes geboekt kunnen worden.

**Let op:** De beschikbaarheid van een product is een combinatie van:
1. De beschikbaarheidsinstellingen van het product (deze pagina)
2. De werkschema's van de agenda's waaraan het product gekoppeld is

## Toegang

1. Ga naar **Producten** > **Alle producten**
2. Klik op een product
3. Selecteer het tabblad **Beschikbaarheden**

## Standaardinstellingen

### Altijd beschikbaar

Als jegeen specifieke beschikbaarheden instelt, is het product beschikbaar op alle momenten dat de gekoppelde agenda's beschikbaar zijn volgens hun werkschema.

Dit is de eenvoudigste optie en geschikt voor de meeste producten.

## Dagspecifieke beschikbaarheid

U kunt instellen op welke dagen van de week het product beschikbaar is.

### Beschikbare dagen selecteren

1. Vink de dagen aan waarop het product beschikbaar is:
   - ☑ Maandag
   - ☑ Dinsdag
   - ☑ Woensdag
   - ☑ Donderdag
   - ☑ Vrijdag
   - ☐ Zaterdag
   - ☐ Zondag

2. Klik op **Opslaan**

**Voorbeeld:**
Een product "Groepsafspraak bouwadvies" is alleen beschikbaar op dinsdag- en donderdagnamiddag:
- Selecteer: Dinsdag en Donderdag
- In het werkschema stelt jede uren in (13:00 - 17:00)

### Alleen voormiddag of namiddag

U kunt de beschikbaarheid verder beperken tot specifieke dagdelen:

- **Voormiddag** - Voor 12:00 uur
- **Namiddag** - Na 12:00 uur
- **Hele dag** - Geen beperking

## Periodespecifieke beschikbaarheid

Voor seizoensgebonden producten of tijdelijke diensten kunt jeeen specifieke periode instellen.

### Een periode toevoegen

1. Klik op **+ Periode toevoegen**
2. Vul in:
   - **Van datum** - Startdatum van de beschikbaarheid
   - **Tot datum** - Einddatum van de beschikbaarheid
   - **Beschrijving** (optioneel) - Interne opmerking
3. Klik op **Toevoegen**

**Voorbeeld 1: Zomervakantie-activiteit**
```
Van: 1 juli 2026
Tot: 31 augustus 2026
Beschrijving: Zomervakantie kinderafspraken
```

**Voorbeeld 2: Belastingaangifte**
```
Van: 1 maart 2026
Tot: 30 juni 2026
Beschrijving: Periode belastingaangifte
```

### Meerdere periodes

U kunt meerdere periodes toevoegen voor producten die tijdens verschillende momenten in het jaar beschikbaar zijn.

**Voorbeeld: Schoolinschrijvingen**
```
Periode 1:
Van: 1 februari 2026
Tot: 28 februari 2026
Beschrijving: Voorinschrijvingen

Periode 2:
Van: 1 september 2026
Tot: 15 september 2026
Beschrijving: Laatste inschrijvingen
```

### Een periode bewerken of verwijderen

- Klik op het **potlood** icoontje om een periode te wijzigen
- Klik op het **prullenbak** icoontje om een periode te verwijderen

## Uitzonderingen

Uitzonderingen zijn specifieke data waarop het product NIET beschikbaar is, zelfs als het volgens de andere regels wel beschikbaar zou zijn.

### Een uitzondering toevoegen

1. Klik op **+ Uitzondering toevoegen**
2. Selecteer:
   - **Datum** - De specifieke datum
   - **Reden** (optioneel) - Interne notitie waarom het product niet beschikbaar is
3. Klik op **Toevoegen**

**Voorbeelden van uitzonderingen:**
```
Datum: 25 december 2026
Reden: Kerstdag - gemeente gesloten

Datum: 1 januari 2027
Reden: Nieuwjaarsdag

Datum: 15 augustus 2026
Reden: Speciale teambuilding - loket gesloten
```

### Automatische uitzonderingen

Het systeem houdt automatisch rekening met:
- Officiële feestdagen (kunnen worden geconfigureerd in gemeente-instellingen)
- Dagen waarop alle agenda's gesloten zijn

U hoeft deze niet handmatig toe te voegen als uitzondering.

## Geavanceerde scenario's

### Scenario 1: Product enkel in bepaalde maanden

**Probleem:** U wilt dat een product enkel beschikbaar is van maart tot juni.

**Oplossing:**
1. Voeg een periode toe: 1 maart - 30 juni
2. Laat de dagen op standaard (alle dagen)
3. Werkschema bepaalt de specifieke uren

### Scenario 2: Product enkel op woensdagnamiddag

**Probleem:** Een specialistische dienst is enkel beschikbaar op woensdagnamiddag.

**Oplossing:**
1. Selecteer alleen "Woensdag" bij dagen
2. Selecteer "Namiddag" bij dagdeel
3. Stel in het werkschema de specifieke uren in (bijv. 13:00 - 17:00)

### Scenario 3: Product met verschillende periodes en uitzonderingen

**Probleem:** Een product is beschikbaar in voorjaar en najaar, maar niet tijdens de feestdagen.

**Oplossing:**
1. Voeg periode toe: 1 maart - 30 juni (voorjaar)
2. Voeg periode toe: 1 september - 30 november (najaar)
3. Voeg uitzonderingen toe voor feestdagen die in deze periodes vallen

### Scenario 4: Jaarrond beschikbaar behalve in augustus

**Probleem:** Product is altijd beschikbaar behalve in augustus.

**Oplossing 1 (aanbevolen):**
- Voeg een uitzondering toe voor elke dag in augustus

**Oplossing 2:**
- Schakel het product handmatig uit in augustus
- Activeer het weer in september

## Combinatie met werkschema's

De uiteindelijke beschikbaarheid is een combinatie van:

1. **Productbeschikbaarheid** (deze instellingen)
2. **Werkschema van de agenda**
3. **Afwezigheden** van medewerkers

**Voorbeeld:**
- Product "Rijbewijs" is beschikbaar op ma, di, wo, do, vr
- Agenda "Loket 1" heeft werkschema: ma-vr 9:00-12:00 en 13:00-16:00
- Medewerker heeft afwezigheid op 10 maart

**Resultaat:**
- Burgers kunnen "Rijbewijs" boeken op ma-vr tussen 9:00-12:00 en 13:00-16:00
- BEHALVE op 10 maart (medewerker afwezig)

## Tips en best practices

### Houd het eenvoudig
- Gebruik alleen beschikbaarheidsinstellingen als het echt nodig is
- Voor de meeste producten volstaat het om alleen werkschema's te gebruiken

### Communiceer duidelijk
- Als een product beperkte beschikbaarheid heeft, vermeld dit in de productteksten
- Informeer burgers waarom een product niet beschikbaar is

### Plan vooruit
- Voeg periodes tijdig toe, zodat burgers ruim van tevoren kunnen boeken
- Denk aan jaarlijks terugkerende gebeurtenissen

### Test de beschikbaarheid
- Test zelf via de Burgerflow of de beschikbaarheid correct is
- Controleer verschillende scenario's (verschillende dagen, periodes)

### Monitor en optimaliseer
- Houd bij of burgers het product vinden op de momenten dat ze het nodig hebben
- Pas beschikbaarheden aan op basis van vraag

## Veelgestelde vragen

**Waarom zie ik geen beschikbare tijdstippen in de Burgerflow?**
Mogelijke oorzaken:
- Het product heeft geen werkschema gekoppeld
- De beschikbaarheidsinstellingen zijn te restrictief
- Alle tijdstippen zijn reeds geboekt
- De minimale voorbereidingstijd is niet gerespecteerd

**Kan ik beschikbaarheid instellen per locatie?**
Niet direct. U moet hiervoor aparte producten aanmaken per locatie.

**Wat heeft voorrang: productbeschikbaarheid of werkschema?**
Beide moeten voldaan zijn. Het product moet beschikbaar zijn ÉN de agenda moet open zijn volgens het werkschema.

**Kan ik een product tijdelijk uitzetten zonder beschikbaarheden te wijzigen?**
Ja, deactiveer het product via de algemene instellingen.

---

## Navigatie

- [Terug naar handleiding dienstbeheerders](../index.md)
- [Vorige: Velden](velden.md)
- [Volgende: Groepen](groepen.md)

---

*Laatst bijgewerkt: 16 februari 2026*
