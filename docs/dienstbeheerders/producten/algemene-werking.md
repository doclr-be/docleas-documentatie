# Producten - Algemene werking (DRAFT)

## Wat zijn producten?

In Docleas is een **product** een dienst die jegemeente aanbiedt en waarvoor burgers een afspraak kunnen maken. Voorbeelden van producten zijn:

- Identiteitskaart aanvragen
- Rijbewijs vernieuwen
- Uittreksel uit bevolkingsregister
- Attest aanvragen
- Omgevingsvergunning aanvragen

## Hoe werken producten?

### De burger-ervaring

Wanneer een burger via de Burgerflow een afspraak wil maken, doorloopt deze de volgende stappen:

1. **Productkeuze** - De burger kiest één of meerdere producten (afhankelijk van de configuratie)
2. **Productinformatie** - De burger ziet informatie over het gekozen product (beschrijving, benodigde documenten, etc.)
3. **Gegevens invullen** - De burger vult verplichte velden in (zoals naam, e-mail, rijksregisternummer)
4. **Locatie kiezen** - Als er meerdere locaties zijn, kiest de burger waar de afspraak plaatsvindt
5. **Tijdstip kiezen** - De burger kiest een beschikbaar tijdstip
6. **Bevestiging** - De afspraak wordt bevestigd

### Productconfiguratie

Als dienstbeheerder configureert jevoor elk product:

- **Algemene instellingen** - Naam, type, duur, locaties
- **Teksten** - Beschrijving en informatie die burgers te zien krijgen
- **Velden** - Welke gegevens burgers moeten invullen
- **Beschikbaarheden** - Wanneer het product beschikbaar is voor boeking
- **Groepen** - Optioneel: in welke groep het product valt

## Producttypen

Docleas kent verschillende producttypen:

### Reguliere producten
Dit zijn de standaard diensten die burgers kunnen boeken. Deze producten zijn zichtbaar in de Burgerflow en kunnen door burgers zelf worden ingepland.

**Voorbeelden:**
- Identiteitskaart
- Rijbewijs
- Attest

### Systeemproducten
Bepaalde producten zijn bedoeld voor intern gebruik en niet zichtbaar voor burgers.

**Voorbeeld:**
- **Afwezig** - Wordt gebruikt om afwezigheden van medewerkers te registreren. Dit product wordt niet getoond aan burgers.

## Producten en agenda's

Elk product moet gekoppeld worden aan één of meerdere **agenda's**. Een agenda is de planning van een loket of medewerker.

**Voorbeeld:**
- Het product "Identiteitskaart" kan gekoppeld zijn aan:
  - Agenda "Loket Burgerlijke Stand"
  - Agenda "Medewerker Jan"
  - Agenda "Medewerker Sarah"

Wanneer een burger het product "Identiteitskaart" kiest, worden enkel de beschikbare tijdstippen getoond van de agenda's die aan dit product gekoppeld zijn.

## Producten en werkschema's

De beschikbaarheid van producten wordt bepaald door **werkschema's**. Een werkschema definieert:
- Op welke dagen een loket/medewerker beschikbaar is
- Tijdens welke uren
- Voor welke producten

**Voorbeeld werkschema:**
- **Loket Burgerlijke Stand**
  - Maandag tot vrijdag: 9:00 - 12:00 en 13:00 - 16:00
  - Producten: Identiteitskaart, Rijbewijs, Attesten

Meer informatie over werkschema's vindt jein het hoofdstuk [Werkschema](../werkschema.md).

## Productstructuur

Op de **structuurpagina** krijgt jeeen overzicht van welke producten beschikbaar zijn per agenda. Dit geeft jeinzicht in:
- Welke agenda's welke producten aanbieden
- Of alle producten correct gekoppeld zijn
- Of er eventueel producten zijn die aan geen enkele agenda gekoppeld zijn

Zie [Producten - Structuur](structuur.md) voor meer details.

## Productgroepen

Jekunt producten organiseren in **groepen**. Dit maakt het overzichtelijker voor burgers wanneer jeveel verschillende diensten aanbiedt.

**Voorbeelden van groepen:**
- Identiteitsdocumenten (Identiteitskaart, Paspoort)
- Rijbewijzen (Rijbewijs aanvragen, Rijbewijs vernieuwen)
- Attesten (Attest van woonst, Uittreksel bevolkingsregister)

Meer informatie vindt jein [Producten - Groepen](groepen.md).

## Best practices

### Duidelijke productnamen
Gebruik herkenbare namen die burgers begrijpen:
- ✅ "Identiteitskaart aanvragen"
- ❌ "eID"

### Volledige productinformatie
Vul alle tekstvelden volledig in, zodat burgers weten:
- Wat ze moeten meebrengen
- Hoeveel de dienst kost
- Wat de verwachte behandeltermijn is

### Logische productgroepen
Groepeer verwante producten samen om de keuze voor burgers te vereenvoudigen.

### Realistische afspraakduur
Stel een realistische duur in per product. Houd rekening met:
- Tijd voor intake van gegevens
- Tijd voor het gesprek/behandeling
- Tijd om documenten voor te bereiden
- Een kleine buffer

## Volgende stappen

Nu jebegrijpt hoe producten werken, kunt jeverder lezen over:
- [Producten beheren](producten-beheren.md) - Een product aanmaken en bewerken
- [Algemene instellingen](algemene-instellingen.md) - Configuratie-opties voor producten
- [Teksten](teksten.md) - Productinformatie voor burgers
- [Velden](velden.md) - Gegevens die burgers moeten invullen

---

## Navigatie

- [Terug naar handleiding dienstbeheerders](../index.md)
- [Vorige: Gemeente-instellingen](../gemeente-instellingen.md)
- [Volgende: Producten beheren](producten-beheren.md)

---

*Laatst bijgewerkt: 16 februari 2026*
