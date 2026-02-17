# Producten beheren (DRAFT)

## Overzicht

Op deze pagina leest jehoe jeproducten aanmaakt, bewerkt en verwijdert in Docleas.

## Toegang tot productbeheer

1. Log in op de Backoffice-app met jedienstbeheerder-account
2. Navigeer naar **Producten** in het hoofdmenu
3. Kies **Alle producten** voor het overzicht

Jekomt nu op de overzichtspagina waar alle producten van jegemeente worden getoond.

## Een nieuw product aanmaken

### Stap 1: Product aanmaken

1. Klik op de knop **+ Nieuw product** rechtsboven
2. Een nieuw scherm opent waar jehet product kunt configureren

### Stap 2: Algemene instellingen invullen

Vul de basisgegevens van het product in:
- **Productnaam** - De naam zoals burgers deze zien (bijv. "Identiteitskaart aanvragen")
- **Producttype** - Kies het type dienst
- **Afspraakduur** - Hoeveel tijd (in minuten) een afspraak voor dit product duurt
- **Locaties** - Selecteer op welke locatie(s) dit product aangeboden wordt

Zie [Algemene instellingen](algemene-instellingen.md) voor gedetailleerde uitleg van alle velden.

### Stap 3: Teksten toevoegen

Vul de informatieve teksten in die burgers te zien krijgen:
- **Beschrijving** - Korte uitleg over de dienst
- **Wat moet jemeebrengen** - Lijst van benodigde documenten
- **Kosten** - Eventuele kosten voor de dienst
- **Behandeltermijn** - Hoe lang het duurt voor het product klaar is

Zie [Teksten](teksten.md) voor meer informatie over het invullen van teksten.

### Stap 4: Velden configureren

Bepaal welke gegevens burgers moeten invullen bij het maken van een afspraak:
- **Verplichte velden** - Bijvoorbeeld naam, e-mailadres, rijksregisternummer
- **Optionele velden** - Extra informatie die nuttig kan zijn
- **Aangepaste velden** - Velden specifiek voor dit product

Zie [Velden](velden.md) voor uitleg over het configureren van velden.

### Stap 5: Beschikbaarheden instellen

Bepaal wanneer dit product beschikbaar is voor boeking:
- **Dagen** - Op welke dagen kan dit product geboekt worden
- **Tijdstippen** - Tijdens welke uren
- **Uitzonderingen** - Bijvoorbeeld feestdagen of specifieke sluitingsdagen

Zie [Beschikbaarheden](beschikbaarheden.md) voor meer informatie.

### Stap 6: Product opslaan

Klik op **Opslaan** om het product aan te maken.

Het product is nu aangemaakt, maar nog niet actief. Jemoet het product nog koppelen aan agenda's voordat burgers het kunnen boeken.

## Product koppelen aan agenda's

Na het aanmaken van een product moet jedit koppelen aan één of meerdere agenda's:

1. Ga naar **Werkschema's** in het hoofdmenu
2. Selecteer het werkschema van de agenda waaraan jehet product wilt koppelen
3. Voeg het product toe aan het werkschema
4. Sla de wijzigingen op

Zie [Werkschema](../werkschema.md) voor gedetailleerde instructies.

**Tip:** Controleer op de [Structuurpagina](structuur.md) of het product correct gekoppeld is aan de juiste agenda's.

## Een bestaand product bewerken

### Product vinden

1. Ga naar **Producten** > **Alle producten**
2. Gebruik de zoekfunctie om het product te vinden, of scroll door de lijst
3. Klik op de naam van het product

### Wijzigingen aanbrengen

Jekomt nu op de detailpagina van het product. Hier kunt jealle instellingen wijzigen:
- Algemene instellingen
- Teksten
- Velden
- Beschikbaarheden

Navigeer tussen de verschillende tabbladen om de gewenste sectie te bewerken.

### Wijzigingen opslaan

Vergeet niet om op **Opslaan** te klikken na het maken van wijzigingen.

**Let op:** Wijzigingen aan een product zijn onmiddellijk zichtbaar voor burgers in de Burgerflow. Controleer jewijzigingen dus zorgvuldig.

## Een product deactiveren

Als jeeen product tijdelijk niet wilt aanbieden (maar wel wilt behouden in het systeem):

1. Open het product
2. Ga naar het tabblad **Algemene instellingen**
3. Vink de optie **Product actief** uit
4. Klik op **Opslaan**

Het product is nu niet meer zichtbaar voor burgers, maar blijft wel in jesysteem aanwezig.

**Gebruik dit bijvoorbeeld voor:**
- Seizoensgebonden diensten
- Diensten die tijdelijk niet aangeboden worden
- Producten in testfase

## Een product verwijderen

**Waarschuwing:** Het verwijderen van een product is permanent en kan niet ongedaan worden gemaakt.

### Wanneer kunt jeeen product NIET verwijderen?

Een product kan niet verwijderd worden als:
- Er afspraken voor dit product zijn ingepland (zowel in het verleden als in de toekomst)
- Het product gekoppeld is aan een werkschema

In dat geval moet jehet product eerst **deactiveren** in plaats van verwijderen.

### Product verwijderen

Als er geen afspraken zijn en het product niet gekoppeld is:

1. Open het product
2. Klik op de knop **Verwijderen** rechtsonder
3. Bevestig de verwijdering

Het product is nu permanent verwijderd.

## Product dupliceren

Als jeeen nieuw product wilt aanmaken dat vergelijkbaar is met een bestaand product:

1. Open het bestaande product
2. Klik op de knop **Dupliceren** rechtsboven
3. Een kopie van het product wordt aangemaakt met "(kopie)" achter de naam
4. Pas de gegevens aan zoals gewenst
5. Sla het nieuwe product op

Dit bespaart tijd bij het aanmaken van vergelijkbare producten.

## Tips

### Vóór activatie
- **Test het product** - Maak zelf een testafspraak als medewerker om te controleren of alles correct werkt
- **Controleer alle teksten** - Zorg dat er geen typefouten in staan
- **Verifieer de koppeling** - Controleer op de structuurpagina of het product aan de juiste agenda's gekoppeld is

### Na aanpassingen
- **Communiceer wijzigingen** - Informeer jemedewerkers over wijzigingen aan producten
- **Monitor afspraken** - Houd in de gaten of burgers afspraken blijven maken na wijzigingen

### Organisatie
- **Gebruik productgroepen** - Organiseer producten in logische groepen voor betere overzichtelijkheid
- **Hanteer naamconventies** - Gebruik consistente namen voor vergelijkbare producten

## Veelgestelde vragen

**Kan ik een product hernoemen?**
Ja, jekunt de naam van een product altijd wijzigen. Dit heeft geen invloed op bestaande afspraken.

**Wat gebeurt er met afspraken als ik een product deactiveer?**
Bestaande afspraken blijven gewoon staan. Nieuwe afspraken voor dit product kunnen niet meer gemaakt worden.

**Kan ik een product tijdelijk onzichtbaar maken voor burgers?**
Ja, deactiveer het product via de algemene instellingen.

**Hoe kan ik zien hoeveel afspraken er zijn voor een product?**
Ga naar **Statistieken** en filter op het specifieke product.

---

## Navigatie

- [Terug naar handleiding dienstbeheerders](../index.md)
- [Vorige: Algemene werking](algemene-werking.md)
- [Volgende: Algemene instellingen](algemene-instellingen.md)

---

*Laatst bijgewerkt: 16 februari 2026*
