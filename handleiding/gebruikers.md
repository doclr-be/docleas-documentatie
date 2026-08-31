# Gebruikers

## Overzicht

Als Applicatiebeheerder beheer je alle gebruikers (medewerkers) binnen je gemeente die toegang hebben tot Docleas. Je kan gebruikers toevoegen rollen toekennen of verwijderen, toegang tijdelijk of definitief afsluiten, en gebruikers verwijderen. Via de periodefilter bovenaan de lijst zie je bovendien hoeveel gebruikers in een bepaalde periode actief waren.

## Gebruikersrollen in Docleas

Docleas kent de volgende rollen, van meest beperkt tot volledige toegang. Een rol is altijd gekoppeld aan je gemeente, en voor de meeste rollen ook aan een specifieke dienst.

| Rol | Vereist een dienst | Rechten (samengevat) |
|---|---|---|
| **LoketMedewerker** | Ja | Rechten gericht op loketwerking binnen de eigen dienst |
| **Onthaal** | Ja | Rechten gericht op de onthaal binnen de eigen dienst |
| **Deskundige** | Ja | Rechten gericht op een eigen of gedeelde agenda binnen de eigen dienst |
| **Dienstbeheerder** | Ja | Volledig beheer van agenda's, producten, werkschema's en afwezigheden binnen de eigen dienst |
| **Applicatiebeheerder** | Nee | Volledige toegang tot de agenda, gebruikers en instellingen |

Een gebruiker kan meerdere rollen combineren, eventueel voor verschillende diensten (bv. Dienstbeheerder voor dienst "Burgerzaken" en Deskundige voor dienst "Milieu"). Bij het toekennen van een rol kies je uit een dropdown met een korte beschrijving per rol, zodat het verschil tussen rollen duidelijker is.


![Overzicht van alle gebruikers met hun rollen](/screenshots/dienstbeheerders/11_gebruikers_overzicht.jpg)

## Een gebruiker toevoegen

Bij het aanmaken van een gebruiker vul je meteen alles in één formulier in: gegevens, rol(len) met dienst, en activiteitsperiodes.

1. Log in op de Backoffice-app als Applicatiebeheerder
2. Navigeer naar **Gebruikers**
3. Klik rechtsboven op **+**
4. Vul **e-mail**, **voornaam** en **achternaam** in
5. Kies een **rol**, verplicht. Kies indien nodig de bijhorende **dienst**. Via **+ Rol toevoegen** ken je bijkomende rollen toe
6. Vink optioneel de modules aan waartoe de gebruiker toegang krijgt (**Agendamodule**, **Klantgeleiding**) en geef een startdatum (en eventueel einddatum) op
7. Klik op **Toevoegen**

![Dialoog om een nieuwe gebruiker toe te voegen](/screenshots/dienstbeheerders/41_gebruikers_nieuwe_gebruiker.jpg)

## Een rol toekennen (bestaande gebruiker)

1. Ga naar **Gebruikers** en klik naast de gebruiker op **+**
2. Kies de rol, **LoketMedewerker**, **Onthaal**, **Deskundige**, **Dienstbeheerder** of **Applicatiebeheerder** 
3. Kies, indien de rol dit vereist, de dienst waarvoor de rol geldt
4. Klik op **Toevoegen**

![Dialoog om een rol toe te voegen, met de rollenlijst open](/screenshots/dienstbeheerders/21_gebruikers_rol_toevoegen.jpg)

Rollen kunnen ook in bulk toegekend worden aan meerdere geselecteerde gebruikers tegelijk.

## Een rol verwijderen

1. Ga naar **Gebruikers** en selecteer de gebruiker
2. Klik naast de rol die je wil intrekken op **Verwijderen**
3. Bevestig

De gebruiker behoudt zijn overige rollen en blijft gekoppeld aan je gemeente.

## Toegang beperken (activiteitsperiodes)

Docleas heeft geen eenvoudige aan/uit-schakelaar voor een gebruiker. In plaats daarvan stel je per module (**Agendamodule**, **Klantgeleiding**) in vanaf en/of tot wanneer de toegang actief is:

1. Ga naar **Gebruikers** en klik naast de gebruiker op het kalender-icoon
2. Pas voor een bestaande periode de **Van**- en/of **Tot**-datum aan, of klik op **+ Periode toevoegen** om een nieuwe, los aansluitende periode toe te voegen
3. Klik op **Opslaan** om alle wijzigingen in één keer te bevestigen

![Dialoog "Activiteitsperiodes" met de start- en einddatum per module](/screenshots/dienstbeheerders/31_gebruikers_activiteitsperiodes.jpg)

Een gebruiker zonder actieve periode voor een module heeft op dat moment geen toegang meer tot die module, de gebruikerslijst toont dit met een rode "Actief tot"-melding. Dit is bijvoorbeeld bruikbaar bij langdurige afwezigheid of een tijdelijke contractwissel, zonder de gebruiker meteen volledig te verwijderen.

## Toegang direct afsluiten

Deactivatie gebeurd door de activiteitsperiode af te sluiten:

1. Ga naar **Gebruikers**. Heeft de gebruiker nog een openstaande periode in minstens één module, dan zie je een **prullenbak-icoon** naast de rij
2. Klik op de prullenbak
3. Geef aan tot wanneer de toegang van deze gebruiker actief moet blijven
4. Bevestig

![Dialoog "Toegang afsluiten"](/screenshots/dienstbeheerders/51_gebruikers_toegang_afsluiten.jpg)

Dit sluit in één keer alle openstaande activiteitsperiodes van die gebruiker af op de gekozen datum.

## Een gebruiker verwijderen

1. Ga naar **Gebruikers** en selecteer de gebruiker
2. Klik op **Verwijderen**
3. Bevestig

Dit verwijdert alle rollen van de gebruiker en de koppeling met je gemeente. Het onderliggende account blijft bestaan zolang de persoon nog gekoppeld is aan een andere gemeente in Docleas.

## Wijzigingen opvolgen (auditlog)

Elke wijziging aan gebruikers, toevoegen, rol toekennen of verwijderen, toegangsperiode wijzigen, gebruiker verwijderen, wordt gelogd. Je vindt de geschiedenis via **Gebruikers > Auditlog**.

---

*Laatst bijgewerkt: 5 augustus 2026*
