# FAQ - Veelgestelde vragen voor dienstbeheerders (DRAFT)

## Algemeen

### Wat is het verschil tussen een product en een agenda?

**Product** = Een dienst die burgers kunnen boeken (bijv. "Identiteitskaart aanvragen")
**Agenda** = De planning van een loket of medewerker waar afspraken op gemaakt worden

Een product moet gekoppeld worden aan één of meerdere agenda's via een werkschema voordat burgers het kunnen boeken.

### Hoe lang duurt het voordat wijzigingen zichtbaar zijn voor burgers?

Wijzigingen zijn **onmiddellijk** zichtbaar:
- Productwijzigingen zijn direct zichtbaar in de Burgerflow
- Werkschema-wijzigingen beïnvloeden direct de beschikbaarheid
- Agenda-wijzigingen zijn meteen actief

**Tip:** Test altijd via de Burgerflow of jewijzigingen correct zijn voordat jeze publiceert.

### Kan ik wijzigingen ongedaan maken?

Dat hangt af van de wijziging:
- **Producten bewerken** - Wijzig gewoon terug
- **Agenda's verwijderen** - NIET ongedaan te maken
- **Afspraken annuleren** - Niet te herstellen
- **Gebruikers verwijderen** - NIET ongedaan te maken

**Belangrijk:** Wees voorzichtig met verwijderacties. Deze zijn permanent.

## Producten

### Waarom kunnen burgers mijn nieuwe product niet boeken?

Controleer de volgende punten:
1. ✅ Is het product **actief**?
2. ✅ Is het product gekoppeld aan een **werkschema**?
3. ✅ Heeft het werkschema **dagen en uren** ingesteld?
4. ✅ Is de **agenda** waar het product aan gekoppeld is beschikbaar?
5. ✅ Zijn er **beschikbare tijdslots** binnen de boekingsperiode?

**Hulpmiddel:** Gebruik de [Structuurpagina](producten/structuur.md) om te controleren of het product correct gekoppeld is.

### Kan ik een product hernoemen zonder dat dit invloed heeft op bestaande afspraken?

**Ja**, jekunt een productnaam altijd wijzigen. Bestaande afspraken blijven de oude naam behouden (voor historische referentie), maar nieuwe afspraken gebruiken de nieuwe naam.

### Hoe kan ik een product tijdelijk uitzetten?

Twee opties:

**Optie 1: Product deactiveren**
1. Ga naar het product
2. Zet **Product actief** uit
3. Opslaan

**Optie 2: Werkschema uitzetten**
1. Ga naar het werkschema
2. Zet **Actief** uit
3. Opslaan

**Verschil:** Optie 1 zet alleen dit product uit. Optie 2 zet alle producten op dit werkschema uit.

### Wat is het verschil tussen een product deactiveren en verwijderen?

| Actie | Effect | Kan ongedaan? | Bestaande afspraken |
|-------|--------|---------------|---------------------|
| **Deactiveren** | Product niet zichtbaar voor burgers | Ja, heractiveren | Blijven bestaan |
| **Verwijderen** | Product volledig weg | Nee, permanent | Alleen mogelijk als er geen afspraken zijn |

**Advies:** Gebruik deactiveren tenzij jehet product echt permanent wilt verwijderen.

### Waarom zie ik "Afwezig" niet op de structuurpagina?

"Afwezig" is een **systeemproduct** dat gebruikt wordt voor interne planning (afwezigheden van medewerkers). Het wordt bewust niet getoond op de structuurpagina omdat het geen product is dat burgers kunnen boeken.

**Referentie:** [TICK-0001](../../Tickets/TICK-0001.md)

## Agenda's en werkschema's

### Wat is het verschil tussen een agenda en een werkschema?

**Agenda** = De planning van een loket of medewerker (het "wie/wat")
**Werkschema** = Wanneer de agenda beschikbaar is en voor welke producten (het "wanneer/waarvoor")

**Analogie:**
- Agenda = Een winkel
- Werkschema = De openingsuren en het assortiment van die winkel

### Kan een agenda meerdere werkschema's hebben?

**Ja**, een agenda kan aan meerdere werkschema's gekoppeld zijn.

**Voorbeeld:**
- Werkschema 1: ma-vr 09:00-17:00 voor algemene producten
- Werkschema 2: di en do 13:00-17:00 voor specialistische afspraken

### Wat gebeurt er met afspraken als ik een werkschema verwijder?

Bestaande afspraken blijven behouden. Echter:
- Nieuwe afspraken kunnen niet meer gemaakt worden
- De agenda heeft geen werkschema meer

**Oplossing:** Maak een nieuw werkschema of koppel de agenda aan een bestaand werkschema.

### Hoe plan ik een vakantie in?

**Optie 1: Afwezigheid registreren (aanbevolen)**
1. Ga naar de agenda
2. Klik op **Afwezigheid toevoegen**
3. Selecteer de periode
4. Type: Vakantie
5. Opslaan

**Optie 2: Werkschema tijdelijk uitzetten**
- Zet het werkschema uit tijdens de vakantieperiode
- Zet het daarna weer aan

**Voordeel optie 1:** Bestaande afspraken blijven zichtbaar, maar geen nieuwe afspraken mogelijk.

### Kunnen burgers kiezen bij welke medewerker ze een afspraak maken?

**Standaard: Nee.** Burgers kiezen een product en tijdstip. Het systeem wijst automatisch een beschikbare agenda toe.

**Tenzij:** Jemaakt aparte producten per medewerker (bijv. "Rijbewijs - Sarah", "Rijbewijs - Jan").

## Gebruikers en rechten

### Hoeveel dienstbeheerders moet ik hebben?

**Minimaal 2**, bij voorkeur 3.

**Waarom?**
- Als één dienstbeheerder afwezig is, is er altijd een back-up
- Bij vertrek van een dienstbeheerder blijft toegang behouden
- Veiligheid: nooit afhankelijk van één persoon

### Kan een gebruiker zijn eigen rechten uitbreiden?

**Nee**, alleen dienstbeheerders kunnen rechten toekennen.

**Veiligheid:** Dit voorkomt dat gebruikers zichzelf ongeautoriseerd meer rechten geven.

### Wat als de enige dienstbeheerder vertrekt?

Dit is een noodsituatie. Neem onmiddellijk contact op met:
- **Technische support van Docleas**
- Zij kunnen tijdelijk toegang herstellen

**Preventie:** Zorg altijd voor minimaal 2 dienstbeheerders.

### Kan ik zien wat een gebruiker gedaan heeft in het systeem?

**Ja**, via de **audit log**:
1. Ga naar **Gebruikers** > **Audit log**
2. Jeziet alle acties van alle gebruikers

Dit is nuttig voor:
- Troubleshooting
- Veiligheidscontroles
- Compliance

## Afspraken

### Kan ik een afspraak achteraf wijzigen?

**Ja**, als dienstbeheerder kunt u:
- De datum/tijd wijzigen
- Het product wijzigen
- De burger-gegevens wijzigen
- De afspraak annuleren

**Let op:** Informeer de burger altijd over wijzigingen (het systeem stuurt niet automatisch een melding bij handmatige wijzigingen).

### Wat is een "no-show"?

Een **no-show** is een afspraak waarbij de burger niet komt opdagen zonder te annuleren.

**Registreren:**
1. Open de afspraak
2. Markeer als "No-show"
3. Optioneel: Voeg notitie toe

**Gebruik:** Statistieken tonen het no-show percentage, zodat jemaatregelen kunt nemen (herinneringen, annulatiebeleid).

### Kunnen burgers hun eigen afspraak wijzigen?

**Nee**, burgers kunnen hun afspraak **annuleren** (indien toegestaan), maar niet wijzigen.

Als een burger zijn afspraak wil wijzigen:
1. Burger annuleert de bestaande afspraak
2. Burger maakt een nieuwe afspraak

**Of:** Burger neemt contact op met de gemeente en een medewerker wijzigt de afspraak.

### Hoe ver vooruit kunnen burgers een afspraak maken?

Dit wordt bepaald door de **maximale boekingsperiode** in de gemeente-instellingen.

**Standaard:** 30 dagen

**Wijzigen:**
1. Ga naar **Gemeente-instellingen**
2. Zoek **Maximale boekingsperiode**
3. Pas aan (bijv. 60 dagen)
4. Opslaan

## Meertaligheid

### Moet ik alle teksten in alle talen invullen?

**Ja**, als jemeertaligheid heeft ingeschakeld, moeten alle tekstvelden in alle geactiveerde talen ingevuld worden.

**Wat er gebeurt als jedit niet doet:**
- Het systeem toont de standaardtaal (Nederlands)
- Een waarschuwing verschijnt bij het opslaan

**Tip:** Laat vertalingen controleren door native speakers.

### Kan ik later nog een taal toevoegen?

**Ja**, maar jemoet dan alle bestaande producten en teksten vertalen naar de nieuwe taal.

**Aanbeveling:** Activeer alleen talen die jeecht wilt ondersteunen.

### Kunnen burgers de taal wijzigen tijdens het boeken?

**Ja**, als meertaligheid is ingeschakeld, kunnen burgers aan het begin van de Burgerflow hun voorkeurstaal kiezen.

De gekozen taal blijft behouden tijdens het hele boekingsproces.

## Technische vragen

### Werkt Docleas op mobiele apparaten?

**Ja**, zowel de Burgerflow als de Backoffice-app zijn geoptimaliseerd voor:
- Smartphones (iOS en Android)
- Tablets
- Desktop computers

**Aanbeveling:** Test regelmatig op mobiel of alles goed werkt.

### Kunnen burgers afspraken maken buiten kantooruren?

**Ja**, de Burgerflow is 24/7 beschikbaar. Burgers kunnen op elk moment een afspraak maken (binnen de beschikbare tijdslots).

### Wat gebeurt er bij een technische storing?

**Noodprocedure:**
1. Bestaande afspraken blijven behouden
2. Burgers kunnen tijdelijk geen nieuwe afspraken maken
3. Medewerkers kunnen (indien mogelijk) afspraken handmatig maken
4. Neem contact op met technische support

**Preventie:** Docleas draait op betrouwbare servers met automatische back-ups.

### Hoe worden mijn gegevens beveiligd?

Docleas voldoet aan:
- **AVG/GDPR** - Europese privacywetgeving
- **ISO 27001** - Informatiebeveiliging
- **SSL-encryptie** - Alle data wordt versleuteld
- **Toegangscontrole** - Alleen geautoriseerde gebruikers hebben toegang

**Gegevens worden:**
- Opgeslagen in Europa (Belgische datacenters)
- Regelmatig geback-upt
- Nooit gedeeld met derden zonder toestemming

## Statistieken

### Waarom zie ik geen statistieken?

Mogelijke oorzaken:
1. **Jebent geen dienstbeheerder** - Loketmedewerkers hebben beperkte toegang tot statistieken
2. **Er zijn nog geen afspraken** - Statistieken tonen alleen data van bestaande afspraken
3. **Verkeerde filters** - Controleer of jede juiste periode en filters heeft geselecteerd

### Kan ik statistieken vergelijken met andere gemeenten?

**Nee**, elke gemeente heeft zijn eigen afgeschermde omgeving. Benchmarking met andere gemeenten is niet mogelijk binnen het systeem.

### Hoe lang worden statistieken bewaard?

Statistieken worden **onbeperkt** bewaard, maar:
- Persoonlijke gegevens van burgers worden geanonimiseerd na een bepaalde periode (AVG-compliant)
- Oude data kan gearchiveerd worden

## Problemen oplossen

### Burgers melden dat ze geen tijdslots zien

**Checklist:**
1. ✅ Is het product actief?
2. ✅ Is het werkschema actief?
3. ✅ Zijn er dagen en uren ingesteld in het werkschema?
4. ✅ Is de minimale voorbereidingstijd niet te hoog?
5. ✅ Zijn er geen conflicterende afwezigheden?
6. ✅ Valt de gevraagde periode binnen de maximale boekingsperiode?

**Test zelf:** Probeer via de Burgerflow een afspraak te maken.

### Een medewerker kan niet inloggen

**Mogelijke oorzaken en oplossingen:**

| Probleem | Oplossing |
|----------|-----------|
| Verkeerd wachtwoord | Verstuur wachtwoordherstel |
| Account gedeactiveerd | Activeer de gebruiker opnieuw |
| Account bestaat niet | Controleer of de gebruiker aangemaakt is |
| Verkeerd e-mailadres | Controleer of het e-mailadres correct is |

**Als niks werkt:** Neem contact op met technische support.

### Een afspraak is verdwenen

**Mogelijke oorzaken:**
1. **Afspraak is geannuleerd** - Controleer de status
2. **Verkeerde datum/agenda** - Zoek opnieuw
3. **Technische fout** - Zeer zeldzaam, neem contact op met support

**Herstellen:**
- Geannuleerde afspraken kunnen niet hersteld worden
- Maak een nieuwe afspraak aan voor de burger

## Contact en ondersteuning

### Waar kan ik hulp krijgen?

**Voor technische problemen:**
- **E-mail:** support@docleas.be
- **Telefoon:** [Telefoonnummer support]
- **Openingstijden:** ma-vr 09:00-17:00

**Voor functionele vragen:**
- Raadpleeg deze handleiding
- Neem contact op met jecollega-dienstbeheerders
- Bij twijfel: technische support kan ook helpen

### Hoe vraag ik een nieuwe functie aan?

1. Bespreek intern of de functie waardevol is
2. Neem contact op met support
3. Beschrijf de gewenste functionaliteit
4. Support brengt dit in bij de productontwikkeling

**Let op:** Niet alle functieaanvragen kunnen gerealiseerd worden. Prioriteit wordt bepaald op basis van nut voor alle gemeenten.

### Zijn er trainingen beschikbaar?

**Ja**, neem contact op met support voor:
- Onboarding nieuwe dienstbeheerders
- Opfriscursussen
- Training voor specifieke modules

---

## Navigatie

- [Terug naar handleiding dienstbeheerders](index.md)
- [Vorige: Statistieken](statistieken.md)

---

*Laatst bijgewerkt: 16 februari 2026*
