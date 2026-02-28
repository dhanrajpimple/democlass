import { SectionHeading } from "@/components/SectionHeading";
import { courses } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Calendar, Clock, Layers } from "lucide-react";
import { Link } from "wouter";

export default function Courses() {
  return (
    <div className="bg-[#F8F9FF] min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-[#1A1A2E] pt-24 pb-32 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FF] to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionHeading title="Academic Programs" subtitle="Excellence Designed For You" light />
          <p className="text-white/80 text-lg md:text-xl font-light">
            Choose from our meticulously crafted programs designed to maximize your potential and ensure success in competitive exams.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 space-y-12">
        {courses.map((course) => (
          <Card key={course.id} id={course.id} className="border-0 shadow-2xl rounded-3xl overflow-hidden">
            <div className={`h-3 w-full bg-gradient-to-r ${course.color}`} />
            <div className="grid grid-cols-1 lg:grid-cols-3">
              
              {/* Left Column: Info */}
              <div className="p-8 lg:p-12 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-[#ddd]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-[#1A1A2E]/5 text-[#1A1A2E] text-sm font-bold uppercase tracking-wider rounded-full">
                    {course.for}
                  </span>
                  <span className="px-4 py-1.5 bg-[#F5A623]/10 text-[#1A1A2E] text-sm font-bold uppercase tracking-wider rounded-full">
                    {course.duration}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">{course.title}</h2>
                <p className="text-[#666] text-lg mb-8 leading-relaxed">
                  {course.description}
                </p>
                
                <h4 className="text-xl font-bold text-[#1A1A2E] mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#F5A623]" /> Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {course.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span className="font-medium text-[#0F0F1A]/80">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column: Schedule & CTA */}
              <div className="p-8 lg:p-12 bg-[#f5f5f5]/30 flex flex-col justify-center">
                <Card className="border-[#ddd]/50 shadow-sm mb-8 bg-white">
                  <CardHeader className="pb-4 border-b border-[#ddd]/50">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#1A1A2E]" /> Upcoming Batches
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-[#1A1A2E]">Phase 1</p>
                        <p className="text-sm text-[#666] flex items-center gap-1"><Clock className="w-3 h-3"/> Starts 15 Apr</p>
                      </div>
                      <span className="text-xs font-bold text-[#2E7D32] bg-[#2E7D32]/10 px-2 py-1 rounded">Open</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-[#1A1A2E]">Phase 2</p>
                        <p className="text-sm text-[#666] flex items-center gap-1"><Clock className="w-3 h-3"/> Starts 10 May</p>
                      </div>
                      <span className="text-xs font-bold text-[#F5A623] bg-[#F5A623]/10 px-2 py-1 rounded">Filling Fast</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Link href={`/register?course=${course.id}`}>
                  <Button size="lg" className="w-full bg-[#1A1A2E] hover:bg-[#1A1A2E]/90 text-white font-bold h-14 text-lg rounded-xl shadow-xl shadow-[#1A1A2E]/20 hover:-translate-y-1 transition-all">
                    Apply For {course.title}
                  </Button>
                </Link>
                <p className="text-center text-xs text-[#666] mt-4">
                  Scholarships available up to 100% via PNST.
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
