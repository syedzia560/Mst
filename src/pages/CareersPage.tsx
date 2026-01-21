/*
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Upload } from "lucide-react";

const CareersPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    position: "",
    currentSalary: "",
    expectedSalary: "",
    ownConveyance: "",
    relocate: "",
    availability: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = e.currentTarget;
      const formDataToSend = new FormData(formElement);

      // Add subject and other config
      formDataToSend.append("_subject", `New Career Application: ${formData.position}`);
      formDataToSend.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/syed.zia560@gmail.com", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        toast({
          title: "Application Submitted Successfully",
          description: "Thank you for your interest. We have received your application.",
          variant: "default",
          className: "bg-green-600 text-white border-none"
        });
        // Reset form
        setFormData({
          email: "",
          position: "",
          currentSalary: "",
          expectedSalary: "",
          ownConveyance: "",
          relocate: "",
          availability: "",
        });
        // Optional: Reset file input if needed via ref
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error sending your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        
        <section className="relative pt-32 pb-20 min-h-[40vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-black/80 z-10" />
             <img 
               src="/images/factory-hero.jpg" 
               alt="Careers at MST" 
               className="w-full h-full object-cover grayscale"
             />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-20">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-4">Join Our Team</p>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Careers</h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                Build your future with Pakistan's leading leather manufacturer.
              </p>
            </div>
          </div>
        </section>

        
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Role Application</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email (required)</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      required 
                      className="bg-background"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applied For / Area of Interest (required)</Label>
                    <Input 
                      id="position" 
                      name="position"
                      required 
                      className="bg-background"
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Current Salary Range (required)</Label>
                    <Select 
                      name="currentSalary" 
                      value={formData.currentSalary} 
                      onValueChange={(val) => setFormData({...formData, currentSalary: val})} 
                      required
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="below_50k">Below 50,000</SelectItem>
                        <SelectItem value="50k_100k">50,000 - 100,000</SelectItem>
                        <SelectItem value="100k_150k">100,000 - 150,000</SelectItem>
                        <SelectItem value="150k_plus">150,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Expected Salary Range (required)</Label>
                    <Select 
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onValueChange={(val) => setFormData({...formData, expectedSalary: val})} 
                      required
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="below_50k">Below 50,000</SelectItem>
                        <SelectItem value="50k_100k">50,000 - 100,000</SelectItem>
                        <SelectItem value="100k_150k">100,000 - 150,000</SelectItem>
                        <SelectItem value="150k_plus">150,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Own Conveyance (required)</Label>
                    <Select 
                      name="ownConveyance"
                      value={formData.ownConveyance}
                      onValueChange={(val) => setFormData({...formData, ownConveyance: val})} 
                      required
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Willing to Relocate (required)</Label>
                    <Select 
                      name="relocate"
                      value={formData.relocate}
                      onValueChange={(val) => setFormData({...formData, relocate: val})} 
                      required
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Availability (required)</Label>
                    <Select 
                      name="availability"
                      value={formData.availability}
                      onValueChange={(val) => setFormData({...formData, availability: val})} 
                      required
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="1_month">1 Month Notice</SelectItem>
                        <SelectItem value="2_months">2 Months Notice</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Resume</Label>
                    <div className="flex items-center gap-4">
                        <Input 
                            type="file" 
                            name="attachment"
                            className="curso-pointer bg-background file:text-foreground" 
                            accept=".pdf,.doc,.docx"
                            required
                        />
                    </div>
                    <p className="text-xs text-gray-400">Accepted formats: PDF, DOC, DOCX</p>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center space-x-2 mb-6">
                        <input type="checkbox" id="privacy" className="rounded border-gray-300" required />
                        <label htmlFor="privacy" className="text-sm text-gray-400">
                            By submitting the form, I agree to the Privacy Policy.
                        </label>
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-green-700 hover:bg-green-800 text-white px-8">
                      {isSubmitting ? "SENDING..." : "SEND"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
*/

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CareersPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    position: "",
    currentSalary: "",
    expectedSalary: "",
    ownConveyance: "",
    relocate: "",
    availability: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = e.currentTarget;
      const formDataToSend = new FormData(formElement);

      formDataToSend.append(
        "_subject",
        `New Career Application: ${formData.position}`
      );
      formDataToSend.append("_captcha", "false");

      const response = await fetch(
        "https://formsubmit.co/syed.zia560@gmail.com",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        toast({
          title: "Application Submitted Successfully",
          description:
            "Thank you for your interest. We have received your application.",
          className: "bg-green-600 text-white border-none",
        });

        setFormData({
          email: "",
          position: "",
          currentSalary: "",
          expectedSalary: "",
          ownConveyance: "",
          relocate: "",
          availability: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description:
          "There was an error sending your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 min-h-[40vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/80 z-10" />
            <img
              src="/images/factory-hero.jpg"
              alt="Careers at MST"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-20">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.3em] uppercase mb-4">
                Join Our Team
              </p>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                Careers
              </h1>
              <p className="text-lg text-gray-200">
                Build your future with Pakistan's leading leather manufacturer.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-card p-8 rounded-2xl shadow-lg border">
              <h2 className="text-2xl font-serif font-bold mb-8">
                Role Application
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <div>
                    <Label>Email (required)</Label>
                    <Input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label>Position (required)</Label>
                    <Input
                      name="position"
                      required
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                    />
                  </div>

                  {/* ✅ MANUAL SALARY INPUT */}
                  <div>
                    <Label>Current Salary (required)</Label>
                    <Input
                      name="currentSalary"
                      required
                      placeholder="Enter current salary"
                      value={formData.currentSalary}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          currentSalary: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* ✅ MANUAL SALARY INPUT */}
                  <div>
                    <Label>Expected Salary (required)</Label>
                    <Input
                      name="expectedSalary"
                      required
                      placeholder="Enter expected salary"
                      value={formData.expectedSalary}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          expectedSalary: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <Label>Own Conveyance</Label>
                    <Select
                      name="ownConveyance"
                      value={formData.ownConveyance}
                      onValueChange={(val) =>
                        setFormData({ ...formData, ownConveyance: val })
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Relocate</Label>
                    <Select
                      name="relocate"
                      value={formData.relocate}
                      onValueChange={(val) =>
                        setFormData({ ...formData, relocate: val })
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Availability</Label>
                    <Select
                      name="availability"
                      value={formData.availability}
                      onValueChange={(val) =>
                        setFormData({ ...formData, availability: val })
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">
                          Immediately
                        </SelectItem>
                        <SelectItem value="1_month">
                          1 Month Notice
                        </SelectItem>
                        <SelectItem value="2_months">
                          2 Months Notice
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Upload Resume</Label>
                    <Input
                      type="file"
                      name="attachment"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-700 hover:bg-green-800 text-white"
                  >
                    {isSubmitting ? "SENDING..." : "SEND"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
