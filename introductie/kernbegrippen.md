# Kernbegrippen

De vijf begrippen hieronder komen overal in Docleas terug. Wie deze begrijpt, begrijpt
het grootste deel van het systeem.

## Product

Een dienst die je lokaal bestuur aanbiedt en waarvoor een burger een afspraak kan maken,
bijvoorbeeld *identiteitskaart aanvragen* of *rijbewijs vernieuwen*. Een product bevat
teksten voor de burger, in te vullen velden, een duur en beschikbaarheidsregels.

## Agenda

De planning van één loket of medewerker. Afspraken worden op een agenda geboekt. Een
product wordt aan één of meer agenda's gekoppeld.

## Werkschema

Bepaalt **wanneer** een agenda beschikbaar is en voor welke producten, een uitgebreide
vorm van openingsuren. Zonder werkschema zijn er geen vrije tijdsloten. Een werkschema
heeft een startdatum en bestaat uit één of meer weken; op elk moment is er precies één
werkschema per agenda actief.

## Beschikbaarheid

Het resultaat van **product-instellingen + werkschema's** samen: de concrete tijdsloten
die een burger te zien krijgt.

## Burgerflow

De publieke wizard (geen login) waarmee een burger stap voor stap een afspraak inplant:
taal → product → info → locatie → tijdstip → gegevens → bevestiging. Stappen die niet van
toepassing zijn, worden overgeslagen.

## Nog twee die je snel tegenkomt

- **Groep**, een manier om producten te ordenen, en om *tegeltjes* te maken op de
  startpagina van de burgerflow. Kan genest worden.
- **Dienst / afdeling**, de organisatorische eenheid waaraan rollen en meestal ook
  producten en agenda's hangen. Een *dienstoverschrijdende* groep doorbreekt dat bewust.
