import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GetStartedFormProps {
  trigger?: React.ReactNode;
  selectedPlan?: string;
}

const GetStartedForm = ({ trigger, selectedPlan }: GetStartedFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    plan: selectedPlan || "",
    fitnessGoal: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

async function sendMail(payload: { name: string; email: string; subject?: string; message: string }) {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error((await res.json()).error || "Send failed");
  return res.json();
}

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendMail({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        subject: `New application from ${formData.firstName}`,
        message: formData.message,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      toast({
        title: "Application Submitted!",
        description:
          "We'll contact you within 24 hours to schedule your free trial.",
      });

      // Reset after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setOpen(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          plan: "",
          fitnessGoal: "",
          message: "",
        });
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="hero" size="xl" className="group">
            GET STARTED
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle className="w-16 h-16 text-primary mb-4 animate-pulse-glow" />
            <h3 className="font-display text-2xl text-foreground mb-2">
              APPLICATION RECEIVED!
            </h3>
            <p className="text-muted-foreground">
              Our team will reach out to you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl tracking-wide">
                START YOUR{" "}
                <span className="gradient-text">FITNESS JOURNEY</span>
              </DialogTitle>
              <DialogDescription>
                Fill out the form below and we'll contact you to schedule your
                free trial session.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan">Interested Plan</Label>
                <Select
                  value={formData.plan}
                  onValueChange={(value) =>
                    setFormData({ ...formData, plan: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a membership plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic - ₱2900/month</SelectItem>
                    <SelectItem value="premium">Premium - ₱5000/month</SelectItem>
                    <SelectItem value="elite">Elite - ₱3500/month</SelectItem>
                    <SelectItem value="undecided">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fitnessGoal">Fitness Goal</Label>
                <Select
                  value={formData.fitnessGoal}
                  onValueChange={(value) =>
                    setFormData({ ...formData, fitnessGoal: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="What's your main goal?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weight-loss">Weight Loss</SelectItem>
                    <SelectItem value="muscle-gain">Build Muscle</SelectItem>
                    <SelectItem value="endurance">Improve Endurance</SelectItem>
                    <SelectItem value="flexibility">Flexibility & Mobility</SelectItem>
                    <SelectItem value="general">General Fitness</SelectItem>
                    <SelectItem value="sports">Sports Performance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your fitness experience or any questions..."
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    SUBMIT APPLICATION
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to be contacted about our gym services.
                Your information is secure and will never be shared.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedForm;
