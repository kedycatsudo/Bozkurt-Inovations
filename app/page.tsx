"use client";
import Image from "next/image";
import { useState } from "react";
import ArchitectureSection from "./sections/Architecture";
import Services from "./sections/services";
import LifeCycle from "./sections/LifeCycle";
import Cta from "./sections/Cta";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-[#0F172A]">
      <main className=" pt-2 background bg-[#0F172A] ">
        <ArchitectureSection></ArchitectureSection>
        <Services></Services>
        <LifeCycle></LifeCycle>
        <Cta></Cta>
      </main>
    </div>
  );
}
