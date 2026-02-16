# Project Info - Docleas

## Context
Docleas is een **SaaS-oplossing** voor **lokale besturen** (gemeenten) in België. Het platform stelt burgers in staat om online afspraken te maken bij hun gemeente en biedt medewerkers tools om deze afspraken en agenda's te beheren.

De oplossing is **multitenant**: elke gemeente is een aparte tenant met eigen configuratie, producten en locaties.

## Gebruikersrollen

### Burgers
Maken afspraken via de **Burgerflow** (publiek toegankelijk, geen login vereist):
- Keuze taal (indien meertalige gemeente)
- Keuze product(en)
- Bekijken productinformatie
- Invullen burgergegevens
- Keuze locatie (indien meerdere locaties)
- Keuze tijdstip
- Bevestiging van afspraak

### Onthaalmedewerkers
Werken via de **Onthaal-app** (ingelogd):
- Burgers aanmelden bij aankomst
- Afspraken maken, annuleren, bewerken en zoeken

### Loketmedewerkers
Werken via de **Backoffice-app** (ingelogd):
- Afspraken maken, annuleren, bewerken en zoeken
- Eigen agenda en agenda's van collega's raadplegen

### Dienstbeheerders
Werken via de **Backoffice-app** (ingelogd, uitgebreide rechten):
- Agenda's aanmaken en beheren
- Werkschema's aanmaken en beheren
- Producten aanmaken en beheren

## Technische Architectuur

### MultiService (Backend)
- **Tech stack:** Spring Boot, MySQL
- **Authenticatie:** Keycloak (Bearer token), aanmelden via de front-end
- **Multitenant:** Ja, elke gemeente is een aparte tenant
- **Workers:** Achtergrondprocessen voor o.a. outbox-verwerking (e-mails versturen)
- **Rol:** Centrale API die door alle front-end applicaties gebruikt wordt

### DoclrWizard (Burgerflow Front-end)
- **Tech stack:** Angular 19
- **Hosting:** CDN
- **Backend:** MultiService
- **Doelgroep:** Burgers (publiek toegankelijk)
- **Type:** Wizard-flow voor het maken van afspraken

### DocleasFe (Medewerkers Front-end)
- **Tech stack:** Angular 19
- **Doelgroep:** Onthaalmedewerkers, loketmedewerkers, dienstbeheerders
- **Rol:** Primaire front-end voor medewerkers; nieuwe schermen worden hier gebouwd

### DoclrLegacy (Legacy Front-end)
- **Tech stack:** AngularJS (legacy)
- **Status:** Wordt uitgefaseerd; bevat nog de agendaweergave en enkele andere schermen
- **Rol:** Alle overige functionaliteit is reeds gemigreerd naar DocleasFe

## Domeinbegrippen
| Term | Betekenis |
|------|-----------|
| Tenant | Een gemeente met eigen configuratie binnen het platform |
| Product | Een dienst die de gemeente aanbiedt (bijv. identiteitskaart, rijbewijs) |
| Werkschema | De beschikbaarheid van een loket/medewerker |
| Agenda | Planning van afspraken per loket of medewerker |
| Outbox | Wachtrij voor asynchrone verwerking (bijv. e-mailnotificaties) |
| Burgerflow | De publieke wizard waarmee burgers een afspraak inplannen |