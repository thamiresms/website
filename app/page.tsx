import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Shield, Workflow, Brain, Phone, FileCheck, Scale, Headphones, Globe, BarChart3 } from "lucide-react";
import { TaylorVoiceDemo } from "@/components/taylor-voice-demo";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
        <Container className="text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-light/50 px-4 py-1.5 text-sm font-medium text-brand-dark mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-base"></span>
              </span>
              Now serving US consumer lenders
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="prose-title max-w-4xl mx-auto">
              AI agents built for
              <br className="hidden sm:block" />
              <span className="text-brand-base">US consumer lenders</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl prose-subhead">
              Salient automates collections, customer service, disputes, and total-loss 
              mitigation with compliance-first AI designed for how US lenders are 
              supervised and examined.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/pilot">
                <Button size="lg" className="gap-2">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#agents">
                <Button variant="secondary" size="lg">
                  Meet the agents
                </Button>
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mt-8 text-sm text-neutral-500">
              Trusted by banks, credit unions, auto lenders, and fintechs across the US
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Dashboard Showcase */}
      <Section className="bg-white py-16 md:py-20">
        <Container>
          <FadeIn>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
              <Image
                src="/salient_dash.webp"
                alt="Salient Dashboard"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Taylor Voice Demo - Sierra "speaks" style */}
      <Section className="bg-[#f5f5f4] py-20 md:py-28">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-14">
            <FadeIn>
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
                  Taylor speaks
                </h2>
                <p className="mt-3 text-neutral-500 text-lg">
                  Hear how Taylor handles a collections call with empathy and compliance.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link href="/agents/taylor">
                <Button className="gap-2 whitespace-nowrap">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center">
            <FadeIn delay={0.2}>
              <TaylorVoiceDemo />
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-8">
                <div className="flex gap-4 group">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                    <Headphones className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 text-lg mb-2">Natural, empathetic conversations</h3>
                    <p className="text-neutral-600 leading-relaxed text-[15px]">
                      Taylor delivers personalized conversations that feel human. Always available, 
                      endlessly patient, and able to reason, predict, and act in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 text-lg mb-2">Connect to your call center ecosystem</h3>
                    <p className="text-neutral-600 leading-relaxed text-[15px]">
                      Seamlessly integrate with your existing technology stack, with comprehensive 
                      summaries and intelligent routing when escalation is required.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 text-lg mb-2">Scale consistent experiences</h3>
                    <p className="text-neutral-600 leading-relaxed text-[15px]">
                      Build once and run everywhere, with a continuously-improving, trusted AI agent 
                      tailored to your brand, goals, and processes.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Why Salient */}
      <Section className="bg-white">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="prose-head">Purpose-built AI for regulated lending</h2>
              <p className="mt-4 prose-subhead">
                Unlike generic AI tools, Salient is designed from the ground up for the 
                unique requirements of US consumer lending.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="mt-16 grid gap-8 md:grid-cols-3" staggerDelay={0.1}>
            {[
              {
                icon: Shield,
                title: "Compliance-first architecture",
                body: "Built around CFPB, OCC, FDIC, and NCUA expectations. Every interaction is logged, auditable, and exam-ready from day one.",
              },
              {
                icon: Workflow,
                title: "End-to-end workflow automation",
                body: "Our agents don't just answer questions—they run complete workflows from intake through resolution, updating your systems along the way.",
              },
              {
                icon: Brain,
                title: "Borrower-level memory",
                body: "Every interaction builds on prior history: payment promises, hardship notes, disputes, and claims. Better context means better outcomes.",
              },
            ].map((card) => (
              <FadeInStaggerItem key={card.title}>
                <div className="bg-neutral-50 rounded-2xl p-8 h-full">
                  <div className="h-12 w-12 rounded-xl bg-brand-light flex items-center justify-center mb-6">
                    <card.icon className="h-6 w-6 text-brand-base" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">{card.title}</h3>
                  <p className="mt-3 text-neutral-600 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <Link href="/why-salient" className="inline-flex items-center gap-2 text-brand-base font-medium hover:gap-3 transition-all">
                Learn why lenders choose Salient <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Agents */}
      <Section id="agents" className="bg-neutral-50">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="prose-head">Four specialist agents, one platform</h2>
              <p className="mt-4 prose-subhead">
                Each agent is purpose-built for a different part of the lending lifecycle. 
                They share context and memory across every borrower interaction.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {agentCards.map((agent) => (
              <FadeInStaggerItem key={agent.name}>
                <Link href={agent.href} className="block group">
                  <div className="bg-white rounded-2xl shadow-card border border-neutral-100 h-full card-hover overflow-hidden flex flex-col">
                    <div className="relative w-full h-32 bg-neutral-50">
                      <Image
                        src={agent.image}
                        alt={`${agent.name} illustration`}
                        fill
                        sizes="(min-width: 1024px) 240px, 50vw"
                        className="object-cover"
                        priority={false}
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center", agent.bgColor)}>
                          <agent.icon className={cn("h-5 w-5", agent.iconColor)} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900 group-hover:text-brand-base transition-colors">
                            {agent.name}
                          </h3>
                          <p className="text-xs text-neutral-500">{agent.type}</p>
                        </div>
                      </div>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                      {agent.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {agent.chips.slice(0, 3).map((chip) => (
                        <Chip key={chip}>{chip}</Chip>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-neutral-100">
                      <span className="text-sm font-medium text-brand-base inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    </div>
                  </div>
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* Integration */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="prose-head">Works with your existing stack</h2>
                <p className="mt-4 prose-subhead">
                  Salient connects to the loan systems, contact centers, and payment providers 
                  your teams already use—so you can launch pilots without replacing infrastructure.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    "Major LMS/LOS platforms",
                    "Genesys, NICE, Amazon Connect",
                    "Payment processors",
                    "CRM systems",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-neutral-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/why-salient" className="inline-flex items-center gap-2 text-brand-base font-medium hover:gap-3 transition-all">
                    See how integration works <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-neutral-50 rounded-2xl p-8">
                <div className="grid grid-cols-3 gap-4">
                  {["Genesys", "NICE", "Amazon Connect", "FIS", "Black Knight", "Fiserv"].map((logo) => (
                    <div
                      key={logo}
                      className="aspect-[3/2] rounded-xl bg-white flex items-center justify-center text-sm text-neutral-400 font-medium border border-neutral-100"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section className="bg-neutral-50">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="prose-head">Proven impact on lending operations</h2>
              <p className="mt-4 prose-subhead">
                Lenders using Salient see measurable improvements across collections, 
                disputes, compliance, and operational efficiency.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              { metric: "↑ Net recovery", desc: "Increase collections while reducing manual call volume" },
              { metric: "↓ Resolution time", desc: "Resolve disputes faster with cleaner documentation" },
              { metric: "↓ Handle time", desc: "Reduce back-office workload in servicing teams" },
              { metric: "↑ Exam readiness", desc: "Complete, searchable records for every interaction" },
            ].map((item) => (
              <FadeInStaggerItem key={item.metric}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100 text-center">
                  <div className="text-2xl font-semibold text-brand-base mb-2">{item.metric}</div>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <Link href="/customers" className="inline-flex items-center gap-2 text-brand-base font-medium hover:gap-3 transition-all">
                View customer stories <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Compliance teaser */}
      <Section className="bg-brand-dark text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Compliance and governance, built in
                </h2>
                <p className="mt-4 text-lg text-white/70 leading-relaxed">
                  Salient's agents are configured around the laws and expectations that govern 
                  US consumer lending. Every change is tested before deployment, and we log 
                  what was said, what was done, and why.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Designed for CFPB, OCC, FDIC, and NCUA supervision",
                    "Automated scenario and regression testing",
                    "One-click export of exam-ready evidence packs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-3.5 w-3.5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link href="/compliance">
                    <Button variant="secondary" size="lg" className="bg-white text-brand-dark hover:bg-white/90">
                      Learn about compliance
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/10">
                <div className="space-y-4">
                  {["FDCPA", "UDAAP", "Reg Z", "FCRA", "ECOA / Reg B", "SCRA / MLA"].map((law) => (
                    <div key={law} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <span className="font-medium">{law}</span>
                      <span className="text-brand-accent text-sm">Supported</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-neutral-50">
        <Container className="text-center">
          <FadeIn>
            <h2 className="prose-head">
              Start with a single portfolio
              <br className="hidden sm:block" />
              and a single agent
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 prose-subhead max-w-2xl mx-auto">
              Most teams begin with a focused pilot—one portfolio, one agent, clearly defined 
              guardrails, and measurable outcomes in weeks. We work directly with your risk, 
              compliance, and operations leaders to design something exam-safe.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/pilot">
                <Button size="lg" className="gap-2">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pilot">
                <Button variant="secondary" size="lg">
                  Talk to our team
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}

const agentCards = [
  {
    name: "Taylor",
    type: "Customer Service & Collections",
    href: "/agents/taylor",
    desc: "Handles inbound and outbound conversations across voice, text, and email—from welcome and verification to payment support and collections.",
    chips: ["Collections", "Payments", "Hardship"],
    icon: Phone,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    image: "/agents/taylor.svg",
  },
  {
    name: "Marshall",
    type: "Compliance & QA",
    href: "/agents/marshall",
    desc: "Monitors 100% of calls, texts, and emails, automatically flagging compliance issues and generating exam-ready evidence.",
    chips: ["QA", "UDAAP", "Disclosures"],
    icon: Shield,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    image: "/agents/marshall.svg",
  },
  {
    name: "Alex",
    type: "Disputes & Chargebacks",
    href: "/agents/alex",
    desc: "Runs the full dispute workflow: intake, documentation, reason-code classification, and case prep for human decisioning.",
    chips: ["Disputes", "Chargebacks", "Case prep"],
    icon: FileCheck,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    image: "/agents/alex.svg",
  },
  {
    name: "Flynn",
    type: "Total Loss & Mitigation",
    href: "/agents/flynn",
    desc: "Automates total-loss workflows from salvage intake through settlement negotiation and deficiency handling.",
    chips: ["Total loss", "Settlement", "Recovery"],
    icon: Scale,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    image: "/agents/flynn.svg",
  },
];

