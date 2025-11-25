import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Phone, Shield, FileCheck, Scale, CheckCircle2 } from "lucide-react";

type AgentKey = "taylor" | "marshall" | "alex" | "flynn";

const AGENTS: Record<
  AgentKey,
  {
    title: string;
    type: string;
    tagline: string;
    description: string;
    icon: typeof Phone;
    image: string;
    color: { bg: string; text: string; light: string };
    capabilities: { title: string; desc: string }[];
    workflow: { step: string; title: string; desc: string }[];
    compliance: string[];
    memory: string[];
  }
> = {
  taylor: {
    title: "Taylor",
    type: "Customer Service & Collections Agent",
    tagline: "Your always-on collections and customer service team",
    description:
      "Taylor handles inbound and outbound conversations across voice, text, and email—covering everything from welcome and verification to payment support, hardship discussions, and collections.",
    icon: Phone,
    image: "/agents/Taylor.png",
    color: { bg: "bg-blue-50", text: "text-blue-600", light: "bg-blue-100" },
    capabilities: [
      { title: "Welcome & verification", desc: "Authenticate borrowers and manage consent and communication preferences" },
      { title: "Payment support", desc: "Take payments, set up payment plans, process extensions, and record promises to pay" },
      { title: "Hardship handling", desc: "Conduct hardship conversations with empathy and route to appropriate programs" },
      { title: "Collections outreach", desc: "Conduct compliant outbound collections across voice, SMS, and email channels" },
      { title: "Payoff quotes", desc: "Generate accurate payoff quotes and handle payoff-related inquiries" },
      { title: "Escalation routing", desc: "Intelligently escalate to human agents with full context when needed" },
    ],
    workflow: [
      { step: "01", title: "Authenticate", desc: "Verify borrower identity and pull account context" },
      { step: "02", title: "Understand", desc: "Listen to the borrower's situation and intent" },
      { step: "03", title: "Resolve", desc: "Take action: payment, promise, hardship, or escalation" },
      { step: "04", title: "Document", desc: "Log everything for compliance and future context" },
    ],
    compliance: [
      "FDCPA-compliant call scripting and timing",
      "TCPA consent management for outbound contacts",
      "Mini-Miranda and state-specific disclosures",
      "Contact attempt limits and right-party verification",
    ],
    memory: [
      "Prior payment history and broken promises",
      "Previous hardship conversations and outcomes",
      "Communication preferences and best contact times",
      "Account status changes and recent interactions",
    ],
  },
  marshall: {
    title: "Marshall",
    type: "Compliance & QA Agent",
    tagline: "100% coverage, zero sampling bias",
    description:
      "Marshall monitors every call, text, and email—automatically flagging potential compliance issues and feeding QA scorecards, coaching recommendations, and exam-ready evidence.",
    icon: Shield,
    image: "/agents/Marshall.png",
    color: { bg: "bg-emerald-50", text: "text-emerald-600", light: "bg-emerald-100" },
    capabilities: [
      { title: "Full-coverage QA", desc: "Review 100% of interactions instead of random sampling" },
      { title: "Contact-rule monitoring", desc: "Detect potential FDCPA timing and frequency violations" },
      { title: "Disclosure tracking", desc: "Verify required disclosures are delivered correctly" },
      { title: "UDAAP language flags", desc: "Identify potentially unfair, deceptive, or abusive language" },
      { title: "Scorecard automation", desc: "Generate QA scorecards automatically for every interaction" },
      { title: "Coaching insights", desc: "Surface coaching opportunities for human agents" },
    ],
    workflow: [
      { step: "01", title: "Ingest", desc: "Receive transcripts and recordings in real-time" },
      { step: "02", title: "Analyze", desc: "Apply policy-based checks and language analysis" },
      { step: "03", title: "Flag", desc: "Surface potential issues with severity and context" },
      { step: "04", title: "Report", desc: "Generate evidence packs and trend reporting" },
    ],
    compliance: [
      "Policy-anchored evaluation criteria",
      "Configurable severity thresholds",
      "Audit trail for all findings",
      "Remediation tracking and follow-up",
    ],
    memory: [
      "Historical QA scores by agent and team",
      "Trending compliance issues over time",
      "Prior findings on specific borrower accounts",
      "Remediation status and outcomes",
    ],
  },
  alex: {
    title: "Alex",
    type: "Disputes & Chargebacks Agent",
    tagline: "From intake to case-ready in minutes, not days",
    description:
      "Alex runs the full dispute and chargeback workflow: structured intake, document collection, reason-code classification, and case preparation—so your team reviews cases instead of re-typing them.",
    icon: FileCheck,
    image: "/agents/Alex.png",
    color: { bg: "bg-purple-50", text: "text-purple-600", light: "bg-purple-100" },
    capabilities: [
      { title: "Structured intake", desc: "Guide borrowers through dispute details with smart questioning" },
      { title: "Document collection", desc: "Request and organize supporting documents automatically" },
      { title: "Reason-code mapping", desc: "Classify disputes to appropriate reason codes" },
      { title: "Narrative drafting", desc: "Generate case narratives from collected information" },
      { title: "Case file creation", desc: "Create complete case files in your dispute management system" },
      { title: "Status updates", desc: "Keep borrowers informed throughout the process" },
    ],
    workflow: [
      { step: "01", title: "Intake", desc: "Collect dispute details through guided conversation" },
      { step: "02", title: "Gather", desc: "Request and organize supporting documentation" },
      { step: "03", title: "Classify", desc: "Map to reason codes and draft case narrative" },
      { step: "04", title: "Handoff", desc: "Create case file for human review and decision" },
    ],
    compliance: [
      "FCRA dispute handling timelines",
      "Reg E and Reg Z requirements",
      "Documentation retention standards",
      "Borrower communication requirements",
    ],
    memory: [
      "Prior disputes on the same account",
      "Related transactions and account activity",
      "Previous document submissions",
      "Historical dispute outcomes",
    ],
  },
  flynn: {
    title: "Flynn",
    type: "Total Loss & Mitigation Agent",
    tagline: "Fair settlements, faster resolution",
    description:
      "Flynn represents your interests in total-loss workflows—automating intake from salvage and valuation systems, managing settlement negotiations, and handling deficiency and recovery workflows.",
    icon: Scale,
    image: "/agents/Flynn.png",
    color: { bg: "bg-amber-50", text: "text-amber-600", light: "bg-amber-100" },
    capabilities: [
      { title: "Valuation intake", desc: "Ingest data from IAAI, Copart, CCC Valuation, and other sources" },
      { title: "Settlement negotiation", desc: "Manage offers and counteroffers within your policy parameters" },
      { title: "Deficiency handling", desc: "Calculate and communicate deficiency balances" },
      { title: "Recovery workflows", desc: "Coordinate GAP claims and other recovery sources" },
      { title: "Payment plans", desc: "Set up deficiency payment arrangements when appropriate" },
      { title: "Documentation", desc: "Maintain complete records of all settlement activities" },
    ],
    workflow: [
      { step: "01", title: "Intake", desc: "Receive total-loss notification and pull loan details" },
      { step: "02", title: "Value", desc: "Ingest valuations and apply lender policies" },
      { step: "03", title: "Negotiate", desc: "Manage settlement within approved parameters" },
      { step: "04", title: "Resolve", desc: "Process settlement and handle deficiency" },
    ],
    compliance: [
      "Fair settlement practices",
      "State-specific total-loss requirements",
      "GAP claim coordination",
      "Deficiency balance regulations",
    ],
    memory: [
      "Loan and collateral details",
      "Prior payment and hardship history",
      "Settlement offer history",
      "Communication log with all parties",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(AGENTS).map((agent) => ({ agent }));
}

export function generateMetadata({
  params,
}: {
  params: { agent: AgentKey };
}): Metadata {
  const a = AGENTS[params.agent];
  return {
    title: a ? `${a.title} — ${a.type} | Salient` : "Agent | Salient",
    description: a?.description,
  };
}

export default function AgentPage({
  params,
}: {
  params: { agent: AgentKey };
}) {
  const data = AGENTS[params.agent];
  if (!data) {
    return null;
  }

  const Icon = data.icon;

  return (
    <>
      {/* Hero with Agent Photo */}
      <Section className="pt-16 md:pt-24 pb-16">
        <Container>
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden">
              <div className="grid md:grid-cols-[380px,1fr] lg:grid-cols-[480px,1fr]">
                {/* Agent Photo */}
                <div className="relative bg-gradient-to-b from-[#f5f1e8] to-[#ebe4d5] h-[400px] md:h-auto min-h-[500px]">
                  <div className="absolute inset-0 flex items-end justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={data.image}
                        alt={`${data.title} portrait`}
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Agent Info */}
                <div className="p-8 md:p-10 lg:p-12 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`h-14 w-14 rounded-2xl ${data.color.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-7 w-7 ${data.color.text}`} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-500">Salient Agent</div>
                      <h1 className="text-2xl font-semibold text-neutral-900">{data.title}</h1>
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
                    {data.type}
                  </p>
                  <p className="text-xl text-neutral-600 leading-relaxed mb-4">
                    {data.tagline}
                  </p>
                  <p className="text-base text-neutral-600 leading-relaxed mb-8">
                    {data.description}
                  </p>
                  <div className="mt-auto">
                    <Link href="/pilot">
                      <Button size="lg" className="gap-2">
                        Start a {data.title} pilot <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section className="bg-neutral-50">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <h2 className="prose-head">What {data.title} can do</h2>
              <p className="mt-4 prose-subhead">
                {data.title} is designed to handle the full scope of {data.type.toLowerCase()} workflows.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.05}>
            {data.capabilities.map((cap) => (
              <FadeInStaggerItem key={cap.title}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100 h-full">
                  <h3 className="font-semibold text-neutral-900 mb-2">{cap.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{cap.desc}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* How it works */}
      <Section>
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="prose-head">How {data.title} works</h2>
              <p className="mt-4 prose-subhead">
                A typical interaction follows this workflow, with full logging and compliance checks at every step.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {data.workflow.map((step) => (
              <FadeInStaggerItem key={step.step}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100 h-full">
                  <div className={`text-3xl font-bold ${data.color.text} mb-4`}>{step.step}</div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600">{step.desc}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* Compliance */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <h2 className="prose-head">Compliance & guardrails</h2>
                <p className="mt-4 prose-subhead">
                  {data.title} operates within strict compliance guardrails, with every action logged and auditable.
                </p>
                <ul className="mt-8 space-y-4">
                  {data.compliance.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-5 w-5 ${data.color.text} flex-shrink-0 mt-0.5`} />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h2 className="prose-head">Memory & personalization</h2>
                <p className="mt-4 prose-subhead">
                  {data.title} maintains context across interactions to deliver more relevant, personalized experiences.
                </p>
                <ul className="mt-8 space-y-4">
                  {data.memory.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-5 w-5 ${data.color.text} flex-shrink-0 mt-0.5`} />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-dark text-white">
        <Container className="text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              See {data.title} in action
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Book a demo to see how {data.title} can transform your {data.type.toLowerCase()} workflows.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/pilot">
                <Button size="lg" className="bg-white text-brand-dark hover:bg-white/90 gap-2">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/agents/taylor">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                  Explore other agents
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
