---
name: release-notes
description: Schrijf release notes voor een nieuwe versie
user_invocable: true
---

# Release Notes Schrijven

Je schrijft release notes voor het Docleas Documentation project. Alle output is in het **Nederlands**.

## Instructies

1. **Lees de projectcontext**: Lees `project-info.md` om het domein, de gebruikersrollen en technische architectuur te begrijpen. Gebruik deze kennis om release notes te schrijven die begrijpelijk zijn voor zowel technische als niet-technische stakeholders.

2. **Bepaal de versie**: Vraag de gebruiker welk versienummer (vX.X.X) deze release krijgt, of gebruik het versienummer dat als argument is meegegeven. Scan de `Releases/` map om de laatst gebruikte versie te bepalen als referentie.

3. **Identificeer de tickets**: Vraag welke tickets (TICK-XXXX) onderdeel zijn van deze release, of scan de `Tickets/` map voor tickets met status `Afgerond` die nog niet in eerdere release notes voorkomen.

5. **Lees de tickets en tests**: Lees de relevante ticketbestanden en bijbehorende integratie tests.

6. **Schrijf de release notes** in `Releases/vX.X.X.md`. Groepeer tickets op basis van hun **type** (Bug, Feature, Technical) met het volgende template:

```markdown
# Release Notes - vX.X.X

**Datum:** [datum]

## Samenvatting
[Korte samenvatting van deze release in 2-3 zinnen]

## Nieuwe Functionaliteiten
- [Beschrijving functionaliteit] ([TICK-XXXX](../Tickets/TICK-XXXX.md))

## Bugfixes
- [Beschrijving bugfix] ([TICK-XXXX](../Tickets/TICK-XXXX.md))

## Technische Verbeteringen
- [Beschrijving technische verbetering] ([TICK-XXXX](../Tickets/TICK-XXXX.md))

## Documentatie
- [Bijgewerkte of nieuwe documentatie] ([link](../Documentation/bestand.md))

---

## Overzicht Tickets
| Ticket | Type | Titel | Status |
|--------|------|-------|--------|
| [TICK-XXXX](../Tickets/TICK-XXXX.md) | Feature | [Titel] | Afgerond |
| [TICK-XXXX](../Tickets/TICK-XXXX.md) | Bug | [Titel] | Afgerond |
| [TICK-XXXX](../Tickets/TICK-XXXX.md) | Technical | [Titel] | Afgerond |
```

## Vereisten voor release notes
- Groepeer tickets op type: **Feature** → Nieuwe Functionaliteiten, **Bug** → Bugfixes, **Technical** → Technische Verbeteringen
- Verwijder lege categorieën (als er geen bugfixes zijn, laat die sectie weg)
- Elke wijziging bevat een referentie naar het bijbehorende ticket
- De samenvatting moet begrijpelijk zijn voor niet-technische stakeholders
- Voeg een tabel toe met alle tickets in deze release
- Beschrijf wijzigingen vanuit het perspectief van de gebruiker

## Na het aanmaken
- Toon de volledige release notes aan de gebruiker
- Geef een overzicht van hoeveel tickets verwerkt zijn per categorie
- Vraag of er aanpassingen nodig zijn
- Stel voor om de status van de verwerkte tickets bij te werken naar `Afgerond` (indien nog niet gedaan)
