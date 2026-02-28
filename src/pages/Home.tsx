import { Link } from "wouter";
import { SectionHeading } from "@/components/SectionHeading";
import { courses, toppers, faqs } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Trophy, Target, ArrowRight, UserCheck, CheckCircle2, Medal, Check } from "lucide-react";

export default function Home() {
  const onSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] bg-[#1A1A2E] flex items-center pt-10 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#F5A623]/20 to-transparent opacity-50 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#E94560]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#F5A623] text-sm font-semibold tracking-wider uppercase mb-6">
              <Trophy className="w-4 h-4" /> Admissions Open 2024-25
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
              Engineering Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FFD166]">Success Story.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl font-light">
              Join Best Classes - India's premier coaching institute for NEET & JEE. We don't just teach, we build top rankers with precision and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto bg-[#E94560] hover:bg-[#E94560]/90 text-white text-lg h-14 px-8 font-bold shadow-lg transition-all">
                  Register Now 🚀
                </Button>
              </Link>
              <Link href="/results">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623]/10 h-14 px-8 text-lg font-medium backdrop-blur-sm">
                  View Results →
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-12 h-12 rounded-full border-2 border-[#1A1A2E] shadow-lg" />
                ))}
              </div>
              <div className="text-white/80 text-sm">
                <strong className="text-white block text-lg font-display tracking-wide">10,000+</strong>
                Students Selected
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block h-[600px]">
            {/* happy confident indian student holding books */}
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Student Success" 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-[90%] object-cover rounded-3xl shadow-2xl z-10 border-4 border-white/10"
            />
            {/* Floating Info Cards */}
            <div className="absolute top-20 right-[70%] z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl animate-float flex items-center gap-4">
              <div className="w-12 h-12 bg-[#2E7D32]/20 rounded-full flex items-center justify-center text-[#2E7D32]">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-[#666] font-bold uppercase">Highest Selection</p>
                <p className="text-lg font-bold text-[#1A1A2E]">Ratio in India</p>
              </div>
            </div>
            
            <div className="absolute bottom-32 -left-10 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl animate-float-delayed flex items-center gap-4">
              <div className="w-12 h-12 bg-[#F5A623]/20 rounded-full flex items-center justify-center text-[#F5A623]">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-[#666] font-bold uppercase">Expert Faculty</p>
                <p className="text-lg font-bold text-[#1A1A2E]">From IITs & AIIMS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[#F5A623] py-4 border-y border-black/10 shadow-inner z-20 relative">
        <div className="marquee-container">
          <div className="animate-marquee">
            {[...toppers, ...toppers].map((t, i) => (
              <div key={i} className="flex items-center gap-3 mx-8 text-[#1A1A2E] font-bold whitespace-nowrap">
                <Medal className="w-5 h-5 text-[#1A1A2E]" />
                <span className="uppercase tracking-wider">{t.exam} - {t.name} (Rank {t.rank})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <section className="py-20 bg-[#F8F9FF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Selections in NEET", value: "4500+" },
              { label: "Selections in JEE", value: "3200+" },
              { label: "Expert Faculty", value: "150+" },
              { label: "Years of Trust", value: "15" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-lg shadow-[#1A1A2E]/5 border border-[#ddd]/50 hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-5xl md:text-6xl font-display text-[#1A1A2E] mb-2">
                  {stat.value}
                </h3>
                <p className="text-[#666] font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ddd] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Flagship Programs" subtitle="Find Your Path" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <div key={course.id} className="group relative bg-white rounded-3xl p-8 border border-[#ddd] shadow-xl shadow-black/5 hover:shadow-2xl hover:border-[#1A1A2E]/20 transition-all duration-500 overflow-hidden flex flex-col">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${course.color}`} />
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-lg`}>
                    <Target className="w-8 h-8" />
                  </div>
                  <span className="px-3 py-1 bg-[#F5A623]/10 text-[#1A1A2E] text-xs font-bold uppercase tracking-wider rounded-full">
                    {course.badge}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">{course.title}</h3>
                <div className="flex items-center gap-4 text-sm text-[#666] mb-6 pb-6 border-b border-[#ddd]/50">
                  <span className="flex items-center gap-1"><BookOpen className="w-4 h-4"/> {course.duration}</span>
                  <span className="flex items-center gap-1"><UserCheck className="w-4 h-4"/> {course.for}</span>
                </div>
                
                <p className="text-[#666] mb-8 flex-grow">
                  {course.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {course.features.slice(0,3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-medium text-[#1A1A2E]/80">
                      <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <Link href={`/courses`}>
                  <Button className="w-full bg-[#1A1A2E] text-white hover:bg-[#1A1A2E]/90 font-bold h-12 rounded-xl transition-all shadow-md">
                    View Course Details
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET / FREE RESOURCES */}
      <section className="py-24 bg-[#1A1A2E] relative overflow-hidden">
        {/* Background details */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-[#1A1A2E] to-blue-900 border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#E94560]/20 text-[#E94560] text-sm font-bold tracking-wider uppercase mb-6 border border-[#E94560]/30">
                Free Resources
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Unlock Our Secret <br/> <span className="text-[#F5A623]">Topper's Toolkit</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Get access to previous year question papers, high-yield formula sheets, and top-ranker strategies delivered straight to your inbox.
              </p>
              <ul className="space-y-4 mb-8">
                {["100+ Chapter-wise Mock Tests", "Physics & Chemistry Mind Maps", "Counseling Session with Expert"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-[#F5A623]/20 flex items-center justify-center text-[#F5A623]">
                      <Check className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="border-0 shadow-2xl bg-[#1A1A2E] backdrop-blur-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Unlock Our Secret Topper's Toolkit</h3>
                <form onSubmit={onSubmitLead} className="space-y-4">
                  <div>
                    <input 
                      placeholder="Student Name" 
                      className="w-full h-14 rounded-md bg-white/10 border border-white/20 text-white px-3 placeholder:text-white/40 focus:outline-none focus:border-[#F5A623] focus:ring-4 focus:ring-[#F5A623]/20"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      placeholder="Mobile Number" 
                      type="tel"
                      className="w-full h-14 rounded-md bg-white/10 border border-white/20 text-white px-3 placeholder:text-white/40 focus:outline-none focus:border-[#F5A623] focus:ring-4 focus:ring-[#F5A623]/20"
                      required
                    />
                  </div>
                  <div>
                    <select 
                      className="w-full h-14 rounded-md bg-white/10 border border-white/20 text-white px-3 focus:outline-none focus:border-[#F5A623] focus:ring-4 focus:ring-[#F5A623]/20 appearance-none"
                      required
                    >
                      <option value="" className="text-[#1A1A2E] bg-white">Select Target Exam</option>
                      <option value="NEET" className="text-[#1A1A2E] bg-white">NEET (UG)</option>
                      <option value="JEE Main" className="text-[#1A1A2E] bg-white">JEE Main</option>
                      <option value="JEE Advanced" className="text-[#1A1A2E] bg-white">JEE Advanced</option>
                      <option value="Foundation" className="text-[#1A1A2E] bg-white">Foundation (Class 8-10)</option>
                    </select>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#1A1A2E] text-lg font-bold mt-4"
                  >
                    Send Me The Toolkit
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* TOPPERS GRID */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Hall of Fame" subtitle="Our Pride" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {toppers.map((topper, i) => (
              <div key={topper.id} className="group relative rounded-2xl overflow-hidden shadow-lg border border-border/50 aspect-[3/4]">
                <img src={topper.image} alt={topper.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent flex flex-col justify-end p-4">
                  <span className="text-accent font-bold text-xs uppercase tracking-wider mb-1">{topper.exam}</span>
                  <h4 className="text-white font-bold text-lg leading-tight mb-1">{topper.name}</h4>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white font-bold bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">Rank {topper.rank.replace('AIR ','')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/results">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
                View All Results
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" subtitle="Got Queries?" />
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl px-6 data-[state=open]:border-accent data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-lg font-bold text-primary hover:text-accent hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
