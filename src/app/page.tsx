import UltimateSearchBar from "@/components/UltimateSearchBar";

export const metadata = {
  title: "The Definitive Main Page",
  description: "Dalowa's project",
};

export default function Home() {
  return (
    <>
      <main>
        <section className="w-full flex justify-center items-center py-5 sm:py-7 md:p-10">
          <UltimateSearchBar />
        </section>
      </main>
    </>
  );
}
