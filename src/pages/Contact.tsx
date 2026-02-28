import { SectionHeading } from "@/components/SectionHeading";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
  };

  return (
    <div className="bg-[#F8F9FF] min-h-screen pb-24">
      <div className="bg-[#1A1A2E] pt-24 pb-32 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Get In Touch" subtitle="We're Here to Help" light />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {[
              { icon: MapPin, title: "Our Campus", details: ["123 Knowledge Park, Vasant Kunj, New Delhi, India - 110070"] },
              { icon: Phone, title: "Call Us", details: ["+91 98765 43210", "+91 11 2345 6789", "Toll Free: 1800-123-456"] },
              { icon: Mail, title: "Email Us", details: ["admissions@pinnacle.edu.in", "info@pinnacle.edu.in"] },
              { icon: Clock, title: "Working Hours", details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 2:00 PM"] },
            ].map((item, i) => (
              <Card key={i} className="border-0 shadow-xl shadow-[#1A1A2E]/10 rounded-2xl z-20 bg-white hover:shadow-2xl hover:shadow-[#1A1A2E]/20 transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#F5A623]/10 text-[#F5A623] rounded-xl flex items-center justify-center">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1A1A2E] text-lg mb-3">{item.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed break-words">{item.details[0]}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-0 shadow-2xl rounded-3xl overflow-hidden bg-white">
            <div className="h-2 w-full bg-gradient-to-r from-[#1A1A2E] to-[#F5A623]" />
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">Send us a Message</h2>
              <p className="text-[#666] text-lg mb-8">Fill out the form below and our academic counselors will reach out to guide you.</p>
              
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-[#1A1A2E] mb-2 block">Full Name *</label>
                    <Input className="h-12 bg-white border-[#ddd] focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20" required />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#1A1A2E] mb-2 block">Phone Number *</label>
                    <Input type="tel" className="h-12 bg-white border-[#ddd] focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-[#1A1A2E] mb-2 block">Email Address *</label>
                    <Input type="email" className="h-12 bg-white border-[#ddd] focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20" required />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#1A1A2E] mb-2 block">Course Interest</label>
                    <select className="w-full h-12 rounded-md bg-white border border-[#ddd] text-[#1A1A2E] px-3 focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20">
                      <option value="">Select a course...</option>
                      <option value="NEET">NEET Target</option>
                      <option value="JEE">JEE Advanced/Main</option>
                      <option value="Foundation">Foundation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#1A1A2E] mb-2 block">Your Message *</label>
                  <Textarea className="min-h-[150px] bg-white border-[#ddd] resize-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20" placeholder="How can we help you?" required />
                </div>

                <Button type="submit" className="h-14 px-12 bg-[#1A1A2E] hover:bg-[#1A1A2E]/90 text-white text-lg font-bold rounded-xl shadow-lg shadow-[#1A1A2E]/20 hover:-translate-y-1 transition-all">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </div>
  );
}
