# Hoe beschikbaarheid berekend wordt

De tijdsloten die een burger in de burgerflow ziet, zijn niet ergens rechtstreeks
ingegeven. Ze zijn het **resultaat van meerdere lagen die samenvallen**. Als een burger
"geen vrije momenten" ziet terwijl je dat niet verwacht, zit het antwoord bijna altijd in
één van deze lagen.

## De lagen

```
Werkschema van de agenda      →  ruwe tijdsloten (wanneer is er iemand?)
   ×
Beschikbaarheid van het product →  voor welke periode / voorwaarden is dít product boekbaar?
   ×
Koppeling product ↔ agenda      →  hangt het product wel aan deze agenda?
   −
Reeds geboekte afspraken        →  bezette sloten vallen weg
   −
Afwezigheden en blokkades       →  vakantie, vergadering, benodigdheid bezet
   =
Wat de burger ziet
```

## Laag per laag

### 1. Werkschema

Het [werkschema](/handleiding/werkschemas/) van een agenda zegt: op deze dag, van dit uur
tot dit uur, zijn er sloten van X minuten, voor beschikbaarheid *type Y*. Geen werkschema
(of geen actief werkschema voor die datum) = geen sloten.

Op elk moment is er **precies één** werkschema per agenda actief, gekozen op basis van de
datum van de afspraak.

### 2. Beschikbaarheid van het product

De [beschikbaarheidsinstellingen](/handleiding/producten/beschikbaarheden) van het product
bepalen voor welke **periode** het boekbaar is en aan welk **type / welke beschikbaarheid**
het hangt. Dat type moet overeenkomen met wat het werkschema aanmaakt.

### 3. Koppeling en zichtbaarheid

Het product moet aan de agenda gekoppeld zijn, en op **zichtbaar** + **online boekbaar**
staan. De [structuurpagina](/handleiding/producten/structuur) toont deze koppelingen.

### 4. Aftrek: boekingen, afwezigheden, benodigdheden

Bezette sloten, afwezigheden van medewerkers en bezette benodigdheden vallen weg uit het
aanbod.

### 5. Termijnen

De boekingstermijn (uit de [gemeente-instellingen](/handleiding/gemeente-instellingen) of
per product) knipt de randen af: niet te kort op voorhand, niet te ver vooruit.

## Debug-volgorde bij "geen sloten"

1. Heeft de agenda een **actief werkschema** voor die datum?
2. Maakt dat werkschema sloten aan voor het **type** dat het product gebruikt?
3. Valt de datum binnen de **beschikbaarheidsperiode** van het product?
4. Staat het product **zichtbaar + boekbaar** en gekoppeld aan die agenda?
5. Is alles al **volgeboekt** of geblokkeerd door afwezigheden?
6. Zit je binnen de **boekingstermijn**?
