import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface BulkEnquiryModalProps {
  children: React.ReactNode;
}

export function BulkEnquiryModal({ children }: BulkEnquiryModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-8 bg-background border-none shadow-2xl rounded-3xl">
        <DialogHeader className="mb-8">
          <DialogTitle className="font-serif text-3xl text-primary">Bulk Enquiry</DialogTitle>
          <p className="text-sm text-foreground/60">
            Interested in sourcing Temi Tea for your business? Send us your requirements.
          </p>
        </DialogHeader>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="bulk-name" className="text-xs uppercase tracking-wider text-foreground/50">Full Name</Label>
            <Input id="bulk-name" placeholder="John Doe" className="bg-secondary/30 border-none focus-visible:ring-primary h-12" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bulk-phone" className="text-xs uppercase tracking-wider text-foreground/50">Phone</Label>
              <Input id="bulk-phone" placeholder="+91 000..." className="bg-secondary/30 border-none focus-visible:ring-primary h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bulk-email" className="text-xs uppercase tracking-wider text-foreground/50">Email</Label>
              <Input id="bulk-email" type="email" placeholder="john@example.com" className="bg-secondary/30 border-none focus-visible:ring-primary h-12" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bulk-remarks" className="text-xs uppercase tracking-wider text-foreground/50">Remarks / Requirements</Label>
            <Textarea 
              id="bulk-remarks" 
              placeholder="Tell us about your volume requirements or specific tea grades..." 
              className="bg-secondary/30 border-none focus-visible:ring-primary min-h-[120px] resize-none" 
            />
          </div>
          <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all mt-4 shadow-lg">
            Submit Enquiry
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
