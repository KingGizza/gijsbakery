// LET OP: dit bestand wordt automatisch gemaakt door scripts/maak-zoeklijst.mjs.
// Pas het niet met de hand aan, je wijzigingen worden overschreven.

export interface ZoekPagina {
  naam: string;
  pad: string;
  labels: { label: string; zoekwoorden: string[] }[];
  ingredienten: string[];
}

export const zoeklijst: ZoekPagina[] = [
  {
    "naam": "cupcakes",
    "pad": "/cupcakes",
    "labels": [
      {
        "label": "vegetarisch",
        "zoekwoorden": [
          "vegetarisch",
          "vega",
          "veggie"
        ]
      }
    ],
    "ingredienten": [
      "twee keer bakvorm met vormpjes",
      "roomboter",
      "suiker",
      "bloem",
      "bakpoeder",
      "eieren",
      "zout"
    ]
  },
  {
    "naam": "eierkoeken",
    "pad": "/eierkoeken",
    "labels": [
      {
        "label": "vegetarisch",
        "zoekwoorden": [
          "vegetarisch",
          "vega",
          "veggie"
        ]
      }
    ],
    "ingredienten": [
      "bloem",
      "eieren",
      "rasp van een halve citroen",
      "suiker",
      "zout",
      "thee lepel bakpoeder"
    ]
  },
  {
    "naam": "flatbread crispy chicken",
    "pad": "/flatbreadcrispychicken",
    "labels": [],
    "ingredienten": [
      "kipfilethaasjes",
      "bloem",
      "eieren",
      "panko",
      "flatbread",
      "japanse mayonaise"
    ]
  },
  {
    "naam": "pannekoeken",
    "pad": "/gizza",
    "labels": [
      {
        "label": "vegetarisch",
        "zoekwoorden": [
          "vegetarisch",
          "vega",
          "veggie"
        ]
      }
    ],
    "ingredienten": [
      "bloem",
      "eieren",
      "melk",
      "zout",
      "boter"
    ]
  },
  {
    "naam": "knakworstjes in bladerdeeg",
    "pad": "/knakworstjesinbladerdeeg",
    "labels": [],
    "ingredienten": [
      "bladerdeeg",
      "knakworsten",
      "ei"
    ]
  },
  {
    "naam": "koekjes",
    "pad": "/koekjes",
    "labels": [
      {
        "label": "vegetarisch",
        "zoekwoorden": [
          "vegetarisch",
          "vega",
          "veggie"
        ]
      }
    ],
    "ingredienten": [
      "ongezouten roomboter",
      "witte basterdsuiker",
      "vanillesuiker",
      "eidooier",
      "bloem",
      "zout"
    ]
  },
  {
    "naam": "lasagne",
    "pad": "/lasagne",
    "labels": [
      {
        "label": "vegetarisch",
        "zoekwoorden": [
          "vegetarisch",
          "vega",
          "veggie"
        ]
      }
    ],
    "ingredienten": [
      "boter",
      "bloem",
      "volle melk",
      "nootmuskaat",
      "Parmezaanse kaas",
      "recept pastasaus",
      "verse lasagnevellen",
      "ricotta",
      "Parmezaanse kaas",
      "mozzarella",
      "verse basilicum"
    ]
  },
  {
    "naam": "loempia",
    "pad": "/loempia",
    "labels": [
      {
        "label": "vegetarisch",
        "zoekwoorden": [
          "vegetarisch",
          "vega",
          "veggie"
        ]
      },
      {
        "label": "veganistisch",
        "zoekwoorden": [
          "veganistisch",
          "vegan"
        ]
      }
    ],
    "ingredienten": [
      "loempiavellen (filodeeg)",
      "mihoen (ongekookt)",
      "tauge",
      "julienne gesneden wortel",
      "bosui",
      "ketjap (Conimex)",
      "koriander (of peterselie)",
      "knoflook uitgeperst",
      "gember geraspt",
      "peper en zout",
      "zonnebloemolie om in te bakken"
    ]
  },
  {
    "naam": "macncheese",
    "pad": "/macncheese",
    "labels": [
      {
        "label": "vegetarisch",
        "zoekwoorden": [
          "vegetarisch",
          "vega",
          "veggie"
        ]
      }
    ],
    "ingredienten": [
      "bloemkool (in roosjes)",
      "ui",
      "knoflook",
      "bouillon",
      "melk",
      "geraspte mozzarella",
      "volkorenpasta",
      "olie of boter om in te bakken",
      "paprikapoeder",
      "peper en zout"
    ]
  },
  {
    "naam": "nasi goreng",
    "pad": "/nasigoreng",
    "labels": [],
    "ingredienten": [
      "nasi- of wokgroenten",
      "rijst",
      "eieren",
      "knoflook",
      "ui",
      "rode peper",
      "ketjap manis (Conimex)",
      "sojasaus (Go-Tan)",
      "trassi",
      "komijn",
      "ketoembar (gemalen koriander)",
      "kurkuma",
      "gember (geraspt)",
      "olie om in te bakken"
    ]
  },
  {
    "naam": "pasta pesto",
    "pad": "/pastapesto",
    "labels": [
      {
        "label": "vegetarisch",
        "zoekwoorden": [
          "vegetarisch",
          "vega",
          "veggie"
        ]
      }
    ],
    "ingredienten": [
      "pasta (bijvoorbeeld penne of fusilli)",
      "potje groene pesto (190 gram)",
      "cherrytomaatjes",
      "courgette",
      "Parmezaanse kaas",
      "pijnboompitten",
      "olijfolie om in te bakken",
      "peper en zout"
    ]
  },
  {
    "naam": "pastasaus",
    "pad": "/pastasaus",
    "labels": [
      {
        "label": "vegetarisch",
        "zoekwoorden": [
          "vegetarisch",
          "vega",
          "veggie"
        ]
      },
      {
        "label": "veganistisch",
        "zoekwoorden": [
          "veganistisch",
          "vegan"
        ]
      }
    ],
    "ingredienten": [
      "gepelde tomaten (uit blik)",
      "ui",
      "knoflook",
      "olijfolie",
      "oregano",
      "tijm",
      "wortel",
      "peper en zout",
      "basilicum (vers)",
      "peterselie (vers)"
    ]
  },
  {
    "naam": "pizza",
    "pad": "/pizza",
    "labels": [
      {
        "label": "vegetarisch",
        "zoekwoorden": [
          "vegetarisch",
          "vega",
          "veggie"
        ]
      },
      {
        "label": "veganistisch",
        "zoekwoorden": [
          "veganistisch",
          "vegan"
        ]
      }
    ],
    "ingredienten": [
      "bloem",
      "droge gist",
      "water",
      "olijfolie",
      "zout",
      "tomatenpuree",
      "knoflook",
      "olijfolie",
      "kruiden naar smaak (bijv. oregano, basilicum, peper, zout)",
      "[en wat je zelf er op wil]"
    ]
  },
  {
    "naam": "poffertjes",
    "pad": "/poffertjes",
    "labels": [
      {
        "label": "vegetarisch",
        "zoekwoorden": [
          "vegetarisch",
          "vega",
          "veggie"
        ]
      }
    ],
    "ingredienten": [
      "bloem",
      "bakpoeder",
      "suiker",
      "zout",
      "melk",
      "ei",
      "gesmolten boter"
    ]
  },
  {
    "naam": "waarom doe ik dit",
    "pad": "/waaromdoeikdit",
    "labels": [],
    "ingredienten": []
  },
  {
    "naam": "wie ben ik",
    "pad": "/wiebenik",
    "labels": [],
    "ingredienten": []
  }
];
