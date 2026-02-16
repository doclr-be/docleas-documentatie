# Docleas Documentation - Projectconventies

## Projectcontext
Lees altijd [project-info.md](project-info.md) voor de volledige projectcontext (domein, gebruikersrollen, technische architectuur en domeinbegrippen) voordat je tickets, tests of documentatie schrijft.

## Taal
Alle communicatie, documentatie, tickets, tests en release notes worden in het **Nederlands** geschreven.

## Projectstructuur
```
Tickets/          - Alle tickets (TICK-XXX.md)
IntegrationTests/ - Integratie tests per ticket (TICK-XXX-test.md)
Documentation/    - Documentatie op basis van tickets
Releases/         - Release notes per versie (vX.X.X.md)
```

## Ontwikkel Lifecycle
Dit project volgt een strikte ontwikkel lifecycle in 4 stappen:

1. **Ticket aanmaken** (`/ticket`) - Maak een ticket aan met beschrijving en acceptatiecriteria
2. **Integratie tests schrijven** (`/integratie-test`) - Schrijf integratie tests op basis van een ticket
3. **Documentatie schrijven** (`/documentatie`) - Schrijf documentatie op basis van een ticket
4. **Release notes schrijven** (`/release-notes`) - Schrijf release notes voor een verzameling tickets

## Conventies

### Tickets
- Bestandsnaam: `TICK-XXX.md` (oplopend nummer met voorloopnullen)
- Elk ticket heeft verplicht: titel, type, beschrijving, acceptatiecriteria en status
- Types: `Bug`, `Feature`, `Technical`
- Statussen: `Open`, `In Behandeling`, `Klaar voor Review`, `Afgerond`

### Integratie Tests
- Bestandsnaam: `TICK-XXX-test.md` (gekoppeld aan ticketnummer)
- Elke test beschrijft: testscenario, voorwaarden, stappen en verwacht resultaat
- Tests worden geschreven op basis van de acceptatiecriteria van het ticket

### Documentatie
- Documentatie wordt geplaatst in de Documentation/ map
- Bestandsnamen zijn beschrijvend in het Nederlands (bijv. `gebruikersbeheer.md`)
- Documentatie bevat referenties naar de bijbehorende tickets

### Release Notes
- Bestandsnaam: `vX.X.X.md` (semantic versioning)
- Bevat overzicht van alle wijzigingen, gegroepeerd per categorie
- Referenties naar bijbehorende tickets

## Ticketnummering
Het eerstvolgende beschikbare ticketnummer wordt automatisch bepaald door de bestaande bestanden in de Tickets/ map te scannen.
