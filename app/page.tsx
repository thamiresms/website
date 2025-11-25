import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/motion";
import { ArrowRight, Shield, Workflow, Brain, Headphones, Globe, BarChart3 } from "lucide-react";
import { TaylorVoiceDemo } from "@/components/taylor-voice-demo";
import { AgentsNavigator } from "@/components/agents-navigator";
import { FeatureCard } from "@/components/feature-card";


export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
        <Container className="text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-900 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Now serving US consumer lenders
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="prose-title max-w-4xl mx-auto">
              AI agents built for
              <br className="hidden sm:block" />
              <span className="text-blue-600">US consumer lenders</span>
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
                  Taylor speaks banking
                </h2>
                <p className="mt-3 text-neutral-500 text-lg">
                  Hear how Taylor handles customer interactions with empathy and compliance.
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
                <FeatureCard
                  variant="minimal"
                  icon={Headphones}
                  title="Natural, empathetic conversations"
                  description="Taylor delivers personalized conversations that feel human. Always available, endlessly patient, and able to reason, predict, and act in real-time."
                />
                <FeatureCard
                  variant="minimal"
                  icon={Globe}
                  title="Connect to your call center ecosystem"
                  description="Seamlessly integrate with your existing technology stack, with comprehensive summaries and intelligent routing when escalation is required."
                />
                <FeatureCard
                  variant="minimal"
                  icon={BarChart3}
                  title="Scale consistent experiences"
                  description="Build once and run everywhere, with a continuously-improving, trusted AI agent tailored to your brand, goals, and processes."
                />
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
                <FeatureCard
                  icon={card.icon}
                  title={card.title}
                  description={card.body}
                />
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <Link href="/why-salient" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all hover:text-blue-700">
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
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="prose-head">Four specialist agents, one platform</h2>
              <p className="mt-4 prose-subhead">
                Each agent is purpose-built for a different part of the lending lifecycle. 
                They share context and memory across every borrower interaction.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <AgentsNavigator />
          </FadeIn>
        </Container>
      </Section>

      {/* Integration */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="inline-block rounded-full bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white mb-6">
                  Built for Your Stack
                </div>
                <h2 className="prose-head">Work with the systems you already use</h2>
                <p className="mt-4 prose-subhead">
                  Salient connects to the loan systems, contact centers, and payment 
                  providers your teams rely on today – from major US LMS/LOS platforms to 
                  leading CCaaS solutions and payment rails – so you can launch pilots 
                  without ripping out existing infrastructure.
                </p>
                <p className="mt-6 text-sm text-neutral-600">
                  Examples include common US lending systems, cloud contact 
                  centers like Genesys, NiCE, and Amazon Connect, and the 
                  payment processors already wired into your servicing stack.
                </p>
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
              <h2 className="prose-head">Proven impact on leading lenders</h2>
            </div>
          </FadeIn>
          <FadeInStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              { 
                metric: "500K+", 
                title: "daily unique customer interactions",
                desc: "Reduce manual call volume while improving customer satisfaction" 
              },
              { 
                metric: "50%", 
                title: "average cost reduction",
                desc: "Automate manual workflow with cleaner documentation and fewer reworks" 
              },
              { 
                metric: "1:1", 
                title: "recovery rates matching human performance",
                desc: "Automate your loss mitigation processes with no outcome gap" 
              },
              { 
                metric: "100%", 
                title: "compliance monitoring",
                desc: "Improve exam readiness with complete, searchable records for every interaction and workflow" 
              },
            ].map((item) => (
              <FadeInStaggerItem key={item.metric} className="flex">
                <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100 text-center flex flex-col w-full">
                  <div className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4">{item.metric}</div>
                  <div className="text-base font-bold text-neutral-900 mb-4 leading-tight">{item.title}</div>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* Compliance teaser */}
      <Section className="bg-neutral-900 text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white mb-6">
                  Trust & Security
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Compliance and governance, built in
                </h2>
                <p className="mt-4 text-lg text-neutral-300 leading-relaxed">
                  Salient's agents are configured around the major laws and expectations that govern 
                  US consumer lending – and every change to policies or prompts is 
                  run through automated tests before it goes live. We log what was said, what was 
                  done, and why, so you can answer tough questions from federal and state 
                  regulators.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Designed for CFPB, OCC, FDIC, and NCUA supervision",
                    "Automated scenario and regression testing",
                    "One-click export of exam-ready evidence packs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-3.5 w-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-neutral-100">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link href="/compliance">
                    <Button variant="secondary" size="lg" className="bg-white text-neutral-900 hover:bg-neutral-50">
                      Learn about compliance
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
                <div className="space-y-4">
                  {["FDCPA", "UDAAP", "Reg Z", "FCRA", "ECOA / Reg B", "SCRA / MLA"].map((law) => (
                    <div key={law} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <span className="font-medium text-white">{law}</span>
                      <span className="text-blue-400 text-sm font-medium">Supported</span>
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
