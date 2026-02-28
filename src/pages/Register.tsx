import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";

const STEPS = ["Personal Info", "Course Selection", "Parent Details"];

export default function Register() {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const triggerValidation = () => {
    // Simple validation for demo
    setCurrentStep(prev => prev + 1);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    alert('Registration submitted successfully! We will contact you soon.');
  };

  if (isSuccess) {
    return (
      <div className="bg-[#F8F9FF] min-h-screen pt-32 pb-24 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 border-0 shadow-2xl text-center py-12 px-8 rounded-3xl">
          <div className="w-24 h-24 bg-[#2E7D32]/10 text-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">Application Received!</h2>
          <p className="text-[#666] mb-8">
            Thank you for applying to Pinnacle Academy. Your application ID has been sent to your email. Our admissions team will review your details and contact you within 24 hours.
          </p>
          <Button onClick={() => setLocation("/")} className="h-12 px-8 bg-[#1A1A2E] text-white rounded-xl">
            Return to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FF] min-h-screen pb-24">
      <div className="bg-[#1A1A2E] pt-24 pb-32 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Online Registration" subtitle="Take The First Step" light />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-white">
          {/* Progress Bar */}
          <div className="bg-[#f5f5f5] px-8 py-6 border-b border-[#ddd]">
            <div className="flex justify-between items-center relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-[#ddd] -translate-y-1/2 z-0" />
              <div className="absolute top-1/2 left-0 h-1 bg-[#F5A623] -translate-y-1/2 z-0 transition-all duration-300" style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }} />
              
              {STEPS.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-4 transition-colors ${idx <= currentStep ? 'bg-[#F5A623] border-white text-[#1A1A2E] shadow-md' : 'bg-[#f5f5f5] border-[#ddd] text-[#999]'}`}>
                    {idx < currentStep ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                  </div>
                  <span className={`text-xs font-semibold hidden md:block ${idx <= currentStep ? 'text-[#1A1A2E]' : 'text-[#999]'}`}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <CardContent className="p-8 md:p-12">
            <form onSubmit={onSubmit}>
              
              {/* STEP 1 */}
              <div className={currentStep === 0 ? 'block' : 'hidden'}>
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-[#1A1A2E] mb-2 block">Student Full Name *</label>
                    <Input className="h-12" required />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#1A1A2E] mb-2 block">Date of Birth *</label>
                    <Input type="date" className="h-12" required />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#1A1A2E] mb-2 block">City/Town *</label>
                    <Input className="h-12" required />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#1A1A2E] mb-2 block">Phone Number *</label>
                    <Input type="tel" className="h-12" required />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#1A1A2E] mb-2 block">Email Address *</label>
                    <Input type="email" className="h-12" required />
                  </div>
                </div>
              </div>

              {/* STEP 2 */}
              <div className={currentStep === 1 ? 'block' : 'hidden'}>
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">Course Selection</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-[#1A1A2E] mb-2 block">Target Course *</label>
                    <select className="w-full h-12 rounded-md border border-[#ddd] bg-white px-3 focus:ring-2 focus:ring-[#F5A623]/20" required>
                      <option value="">Select a course...</option>
                      <option value="neet">NEET Target Batch (Class 12/Dropper)</option>
                      <option value="jee_adv">JEE Advanced Pinnacle (Class 11)</option>
                      <option value="foundation">Foundation Course (Class 9-10)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-[#1A1A2E] mb-2 block">Preferred Batch Timing *</label>
                    <select className="w-full h-12 rounded-md border border-[#ddd] bg-white px-3 focus:ring-2 focus:ring-[#F5A623]/20" required>
                      <option value="">Select preference...</option>
                      <option value="morning">Morning (8:00 AM - 1:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                      <option value="weekend">Weekend Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[#1A1A2E] mb-3 block">Mode of Study *</label>
                    <div className="flex gap-4">
                      <label className="flex-1 cursor-pointer">
                        <input type="radio" value="offline" name="mode" className="peer sr-only" defaultChecked />
                        <div className="p-4 border-2 border-[#ddd] rounded-xl text-center peer-checked:border-[#1A1A2E] peer-checked:bg-[#1A1A2E]/5 transition-all">
                          <span className="font-bold text-[#1A1A2E] block">Offline</span>
                          <span className="text-xs text-[#666]">Classroom Setup</span>
                        </div>
                      </label>
                      <label className="flex-1 cursor-pointer">
                        <input type="radio" value="online" name="mode" className="peer sr-only" />
                        <div className="p-4 border-2 border-[#ddd] rounded-xl text-center peer-checked:border-[#1A1A2E] peer-checked:bg-[#1A1A2E]/5 transition-all">
                          <span className="font-bold text-[#1A1A2E] block">Online</span>
                          <span className="text-xs text-[#666]">Live Interactive</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 3 */}
              <div className={currentStep === 2 ? 'block' : 'hidden'}>
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">Parent/Guardian Details</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-[#1A1A2E] mb-2 block">Parent's Name & Contact Info *</label>
                    <Input className="h-12 mb-2" placeholder="Parent's Full Name" required />
                  </div>
                  <div className="p-4 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-xl">
                    <p className="text-sm text-[#1A1A2E] font-medium flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#F5A623] shrink-0" />
                      By submitting this form, you agree to Pinnacle Academy's terms of service and allow our counselors to contact you regarding the admission process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Navigation */}
              <div className="mt-10 flex justify-between pt-6 border-t border-[#ddd]">
                {currentStep > 0 ? (
                  <Button type="button" variant="outline" onClick={() => setCurrentStep(prev => prev - 1)} className="h-12 px-6 rounded-xl border-[#ddd]">
                    <ChevronLeft className="w-4 h-4 mr-2" /> Back
                  </Button>
                ) : <div />}
                
                {currentStep < STEPS.length - 1 ? (
                  <Button type="button" onClick={triggerValidation} className="h-12 px-8 bg-[#1A1A2E] hover:bg-[#1A1A2E]/90 text-white rounded-xl">
                    Continue <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" className="h-12 px-8 bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#1A1A2E] font-bold rounded-xl shadow-lg shadow-[#F5A623]/20">
                    Submit Application <CheckCircle2 className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>

            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
