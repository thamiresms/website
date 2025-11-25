"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100">
        <div className="text-center py-8">
          <div className="h-16 w-16 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-brand-base" />
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">Thanks for reaching out!</h3>
          <p className="text-neutral-600">
            We'll be in touch within one business day to schedule your demo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100"
    >
      <h3 className="text-xl font-semibold text-neutral-900 mb-6">Request a demo</h3>
      
      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="First name" required>
            <input
              required
              name="firstName"
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-all outline-none"
              placeholder="Jane"
            />
          </Field>
          <Field label="Last name" required>
            <input
              required
              name="lastName"
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-all outline-none"
              placeholder="Smith"
            />
          </Field>
        </div>
        
        <Field label="Work email" required>
          <input
            required
            type="email"
            name="email"
            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-all outline-none"
            placeholder="jane@company.com"
          />
        </Field>
        
        <Field label="Company" required>
          <input
            required
            name="company"
            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-all outline-none"
            placeholder="Acme Financial"
          />
        </Field>
        
        <Field label="Job title">
          <input
            name="title"
            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-all outline-none"
            placeholder="VP of Operations"
          />
        </Field>
        
        <Field label="Which agent are you most interested in?">
          <select 
            name="agent" 
            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-all outline-none"
          >
            <option value="">Select an agent</option>
            <option value="taylor">Taylor — Customer Service & Collections</option>
            <option value="marshall">Marshall — Compliance & QA</option>
            <option value="alex">Alex — Disputes & Chargebacks</option>
            <option value="flynn">Flynn — Total Loss & Mitigation</option>
            <option value="multiple">Multiple agents</option>
          </select>
        </Field>
        
        <Field label="What's your primary goal?">
          <select 
            name="goal" 
            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-all outline-none"
          >
            <option value="">Select a goal</option>
            <option value="collections">Improve collections recovery</option>
            <option value="disputes">Automate dispute handling</option>
            <option value="compliance">Increase QA coverage</option>
            <option value="total-loss">Streamline total-loss workflows</option>
            <option value="other">Other</option>
          </select>
        </Field>
        
        <Field label="Anything else we should know?">
          <textarea
            name="notes"
            rows={3}
            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm focus:bg-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-all outline-none resize-none"
            placeholder="Tell us about your current challenges or specific use cases..."
          />
        </Field>
      </div>

      <div className="mt-6">
        <Button type="submit" size="lg" className="w-full">
          Request demo
        </Button>
      </div>
      
      <p className="mt-4 text-xs text-neutral-500 text-center">
        By submitting, you agree to our privacy policy. We'll never share your information.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-neutral-700 mb-1.5 block">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </span>
      {children}
    </label>
  );
}
