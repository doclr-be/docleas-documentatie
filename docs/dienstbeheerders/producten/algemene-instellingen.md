# Producten - Algemene instellingen (DRAFT)

## Overzicht

Bij het aanmaken of bewerken van een product vult jeeerst de algemene instellingen in. Deze instellingen bepalen de basiskenmerken van het product.

## Toegang

1. Ga naar **Producten** > **Alle producten**
2. Klik op een bestaand product of maak een nieuw product aan
3. Het tabblad **Algemene instellingen** wordt standaard geopend

## Beschikbare instellingen

### Productnaam

**Verplicht veld**

De naam van het product zoals burgers deze zien in de Burgerflow.

**Tips:**
- Gebruik duidelijke, herkenbare namen
- Vermijd afkortingen die burgers niet kennen
- Gebruik actieve werkwoorden voor duidelijkheid

**Voorbeelden:**
- ✅ "Identiteitskaart aanvragen"
- ✅ "Rijbewijs vernieuwen"
- ❌ "eID" (onduidelijke afkorting)
- ❌ "Identiteitskaart" (niet duidelijk of dit aanvraag of vernieuwing is)

### Productcode (optioneel)

Een interne code voor jeeigen administratie. Dit veld is niet zichtbaar voor burgers.

**Gebruik bijvoorbeeld voor:**
- Koppeling met jeeigen systemen
- Facturatie
- Interne rapportage

**Voorbeeld:** `BURG-ID-001`

### Producttype

**Verplicht veld**

Selecteer het type product uit de keuzelijst. Het producttype bepaalt hoe het product zich gedraagt in het systeem.

**Beschikbare types:**
- **Standaard afspraak** - Reguliere afspraak voor een dienst
- **Meerdere producten toegestaan** - Burger kan meerdere producten tegelijk kiezen
- **Groepsafspraak** - Afspraak waarbij meerdere burgers tegelijk kunnen inschrijven

### Afspraakduur

**Verplicht veld**

De duur van een afspraak in minuten. Dit bepaalt hoeveel tijd er wordt gereserveerd in de agenda wanneer een burger dit product boekt.

**Standaardopties:**
- 15 minuten
- 30 minuten
- 45 minuten
- 60 minuten
- Aangepast (vul zelf in)

**Tips voor het bepalen van de duur:**
- Reken voldoende tijd voor intake en afhandeling
- Houd rekening met een kleine buffer tussen afspraken
- Overleg met de medewerkers die het product behandelen
- Monitor in de praktijk en pas indien nodig aan

**Voorbeeld:**
- Eenvoudig attest: 15 minuten
- Identiteitskaart: 30 minuten
- Bouwaanvraag: 60 minuten

### Beschikbare locaties

**Verplicht veld**

Selecteer op welke locatie(s) dit product aangeboden wordt.

**Enkele locatie:**
Als jegemeente maar één locatie heeft, wordt deze automatisch geselecteerd.

**Meerdere locaties:**
Als jegemeente meerdere locaties heeft:
- Vink alle locaties aan waar dit product beschikbaar is
- Burgers kunnen later kiezen op welke locatie ze een afspraak willen

**Voorbeeld:**
Product "Identiteitskaart aanvragen" is beschikbaar op:
- ✅ Gemeentehuis centrum
- ✅ Deelgemeente Noord
- ❌ Technische dienst (hier worden geen identiteitskaarten afgeleverd)

### Kleur (optioneel)

Kies een kleur voor dit product. Deze kleur wordt gebruikt:
- In de agendaweergave voor medewerkers
- Voor visuele identificatie in overzichten

**Tips:**
- Gebruik dezelfde kleuren voor verwante producten
- Vermijd te felle kleuren die moeilijk leesbaar zijn
- Houd rekening met kleurenblindheid (gebruik voldoende contrast)

**Voorbeelden:**
- Identiteitsdocumenten: Blauw
- Rijbewijzen: Groen
- Attesten: Oranje

### Icoon (optioneel)

Selecteer een icoon dat het product visueel voorstelt. Dit icoon wordt getoond in de Burgerflow.

**Beschikbare iconen:**
- Identiteitskaart
- Rijbewijs
- Document/Attest
- Huis (voor bouwaanvragen, omgevingsvergunningen)
- Persoon
- Groep
- En meer...

### Product actief

**Verplicht**

Deze schakelaar bepaalt of het product zichtbaar en boekbaar is voor burgers.

**Actief (aan):**
- Product is zichtbaar in de Burgerflow
- Burgers kunnen afspraken maken

**Inactief (uit):**
- Product is niet zichtbaar voor burgers
- Product blijft wel in het systeem aanwezig
- Bestaande afspraken blijven geldig

**Gebruik "inactief" voor:**
- Seizoensgebonden producten (bijv. zomervakantie-afspraken)
- Producten in testfase
- Tijdelijke opschorting van een dienst

### Volgorde

**Optioneel**

Bepaal de volgorde waarin producten getoond worden aan burgers. Producten met een lager cijfer worden eerst getoond.

**Voorbeeld:**
- Identiteitskaart: volgorde 1
- Rijbewijs: volgorde 2
- Attesten: volgorde 3

**Tip:** Laat ruimte tussen de cijfers (10, 20, 30) zodat jelater gemakkelijk producten tussenin kunt plaatsen.

### Toelichting voor medewerkers (optioneel)

Een intern notitieveld dat alleen zichtbaar is voor medewerkers in de Backoffice-app. Burgers zien dit veld niet.

**Gebruik dit voor:**
- Speciale instructies voor medewerkers
- Verwijzingen naar procedures
- Contactpersoon voor vragen

**Voorbeeld:**
```
Let op: Voor dit product moet altijd het oude document
worden ingeleverd. Bij twijfel, contacteer Sarah (ext. 123).
```

## Wijzigingen opslaan

Vergeet niet om op **Opslaan** te klikken na het invullen of wijzigen van de algemene instellingen.

## Meertaligheid

Als jegemeente meertaligheid heeft ingeschakeld, moet jede volgende velden in alle geactiveerde talen invullen:
- Productnaam
- Toelichting voor medewerkers (optioneel)

Wissel tussen talen via de taalknop bovenaan het formulier.

## Best practices

### Consistentie
Hanteer een consistente naamgeving voor alle producten:
- Gebruik altijd dezelfde schrijfwijze (bijv. "aanvragen" of "aanvraag")
- Gebruik dezelfde structuur (bijv. altijd "Product + actie")

### Duidelijkheid
- Maak productnamen zo duidelijk mogelijk voor burgers
- Vermijd jargon of interne terminologie
- Denk vanuit het perspectief van de burger

### Kleuren en iconen
- Gebruik kleuren en iconen consistent
- Groepeer verwante producten visueel door dezelfde kleur te gebruiken

## Veelgestelde vragen

**Kan ik de productnaam achteraf wijzigen?**
Ja, dit heeft geen invloed op bestaande afspraken. De nieuwe naam wordt vanaf de wijziging gebruikt.

**Wat gebeurt er als ik de afspraakduur verklein?**
Bestaande afspraken behouden hun oorspronkelijke duur. Nieuwe afspraken krijgen de nieuwe duur.

**Moet ik een product deactiveren als er een feestdag is?**
Nee, dit regelt jebeter via werkschema's of door een uitzondering toe te voegen aan de beschikbaarheden.

**Kan ik meerdere iconen aan één product toekennen?**
Nee, jekunt slechts één icoon per product selecteren.

---

## Navigatie

- [Terug naar handleiding dienstbeheerders](../index.md)
- [Vorige: Producten beheren](producten-beheren.md)
- [Volgende: Teksten](teksten.md)

---

*Laatst bijgewerkt: 16 februari 2026*
