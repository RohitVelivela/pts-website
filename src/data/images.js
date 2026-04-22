// All photos from Unsplash — free to use, no attribution required for display
const U = 'https://images.unsplash.com/photo-'

export const images = {
  // ── HERO ──────────────────────────────────────────────────────────────────
  hero:          `${U}1581092335397-9583eb92d232?w=1600&q=85&auto=format&fit=crop`,   // engineer at computer
  heroBg:        `${U}1504307651254-35680f356dfd?w=1800&q=80&auto=format&fit=crop`,   // industrial plant wide
  heroAlt:       `${U}1565008576549-57569a49371d?w=1600&q=85&auto=format&fit=crop`,   // pipeline sunset

  // ── SERVICES ──────────────────────────────────────────────────────────────
  plantEngineering:       `${U}1565008576549-57569a49371d?w=900&q=85&auto=format&fit=crop`,   // refinery pipes
  bimServices:            `${U}1486325212027-8081e485255e?w=900&q=85&auto=format&fit=crop`,   // 3D BIM model
  itServices:             `${U}1518770660439-4636190af475?w=900&q=85&auto=format&fit=crop`,   // server/IT
  analysisServices:       `${U}1454165804606-c3d57bc86b40?w=900&q=85&auto=format&fit=crop`,   // data analysis
  cadDrafting:            `${U}1581092918056-0c4c3acd3789?w=900&q=85&auto=format&fit=crop`,   // CAD drawing
  reverseEngineering:     `${U}1504307651254-35680f356dfd?w=900&q=85&auto=format&fit=crop`,   // industrial machinery
  projectManagement:      `${U}1552664730-d307ca884978?w=900&q=85&auto=format&fit=crop`,   // project board
  procurement:            `${U}1586528116311-ad8dd3c8310d?w=900&q=85&auto=format&fit=crop`,   // supply chain
  basicDetailedEng:       `${U}1581092335397-9583eb92d232?w=900&q=85&auto=format&fit=crop`,   // engineer working

  // ── INDUSTRIES ────────────────────────────────────────────────────────────
  oilGas:         `${U}1611273426858-450d8e3c9fce?w=900&q=85&auto=format&fit=crop`,   // offshore oil rig
  petrochemical:  `${U}1573164574572-cb89e39749b4?w=900&q=85&auto=format&fit=crop`,   // chemical plant
  chemical:       `${U}1532187863486-abf9dbad1b69?w=900&q=85&auto=format&fit=crop`,   // lab / chemical
  powerPlant:     `${U}1466611653911-95081537e5b7?w=900&q=85&auto=format&fit=crop`,   // power station towers
  waterTreatment: `${U}1494412574643-ff11b0a5c1c3?w=900&q=85&auto=format&fit=crop`,   // water treatment
  cryogenic:      `${U}1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop`,   // cold/industrial tanks
  refinery:       `${U}1565008576549-57569a49371d?w=900&q=85&auto=format&fit=crop`,   // refinery pipes
  hydrocarbon:    `${U}1611273426858-450d8e3c9fce?w=900&q=85&auto=format&fit=crop`,   // oil/gas facility
  processPlant:   `${U}1573164574572-cb89e39749b4?w=900&q=85&auto=format&fit=crop`,   // process plant
  pharma:         `${U}1532187863486-abf9dbad1b69?w=900&q=85&auto=format&fit=crop`,   // pharma/lab

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  aboutTeam:  `${U}1556761175-5973dc0f32e7?w=1600&q=85&auto=format&fit=crop`,   // team meeting
  team:       `${U}1556761175-5973dc0f32e7?w=900&q=85&auto=format&fit=crop`,
  office:     `${U}1497366754035-f200968a6e72?w=900&q=85&auto=format&fit=crop`,   // modern office
  engineers:  `${U}1581092335397-9583eb92d232?w=900&q=85&auto=format&fit=crop`,   // engineers at work
  blueprint:  `${U}1454165804606-c3d57bc86b40?w=900&q=85&auto=format&fit=crop`,   // precision drafting/design

  // ── BLOG ──────────────────────────────────────────────────────────────────
  blog1: `${U}1488590528505-98d2b5aba04b?w=700&q=80&auto=format&fit=crop`,   // tech/digital
  blog2: `${U}1504307651254-35680f356dfd?w=700&q=80&auto=format&fit=crop`,   // industrial
  blog3: `${U}1581092918056-0c4c3acd3789?w=700&q=80&auto=format&fit=crop`,   // cad/drawing

  // ── PAGE COVER HEROES ─────────────────────────────────────────────────────
  coverIndustries: `${U}1504307651254-35680f356dfd?w=1800&q=85&auto=format&fit=crop`,  // wide industrial plant at dusk
  coverBlog:       `${U}1488590528505-98d2b5aba04b?w=1800&q=85&auto=format&fit=crop`,  // tech/engineering workspace
  coverCareers:    `${U}1522071820081-009f0129c71c?w=1800&q=85&auto=format&fit=crop`,  // collaborative team office

  // ── STATS BACKGROUND ──────────────────────────────────────────────────────
  statsBg: `${U}1504307651254-35680f356dfd?w=1600&q=60&auto=format&fit=crop`,
}

// Map service slugs → image URLs
export const serviceImages = {
  'plant-engineering':          images.plantEngineering,
  'bim-services':               images.bimServices,
  'it-services':                images.itServices,
  'analysis-services':          images.analysisServices,
  'cad-drafting':               images.cadDrafting,
  'reverse-engineering':        images.reverseEngineering,
  'project-management':         images.projectManagement,
  'procurement':                images.procurement,
  'basic-detailed-engineering': images.basicDetailedEng,
}

// Map industry names → image URLs
export const industryImages = {
  'Oil & Gas':        images.oilGas,
  'Petrochemical':    images.petrochemical,
  'Chemical Plants':  images.chemical,
  'Power Plants':     images.powerPlant,
  'Water Treatment':  images.waterTreatment,
  'Cryogenic Plants': images.cryogenic,
  'Refineries':       images.refinery,
  'Hydrocarbon':      images.hydrocarbon,
  'Process Plants':   images.processPlant,
  'Pharmaceutical':   images.pharma,
}
