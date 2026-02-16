---
name: integratie-test
description: Schrijf integratie tests op basis van een bestaand ticket
user_invocable: true
---

# Integratie Tests Schrijven

Je schrijft integratie tests voor het Docleas Documentation project. Alle output is in het **Nederlands**.

## Instructies

1. **Lees de projectcontext**: Lees `project-info.md` om het domein, de gebruikersrollen, technische architectuur en domeinbegrippen te begrijpen. Gebruik deze kennis om realistische testscenario's op te stellen met de juiste terminologie en gebruikersflows.

2. **Identificeer het ticket**: Vraag de gebruiker welk ticket (TICK-XXX) getest moet worden, of gebruik het ticketnummer dat als argument is meegegeven.

3. **Lees het ticket**: Open en lees het bijbehorende ticketbestand in `Tickets/TICK-XXX.md`.

4. **Analyseer de acceptatiecriteria**: Elk acceptatiecriterium wordt vertaald naar minimaal één testscenario.

5. **Schrijf de integratie tests** in `IntegrationTests/TICK-XXX-test.md` met het volgende template:

```markdown
# Integratie Tests: TICK-XXX - [Ticket Titel]

## Referentie
- Ticket: [TICK-XXX](../Tickets/TICK-XXX.md)
- Datum: [datum van aanmaak]

---

### Test 1: [Naam van het testscenario]

**Acceptatiecriterium:** [Het criterium dat getest wordt]

**Voorwaarden:**
- [Wat moet er klaarzetten zijn voordat de test begint]

**Stappen:**
1. [Stap 1]
2. [Stap 2]
3. [Stap 3]

**Verwacht resultaat:**
[Wat er moet gebeuren als de test slaagt]

**Status:** ⬜ Niet uitgevoerd

---

### Test 2: [Naam van het testscenario]
[Herhaal bovenstaand format]
```

## Vereisten voor integratie tests
- Elk acceptatiecriterium uit het ticket moet gedekt worden door minimaal één test
- Testscenario's moeten concreet en reproduceerbaar zijn
- Stappen moeten duidelijk genoeg zijn zodat iemand anders de test kan uitvoeren
- Het verwachte resultaat moet objectief verifieerbaar zijn
- Gebruik de statussen: `⬜ Niet uitgevoerd`, `✅ Geslaagd`, `❌ Gefaald`

## Na het aanmaken
- Toon een overzicht van alle tests aan de gebruiker
- Geef aan welke acceptatiecriteria gedekt zijn
- Vraag of er aanvullende testscenario's nodig zijn
