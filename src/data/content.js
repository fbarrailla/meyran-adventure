// Realistic placeholder content for Selasar.
// Three pillars: cultures & people, tech notes, Indonesian kitchen.
// Unsplash hot-links — fine for demos, swap for hosted assets in production.

export const brand = {
  name: 'Selasar',
  tagline: 'A verandah for ideas, kitchens, and strangers.',
  origin:
    'Selasar — Indonesian for the covered walkway where neighbors trade gossip, recipes, and weather forecasts.'
}

export const navLinks = [
  { label: 'Encounters', href: '#features' },
  { label: 'Tech Notes', href: '#articles' },
  { label: 'Kitchen', href: '#features' },
  { label: 'Field Notes', href: '#articles' },
  { label: 'About', href: '#about' }
]

export const heroStats = [
  { value: '42', label: 'Cultures documented' },
  { value: '168', label: 'Recipes tested' },
  { value: '11k', label: 'Readers in the verandah' }
]

export const features = [
  {
    id: 'cultures',
    eyebrow: 'Cultures & Encounters',
    title: 'Strangers, only for the first ten minutes.',
    copy:
      "Long-form portraits of the people we meet on the road — a sambal grandmother in Yogyakarta, a coffee co-op in Aceh, a midnight bus driver in Sulawesi. Stories about the small, deliberate work of being curious in someone else's language.",
    cta: 'Read the encounters',
    image:
      'https://images.unsplash.com/photo-1604609177280-c511c54a52ce?auto=format&fit=crop&w=1400&q=80',
    accent: 'sunset',
    tags: ['Portraits', 'Languages', 'Hosting', 'Community']
  },
  {
    id: 'tech',
    eyebrow: 'Tech Notes',
    title: 'A working blog for travelers who ship.',
    copy:
      'AI tools that actually earn their keep, travel-tech that survives airport security, gear reviews that admit what they cost, and an honest take on the digital-nomad lifestyle — written by people who have flown more than they have slept.',
    cta: 'Open tech notes',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=80',
    accent: 'cyan',
    tags: ['AI', 'Gadgets', 'Remote Work', 'Gear Reviews', 'Productivity']
  },
  {
    id: 'kitchen',
    eyebrow: 'Indonesian Kitchen',
    title: 'Recipes the way your future mother-in-law makes them.',
    copy:
      'Rendang that takes four hours and is worth every minute. Sambal that is not a condiment but a worldview. Indonesian recipes written for cooks abroad — with substitutes, sourcing notes, and zero apologies for the chili count.',
    cta: 'Step into the kitchen',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=80',
    accent: 'navy',
    tags: ['Rendang', 'Sambal', 'Nasi', 'Kue']
  }
]

export const articles = [
  {
    id: 'a1',
    category: 'Encounters',
    title: 'The sambal grandmother of Pasar Beringharjo.',
    excerpt:
      'I came for terasi. I left with three jars, a marriage proposal for my brother, and an unreasonable opinion about cabe rawit. A portrait of Ibu Sari, who has stood at the same stall for thirty-one years.',
    author: 'Ayu Lestari',
    date: 'May 09, 2026',
    readTime: '14 min read',
    image: '/images/sambal-grandmother.png',
    featured: true
  },
  {
    id: 'a2',
    category: 'Tech Notes',
    title: 'The boring stack that ran my company from a warung.',
    excerpt:
      'Postgres, a queue, and one frontend framework I am too tired to argue about. Six months in, here is what I would do exactly the same — and the one thing I should have done sooner.',
    author: 'Mateo Reyes',
    date: 'May 02, 2026',
    readTime: '9 min read',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'a3',
    category: 'Kitchen',
    title: 'Rendang, slowly: the four-hour version that earns the name.',
    excerpt:
      'A recipe in three movements — the spice paste that smells like rain, the long reduction that almost feels like a meditation, and the moment the coconut milk finally surrenders to the meat.',
    author: 'Nadia Pranata',
    date: 'Apr 25, 2026',
    readTime: '11 min read',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'a4',
    category: 'Encounters',
    title: 'Learning Bahasa, one polite humiliation at a time.',
    excerpt:
      'On the strange dignity of being five years old again in a language you thought you had figured out — and the three small habits that finally moved the needle.',
    author: 'Léa Marchand',
    date: 'Apr 18, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'a5',
    category: 'AI',
    title: '10 AI tools I actually open every working day in 2026.',
    excerpt:
      'No demo-day darlings, no waitlists I forgot to leave. The exact ten apps that earn a spot in my dock, what each replaced, and the two I would pay double for.',
    author: 'Sven Aalto',
    date: 'Apr 11, 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'a6',
    category: 'Gear',
    title: 'The 14-inch travel laptop verdict, after 80 flights.',
    excerpt:
      'Build quality after a year in a hot backpack, the keyboard that survived three monsoons, battery life that holds up on the Jakarta–Bali shuttle, and the one port I still complain about.',
    author: 'Iris Halvorsen',
    date: 'Apr 04, 2026',
    readTime: '10 min read',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'a7',
    category: 'Remote Work',
    title: 'Best cities for remote work in 2026 — an honest ranking.',
    excerpt:
      'Internet that survives a Friday afternoon, coffee that respects you back, visas that make sense, and the small uncomfortable truths about each of the top eleven.',
    author: 'Mateo Reyes',
    date: 'Mar 28, 2026',
    readTime: '13 min read',
    image:
      'https://images.unsplash.com/photo-1542317854-aabc44a8e3d8?auto=format&fit=crop&w=1200&q=80'
  }
]

// Article category filters — surfaced in the Articles section header.
export const articleCategories = [
  'All',
  'Encounters',
  'AI',
  'Gear',
  'Remote Work',
  'Tech Notes',
  'Kitchen'
]

export const footerLinks = {
  Read: [
    { label: 'Encounters', href: '#' },
    { label: 'Tech Notes', href: '#' },
    { label: 'Kitchen', href: '#' },
    { label: 'Archive', href: '#' }
  ],
  Kitchen: [
    { label: 'Recipe index', href: '#' },
    { label: 'Pantry sourcing', href: '#' },
    { label: 'Substitutes guide', href: '#' },
    { label: 'Cooking classes', href: '#' }
  ],
  Selasar: [
    { label: 'About', href: '#' },
    { label: 'Contributors', href: '#' },
    { label: 'Hosting program', href: '#' },
    { label: 'Contact', href: '#' }
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' }
  ]
}

export const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Substack', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'GitHub', href: '#' }
]
