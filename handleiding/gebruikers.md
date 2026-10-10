---
figures: true
---

# Gebruikers

## Overzicht

Als Applicatiebeheerder beheer je alle gebruikers (medewerkers) binnen je gemeente die toegang hebben tot Docleas. Op het scherm **Gebruikers** kan je gebruikers toevoegen, hun gegevens aanpassen, rollen toekennen of intrekken en hun toegang per module in de tijd afbakenen. Via de periodefilter zie je bovendien hoeveel maanden elke gebruiker in een bepaalde periode actief was.

![Overzicht van alle gebruikers](/screenshots/dienstbeheerders/11_gebruikers_overzicht.jpg)

## Het scherm

### Knoppen rechtsboven

| Icoon | Functie |
|---|---|
| **+** | Voegt een nieuwe gebruiker toe |
| **Geschiedenis** | Opent [auditlog](#wijzigingen-opvolgen-auditlog) |
| **Oog** | Toont of verbergt inactieve gebruikers (standaard verborgen) |
| **Download** | Exporteert de huidige lijst naar CSV |

### Filters

| Filter | Wat | Opmerking |
|---|---|-|
| **Zoeken op naam** | Een deel van de naam | |
| **Rol** | Kies een rol, bv. alleen Onthaal | Standaard "Alle rollen" |
| **Afdeling** | Kies een afdeling | |
| **Periode** | Een begin- en einddatum | Zie [Aantal licenties bepalen](#aantal-licenties-bepalen) |

### De kolommen

| Kolom | Inhoud |
|---|---|
| **Selectievakje** | Selecteer gebruikers voor een [bulkactie](#een-rol-toekennen-aan-meerdere-gebruikers) |
| **Module-iconen** | Welke modules de gebruiker heeft, zie hieronder |
| **Naam** en **Gebruikersnaam** | Klik op de kolomtitel om te sorteren. De gebruikersnaam is het e-mailadres |
| **Rollen** | Eén chip per rol, met een afkorting. Beweeg over de chip voor de volledige naam en afdeling |
| **⋮ (Acties)** | Menu met alle acties voor die gebruiker |

Afkortingen rollen: **LM** LoketMedewerker, **ON** Onthaal, **DE** Deskundige, **DB** Dienstbeheerder, **AB** Applicatiebeheerder.

### Module-iconen en tooltip

Docleas kent twee modules waarvoor je toegang geeft: de **Agendamodule** (kalendericoon) en **Klantgeleiding** (headset-icoon, enkel zichtbaar als Klantgeleiding actief is voor je gemeente). Het icoon verschijnt enkel als de gebruiker voor die module minstens één activiteitsperiode heeft.

Beweeg je muis over de rij (iconen, naam of gebruikersnaam) en er verschijnt een **tooltip** met per module de periode(s) en alle rollen met hun afdeling.

Kleuren geven de status weer, zowel bij de naam als bij de iconen:

| Kleur | Betekenis |
|---|---|
| Grijs | Toegang is nu actief, zonder einddatum |
| **Groen** | Toegang start in de toekomst ("Komt in dienst op …") |
| **Rood** | Toegang is actief maar heeft een einddatum ("Gaat uit dienst op …") |

Een gebruiker die op dit moment voor geen enkele module toegang heeft, is **inactief** en staat niet in de lijst tenzij je inactieve gebruikers toont.

Het label **Extra** achter een naam betekent dat het account is uitgesloten van facturatie.

## Acties

### Een gebruiker toevoegen

Je vult alles in één formulier in: gegevens, rol(len) met afdeling en modules met periode.

1. Klik rechtsboven op **+**
2. Vul **e-mail**, **voornaam** en **achternaam** in
3. Kies bij **Rollen** een rol (verplicht). Bij een afdelingsgebonden rol kies je ook de **afdeling**. Via **+ Rol toevoegen** voeg je extra rollen toe, het kruisje verwijdert een extra rij
4. Vink bij **Modules** minstens één module aan (**Agendamodule** en/of **Klantgeleiding**). Optioneel geef je een **Van**- en **Tot**-datum op. Laat je een datum leeg, dan is die kant van de periode open
5. Klik op **Toevoegen**

De knop **Toevoegen** blijft grijs zolang er geen module is aangevinkt of een verplicht veld ontbreekt.

![Een gebruiker toevoegen](/screenshots/dienstbeheerders/42_gebruikers_gebruiker_toevoegen.gif)

> **Tip:** Gebruikers worden in één keer volledig aangemaakt. Mislukt er iets, dan wordt de gebruiker niet half aangemaakt.

Alle acties per gebruiker vind je achter **⋮** aan het einde van de rij:

![Actiemenu van een gebruiker](/screenshots/dienstbeheerders/61_gebruikers_acties_menu.jpg)

### Gegevens van een gebruiker wijzigen

Wijzig je naam of e-mailadres van een bestaande gebruiker:

1. Klik op **⋮** bij de gebruiker en kies **Gebruiker bewerken**
2. Pas **e-mail**, **voornaam** en/of **achternaam** aan
3. Klik op **Opslaan**

**Opslaan** wordt pas actief na een wijziging en met een geldig e-mailadres.

### Een rol toekennen

1. Klik op **⋮** bij de gebruiker en kies **Rol toevoegen**
2. Kies de rol. Bij elke rol staat een korte beschrijving
3. Kies, indien de rol dit vereist, de **afdeling**
4. Klik op **Toevoegen**

| Rol | Vereist een afdeling | Rechten (samengevat) |
|---|---|---|
| **LoketMedewerker** | Ja | Loketwerking binnen de eigen afdeling |
| **Onthaal** | Ja | Onthaal binnen de eigen afdeling |
| **Deskundige** | Ja | Een eigen of gedeelde agenda binnen de eigen afdeling |
| **Dienstbeheerder** | Ja | Volledig beheer van agenda's, producten, werkschema's en afwezigheden binnen de eigen afdeling |
| **Applicatiebeheerder** | Nee | Volledige toegang tot de agenda, gebruikers en instellingen |

Een gebruiker kan meerdere rollen combineren, eventueel voor verschillende afdelingen (bv. Dienstbeheerder voor "Burgerzaken" en Deskundige voor "Milieu"). Zie ook [Rollen en rechten](/introductie/rollen-en-rechten).

![Een rol toevoegen](/screenshots/dienstbeheerders/22_gebruikers_rol_toevoegen.gif)

#### Een rol toekennen aan meerdere gebruikers

1. Vink links de gebruikers aan. Het vakje in de kolomtitel selecteert alle gebruikers die in de lijst staan
2. Bovenaan de lijst verschijnt een balk met het aantal geselecteerde gebruikers
3. Kies een **rol** (en, indien nodig, een **afdeling**)
4. Klik op **Rol toevoegen**

### Een rol verwijderen

1. Zoek de gebruiker in de lijst
2. Klik op het **kruisje** in de chip van de rol die je wil intrekken
3. Bevestig

De gebruiker behoudt zijn overige rollen en zijn toegang tot de modules.

### Toegang beperken (activiteitsperiodes)

Docleas heeft geen aan/uit-schakelaar voor een gebruiker. In plaats daarvan stel je per module in vanaf en/of tot wanneer de toegang actief is.

1. Klik op **⋮** bij de gebruiker en kies **Activiteitsperiodes beheren**
2. Pas voor een bestaande periode de **Van**- en/of **Tot**-datum aan, of klik op **+ Periode toevoegen** voor een nieuwe, los aansluitende periode
3. Klik op **Opslaan** om alle wijzigingen in één keer te bevestigen

Een gebruiker zonder actieve periode voor een module heeft op dat moment geen toegang meer tot die module. Dit is bruikbaar bij langdurige afwezigheid of een tijdelijke contractwissel.

![Dialoog "Activiteitsperiodes" met de start- en einddatum per module](/screenshots/dienstbeheerders/31_gebruikers_activiteitsperiodes.jpg)

### Toegang direct afsluiten

Wil je alle toegang van een gebruiker in één keer beëindigen, bv. bij uitdiensttreding:

1. Klik op **⋮** bij de gebruiker en kies **Toegang afsluiten**
2. Kies tot wanneer de toegang actief moet blijven
3. Klik op **Bevestigen**

Deze actie sluit alle openstaande periodes van die gebruiker af op de gekozen datum. De actie staat enkel in het menu als de gebruiker nog een open periode heeft. Heeft de gebruiker daarna geen actieve periode meer, dan wordt hij inactief.

![Dialoog "Toegang afsluiten"](/screenshots/dienstbeheerders/51_gebruikers_toegang_afsluiten.jpg)

> **Let op:** Gebruikers worden in het scherm niet verwijderd. Je sluit hun toegang af. Hun rollen en geschiedenis blijven bewaard.

### Aantal licenties bepalen

Met het veld **Periode** (Van – Tot) zie je hoeveel gebruikers in een bepaalde periode actief waren, bv. voor facturatie.

1. Klik op het veld **Periode** en kies een begin- en einddatum
2. De lijst schakelt over naar een weergave met de kolommen **Agendamodule (mnd)** en **Klantgeleiding (mnd)**: het aantal actieve maanden per module binnen de gekozen periode
3. Enkel gebruikers met activiteit in die periode worden getoond. Gebruikers die zijn uitgesloten van facturatie (label **Extra**) ontbreken
4. Wil je de cijfers verder verwerken, bv. in Excel, klik dan op de **download**-knop. De [CSV-export](#exporteren-naar-csv) bevat in deze weergave ook de kolommen **Agendamodule (mnd)** en **Klantgeleiding (mnd)**
5. Klik op het kruisje naast het veld om terug naar de gewone lijst te gaan

### Exporteren naar CSV

Klik op de **download**-knop. Je krijgt het bestand `gebruikers.csv` met de gebruikers die op dat moment in de lijst staan (dus rekening houdend met je filters): naam, gebruikersnaam en rollen. In de periodeweergave komen daar de maanden per module bij.

### Wijzigingen opvolgen (auditlog)

Elke wijziging aan gebruikers wordt gelogd: toevoegen, gegevens wijzigen, rol toekennen of verwijderen, periodes wijzigen en toegang afsluiten.

1. Klik op het **geschiedenis**-icoon rechtsboven
2. Per regel zie je **tijdstip**, **door wie**, voor welke **gebruiker** en welke **actie**
3. Klik op de pijl achteraan een regel om de **oude en nieuwe waarde** per veld te zien

---

*Laatst bijgewerkt: 10 oktober 2026*
