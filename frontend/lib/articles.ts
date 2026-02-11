export interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  slug: string;
  content?: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "When the WiFi hits different in Westlands",
    excerpt:
      "An exploration of Nairobi's digital divide and the stark contrast between connectivity in different neighborhoods.",
    author: "Wanjiku Kamau",
    readTime: "12 min",
    category: "Tech & Society",
    slug: "when-wifi-hits-different-westlands",
    content: `The digital divide in Nairobi isn't just about access—it's about experience. In Westlands, fiber-optic cables hum beneath pristine sidewalks, delivering gigabit speeds to co-working spaces where freelancers design for clients in Stockholm and San Francisco. Five kilometers away, in Mathare, mobile data is rationed like water during a drought.

This isn't a story about infrastructure alone. It's about opportunity, about who gets to participate in the digital economy, and about the invisible walls that separate those who can work from anywhere from those who can barely work at all.

The tech hubs of Nairobi have become symbols of African innovation, but they exist in an ecosystem that still leaves millions behind. The question isn't whether Kenya can build unicorns—it's whether those unicorns will lift the entire economy or just create new hierarchies of access.`,
  },
  {
    id: 2,
    title: "Matatu culture: More than just transport",
    excerpt:
      "How Kenya's chaotic public transit system became a canvas for urban art, music, and social commentary.",
    author: "James Omondi",
    readTime: "8 min",
    category: "Culture",
    slug: "matatu-culture-more-than-transport",
    content: `Matatus are more than vehicles—they're mobile galleries, concert halls, and town squares rolled into one. The psychedelic paint jobs, booming sound systems, and creative route names tell the story of a city that refuses to be boring.

Every matatu is a statement. Some blast gospel music at dawn, others pump out the latest Gengetone hits at volumes that shake windows three blocks away. The conductors are performers, their calls a rhythmic poetry that negotiates the chaos of Nairobi's streets.

But beneath the color and noise lies a complex informal economy, one that employs hundreds of thousands and moves millions daily. The matatu culture is Kenya's rebellion against order, a declaration that even in transit, there's room for personality, for art, for life.`,
  },
  {
    id: 3,
    title: "The rise of Sheng in digital spaces",
    excerpt:
      "Kenya's urban language is evolving online, creating new forms of expression that blend Swahili, English, and pure creativity.",
    author: "Aisha Abdi",
    readTime: "10 min",
    category: "Language & Identity",
    slug: "rise-of-sheng-digital-spaces",
    content: `Sheng was born in the streets of Nairobi, a linguistic mashup created by youth who needed a code that was theirs alone. Now it's taking over Twitter, TikTok, and WhatsApp, morphing faster than any dictionary can track.

Every week brings new words, new phrases, new ways to say the same old things but with more style. "Niko poa" becomes "niko fiti", "pesa" becomes "mulla", and "kitu gani" becomes "kumanina" depending on who you ask and when.

This isn't just slang—it's a living language that reflects the creativity and resilience of young Kenyans. In digital spaces, Sheng is more than communication; it's identity, rebellion, and innovation all wrapped up in words that change before you can learn them.`,
  },
  {
    id: 4,
    title: "Gen Z and the future of African tech",
    excerpt:
      "How a generation raised on smartphones is building solutions for problems Silicon Valley doesn't understand.",
    author: "Brian Mwangi",
    readTime: "15 min",
    category: "Technology",
    slug: "gen-z-future-african-tech",
    content: `Silicon Valley talks about disruption, but African Gen Z is living it. They're building fintech for the unbanked, logistics platforms for motorcycle taxis, and social networks that work on 2G.

This generation doesn't have the luxury of building for fun—they're solving real problems with limited resources. When you grow up navigating M-Pesa, juggling multiple SIM cards, and making wifi last all month, you develop a different relationship with technology.

The future of African tech isn't about copying Western models. It's about Gen Z developers who understand that innovation means making things work in environments that are hostile to technology—where power is unreliable, data is expensive, and infrastructure is provisional.`,
  },
  {
    id: 5,
    title:
      "The Big Read: Nairobi's creative economy and the myth of the hustle",
    excerpt:
      "A deep dive into the reality behind the 'hustle culture' narrative and what it means for young creatives trying to make it in Nairobi.",
    author: "Grace Njeri",
    readTime: "20 min",
    category: "Featured",
    slug: "nairobi-creative-economy-hustle-myth",
    featured: true,
    content: `"Hustle" has become Nairobi's favorite word, a badge of honor worn by everyone from boda boda riders to tech founders. But behind the motivational Instagram posts and the "rise and grind" mentality lies a more complex story—one of burnout, inequality, and a creative economy that demands everything while promising little.

For young creatives in Nairobi, the hustle isn't optional. It's survival. Graphic designers work for exposure, writers pitch for free, and photographers shoot events for "connections" that rarely materialize into paid work. The creative economy runs on the unpaid labor of people who are told that recognition will eventually translate into income.

This investigation examines the structural issues behind Kenya's creative economy: from clients who expect international-quality work at local rates, to the lack of legal protections for freelancers, to the way social capital often matters more than talent. We spoke to dozens of creatives across disciplines—musicians, visual artists, content creators, and designers—and found a common thread: the hustle is real, but the rewards are wildly unequal.

Some make it. Most don't. And the difference often has less to do with talent or effort than with access to networks, capital, and the kind of social mobility that "hustle culture" pretends doesn't matter. The myth of the hustle suggests that anyone can make it if they work hard enough. The reality is more complicated, more frustrating, and more in need of honest examination.`,
  },
];
