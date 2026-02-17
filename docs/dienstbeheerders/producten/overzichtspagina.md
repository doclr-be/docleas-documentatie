# Producten - Overzichtspagina (DRAFT)

## Overzicht

De **overzichtspagina** toont alle producten van jegemeente in één lijst. Dit is de centrale plaats voor productbeheer waar jesnel producten kunt vinden, filteren, sorteren en beheren.

## Toegang

1. Log in op de Backoffice-app
2. Navigeer naar **Producten** > **Alle producten**

Jekomt nu op de overzichtspagina met alle producten.

## Wat ziet jeop de overzichtspagina?

De overzichtspagina toont een tabel met alle producten en hun belangrijkste eigenschappen:

| Kolom | Beschrijving |
|-------|--------------|
| **Naam** | De naam van het product |
| **Groep** | De productgroep (indien van toepassing) |
| **Type** | Het producttype (standaard, groepsafspraak, etc.) |
| **Duur** | De afspraakduur in minuten |
| **Status** | Actief of inactief |
| **Gekoppeld** | Aantal agenda's waaraan het product gekoppeld is |
| **Acties** | Snelle acties (bewerken, dupliceren, verwijderen) |

## Producten zoeken

### Zoekbalk

Gebruik de zoekbalk rechtsboven om snel een product te vinden:

1. Typ (een deel van) de productnaam
2. De lijst wordt automatisch gefilterd terwijl jetypt

**Tips:**
- Jekunt zoeken op zowel de volledige naam als delen ervan
- Zoeken is niet hoofdlettergevoelig
- Zoeken werkt ook voor productcodes (indien ingevuld)

### Voorbeelden

- Zoek "identiteit" → Vindt "Identiteitskaart aanvragen", "Identiteitskaart vernieuwen"
- Zoek "rij" → Vindt "Rijbewijs aanvragen", "Rijbewijs vernieuwen"
- Zoek "attest" → Vindt alle producten met "attest" in de naam

## Filteren

Gebruik de filters om de productlijst te verfijnen:

### Filter op status

**Alle producten** - Toon zowel actieve als inactieve producten
**Actief** - Toon alleen actieve producten (zichtbaar voor burgers)
**Inactief** - Toon alleen inactieve producten

**Gebruik dit voor:**
- Opruimen van inactieve producten
- Controleren welke producten burgers kunnen boeken

### Filter op groep

**Alle groepen** - Toon producten uit alle groepen
**[Groepsnaam]** - Toon alleen producten uit deze groep
**Zonder groep** - Toon producten die niet aan een groep toegewezen zijn

**Gebruik dit voor:**
- Controleren of alle producten in een groep zitten
- Beheren van producten per categorie

### Filter op type

**Alle types** - Toon alle producttypes
**Standaard afspraak** - Reguliere afspraken
**Groepsafspraak** - Afspraken waarbij meerdere burgers kunnen inschrijven
**Meerdere producten** - Producten waarbij burgers meerdere diensten tegelijk kunnen kiezen

### Filter op koppeling

**Alle producten** - Toon alle producten
**Gekoppeld aan agenda** - Toon alleen producten die aan minimaal één agenda gekoppeld zijn
**Niet gekoppeld** - Toon producten die aan geen enkele agenda gekoppeld zijn (weesproducten)

**Belangrijk:** Producten die niet gekoppeld zijn, kunnen niet geboekt worden door burgers!

### Combineren van filters

Jekunt meerdere filters combineren:

**Voorbeeld 1:** Vind alle inactieve producten zonder groep
- Status: Inactief
- Groep: Zonder groep

**Voorbeeld 2:** Vind alle actieve groepsafspraken
- Status: Actief
- Type: Groepsafspraak

## Sorteren

Klik op een kolomkop om de lijst te sorteren:

- **Naam** - Alfabetisch (A-Z of Z-A)
- **Groep** - Alfabetisch op groepsnaam
- **Type** - Gegroepeerd per type
- **Duur** - Van kort naar lang of omgekeerd
- **Status** - Actief eerst of inactief eerst
- **Gekoppeld** - Van veel naar weinig koppelingen of omgekeerd

**Tip:** Klik nogmaals op dezelfde kolomkop om de sorteerrichting om te draaien.

## Snelle acties

Via de actieknop (⋮) rechts op elke rij kunt jesnel acties uitvoeren:

### Bewerken
- Opent het product voor bewerking
- Sneltoets: Klik direct op de productnaam

### Dupliceren
- Maakt een kopie van het product
- Handig voor vergelijkbare producten
- De kopie krijgt "(kopie)" achter de naam

### Activeren/Deactiveren
- Schakel snel een product aan of uit
- Wijziging is onmiddellijk van kracht

### Verwijderen
- Verwijdert het product permanent
- Alleen mogelijk als er geen afspraken zijn voor dit product
- Eerst verwijderen uit gekoppelde werkschema's

### Product bekijken in Burgerflow
- Opent een preview van hoe burgers het product zien
- Handig om te controleren hoe teksten en velden eruit zien
- Let op: Dit opent een testweergave, burgers kunnen hier geen echte afspraak maken

## Bulk acties

Selecteer meerdere producten tegelijk om bulk acties uit te voeren:

### Producten selecteren

1. Vink de checkboxes aan naast de producten
2. Of gebruik **Alles selecteren** bovenaan

### Beschikbare bulk acties

**Activeren** - Activeer alle geselecteerde producten
**Deactiveren** - Deactiveer alle geselecteerde producten
**Toewijzen aan groep** - Wijs alle geselecteerde producten toe aan een groep
**Verwijderen** - Verwijder alle geselecteerde producten (indien mogelijk)
**Exporteren** - Exporteer geselecteerde producten naar Excel/CSV

**Voorbeeld gebruik:**
Jewilt alle seizoensgebonden producten voor de zomer activeren:
1. Filter op groep "Zomerafspraken"
2. Selecteer alle producten
3. Klik op **Activeren**

## Productstatistieken

Bovenaan de overzichtspagina ziet jeeen samenvatting:

```
📊 Totaal producten: 45
✅ Actief: 38
⏸️ Inactief: 7
⚠️ Niet gekoppeld: 2
```

**Gebruik dit om:**
- Snel te zien hoeveel producten jegemeente heeft
- Te controleren of er weesproducten zijn (niet gekoppeld)
- Een gezondheidscheck van jeproductencatalogus te doen

## Exporteren

### Volledige lijst exporteren

1. Klik op **Exporteren** rechtsboven
2. Kies het formaat:
   - **Excel (.xlsx)** - Voor verdere analyse of rapportage
   - **CSV (.csv)** - Voor import in andere systemen
   - **PDF** - Voor printen of archiveren

### Wat wordt er geëxporteerd?

De export bevat alle zichtbare producten (na filtering) met:
- Productnaam
- Productcode
- Groep
- Type
- Duur
- Status
- Aantal koppelingen
- Laatste wijzigingsdatum

**Tip:** Filter eerst de gewenste producten voordat jeexporteert.

## Paginering

Als jeveel producten heeft, wordt de lijst verdeeld over meerdere pagina's:

- **Standaard:** 25 producten per pagina
- **Aanpasbaar:** 10, 25, 50, 100 producten per pagina
- **Navigatie:** Gebruik de pijltjes onderaan om te bladeren

## Praktische scenario's

### Scenario 1: Controle op ongebruikte producten

**Doel:** Vind producten die inactief zijn en mogelijk verwijderd kunnen worden.

**Stappen:**
1. Filter op status: **Inactief**
2. Sorteer op laatste wijziging (oudste eerst)
3. Bekijk welke producten al lang niet meer gebruikt zijn
4. Besluit of ze verwijderd kunnen worden

### Scenario 2: Voorbereiding nieuwe gemeente-gids

**Doel:** Maak een overzicht van alle actieve diensten voor de gemeente-gids.

**Stappen:**
1. Filter op status: **Actief**
2. Sorteer op groep
3. Exporteer naar Excel
4. Gebruik de export voor de gemeente-gids

### Scenario 3: Opruimen weesproducten

**Doel:** Vind en koppel producten die niet aan een agenda gekoppeld zijn.

**Stappen:**
1. Filter op koppeling: **Niet gekoppeld**
2. Bekijk elk product:
   - Is het nog relevant? → Koppel aan werkschema
   - Is het verouderd? → Verwijder of deactiveer
3. Controleer opnieuw tot er geen weesproducten meer zijn

### Scenario 4: Seizoensgebonden producten activeren

**Doel:** Activeer alle zomerproducten in één keer.

**Stappen:**
1. Filter op groep: **Zomerafspraken**
2. Selecteer alle producten
3. Klik op **Activeren**
4. Controleer via de Burgerflow of de producten zichtbaar zijn

## Tips voor effectief gebruik

### Houd de lijst schoon
- Verwijder regelmatig verouderde producten
- Deactiveer seizoensgebonden producten buiten het seizoen
- Wijs alle producten toe aan een groep

### Gebruik consistente naamgeving
- Hanteer een vaste structuur (bijv. "Product + Actie")
- Gebruik standaard termen
- Vermijd afkortingen die niet iedereen kent

### Monitor regelmatig
- Controleer wekelijks op weesproducten
- Bekijk maandelijks of alle actieve producten nog relevant zijn
- Gebruik statistieken om ongebruikte producten te identificeren

### Documenteer wijzigingen
- Houd een logboek bij van belangrijke wijzigingen
- Communiceer wijzigingen met jeteam
- Test wijzigingen via de Burgerflow

## Sneltoetsen (optioneel)

Als jebrowser deze ondersteunt:

| Sneltoets | Actie |
|-----------|-------|
| `/` | Focus op zoekbalk |
| `Ctrl + A` | Selecteer alle producten |
| `Escape` | Deselecteer alle producten |

## Veelgestelde vragen

**Hoeveel producten kan ik maximaal hebben?**
Er is geen technische limiet, maar we raden aan om het overzichtelijk te houden (max. 50-100 producten). Gebruik groepen om veel producten te organiseren.

**Kan ik producten in bulk bewerken?**
Momenteel kunt jealleen status en groep in bulk wijzigen. Voor andere wijzigingen moet jeelk product individueel bewerken.

**Waarom zie ik sommige producten niet?**
Controleer jefilters. Jeheeft mogelijk een filter actief die bepaalde producten verbergt.

**Kan ik de volgorde van kolommen aanpassen?**
Nee, de kolomvolgorde is vast. Jekunt wel sorteren op elke kolom.

**Hoe verwijder ik meerdere producten tegelijk?**
Selecteer de gewenste producten en klik op **Verwijderen**. Dit is alleen mogelijk voor producten zonder afspraken.

---

## Navigatie

- [Terug naar handleiding dienstbeheerders](../index.md)
- [Vorige: Structuur](structuur.md)
- [Volgende: Agenda's](../agendas.md)

---

*Laatst bijgewerkt: 16 februari 2026*
