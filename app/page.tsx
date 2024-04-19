import BackgroundCliq from "@/components/backgroundLogoCliq";
import TitlePart from "@/components/titlePart";

export default function Home() {
  return (
    <main className="min-h-screen w-full h-full">
      <div className="relative mb-4 flex items-center justify-center py-[26vh] pt-[18vh] sm:pt-[26vh] h-full">
        <BackgroundCliq />

        <div className="relative flex flex-col w-full h-full items-center gap-6 px-6 text-center">
          <TitlePart />
          {/* Create -> Input add to list */}
          {/* Create -> List items */}
        </div>
      </div>
    </main>
  );
}
