export interface Meme {
  id: number;
  title: string;
  category: string;
  size: "large" | "medium" | "small";
  image: string;
}

export const memes: Meme[] = [
  {
    id: 1,
    title: "Street Culture Chronicles",
    category: "Daily Dose",
    size: "large",
    image: "/memes/G_-FzeAbEAYxFbl.jpg",
  },
  {
    id: 2,
    title: "The Vibe Check",
    category: "Mood Board",
    size: "medium",
    image: "/memes/G_7wjlyXMAIxLIB.jpg",
  },
  {
    id: 3,
    title: "Real Talk",
    category: "Hot Takes",
    size: "small",
    image: "/memes/HAAGkHJXsAEjg84.jpg",
  },
  {
    id: 4,
    title: "Internet Gold",
    category: "Viral Moments",
    size: "small",
    image: "/memes/2997jtrjb8ig1.png",
  },
  {
    id: 5,
    title: "That's The Energy",
    category: "Mood",
    size: "large",
    image: "/memes/8ba6x29yccig1.png",
  },
  {
    id: 6,
    title: "Peak Content",
    category: "Fresh Takes",
    size: "medium",
    image: "/memes/vk85jl3x7pig1.jpeg",
  },
  {
    id: 7,
    title: "No Cap",
    category: "Real Ones",
    size: "small",
    image: "/memes/vpv5q0fqldig1.jpeg",
  },
];
