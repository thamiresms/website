"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Phone, Shield, FileCheck, Scale } from "lucide-react";

const agents = [
  {
    name: "Taylor",
    type: "Customer Service & Collections",
    href: "/agents/taylor",
    description: "Handles inbound and outbound conversations across voice, text, and email—from welcome and verification to payment support and collections.",
    longDescription: "Taylor is your always-on collections and customer service team. Available 24/7, Taylor manages the full spectrum of borrower interactions with empathy and compliance built in.",
    capabilities: [
      "Welcome & verification",
      "Payment support & processing",
      "Hardship conversations",
      "Collections outreach",
      "Payoff quotes",
      "Smart escalation routing"
    ],
    chips: ["Collections", "Payments", "Hardship"],
    icon: Phone,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
    hoverBg: "hover:bg-blue-50",
    activeBg: "bg-blue-100",
    image: "/agents/Taylor.png",
  },
  {
    name: "Marshall",
    type: "Compliance & QA",
    href: "/agents/marshall",
    description: "Monitors 100% of calls, texts, and emails, automatically flagging compliance issues and generating exam-ready evidence.",
    longDescription: "Marshall provides 100% coverage QA with zero sampling bias. Every interaction is reviewed for compliance, quality, and coaching opportunities.",
    capabilities: [
      "Full-coverage QA review",
      "Contact-rule monitoring",
      "Disclosure tracking",
      "UDAAP language detection",
      "Automated scorecards",
      "Coaching insights"
    ],
    chips: ["QA", "UDAAP", "Disclosures"],
    icon: Shield,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    hoverBg: "hover:bg-emerald-50",
    activeBg: "bg-emerald-100",
    image: "/agents/Marshall.png",
  },
  {
    name: "Alex",
    type: "Disputes & Chargebacks",
    href: "/agents/alex",
    description: "Runs the full dispute workflow: intake, documentation, reason-code classification, and case prep for human decisioning.",
    longDescription: "Alex transforms dispute handling from intake to case-ready files in minutes. Structured workflows ensure nothing is missed and cases are ready for human review.",
    capabilities: [
      "Structured intake",
      "Document collection",
      "Reason-code mapping",
      "Narrative drafting",
      "Case file creation",
      "Status updates"
    ],
    chips: ["Disputes", "Chargebacks", "Case prep"],
    icon: FileCheck,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
    hoverBg: "hover:bg-purple-50",
    activeBg: "bg-purple-100",
    image: "/agents/Alex.png",
  },
  {
    name: "Flynn",
    type: "Total Loss & Mitigation",
    href: "/agents/flynn",
    description: "Automates total-loss workflows from salvage intake through settlement negotiation and deficiency handling.",
    longDescription: "Flynn represents your interests in total-loss scenarios. From valuation intake to settlement negotiation, Flynn ensures fair outcomes and faster resolution.",
    capabilities: [
      "Valuation intake",
      "Settlement negotiation",
      "Deficiency handling",
      "Recovery workflows",
      "Payment plans",
      "Complete documentation"
    ],
    chips: ["Total loss", "Settlement", "Recovery"],
    icon: Scale,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
    hoverBg: "hover:bg-amber-50",
    activeBg: "bg-amber-100",
    image: "/agents/Flynn.png",
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
      {children}
    </span>
  );
}

export function AgentsNavigator() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedAgent = agents[selectedIndex];

  return (
    <div className="grid lg:grid-cols-[300px,1fr] gap-8 lg:gap-12">
      {/* Navigator */}
      <div className="space-y-2">
        <div className="text-sm font-medium text-neutral-500 mb-4">Select an agent</div>
        {agents.map((agent, index) => {
          const isSelected = index === selectedIndex;
          
          return (
            <button
              key={agent.name}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "w-full text-left p-4 rounded-xl border transition-all",
                isSelected 
                  ? "bg-neutral-900 border-neutral-900 shadow-sm text-white"
                  : "bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className={cn("font-semibold", isSelected ? "text-white" : "text-neutral-900")}>
                    {agent.name}
                  </div>
                  <div className={cn("text-xs truncate", isSelected ? "text-neutral-300" : "text-neutral-500")}>
                    {agent.type}
                  </div>
                </div>
                {isSelected && (
                  <motion.div
                    layoutId="selected-indicator"
                    className="h-2 w-2 rounded-full bg-white"
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Agent Details */}
      <div className="relative min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden h-full">
              <div className="grid md:grid-cols-[380px,1fr] h-full">
                {/* Agent Photo */}
                <div className="relative bg-gradient-to-b from-[#f5f1e8] to-[#ebe4d5] overflow-hidden">
                  <div className="absolute inset-0 flex items-end justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={selectedAgent.image}
                        alt={`${selectedAgent.name} portrait`}
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Agent Info */}
                <div className="p-8 md:p-10 flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-1">
                        {selectedAgent.name}
                      </h3>
                      <p className="text-sm text-neutral-500">{selectedAgent.type}</p>
                    </div>
                  </div>

                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {selectedAgent.longDescription}
                  </p>

                  <div className="mb-6">
                    <div className="text-sm font-medium text-neutral-900 mb-3">Key capabilities</div>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedAgent.capabilities.map((capability) => (
                        <div key={capability} className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-neutral-400 mt-1.5 flex-shrink-0" />
                          <span className="text-neutral-600">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedAgent.chips.map((chip) => (
                      <Chip key={chip}>{chip}</Chip>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <Link href={selectedAgent.href}>
                      <Button size="lg" className="gap-2 w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800">
                        Learn more about {selectedAgent.name} <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

