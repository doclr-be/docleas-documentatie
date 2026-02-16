# Werkschema (DRAFT)

## Overzicht

Een **werkschema** bepaalt wanneer een agenda beschikbaar is en voor welke producten. Het werkschema is de brug tussen agenda's en producten. Zonder werkschema kunnen burgers geen afspraken maken.

## Wat is een werkschema?

Een werkschema definieert:
- **Op welke dagen** een agenda beschikbaar is
- **Tijdens welke uren** afspraken gemaakt kunnen worden
- **Voor welke producten** de agenda beschikbaar is
- **Eventuele uitzonderingen** (feestdagen, sluitingsdagen)

**Analogie:** Het werkschema is als de openingsuren van een winkel. Het vertelt wanneer "de deur open is" en wat "er verkocht wordt".

## Toegang tot werkschema's

1. Log in op de Backoffice-app
2. Navigeer naar **Werkschema's** in het hoofdmenu
3. Jeziet een overzicht van alle werkschema's

## Een werkschema aanmaken

### Stap 1: Nieuw werkschema

1. Klik op **+ Nieuw werkschema**
2. Vul de volgende gegevens in:

#### Werkschemanaam

**Verplicht**

Een herkenbare naam voor intern gebruik.

**Voorbeelden:**
- "Werkschema Loket Burgerlijke Stand"
- "Standaard kantooruren"
- "Loket zaterdagdienst"
- "Specialistische afspraken"

#### Gekoppelde agenda

**Verplicht**

Selecteer de agenda waaraan dit werkschema gekoppeld wordt.

**Let op:** Een agenda kan meerdere werkschema's hebben (bijv. verschillende schema's voor verschillende periodes van het jaar).

### Stap 2: Werkdagen en -uren instellen

Bepaal wanneer de agenda beschikbaar is:

#### Dag toevoegen

1. Klik op **+ Dag toevoegen**
2. Selecteer de dag (maandag t/m zondag)
3. Vul de uren in:

**Enkelvoudig:**
```
Van: 09:00
Tot: 17:00
```

**Meerdere tijdsblokken per dag:**
```
Voormiddag:
Van: 09:00
Tot: 12:00

Namiddag:
Van: 13:00
Tot: 17:00
```

4. Klik op **Opslaan**

#### Meerdere dagen tegelijk instellen

Als verschillende dagen dezelfde uren hebben:

1. Klik op **+ Dagen kopiëren**
2. Selecteer de brondag (bijv. maandag)
3. Selecteer de dagen waarnaar gekopieerd moet worden
4. Klik op **Kopiëren**

**Voorbeeld:**
```
Maandag t/m vrijdag: 09:00-12:00 en 13:00-17:00
```

#### Een dag verwijderen

- Klik op het **prullenbak** icoontje naast de dag
- De dag wordt verwijderd uit het werkschema

### Stap 3: Producten koppelen

Bepaal welke producten via dit werkschema geboekt kunnen worden:

1. Klik op **+ Product toevoegen**
2. Selecteer één of meerdere producten uit de lijst
3. Klik op **Toevoegen**

**Tips:**
- Koppel alleen relevante producten aan dit werkschema
- Controleer op de [Structuurpagina](producten/structuur.md) of producten correct gekoppeld zijn

#### Product verwijderen

- Klik op het **prullenbak** icoontje naast het product
- Het product wordt uit dit werkschema verwijderd
- **Let op:** Het product zelf wordt niet verwijderd, alleen de koppeling

### Stap 4: Werkschema opslaan

Klik op **Opslaan** om het werkschema op te slaan.

## Een werkschema bewerken

1. Ga naar **Werkschema's**
2. Klik op het werkschema dat jewilt bewerken
3. Wijzig dagen, uren of producten
4. Klik op **Opslaan**

**Let op:** Wijzigingen hebben onmiddellijk effect. Bestaande afspraken blijven behouden.

## Een werkschema verwijderen

1. Ga naar **Werkschema's**
2. Klik op het werkschema
3. Klik op **Verwijderen** rechtsonder
4. Bevestig de verwijdering

**Let op:**
- Bestaande afspraken blijven behouden
- De agenda heeft hierna geen werkschema meer en kan geen nieuwe afspraken ontvangen
- Zorg ervoor dat de agenda een ander werkschema heeft of maak een nieuw werkschema aan

## Werkschema tijdelijk uitzetten

Als jeeen werkschema tijdelijk wilt deactiveren zonder het te verwijderen:

1. Open het werkschema
2. Schakel de optie **Actief** uit
3. Klik op **Opslaan**

Het werkschema is nu tijdelijk uitgeschakeld. Burgers kunnen geen nieuwe afspraken maken, maar bestaande afspraken blijven staan.

**Gebruik dit voor:**
- Vakanties of sluitingsperiodes
- Tijdelijke onderbrekingen
- Testen van wijzigingen

## Uitzonderingen

Uitzonderingen zijn specifieke dagen waarop het werkschema NIET geldt.

### Een uitzondering toevoegen

1. Open het werkschema
2. Ga naar het tabblad **Uitzonderingen**
3. Klik op **+ Uitzondering toevoegen**
4. Selecteer de datum
5. Selecteer het type:
   - **Gesloten** - Volledig gesloten deze dag
   - **Afwijkende uren** - Andere openingsuren dan normaal
6. Bij afwijkende uren: vul de aangepaste uren in
7. Voeg een opmerking toe (optioneel)
8. Klik op **Opslaan**

### Voorbeelden van uitzonderingen

**Voorbeeld 1: Feestdag (gesloten)**
```
Datum: 25 december 2026
Type: Gesloten
Opmerking: Kerstdag
```

**Voorbeeld 2: Afwijkende uren (korte dag)**
```
Datum: 24 december 2026
Type: Afwijkende uren
Van: 09:00
Tot: 12:00
Opmerking: Kerstmis - enkel voormiddag open
```

**Voorbeeld 3: Teambuilding**
```
Datum: 15 maart 2026
Type: Gesloten
Opmerking: Teambuilding - loket gesloten
```

### Automatische feestdagen

Het systeem houdt automatisch rekening met officiële Belgische feestdagen (indien geconfigureerd in gemeente-instellingen). Jehoeft deze niet handmatig toe te voegen.

## Geavanceerde scenario's

### Scenario 1: Verschillende schema's per seizoen

**Situatie:** In de zomer (juli-augustus) zijn de openingsuren anders.

**Oplossing 1: Twee werkschema's**
1. Maak "Werkschema winter" (september-juni)
2. Maak "Werkschema zomer" (juli-augustus)
3. Schakel het winter-schema uit in juli-augustus
4. Schakel het zomer-schema in gedurende juli-augustus

**Oplossing 2: Uitzonderingen gebruiken**
1. Houd één werkschema
2. Voeg uitzonderingen toe voor elke dag in juli-augustus met afwijkende uren

### Scenario 2: Specifieke producten alleen op bepaalde dagen

**Situatie:** "Groepsafspraak bouwadvies" is alleen beschikbaar op dinsdag- en donderdagnamiddag.

**Oplossing:**
1. Maak een apart werkschema "Bouwadvies"
2. Stel in:
   - Dinsdag: 13:00-17:00
   - Donderdag: 13:00-17:00
3. Koppel alleen het product "Groepsafspraak bouwadvies" aan dit werkschema
4. Koppel de agenda aan beide werkschema's (het algemene schema + bouwadvies schema)

### Scenario 3: Meerdere locaties met verschillende uren

**Situatie:** Hoofdvestiging is open tot 17:00, deelgemeente tot 16:00.

**Oplossing:**
1. Maak werkschema "Hoofdvestiging":
   - ma-vr: 09:00-17:00
2. Maak werkschema "Deelgemeente":
   - ma-vr: 09:00-16:00
3. Koppel elk werkschema aan de juiste agenda's

### Scenario 4: Roulerende diensten

**Situatie:** Medewerkers werken om de week op zaterdag.

**Oplossing:**
1. Maak twee agenda's: "Medewerker A" en "Medewerker B"
2. Maak werkschema voor beide agenda's met zaterdag 09:00-12:00
3. Voeg afwezigheden toe op de zaterdagen dat de medewerker niet werkt

## Werkschema en beschikbaarheid

De uiteindelijke beschikbaarheid voor burgers is een combinatie van:

1. **Werkschema** - Wanneer is de agenda open?
2. **Productbeschikbaarheid** - Wanneer mag het product geboekt worden?
3. **Afwezigheden** - Wanneer is de medewerker afwezig?
4. **Gemeente-instellingen** - Minimale voorbereidingstijd, maximale boekingsperiode

**Voorbeeld:**
```
Werkschema: ma-vr 09:00-17:00
Product "Rijbewijs": alleen op di en do beschikbaar
Afwezigheid: wo 15 maart (hele dag)
Minimale voorbereidingstijd: 24 uur

Resultaat voor burger:
- Kan "Rijbewijs" boeken op di en do tussen 09:00-17:00
- NIET op wo 15 maart (medewerker afwezig)
- Moet minimaal 24 uur van tevoren boeken
```

## Best practices

### Houd het eenvoudig
- Gebruik zo min mogelijk verschillende werkschema's
- Koppel meerdere agenda's aan hetzelfde werkschema als ze dezelfde uren hebben

### Gebruik duidelijke namen
- Geef werkschema's beschrijvende namen
- "Werkschema Loket 1" is beter dan "Schema A"

### Plan uitzonderingen vooruit
- Voeg feestdagen en sluitingsdagen ruim op voorhand toe
- Voorkom dat burgers afspraken maken op gesloten dagen

### Controleer regelmatig
- Controleer wekelijks of alle werkschema's correct zijn
- Gebruik de [Structuurpagina](producten/structuur.md) om te verifiëren dat producten correct gekoppeld zijn

### Communiceer wijzigingen
- Informeer jeteam over wijzigingen aan werkschema's
- Update jewebsite met aangepaste openingsuren

### Test na wijzigingen
- Test altijd via de Burgerflow of burgers afspraken kunnen maken
- Controleer verschillende producten en tijdstippen

## Werkschema dupliceren

Als jeeen nieuw werkschema wilt aanmaken dat lijkt op een bestaand werkschema:

1. Open het bestaande werkschema
2. Klik op **Dupliceren** rechtsboven
3. Een kopie wordt aangemaakt met "(kopie)" achter de naam
4. Pas de kopie aan zoals gewenst
5. Sla op

## Overzicht en rapportage

### Werkschemaoverzicht

Op de overzichtspagina ziet u:
- Alle werkschema's
- Aan welke agenda's ze gekoppeld zijn
- Hoeveel producten gekoppeld zijn
- Of ze actief of inactief zijn

### Exporteren

1. Klik op **Exporteren**
2. Kies het formaat (PDF, Excel, CSV)
3. Download het overzicht

**Gebruik dit voor:**
- Documentatie
- Teamvergaderingen
- Audits

## Veelgestelde vragen

**Kan een agenda meerdere werkschema's hebben?**
Ja, een agenda kan aan meerdere werkschema's gekoppeld zijn. Dit is handig voor verschillende periodes of producten.

**Wat gebeurt er met afspraken als ik een werkschema verwijder?**
Bestaande afspraken blijven behouden. Nieuwe afspraken kunnen niet meer gemaakt worden totdat er een nieuw werkschema is.

**Kan ik een werkschema aan meerdere agenda's koppelen?**
Nee, elk werkschema is gekoppeld aan één agenda. Jekunt wel het werkschema dupliceren en aan een andere agenda koppelen.

**Hoe werken feestdagen?**
Officiële feestdagen worden automatisch herkend (indien geconfigureerd in gemeente-instellingen). Jekunt ook handmatig uitzonderingen toevoegen.

**Kan ik verschillende producten aan verschillende uren koppelen?**
Niet binnen hetzelfde werkschema. Maak meerdere werkschema's aan en koppel verschillende producten aan elk schema.

**Wat als ik per ongeluk een werkschema verwijder?**
Verwijderde werkschema's kunnen niet hersteld worden. Jemoet een nieuw werkschema aanmaken. Bestaande afspraken blijven wel behouden.

---

## Navigatie

- [Terug naar handleiding dienstbeheerders](index.md)
- [Vorige: Agenda's](agendas.md)
- [Volgende: Gebruikers](gebruikers.md)

---

*Laatst bijgewerkt: 16 februari 2026*
