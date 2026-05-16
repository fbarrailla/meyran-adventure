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
    image: '/images/strangers-encounters.png',
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
    subtitle:
      'Three jars, thirty-one years, and a worldview shaped entirely by chili.',
    excerpt:
      'I came for terasi. I left with three jars, a marriage proposal for my brother, and an unreasonable opinion about cabe rawit. A portrait of Ibu Sari, who has stood at the same stall for thirty-one years.',
    author: 'Ayu Lestari',
    authorBio:
      'Writes long-form portraits from kitchens, markets, and the occasional minibus. Based in Yogyakarta.',
    date: 'May 09, 2026',
    readTime: '14 min read',
    image: '/images/sambal-grandmother.png',
    heroLayout: 'poster',
    featured: true,
    body: [
      {
        type: 'p',
        text:
          'You smell Ibu Sari\'s stall before you see it. Three rows in, past the dried-fish vendors and the stacks of palm sugar wrapped in banana leaf, there is a corner where the air turns to garlic and shrimp paste and something sharper underneath — the unmistakable warning shot of cabe rawit, the small red chilis that Indonesians measure not in counts but in courage.'
      },
      {
        type: 'p',
        text:
          'She is small, sun-folded, and wearing a faded batik apron over a t-shirt that reads, improbably, "Cornell Lacrosse 2008." When I ask about it, she waves a hand. "A boy left it. He was here for three months. I keep it because it dries fast."'
      },
      {
        type: 'h2',
        text: 'A stall, an inheritance, a worldview'
      },
      {
        type: 'p',
        text:
          'Ibu Sari has stood at this stall every morning since 1995. She inherited it from her mother, who inherited it from her aunt, who set it up after the war when Yogyakarta was rebuilding itself with whatever it had — which was mostly rice, mostly chilis, mostly women. The market itself is older. Pasar Beringharjo has been the city\'s commercial heart since the sultan was its primary customer.'
      },
      {
        type: 'p',
        text:
          'She does not talk about herself easily. She talks about ingredients. About the differences between cabe rawit from Magelang ("clean heat, no bitterness") and from Brebes ("for people who like to suffer in a polite way"). About terasi that has been aged twelve months versus six ("the twelve is for grown-ups"). About the right size for shallot — she will demonstrate with her thumbnail, twice, until you nod that yes, you understand, you will not insult the sambal with sloppy shallots.'
      },
      {
        type: 'quote',
        text:
          'Sambal is not a sauce. It is a person. You will recognize it if it is yours.',
        cite: 'Ibu Sari'
      },
      {
        type: 'p',
        text:
          'I asked her what she meant. She thought about it for a long time, restacked the jars on her counter, swatted a fly, then said: "Some sambal is loud. Some is shy. Some is the same every day, like a husband. Mine — mine has a temper, but it apologizes."'
      },
      {
        type: 'h2',
        text: 'The proposal'
      },
      {
        type: 'p',
        text:
          'About forty minutes in, after I had bought two jars of her house sambal bawang and one of the smoked variant she only makes on Tuesdays, Ibu Sari leaned forward conspiratorially. She asked if I had a brother. I said yes. She asked his age. I said thirty-four. She nodded slowly, the way a market trader nods at an acceptable opening price, and informed me that her niece — a nurse, very serious, makes excellent peyek — was thirty-one and unmarried and would consider it, if he could cook.'
      },
      {
        type: 'p',
        text:
          'I said my brother could not cook. Ibu Sari shrugged and said this was correctable. The niece, she added, was not.'
      },
      {
        type: 'h2',
        text: 'What she sells, exactly'
      },
      {
        type: 'p',
        text:
          'Ibu Sari\'s stall has eleven different sambals at any given time, rotated by season and by what her supplier has brought in from the highlands. The headliner is sambal bawang — shallots, garlic, cabe rawit, a generous amount of salt, and her own terasi, fried hot and pounded in a stone mortar. It is what she calls a "morning sambal," meant to be eaten over rice with anything fried.'
      },
      {
        type: 'p',
        text:
          'The smoked variant, which she does on Tuesdays because that is when her cousin brings smoked coconut husks down from Kaliurang, is darker and slower. It tastes like a campfire that has read books. I bought two jars and immediately regretted not buying four.'
      },
      {
        type: 'quote',
        text:
          'You do not need a recipe. You need to taste it three hundred times. Then you have a recipe.'
      },
      {
        type: 'h2',
        text: 'The walk back'
      },
      {
        type: 'p',
        text:
          'I left the market with three jars wrapped in newspaper, a phone number written on the back of a parking receipt (the niece\'s), and the unshakable feeling that I had been gently but firmly absorbed into a logistical operation that had been running long before I arrived and would continue long after I left. Ibu Sari did not wave when I left. She was already explaining cabe rawit to the next person.'
      },
      {
        type: 'p',
        text:
          'When I got home and opened a jar, I understood what she had meant about the apology. The heat arrives first and announces itself, but underneath there is a quiet sweetness from the shallots, a smokiness from the terasi, and a kind of structural calm that holds the whole thing together. Loud, but considerate. A sambal with a temper. A sambal that apologizes.'
      },
      {
        type: 'p',
        text:
          'I am eating it now, on rice, as I write this. My brother has not been told about the niece.'
      }
    ]
  },
  {
    id: 'a8',
    category: 'Tech Notes',
    title: 'React 19 in production: what earned a spot, what did not.',
    subtitle:
      'Eighteen months, three apps, one legacy migration — and the quiet death of react-helmet.',
    excerpt:
      'Actions that finally make forms feel like a first-class concern, a use() hook I am still working out, Server Components I tried and walked back from, and the one new feature I did not see coming.',
    author: 'Ines Carvalho',
    authorBio:
      'Frontend engineer in Lisbon. Builds component libraries, ships product, has opinions about where Suspense boundaries belong.',
    date: 'May 16, 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1600&q=80',
    body: [
      {
        type: 'p',
        text:
          'React 19 has been stable for about eighteen months as I write this — long enough that the early-adopter hot takes have cooled, and the people who waited for "production-ready" have a few migrations under their belt. I have shipped three apps on it and dragged one large legacy codebase across the line. Here are the features that earned a spot in the way I write components, the ones I tried twice and quietly walked back from, and the one I genuinely did not see coming.'
      },
      {
        type: 'h2',
        text: 'Actions are the headline, and they deserve to be'
      },
      {
        type: 'p',
        text:
          'The thing React 19 actually fixed is forms. Or rather, the thing React 19 finally admitted is that forms are where the framework\'s mental model fell apart. You had state, you had a submit handler, you had an "is this thing currently submitting" boolean, you had an "and what if it failed" boolean, and the four of them had to agree about a single click. Actions collapse all of that into one shape.'
      },
      {
        type: 'p',
        text:
          'useActionState and useFormStatus are the small primitives that make the bigger ones work. A form action is just a function that receives the form data; the framework tracks pending state and the result. If you are starting a new project, the right shape for a form has changed. The old controlled-input, submit-handler, manual-loading-flag shape still works, but it is the wrong default now. Pick the new defaults.'
      },
      {
        type: 'h2',
        text: 'useOptimistic, more useful than I expected'
      },
      {
        type: 'p',
        text:
          'I was skeptical. I have built optimistic UIs with reducers for years; I did not need a hook for it. I was wrong. The honest reason useOptimistic earns its place is that it makes the failure case obvious. You return a hypothetical state, the framework rolls it back if the action throws, and the lifecycle is something you can reason about in five seconds instead of fifteen minutes.'
      },
      {
        type: 'p',
        text:
          'The places I have used it: like-button-style interactions, inline edits, list reorderings — anything where success is the boring case and the rollback path was where my old code used to get sloppy. The place I would not use it: anything where the optimistic state cascades through the rest of the app. That part is still on you, and a hook does not change it.'
      },
      {
        type: 'quote',
        text:
          'The right hook is the one you stop noticing. After a year, I stop noticing useOptimistic, and I notice when it is not there.'
      },
      {
        type: 'h2',
        text: 'The use() hook, slowly'
      },
      {
        type: 'p',
        text:
          'use() is the one I am still working out. Reading promises directly in render with use() is a real thing, it works, and it removes the layer of useEffect-and-set-state that most data-fetching boilerplate is made of. The result, when it lands, is fewer hooks and fewer states. The cost is that your Suspense boundaries become actually load-bearing instead of nice-to-have, and if you have never thought hard about where to place them, this is the moment you will.'
      },
      {
        type: 'p',
        text:
          'My rule of thumb after eighteen months: use() once you have an honest Suspense story for the screen. Until then, keep your existing data-fetching shape. Mixing the two halfway through a feature is the worst version of both.'
      },
      {
        type: 'h2',
        text: 'ref as a prop'
      },
      {
        type: 'p',
        text:
          'Small change, big day-to-day improvement. forwardRef was a mostly-invisible tax on writing reusable components — you wrote it because you had to, you sometimes forgot, and your colleagues sometimes forgot too. ref as a regular prop is one of those changes I noticed on the first day and then never noticed again, which is the highest compliment a framework can earn from someone who writes a lot of component libraries.'
      },
      {
        type: 'h2',
        text: 'Document metadata, or, the quiet death of react-helmet'
      },
      {
        type: 'p',
        text:
          'You can render <title>, <meta>, and <link> from inside any component, and React hoists them to the document head. It is the small change that does the biggest thing in real apps: a route can own its own metadata without importing a third-party library that has been "maintained" for a generation. I removed react-helmet from two codebases this year and have not missed it once.'
      },
      {
        type: 'p',
        text:
          'The stylesheet precedence story is similar — you can declare a stylesheet from a component and React orders it correctly relative to others. CSS-in-JS folks may not care; everyone else, including me, sighed in relief.'
      },
      {
        type: 'h2',
        text: 'What I tried and walked back from'
      },
      {
        type: 'p',
        text:
          'Server Components in a non-Next setup. I tried twice; both times the developer experience was not there yet for a small team that did not want to also build a bundler. If you are on Next or a framework that has done the integration work, ignore me. If you are on your own router and bundler, "stable" is doing a lot of heavy lifting in the sentence that contains it.'
      },
      {
        type: 'p',
        text:
          'The new asset-preloading APIs — preload, preinit, prefetchDNS — useful in theory, almost never the bottleneck in practice. I have not removed them where I added them. I have also not added them anywhere since the second app.'
      },
      {
        type: 'h2',
        text: 'The one I did not see coming'
      },
      {
        type: 'p',
        text:
          'Better error messages. Specifically, hydration error messages. The old "text content did not match" was, in the kindest interpretation, an invitation to read your own diff and guess. The new ones tell you which element, on which side, with what content, and most of the time that is enough to find the bug in a single pass. It is the kind of change that does not headline anyone\'s release notes, and it has probably saved me more time this year than every other feature on this list combined.'
      },
      {
        type: 'quote',
        text:
          'The best part of a release is often the line you did not read. In React 19, that line was the hydration errors.'
      },
      {
        type: 'h2',
        text: 'A short checklist if you are starting today'
      },
      {
        type: 'p',
        text:
          'Use Actions for forms. Reach for useOptimistic where you would have written a reducer. Try use() once you have an honest Suspense story for the screen, not before. Delete react-helmet. Ignore the noise about Server Components for one more cycle unless you are on a framework that has done the work for you. And the next time you see a hydration error in dev, slow down and read it — they finally earned the attention.'
      }
    ]
  },
  {
    id: 'a2',
    category: 'Tech Notes',
    title: 'The boring stack that ran my company from a warung.',
    subtitle:
      'Six months of running a real product on Postgres, a queue, and one frontend framework.',
    excerpt:
      'Postgres, a queue, and one frontend framework I am too tired to argue about. Six months in, here is what I would do exactly the same — and the one thing I should have done sooner.',
    author: 'Mateo Reyes',
    authorBio:
      'Builds and ships from wherever the wifi will let him. Currently in Ubud, currently behind on emails.',
    date: 'May 02, 2026',
    readTime: '9 min read',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80',
    body: [
      {
        type: 'p',
        text:
          'There is a warung on Jalan Hanoman where the wifi has not gone down in eleven months and the iced kopi susu is three dollars. I have run a company from a corner table there for most of this year. Two engineers, a designer, eight thousand paying users, a few thousand requests a minute on a good day. Here is the stack, and here is what I would change.'
      },
      {
        type: 'h2',
        text: 'The whole thing, on one page'
      },
      {
        type: 'p',
        text:
          'Postgres for everything. A single queue (we use Oban, because it lives in Postgres and we did not want a second piece of infrastructure that could be down). A small Phoenix app behind a load balancer. A React frontend, served from a CDN, that talks to that app over JSON. Two engineers, one of whom is also me. That is the entire diagram. I have drawn it twice for investors and both times they asked where the rest was.'
      },
      {
        type: 'quote',
        text:
          'The boring stack is not boring because it is old. It is boring because every failure mode is already in a book somebody wrote in 2014.'
      },
      {
        type: 'h2',
        text: 'What I would do exactly the same'
      },
      {
        type: 'p',
        text:
          'Postgres as the queue. People will tell you this does not scale. People will tell you this until you are doing tens of millions of jobs a day, and at that point you will know enough about your workload to swap pieces out with confidence. Until then, every dependency you do not have is a dependency that cannot wake you up at three in the morning while you are in a different time zone than the rest of your team.'
      },
      {
        type: 'p',
        text:
          'A single, modest VPS for staging. A single, slightly less modest cluster for production. Logs to one place. Metrics to one place. Errors to one place. Three dashboards, not thirty. The whole point of a small team is that nobody has time to be the dashboard librarian.'
      },
      {
        type: 'h2',
        text: 'The one thing I should have done sooner'
      },
      {
        type: 'p',
        text:
          'Backups. Specifically, restoring from backups, on a schedule, into a real environment that we used for something. We had backups from day one. We did not test restoring them until month four, when we needed to. That is a story for a different post — it ended fine — but the version of me from month four would like a word with the version of me from month one.'
      },
      {
        type: 'p',
        text:
          'If you take one thing from this post: write the runbook for "the database is gone" before you need it. Run it once. Then go back to the warung.'
      }
    ]
  },
  {
    id: 'a3',
    category: 'Kitchen',
    title: 'Rendang, slowly: the four-hour version that earns the name.',
    subtitle:
      'A recipe in three movements — and the case for treating coconut milk like a relationship.',
    excerpt:
      'A recipe in three movements — the spice paste that smells like rain, the long reduction that almost feels like a meditation, and the moment the coconut milk finally surrenders to the meat.',
    author: 'Nadia Pranata',
    authorBio:
      'Cooks, writes, and occasionally teaches in West Sumatra. Believes in the long reduction.',
    date: 'Apr 25, 2026',
    readTime: '11 min read',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1600&q=80',
    body: [
      {
        type: 'p',
        text:
          'Real rendang is not a curry. It is what happens to a curry after four hours of patience. The sauce does not stay liquid; it dries, darkens, and turns into a coating that clings to each piece of beef like it has always lived there. This is the version my grandmother makes. It takes a full afternoon, and it is worth every minute.'
      },
      {
        type: 'h2',
        text: '1. The bumbu'
      },
      {
        type: 'p',
        text:
          'Start with the spice paste. Shallots, garlic, ginger, galangal, fresh red chilis, turmeric, lemongrass. Blend until smooth — not chunky, smooth. You are building the structure of the entire dish here. If the paste is loud and uneven, the rendang will be loud and uneven.'
      },
      {
        type: 'p',
        text:
          'Fry the bumbu in a wide, heavy pan with a glug of neutral oil. Low heat, fifteen minutes. The smell shifts about halfway through — that is when the rawness is gone and the spices have started to bloom. Some cooks say it smells like rain. They are right.'
      },
      {
        type: 'h2',
        text: '2. The long reduction'
      },
      {
        type: 'p',
        text:
          'Add coconut milk — fresh if you can get it, full-fat canned if you cannot — and the beef, cut into generous chunks. Bring it to the gentlest simmer your stove can manage. Then leave it alone for the better part of three hours, stirring every twenty minutes or so, watching the colour shift from pale yellow to caramel to mahogany.'
      },
      {
        type: 'quote',
        text:
          'You are not cooking the beef. You are convincing the coconut milk to leave.'
      },
      {
        type: 'p',
        text:
          'About two hours in, the sauce will start to break — oil will pool at the edges, the liquid will retreat, and the spices will begin to fry instead of simmer. This is the moment most home cooks rescue with more coconut milk. Do not rescue it. This is the dish becoming itself.'
      },
      {
        type: 'h2',
        text: '3. The surrender'
      },
      {
        type: 'p',
        text:
          'In the final thirty minutes, you stir constantly. The sauce darkens to almost-black; the beef takes on a glossy, lacquered coating; the kitchen smells like the platonic ideal of dinner. Salt at the end, taste, salt again if needed. Serve with rice the next day — rendang is, gloriously, better cold and reheated.'
      }
    ]
  },
  {
    id: 'a4',
    category: 'Encounters',
    title: 'Learning Bahasa, one polite humiliation at a time.',
    subtitle:
      'On being five years old in a language you thought you had figured out.',
    excerpt:
      'On the strange dignity of being five years old again in a language you thought you had figured out — and the three small habits that finally moved the needle.',
    author: 'Léa Marchand',
    authorBio:
      'French, perpetually surprised by Indonesian grammar. Writes about language, identity, and small failures.',
    date: 'Apr 18, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80',
    body: [
      {
        type: 'p',
        text:
          'For the first six months, my Bahasa Indonesia consisted of saying "saya tidak mengerti" — I do not understand — in a tone that suggested I understood enough to apologize for not understanding. People were unfailingly kind about this. They are still kind about it. The kindness, it turns out, is the hard part.'
      },
      {
        type: 'h2',
        text: 'The three habits that worked'
      },
      {
        type: 'p',
        text:
          'First: every morning, I bought my coffee in Bahasa. Just the coffee. Just the words for coffee, milk, sugar, hot, cold, please, thank you. The same six interactions, every day, until they stopped feeling like a performance and started feeling like a sentence I owned. The barista at my warung still calls me "Léa-yang-rajin" — diligent Léa. I will accept this nickname for the rest of my life.'
      },
      {
        type: 'p',
        text:
          'Second: I stopped translating. When somebody said something I did not fully understand, I would try to grasp the shape of it — the verb, the time, the tone — instead of reaching for the exact word. This is harder than it sounds and worth every awkward pause.'
      },
      {
        type: 'p',
        text:
          'Third: I let people correct me. Indonesian friends, in my experience, will not correct your grammar unless you explicitly invite them to. So I invited them. Repeatedly. The corrections became the lesson; the lessons became the language.'
      },
      {
        type: 'quote',
        text:
          'Speaking a language badly is the only way to eventually speak it well. Nobody gets to skip that part, and the people who pretend they did are lying.'
      }
    ]
  },
  {
    id: 'a5',
    category: 'AI',
    title: '10 AI tools I actually open every working day in 2026.',
    subtitle:
      'No demo-day darlings, no waitlists I forgot to leave. The exact ten apps that earn dock space.',
    excerpt:
      'No demo-day darlings, no waitlists I forgot to leave. The exact ten apps that earn a spot in my dock, what each replaced, and the two I would pay double for.',
    author: 'Sven Aalto',
    authorBio:
      'Finnish, builds things, occasionally writes about the things he builds. Currently allergic to "AI-native."',
    date: 'Apr 11, 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80',
    body: [
      {
        type: 'p',
        text:
          'I am tired of reading lists of "AI tools that will change your life." Most of them will not change your life. Most of them will not even change your Tuesday. Here are the ten that genuinely earn a spot in my dock, what each one replaced, and the two that I would happily pay double for.'
      },
      {
        type: 'h2',
        text: 'The daily ten'
      },
      {
        type: 'p',
        text:
          'I will not name names — half of them will have been renamed by the time you read this. But I will name the jobs. A long-context coding assistant that lives in my terminal. A research agent that browses for me. A transcription tool that handles three languages at once. A small, fast model for inbox triage. A bigger, slower model for writing. A diagram generator. A spreadsheet wrangler. A meeting summarizer. A code reviewer. An always-on second pair of eyes for whatever I am pasting in.'
      },
      {
        type: 'p',
        text:
          'What unites them is not capability, it is friction. Each one is a tab I open without thinking. Each one removed a fifteen-minute task I used to do six times a day. That is sixty hours a quarter. That is the entire pitch for the entire category, distilled.'
      },
      {
        type: 'quote',
        text:
          'The right AI tool is the one you stop noticing.'
      },
      {
        type: 'h2',
        text: 'The two I would pay double for'
      },
      {
        type: 'p',
        text:
          'The terminal-native coding assistant, and the research agent that can actually click through a paywall I have legitimately paid for. Both of these save me hours a week. Both of them are currently underpriced. I am quietly hoping nobody at either company reads this.'
      }
    ]
  },
  {
    id: 'a6',
    category: 'Gear',
    title: 'The 14-inch travel laptop verdict, after 80 flights.',
    subtitle:
      'A year of monsoons, overhead bins, and one airport security tray.',
    excerpt:
      'Build quality after a year in a hot backpack, the keyboard that survived three monsoons, battery life that holds up on the Jakarta–Bali shuttle, and the one port I still complain about.',
    author: 'Iris Halvorsen',
    authorBio:
      'Norwegian. Writes about hardware, travel, and the small dignity of a laptop that closes flush.',
    date: 'Apr 04, 2026',
    readTime: '10 min read',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=80',
    body: [
      {
        type: 'p',
        text:
          'I bought a 14-inch laptop in March of last year, took it on eighty flights, three monsoons, two beach offices that I am still slightly embarrassed about, and a single memorable encounter with an airport security tray that left a small scar on the lid. The laptop survived. Here is what I learned about what actually matters in a travel machine.'
      },
      {
        type: 'h2',
        text: 'What survived'
      },
      {
        type: 'p',
        text:
          'The keyboard. I expected the keys to start sticking after the first humid summer. They did not. The hinge — the part I worried about most — has not loosened in a year of being opened and closed in airports, cafes, and one memorable night bus. The screen has one tiny scratch that I caused myself, not the world.'
      },
      {
        type: 'p',
        text:
          'Battery life is the headline. I get six to seven real working hours on a charge, which means I do not panic when the Jakarta–Denpasar shuttle is delayed and the lounge outlets are all in use. Six hours is the line where a travel laptop goes from a liability to a quiet ally.'
      },
      {
        type: 'h2',
        text: 'The one port I still complain about'
      },
      {
        type: 'p',
        text:
          'There is no full-size SD card slot. I shoot photos on a camera that uses SD cards. I now travel with a small adapter that I have lost and re-bought four times. This is not a deal-breaker; it is just a small, weekly tax that I would happily not pay.'
      },
      {
        type: 'quote',
        text:
          'A travel laptop has one job: be in your bag, charged, and not be the reason you are stressed.'
      }
    ]
  },
  {
    id: 'a7',
    category: 'Remote Work',
    title: 'Best cities for remote work in 2026 — an honest ranking.',
    subtitle:
      'Internet, coffee, visas, and the small uncomfortable truths about each of the top eleven.',
    excerpt:
      'Internet that survives a Friday afternoon, coffee that respects you back, visas that make sense, and the small uncomfortable truths about each of the top eleven.',
    author: 'Mateo Reyes',
    authorBio:
      'Builds and ships from wherever the wifi will let him. Currently in Ubud, currently behind on emails.',
    date: 'Mar 28, 2026',
    readTime: '13 min read',
    image:
      'https://images.unsplash.com/photo-1542317854-aabc44a8e3d8?auto=format&fit=crop&w=1600&q=80',
    body: [
      {
        type: 'p',
        text:
          'There are roughly four hundred "best cities for remote work" lists published each year. Almost all of them are wrong in the same way: they rank on the things that are easy to measure (cost, weather) and ignore the things that actually determine whether you can work from a place for three months without losing your mind (internet on Friday afternoon, third places that do not close at 8pm, a community of people whose calendars overlap with yours).'
      },
      {
        type: 'p',
        text:
          'This is my list, after a year of putting it to the test. It is honest about the trade-offs, including the ones nobody likes to write down.'
      },
      {
        type: 'h2',
        text: 'The shortlist'
      },
      {
        type: 'p',
        text:
          'Yogyakarta — fast internet, slow city, generous coffee, a visa story that improved a lot in 2025. The downside: it is a small town, and small towns get smaller after the first month.'
      },
      {
        type: 'p',
        text:
          'Mexico City — the gold standard for third places, the gold standard for food, and the gold standard for "this neighborhood is great until rent renegotiates in October." Pace yourself.'
      },
      {
        type: 'p',
        text:
          'Lisbon — beautiful, well-connected, increasingly priced for people who do not live there. The community is real and the coffee is fine. Bring a good jacket; the apartments are colder than the weather suggests.'
      },
      {
        type: 'quote',
        text:
          'A great city for remote work is a city that lets you forget you are working remotely.'
      },
      {
        type: 'p',
        text:
          'The full ranking, with internet speeds I actually measured and visa notes I actually filed, is below.'
      }
    ]
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
