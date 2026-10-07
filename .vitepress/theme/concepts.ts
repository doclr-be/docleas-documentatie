// Centrale woordenschat voor concept-tags op how-to-pagina's.
//
// Gebruik in de frontmatter van een handleiding-/opleidingspagina:
//
//   ---
//   title: Agenda's
//   concepts: [agenda, werkschema, beschikbaarheid]
//   ---
//
// De sleutels hieronder zijn de enige geldige waarden. Onbekende sleutels
// geven een waarschuwing in de dev-console en worden niet getoond.
//
// 'link' wijst nu naar de anker-secties op Kernbegrippen, omdat 'concepten/**'
// nog niet mee naar de site gaat (zie srcExclude in config.ts). Zodra die
// sectie live staat, kun je deze links laten wijzen naar /concepten/....

export interface Concept {
  /** Korte label op de badge. */
  label: string
  /** Doelpagina (of anker) met de uitleg van het concept. */
  link: string
}

export const CONCEPTS = {
  product: { label: 'Product', link: '/introductie/kernbegrippen#product' },
  agenda: { label: 'Agenda', link: '/introductie/kernbegrippen#agenda' },
  onthaal: { label: 'Onthaal', link: '/introductie/kernbegrippen#onthaal' },
  werkschema: { label: 'Werkschema', link: '/introductie/kernbegrippen#werkschema' },
  beschikbaarheid: {
    label: 'Beschikbaarheid',
    link: '/introductie/kernbegrippen#beschikbaarheid',
  },
  burgerflow: { label: 'Burgerflow', link: '/introductie/kernbegrippen#burgerflow' },
  groep: {
    label: 'Groep',
    link: '/introductie/kernbegrippen#nog-twee-die-je-snel-tegenkomt',
  },
  dienst: {
    label: 'Dienst / afdeling',
    link: '/introductie/kernbegrippen#nog-twee-die-je-snel-tegenkomt',
  },
  'rollen-en-rechten': {
    label: 'Rollen & rechten',
    link: '/introductie/rollen-en-rechten',
  },
  'multi-tenant': { label: 'Multi-tenant', link: '/introductie/' },
} satisfies Record<string, Concept>

export type ConceptKey = keyof typeof CONCEPTS

export function isConceptKey(key: string): key is ConceptKey {
  return Object.prototype.hasOwnProperty.call(CONCEPTS, key)
}
