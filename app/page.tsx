"use client"

import { ContainerCTA } from "@/components/CTA/ContainerCTA";
import { useItemsCTAData } from "./hooks/useItemsCTAData";

export default function Home() {
  const itemsCTA = useItemsCTAData();
  return (
    <main className="flex min-h-screen w-full bg-gray-100">
      <div className="flex flex-col w-full md:w-8/12 mx-auto">
        <h1 className="text-center font-sans text-4xl md:text-5xl my-10">Examples</h1>
      </div>
      <ContainerCTA itemsCTA={itemsCTA} />
    </main>
  );
}
