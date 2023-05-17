import UltimateSearchBar from "@/components/UltimateSearchBar";

export const metadata = {
  title: "The Definitive Main Page",
  description: "Dalowa's project",
  icons: {
    icon: "https://www.svgrepo.com/show/513371/macbook-pro.svg",
    shortcut: "https://www.svgrepo.com/show/513371/macbook-pro.svg",
    apple: "https://www.svgrepo.com/show/513371/macbook-pro.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
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
