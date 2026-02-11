import MemeBentoGrid from "@/components/MemeBentoGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meme Vault | C&C Media Content Labs",
  description:
    "Fresh memes from the streets of Nairobi. The internet's finest, served daily.",
};

export default function MemesPage() {
  return (
    <main className="min-h-screen">
      <MemeBentoGrid showViewAll={false} />
    </main>
  );
}
