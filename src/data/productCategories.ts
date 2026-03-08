export interface ProductCategory {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  applications: string[];
  offerings: string[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: "coating",
    title: "Coating",
    subtitle: "High-Performance Coating Solutions",
    description:
      "We supply a comprehensive range of raw materials for industrial and decorative coatings, including resins, pigments, fillers and additives that deliver superior protection and finish quality.",
    applications: [
      "Protective industrial coatings",
      "Architectural and decorative finishes",
      "Automotive and marine coatings",
      "Powder coatings",
      "Anti-corrosion systems",
    ],
    offerings: [
      "Alkyd and polyester resins",
      "Titanium dioxide and iron oxide pigments",
      "Calcium carbonate and talc fillers",
      "Rheology modifiers and dispersants",
      "UV stabilizers and drying agents",
    ],
  },
  {
    slug: "oilfield",
    title: "Oilfield",
    subtitle: "Raw Materials for Oil & Gas Operations",
    description:
      "We provide specialty chemicals and minerals used in drilling fluids, cementing, stimulation and production operations across upstream and downstream oil and gas sectors.",
    applications: [
      "Drilling fluid formulation",
      "Well cementing operations",
      "Hydraulic fracturing",
      "Production chemical treatment",
      "Pipeline maintenance and protection",
    ],
    offerings: [
      "Barite and bentonite",
      "Calcium chloride and potassium chloride",
      "Xanthan gum and biopolymers",
      "Corrosion inhibitors",
      "Defoamers and surfactants",
    ],
  },
  {
    slug: "plastic",
    title: "Plastic",
    subtitle: "Materials for Plastics & Polymer Processing",
    description:
      "From master-batch production to compounding, we supply mineral fillers, stabilizers and processing aids for a wide range of plastic applications.",
    applications: [
      "PVC compounding",
      "Polyethylene and polypropylene manufacturing",
      "Injection molding and extrusion",
      "Packaging films",
      "Engineering plastics",
    ],
    offerings: [
      "Calcium carbonate (ground and precipitated)",
      "PVC stabilizers and plasticizers",
      "Antioxidants and UV absorbers",
      "Impact modifiers",
      "Processing aids and lubricants",
    ],
  },
  {
    slug: "sealant",
    title: "Sealant",
    subtitle: "Raw Materials for Sealant Manufacturing",
    description:
      "We deliver essential raw materials for silicone, polyurethane and hybrid sealant formulations used in construction and industrial assembly.",
    applications: [
      "Construction joint sealing",
      "Automotive and marine sealants",
      "Structural glazing",
      "Industrial assembly sealing",
      "Weatherproofing systems",
    ],
    offerings: [
      "Fumed silica and precipitated silica",
      "Plasticizers and extender oils",
      "Calcium carbonate fillers",
      "Adhesion promoters",
      "Crosslinkers and catalysts",
    ],
  },
  {
    slug: "paint",
    title: "Paint",
    subtitle: "Premium Ingredients for Paint Formulation",
    description:
      "Our portfolio covers the full spectrum of paint raw materials including pigments, binders, solvents and specialty additives for water-based and solvent-based systems.",
    applications: [
      "Interior and exterior wall paints",
      "Industrial and OEM paints",
      "Wood finishes and stains",
      "Road marking paints",
      "Textured and specialty finishes",
    ],
    offerings: [
      "Titanium dioxide and organic pigments",
      "Acrylic and vinyl acetate emulsions",
      "Cellulose ethers and thickeners",
      "Coalescent agents and solvents",
      "Biocides and preservatives",
    ],
  },
  {
    slug: "adhesives",
    title: "Adhesives",
    subtitle: "Bonding Solutions & Adhesive Raw Materials",
    description:
      "We supply resins, fillers and performance additives for structural, pressure-sensitive and hot-melt adhesive systems across multiple industries.",
    applications: [
      "Packaging and labeling adhesives",
      "Woodworking and lamination",
      "Automotive and aerospace bonding",
      "Tape and label manufacturing",
      "Construction adhesives",
    ],
    offerings: [
      "EVA and polyolefin-based polymers",
      "Tackifying resins",
      "Epoxy and polyurethane systems",
      "Silane coupling agents",
      "Mineral fillers and extenders",
    ],
  },
  {
    slug: "composite",
    title: "Composite",
    subtitle: "Advanced Materials for Composite Manufacturing",
    description:
      "We support the composites industry with resins, reinforcements and specialty fillers for high-strength, lightweight applications.",
    applications: [
      "Fiberglass reinforced products",
      "Wind turbine blade manufacturing",
      "Aerospace structural components",
      "Marine and automotive body panels",
      "Infrastructure reinforcement",
    ],
    offerings: [
      "Unsaturated polyester and vinyl ester resins",
      "Glass fiber and carbon fiber materials",
      "Gel coats and surface treatments",
      "Core materials and microspheres",
      "Release agents and mold compounds",
    ],
  },
  {
    slug: "filtration",
    title: "Filtration",
    subtitle: "Filter Media & Filtration Materials",
    description:
      "Our filtration materials support water treatment, industrial process filtration and environmental remediation with high-purity mineral and chemical solutions.",
    applications: [
      "Municipal water treatment",
      "Industrial effluent filtration",
      "Swimming pool and aquatics",
      "Food and beverage processing",
      "Mining and mineral processing",
    ],
    offerings: [
      "Diatomaceous earth",
      "Activated carbon",
      "Filter sand and gravel",
      "Zeolites and ion-exchange resins",
      "Flocculants and coagulants",
    ],
  },
  {
    slug: "lubricant",
    title: "Lubricant",
    subtitle: "Base Materials for Lubricant Formulation",
    description:
      "We provide base oils, additives and specialty chemicals for the formulation of automotive, industrial and specialty lubricants and greases.",
    applications: [
      "Engine oils and transmission fluids",
      "Hydraulic and compressor oils",
      "Metalworking fluids",
      "Industrial gear lubricants",
      "Greases and specialty lubricants",
    ],
    offerings: [
      "Base oils (Group I, II, III)",
      "Viscosity index improvers",
      "Anti-wear and EP additives",
      "Pour point depressants",
      "Corrosion and oxidation inhibitors",
    ],
  },
  {
    slug: "hii",
    title: "HI&I",
    subtitle: "Household, Industrial & Institutional Chemicals",
    description:
      "We supply surfactants, solvents, builders and specialty chemicals for cleaning products, detergents and sanitation solutions.",
    applications: [
      "Household cleaning products",
      "Industrial degreasers",
      "Institutional sanitizers",
      "Laundry detergents",
      "Personal care formulations",
    ],
    offerings: [
      "Anionic and nonionic surfactants",
      "Sodium hydroxide and soda ash",
      "Chelating agents (EDTA, NTA)",
      "Fragrances and dyes",
      "Optical brighteners and enzymes",
    ],
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    subtitle: "Agri-Chemical & Fertilizer Raw Materials",
    description:
      "We deliver essential minerals and chemicals for fertilizer manufacturing, crop protection and soil amendment across the agricultural sector.",
    applications: [
      "Granular and liquid fertilizers",
      "Crop protection formulations",
      "Soil conditioning",
      "Animal feed supplements",
      "Controlled-release nutrient systems",
    ],
    offerings: [
      "Urea and ammonium sulfate",
      "Phosphoric acid and MAP/DAP",
      "Potash and potassium sulfate",
      "Micronutrient blends (Zn, Mn, Fe, Cu)",
      "Adjuvants and dispersants",
    ],
  },
  {
    slug: "inks",
    title: "Inks",
    subtitle: "Raw Materials for Printing Ink Manufacturing",
    description:
      "We supply pigments, resins, solvents and additives for offset, flexographic, gravure and digital ink formulations.",
    applications: [
      "Offset and lithographic printing",
      "Flexographic packaging inks",
      "Gravure publication inks",
      "Digital and inkjet inks",
      "Screen printing inks",
    ],
    offerings: [
      "Organic and inorganic pigments",
      "Alkyd and acrylic resins",
      "Hydrocarbon and glycol-based solvents",
      "Wax additives and slip agents",
      "Drying agents and anti-skinning additives",
    ],
  },
];
