# Multi-tenant: één omgeving per bestuur

Docleas is **multi-tenant**: één applicatie bedient veel lokale besturen, met strikt
gescheiden data. Elk bestuur is een **tenant** met een eigen, afgeschermde omgeving.

## Wat is gescheiden per bestuur

- Producten, groepen, agenda's, werkschema's, locaties
- Afspraken en burgergegevens
- Gebruikers en rollen
- Gemeente-instellingen, teksten, huisstijl
- Statistieken

Een gebruiker of dienstbeheerder van bestuur A ziet nooit data van bestuur B. Benchmarking
tussen besturen is daarom binnen het systeem niet mogelijk.

## Wat gedeeld is

- De **applicatie zelf** en nieuwe features (iedereen zit op dezelfde versie)
- De **LPDC**-productcatalogus als bron voor productteksten
- Globale, door de leverancier beheerde instellingen (via de superuser-rol)

## Gevolgen in de praktijk

- Een burger die bij meerdere besturen afspraken maakt, heeft één onderliggend account maar
  aparte afspraken per bestuur.
- Een medewerker die voor twee besturen werkt, heeft per bestuur een aparte roltoekenning.
- Configuratie kan niet "gekopieerd" worden tussen besturen buiten de leverancier om.

## Meer weten

- [Rollen en rechten in detail](/concepten/rollen-en-rechten)
