"use client";

import UltimateSearchBar from "@/components/UltimateSearchBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Definitive Main Page</title>
      </Head>
      <main>
        <section className="w-full flex justify-center items-center py-5 sm:py-7 md:p-10">
          <UltimateSearchBar />
        </section>
      </main>
    </>
  );
}
