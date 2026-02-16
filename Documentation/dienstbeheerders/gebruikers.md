# Gebruikers (DRAFT)

## Overzicht

Als dienstbeheerder beheert jealle gebruikers (medewerkers) binnen jegemeente die toegang hebben tot Docleas. Jekunt gebruikers toevoegen, rechten toekennen en toegang beheren.

## Gebruikersrollen in Docleas

Docleas kent verschillende gebruikersrollen met elk hun eigen rechten:

### Onthaalmedewerker

**Toegang:** Onthaal-app

**Rechten:**
- Burgers aanmelden bij aankomst
- Afspraken maken voor burgers
- Afspraken annuleren
- Afspraken bewerken
- Afspraken zoeken

**Geen toegang tot:**
- Agenda's beheren
- Producten beheren
- Werkschema's beheren
- Gebruikersbeheer

### Loketmedewerker

**Toegang:** Backoffice-app

**Rechten:**
- Eigen agenda raadplegen
- Agenda's van collega's bekijken
- Afspraken maken, annuleren en bewerken
- Afspraken zoeken
- Statistieken bekijken (beperkt)

**Geen toegang tot:**
- Agenda's aanmaken of verwijderen
- Producten beheren
- Werkschema's beheren
- Gebruikersbeheer

### Dienstbeheerder

**Toegang:** Backoffice-app (volledige rechten)

**Rechten:**
- Alle rechten van loketmedewerkers
- Agenda's aanmaken en beheren
- Werkschema's aanmaken en beheren
- Producten aanmaken en beheren
- Gebruikers beheren
- Gemeente-instellingen configureren
- Volledige statistieken bekijken

**Verantwoordelijkheid:**
- Configuratie van het systeem
- Beheer van gebruikers en rechten
- Onderhoud van producten en agenda's

## Toegang tot gebruikersbeheer

1. Log in op de Backoffice-app met jedienstbeheerder-account
2. Navigeer naar **Gebruikers** in het hoofdmenu
3. Jeziet een overzicht van alle gebruikers

## Een nieuwe gebruiker toevoegen

### Stap 1: Gebruiker aanmaken

1. Klik op **+ Nieuwe gebruiker**
2. Vul de volgende gegevens in:

#### Persoonlijke gegevens

**Voornaam** (verplicht)
De voornaam van de medewerker.

**Achternaam** (verplicht)
De achternaam van de medewerker.

**E-mailadres** (verplicht)
Het e-mailadres van de medewerker. Dit wordt gebruikt voor:
- Inloggen op het systeem
- Ontvangen van notificaties
- Wachtwoordherstel

**Let op:** Het e-mailadres moet uniek zijn en kan maar aan één gebruiker gekoppeld worden.

**Telefoonnummer** (optioneel)
Contactnummer van de medewerker (intern gebruik).

#### Gebruikersrol

Selecteer de rol van de gebruiker:
- Onthaalmedewerker
- Loketmedewerker
- Dienstbeheerder

**Tip:** Start nieuwe gebruikers altijd met de laagst benodigde rechten. Jekunt rechten later altijd uitbreiden.

#### Locatie(s)

Selecteer de locatie(s) waar deze gebruiker werkt.

**Enkele locatie:**
Als de medewerker op één locatie werkt, selecteer deze locatie.

**Meerdere locaties:**
Als de medewerker op meerdere locaties werkt, vink alle relevante locaties aan.

**Effect:**
- De gebruiker ziet alleen agenda's en afspraken van de geselecteerde locaties
- Statistieken worden gefilterd op deze locaties

#### Persoonlijke agenda (optioneel)

Als deze gebruiker een persoonlijke agenda krijgt:
- Vink **Persoonlijke agenda aanmaken** aan
- Het systeem maakt automatisch een agenda aan voor deze gebruiker
- De gebruiker wordt eigenaar van deze agenda

### Stap 2: Gebruiker opslaan

Klik op **Opslaan** om de gebruiker aan te maken.

### Stap 3: Toegangsgegevens verzenden

Na het aanmaken:
1. De gebruiker ontvangt automatisch een e-mail met:
   - Inloggegevens
   - Link om wachtwoord in te stellen
   - Instructies om in te loggen
2. De link is 24 uur geldig

**Tip:** Vraag de gebruiker om binnen 24 uur de link te gebruiken. Daarna moet jeeen nieuw wachtwoordherstel sturen.

## Een gebruiker bewerken

1. Ga naar **Gebruikers**
2. Klik op de gebruiker die jewilt bewerken
3. Wijzig de gewenste gegevens:
   - Naam
   - E-mailadres (let op: dit wijzigt de inloggegevens)
   - Rol
   - Locaties
4. Klik op **Opslaan**

**Let op:** Het wijzigen van de rol heeft onmiddellijk effect. De gebruiker krijgt direct meer of minder rechten.

## Gebruikersrol wijzigen

### Rol verhogen (bijv. van loketmedewerker naar dienstbeheerder)

1. Open de gebruiker
2. Wijzig de rol naar de gewenste rol
3. Klik op **Opslaan**
4. Informeer de gebruiker over de nieuwe rechten

**Tip:** Geef alleen dienstbeheerder-rechten aan vertrouwde medewerkers die de verantwoordelijkheid kunnen dragen.

### Rol verlagen

1. Open de gebruiker
2. Wijzig de rol
3. Klik op **Opslaan**
4. Communiceer met de gebruiker waarom rechten zijn aangepast

## Gebruikerstoegang blokkeren

Als een gebruiker tijdelijk geen toegang mag hebben (bijv. langdurige ziekte):

### Gebruiker deactiveren

1. Open de gebruiker
2. Schakel **Actief** uit
3. Klik op **Opslaan**

**Effect:**
- De gebruiker kan niet meer inloggen
- Bestaande afspraken op de persoonlijke agenda blijven staan
- De gebruiker kan later weer geactiveerd worden

**Gebruik dit voor:**
- Tijdelijke afwezigheid (langdurig ziek, ouderschapsverlof)
- Opschorten van toegang tijdens onderzoek
- Seizoenspersoneel dat tijdelijk niet werkt

### Gebruiker heractiveren

1. Open de gebruiker
2. Schakel **Actief** aan
3. Klik op **Opslaan**

De gebruiker kan nu weer inloggen met de bestaande inloggegevens.

## Een gebruiker verwijderen

**Waarschuwing:** Het verwijderen van een gebruiker is permanent en kan niet ongedaan worden gemaakt.

### Wanneer kunt jeeen gebruiker NIET verwijderen?

Een gebruiker kan niet verwijderd worden als:
- De gebruiker eigenaar is van een agenda met afspraken
- De gebruiker de enige dienstbeheerder is

### Gebruiker verwijderen

1. Zorg ervoor dat de gebruiker geen eigenaar meer is van agenda's, of
2. Verwijder eerst de agenda van de gebruiker, of
3. Wijs de agenda toe aan een andere gebruiker

**Stappen:**
1. Open de gebruiker
2. Klik op **Verwijderen** rechtsonder
3. Bevestig de verwijdering

**Effect:**
- De gebruiker kan niet meer inloggen
- Het account wordt permanent verwijderd
- De naam blijft zichtbaar in historische afspraken (AVG-compliant)

## Wachtwoordbeheer

### Wachtwoord herstellen voor een gebruiker

Als een gebruiker zijn wachtwoord vergeten is:

1. Ga naar **Gebruikers**
2. Klik op de gebruiker
3. Klik op **Wachtwoord herstellen**
4. Bevestig

De gebruiker ontvangt een e-mail met een link om een nieuw wachtwoord in te stellen.

**Let op:** De link is 24 uur geldig.

### Wachtwoordbeleid

Wachtwoorden in Docleas moeten voldoen aan:
- Minimaal 8 karakters
- Minimaal 1 hoofdletter
- Minimaal 1 kleine letter
- Minimaal 1 cijfer
- Minimaal 1 speciaal teken (@, #, $, etc.)

**Tip:** Adviseer gebruikers om een wachtwoordmanager te gebruiken.

## Rechten en toegangsbeheer

### Wat kan elke rol zien en doen?

| Functie | Onthaal | Loket | Dienstbeheerder |
|---------|---------|-------|-----------------|
| Afspraken maken | ✅ | ✅ | ✅ |
| Afspraken annuleren | ✅ | ✅ | ✅ |
| Eigen agenda bekijken | ❌ | ✅ | ✅ |
| Alle agenda's bekijken | ❌ | ✅ | ✅ |
| Burgers aanmelden | ✅ | ❌ | ❌ |
| Producten beheren | ❌ | ❌ | ✅ |
| Agenda's aanmaken | ❌ | ❌ | ✅ |
| Werkschema's beheren | ❌ | ❌ | ✅ |
| Gebruikers beheren | ❌ | ❌ | ✅ |
| Statistieken (beperkt) | ❌ | ✅ | ✅ |
| Statistieken (volledig) | ❌ | ❌ | ✅ |
| Gemeente-instellingen | ❌ | ❌ | ✅ |

## Notificaties configureren

### E-mailnotificaties

Gebruikers kunnen notificaties ontvangen voor:

- **Nieuwe afspraak** - Wanneer er een afspraak op hun agenda gemaakt wordt
- **Afspraak geannuleerd** - Wanneer een afspraak geannuleerd wordt
- **Afspraak gewijzigd** - Wanneer een afspraak aangepast wordt
- **Herinnering** - X uur voor een afspraak (configureerbaar)

### Notificaties instellen per gebruiker

1. Open de gebruiker
2. Ga naar het tabblad **Notificaties**
3. Vink aan welke notificaties de gebruiker wil ontvangen
4. Klik op **Opslaan**

**Standaard:** Alle notificaties zijn ingeschakeld.

**Tip:** Laat gebruikers zelf hun notificatie-voorkeuren instellen via hun profiel.

## Gebruikersoverzicht

Op de gebruikersoverzichtspagina ziet u:

| Kolom | Beschrijving |
|-------|--------------|
| **Naam** | Voor- en achternaam |
| **E-mail** | E-mailadres (inloggegevens) |
| **Rol** | Gebruikersrol |
| **Locatie(s)** | Locaties waar de gebruiker werkt |
| **Status** | Actief of inactief |
| **Laatste login** | Wanneer de gebruiker voor het laatst ingelogd heeft |

### Filteren

- **Alle gebruikers** - Toon alle gebruikers
- **Actief** - Toon alleen actieve gebruikers
- **Inactief** - Toon alleen inactieve gebruikers
- **Per rol** - Filter op specifieke rol
- **Per locatie** - Filter op locatie

### Sorteren

Klik op een kolomkop om te sorteren:
- Alfabetisch op naam
- Op rol
- Op laatste login

## Best practices

### Rechten toekennen

- **Principe van minste rechten** - Geef gebruikers alleen de rechten die ze nodig hebben
- **Beperkt aantal dienstbeheerders** - Niet iedereen hoeft dienstbeheerder te zijn
- **Regelmatige controle** - Controleer periodiek of rechten nog juist zijn

### Onboarding nieuwe medewerkers

1. Maak gebruikersaccount aan
2. Creëer persoonlijke agenda (indien nodig)
3. Verstuur inloggegevens
4. Plan een training of introductiemoment
5. Controleer na een week of de medewerker alles gevonden heeft

### Offboarding vertrekkende medewerkers

1. Deactiveer de gebruiker onmiddellijk
2. Wijs afspraken op de persoonlijke agenda toe aan collega's
3. Verwijder de persoonlijke agenda (na verplaatsing afspraken)
4. Verwijder het gebruikersaccount (na 30 dagen)

### Beveiliging

- **Gebruik sterke wachtwoorden** - Forceer het wachtwoordbeleid
- **Tweefactorauthenticatie** - Overweeg dit voor dienstbeheerders
- **Regelmatige audits** - Controleer wie toegang heeft
- **Meld verdachte activiteiten** - Blijf alert op ongebruikelijke login-patronen

### Communicatie

- **Informeer gebruikers** - Communiceer wijzigingen aan rechten
- **Bied ondersteuning** - Zorg dat gebruikers weten waar ze hulp kunnen krijgen
- **Verzamel feedback** - Vraag gebruikers naar hun ervaring met het systeem

## Audit log

Alle wijzigingen aan gebruikers worden gelogd:

1. Ga naar **Gebruikers** > **Audit log**
2. Jeziet een overzicht van:
   - Wie heeft welke wijziging gedaan
   - Wanneer
   - Wat er gewijzigd is

**Gebruik dit voor:**
- Compliance en audits
- Troubleshooting
- Veiligheidscontroles

## Veelgestelde vragen

**Hoeveel gebruikers kan ik aanmaken?**
Er is geen technische limiet, maar jelicentie kan een maximum aantal gebruikers hebben. Controleer jecontract.

**Kan een gebruiker meerdere rollen hebben?**
Nee, elke gebruiker heeft één rol. Dienstbeheerders hebben automatisch alle rechten van lagere rollen.

**Kan een gebruiker zijn eigen rechten wijzigen?**
Nee, alleen dienstbeheerders kunnen rechten wijzigen.

**Wat als de enige dienstbeheerder vertrekt?**
Zorg er altijd voor dat er minimaal twee dienstbeheerders zijn. Neem contact op met support als jetoegang kwijt bent.

**Kunnen gebruikers hun eigen gegevens wijzigen?**
Ja, gebruikers kunnen via hun profiel hun naam, telefoonnummer en notificatie-voorkeuren wijzigen. E-mailadres kan alleen door een dienstbeheerder gewijzigd worden.

**Hoe lang blijft de wachtwoordherstel-link geldig?**
24 uur. Daarna moet jeeen nieuwe link versturen.

**Kan ik zien wanneer een gebruiker voor het laatst ingelogd heeft?**
Ja, dit staat in de kolom "Laatste login" op de gebruikersoverzichtspagina.

---

## Navigatie

- [Terug naar handleiding dienstbeheerders](index.md)
- [Vorige: Werkschema](werkschema.md)
- [Volgende: Statistieken](statistieken.md)

---

*Laatst bijgewerkt: 16 februari 2026*
