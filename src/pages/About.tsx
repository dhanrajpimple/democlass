import { SectionHeading } from "@/components/SectionHeading";
import { faculty } from "@/lib/mock-data";
import { Target, Lightbulb, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#F8F9FF] min-h-screen">
      {/* Hero */}
      <div className="bg-[#1A1A2E] pt-24 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="About Pinnacle" subtitle="Our Story" light />
        </div>
      </div>

      {/* Mission / Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide world-class mentoring to students, enabling them to achieve their maximum potential in competitive examinations." },
              { icon: Lightbulb, title: "Our Vision", desc: "To become India's most trusted educational institution by maintaining uncompromising standards of teaching and student care." },
              { icon: Heart, title: "Core Values", desc: "Integrity, excellence, continuous innovation, and an unwavering commitment to student success." }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-[#f5f5f5]/30 border border-[#ddd]/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-[#1A1A2E]/5 text-[#1A1A2E] rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">{item.title}</h3>
                <p className="text-[#666] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-24 bg-[#f5f5f5]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Meet The Mentors" subtitle="World Class Faculty" />
          <p className="text-center text-[#666] max-w-2xl mx-auto mb-16 text-lg">
            Our greatest asset is our team of dedicated educators who bring decades of experience from top institutions like IITs and AIIMS.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#ddd]/50 group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                </div>
                <div className="p-6 text-center border-t-4 border-[#F5A623] relative">
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-1">{member.name}</h3>
                  <p className="text-[#1A1A2E] font-semibold uppercase tracking-wider text-sm mb-3">{member.subject}</p>
                  <div className="flex justify-between items-center text-xs text-[#666] bg-[#f5f5f5] p-3 rounded-lg">
                    <span>{member.experience}</span>
                    <span className="font-bold text-[#1A1A2E]">{member.alumni}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
