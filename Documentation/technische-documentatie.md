# Technische Documentatie - Docleas

## Doelgroep

Dit document is bedoeld voor ontwikkelaars, systeembeheerders en technische medewerkers die meer willen weten over de architectuur en werking van het Docleas platform.

---

## Architectuur overzicht

Docleas bestaat uit de volgende componenten:

### Front-end applicaties

**DoclrWizard - Burgerflow**
- **Tech stack:** Angular 19
- **Hosting:** CDN
- **Backend:** MultiService
- **Doelgroep:** Burgers (publiek toegankelijk)
- **Doel:** Wizard-flow voor het maken van afspraken

**DocleasFe - Medewerkers Front-end**
- **Tech stack:** Angular 19
- **Doelgroep:** Onthaalmedewerkers, loketmedewerkers, dienstbeheerders
- **Rol:** Primaire front-end voor medewerkers; nieuwe schermen worden hier gebouwd

**DoclrLegacy - Legacy Front-end**
- **Tech stack:** AngularJS (legacy)
- **Status:** Wordt uitgefaseerd; bevat nog de agendaweergave en enkele andere schermen
- **Rol:** Alle overige functionaliteit is reeds gemigreerd naar DocleasFe

### Backend

**MultiService**
- **Tech stack:** Spring Boot, MySQL
- **Authenticatie:** Keycloak (Bearer token), aanmelden via de front-end
- **Multitenant:** Ja, elke gemeente is een aparte tenant
- **Workers:** Achtergrondprocessen voor o.a. outbox-verwerking (e-mails versturen)
- **Rol:** Centrale API die door alle front-end applicaties gebruikt wordt

---

## Domeinbegrippen

### Functionele begrippen

| Term | Betekenis |
|------|-----------|
| **Tenant** | Een gemeente met eigen configuratie binnen het platform |
| **Product** | Een dienst die de gemeente aanbiedt (bijv. identiteitskaart, rijbewijs) |
| **Werkschema** | De beschikbaarheid van een loket of medewerker |
| **Agenda** | Planning van afspraken per loket of medewerker |
| **Burgerflow** | De publieke wizard waarmee burgers een afspraak inplannen |
| **Locatie** | Fysieke locatie waar de gemeente diensten aanbiedt |

### Technische begrippen

| Term | Betekenis |
|------|-----------|
| **Outbox** | Wachtrij voor asynchrone verwerking (bijv. e-mailnotificaties) |
| **Bearer token** | Authenticatietoken gebruikt voor API-communicatie |
| **Worker** | Achtergrondproces dat taken asynchroon verwerkt |
| **Multitenant** | Eén applicatie die meerdere organisaties (gemeenten) bedient met gescheiden data |

---

## Authenticatie en autorisatie

### Keycloak integratie
- **Authenticatiemethode:** Bearer token authenticatie
- **Aanmelding:** Vindt plaats via de front-end applicaties
- **Token beheer:** Tokens worden beheerd door de front-end en meegegeven bij elke API-call

### Rollen en rechten
- **Burgers:** Geen authenticatie vereist voor het maken van afspraken
- **Onthaalmedewerkers:** Basis toegang tot Onthaal-app
- **Loketmedewerkers:** Toegang tot Backoffice-app met eigen agenda's
- **Dienstbeheerders:** Uitgebreide rechten voor configuratie en beheer

---

## Data model

### Multitenant architectuur
- Elke gemeente is een aparte **tenant** binnen het systeem
- Data is strikt gescheiden per tenant
- Configuratie (producten, werkschema's, locaties) is tenant-specifiek

### Belangrijkste entiteiten
- **Afspraak:** Geplande afspraak met burger, gekoppeld aan product, agenda en tijdstip
- **Product:** Dienst die de gemeente aanbiedt
- **Agenda:** Planning van een specifiek loket of medewerker
- **Werkschema:** Beschikbaarheid patroon (bijvoorbeeld ma-vr 9u-17u)
- **Locatie:** Fysieke locatie waar diensten worden aangeboden

---

## Asynchrone verwerking

### Outbox pattern
- **Doel:** Reliable message delivery voor externe communicatie
- **Werking:**
  1. Acties (zoals e-mail versturen) worden geregistreerd in de outbox
  2. Worker processen verwerken outbox entries asynchroon
  3. Na succesvolle verwerking wordt de entry als afgehandeld gemarkeerd

### Gebruik cases
- E-mail notificaties naar burgers (bevestiging, herinnering)
- E-mail notificaties naar medewerkers
- Andere asynchrone taken

---

## Deployment

### Front-end deployment
- **DoclrWizard:** Gehost op CDN voor snelle toegang
- **DocleasFe:** Gehost op CDN
- **DoclrLegacy:** Legacy hosting (wordt uitgefaseerd)

### Backend deployment
- **MultiService:** Spring Boot applicatie
- **Database:** MySQL
- **Workers:** Draaien als onderdeel van MultiService of als aparte processen

---

## Migratie en legacy

### DoclrLegacy uitgefaseerd
- **Huidige status:** Meeste functionaliteit gemigreerd naar DocleasFe
- **Nog aanwezig:** Agendaweergave en enkele andere schermen
- **Plan:** Volledige uitfasering na migratie resterende functionaliteit

---

## Referenties

Voor meer informatie over specifieke functionaliteit, raadpleeg:
- [Project Info](../project-info.md) - Uitgebreide projectcontext
- [Tickets](../Tickets/) - Feature requests en bug fixes
- [Release Notes](../Releases/) - Versiegeschiedenis en wijzigingen

---

*Laatst bijgewerkt: 16 februari 2026*
