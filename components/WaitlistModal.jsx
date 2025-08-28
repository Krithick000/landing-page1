"use client";
import React, { isValidElement, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { CheckCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/useToast";
import { supabase } from "@/utils/supabase/client";

const WaitlistModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const today = new Date().toISOString().split("T")[0];
  const [valid, setValid] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !name) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const { data, error } = await supabase.from("waitlist").insert({
      name: name,
      email: email,
      created_at: today,
    });

    if (error) {
      toast({
        title: "Error joining the waitlist",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Successfully joined the waitlist!",
        description: "We'll notify you when we're ready to launch.",
      });
      setValid(true);
    }

    setIsLoading(false);

    setIsSubmitted(true);
  };

  const handleClose = () => {
    setEmail("");
    setName("");
    setIsSubmitted(false);
    onClose();
  };

  if (isSubmitted && valid) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              You're In!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="text-muted-foreground mb-6">
              Welcome to the TeachPlan waitlist. We'll notify you as soon as
              we're ready to launch!
            </p>
            <Button onClick={handleClose} className="w-full">
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
            Join the Waitlist
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@school.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Joining..." : "Join the Waitlist"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We'll only use your email to notify you about TeachPlan updates.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
