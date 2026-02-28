import { SectionHeading } from "@/components/SectionHeading";
import { toppers } from "@/lib/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Results() {
  // Generate some extra mock data for the masonry grid
  const allResults = [
    ...toppers,
    { id: 7, name: "Karan Gupta", exam: "NEET 2023", rank: "AIR 234", score: "695/720", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400" },
    { id: 8, name: "Divya Singh", exam: "JEE Adv 2023", rank: "AIR 345", score: "99.8%ile", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400" },
    { id: 9, name: "Arjun Nair", exam: "NEET 2022", rank: "AIR 189", score: "698/720", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400" },
  ];

  return (
    <div className="bg-[#F8F9FF] min-h-screen pb-24">
      <div className="bg-[#1A1A2E] pt-24 pb-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Hall of Fame" subtitle="Creating Legacies" light />
          <p className="text-white/80 text-lg md:text-xl font-light">
            Our results speak louder than words. Meet the brilliant minds who trusted Pinnacle and conquered the toughest exams in India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-[#f5f5f5] p-1 rounded-full border border-[#ddd] h-14">
              <TabsTrigger value="all" className="rounded-full px-8 h-full text-base data-[state=active]:bg-white data-[state=active]:text-[#1A1A2E] data-[state=active]:shadow-sm">All Time</TabsTrigger>
              <TabsTrigger value="neet" className="rounded-full px-8 h-full text-base data-[state=active]:bg-white data-[state=active]:text-[#1A1A2E] data-[state=active]:shadow-sm">NEET</TabsTrigger>
              <TabsTrigger value="jee" className="rounded-full px-8 h-full text-base data-[state=active]:bg-white data-[state=active]:text-[#1A1A2E] data-[state=active]:shadow-sm">JEE</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allResults.map((topper) => (
                <ResultCard key={topper.id} topper={topper} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="neet" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allResults.filter(t => t.exam.includes("NEET")).map((topper) => (
                <ResultCard key={topper.id} topper={topper} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="jee" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allResults.filter(t => t.exam.includes("JEE")).map((topper) => (
                <ResultCard key={topper.id} topper={topper} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function ResultCard({ topper }: { topper: any }) {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#ddd]/50 group"
    >
      <div className="aspect-square overflow-hidden relative">
        <img src={topper.image} alt={topper.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#1A1A2E] font-bold text-sm shadow-md">
          {topper.exam}
        </div>
      </div>
      <div className="p-5 text-center relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#F5A623] text-[#1A1A2E] font-display tracking-widest px-4 py-2 rounded-lg shadow-lg text-xl border-2 border-white">
          {topper.rank}
        </div>
        <h3 className="text-xl font-bold text-[#1A1A2E] mt-4 mb-1">{topper.name}</h3>
        <p className="text-[#666] font-medium">Score: <span className="text-[#0F0F1A]">{topper.score}</span></p>
      </div>
    </div>
  );
}
