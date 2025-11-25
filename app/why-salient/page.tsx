import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Shield, CheckCircle2, FileText, Users, Zap, Brain } from "lucide-react";

export const metadata = {
  title: "Why Salient — Built for US Consumer Lenders",
  description:
    "Compliance-first AI agents for US consumer lenders — with workflow automation and borrower-level memory.",
};

export default function WhyPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 md:pt-24 lg:pt-32 pb-16">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="prose-title">Why lenders choose Salient</h1>
              <p className="mt-6 prose-subhead">
                We build AI agents specifically for US consumer lenders—with compliance, 
                back-office workflows, and borrower outcomes at the center of everything we do.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Compliance First */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1.5 text-sm font-medium text-brand-dark mb-6">
                  <Shield className="h-4 w-4" />
                  Compliance-First
                </div>
                <h2 className="prose-head">Compliance is where we start, not where we end</h2>
                <p className="mt-4 prose-subhead">
                  Salient is designed around how US lenders are actually supervised and 
                  examined—from the CFPB's supervision manual to expectations from OCC, 
                  FDIC, NCUA, and state regulators.
                </p>
              </div>
            </FadeIn>
            <FadeInStagger className="space-y-4" staggerDelay={0.1}>
              {[
                {
                  title: "Aligned with federal consumer-protection laws",
                  items: ["FDCPA", "UDAAP (Dodd-Frank)", "Truth in Lending / Reg Z", "FCRA", "ECOA / Reg B", "SCRA / MLA"],
                },
                {
                  title: "Built to support exams, not just pass legal review",
                  desc: "We think in exam packets: policies, evidence of implementation, monitoring, and remediation.",
                },
                {
                  title: "Automated testing before changes go live",
                  desc: "Edge-case scenarios, language checks, and regression tests reduce risk before deployment.",
                },
              ].map((card) => (
                <FadeInStaggerItem key={card.title}>
                  <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
                    <h3 className="font-semibold text-neutral-900 mb-3">{card.title}</h3>
                    {card.items ? (
                      <div className="flex flex-wrap gap-2">
                        {card.items.map((item) => (
                          <span key={item} className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-neutral-600 leading-relaxed">{card.desc}</p>
                    )}
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </Container>
      </Section>

      {/* Workflow Automation */}
      <Section>
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700 mb-6">
                <Zap className="h-4 w-4" />
                Workflow Automation
              </div>
              <h2 className="prose-head">More than a chatbot: agents that run entire workflows</h2>
              <p className="mt-4 prose-subhead">
                Most tools stop at answering questions. Salient agents pick up the heavy 
                back-office work: gathering data, checking rules, updating systems, and 
                producing documentation.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid gap-8 md:grid-cols-2" staggerDelay={0.1}>
            <FadeInStaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100 h-full">
                <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Disputes & chargebacks</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Alex accepts a dispute, walks the borrower through structured questions, 
                  collects documents, maps the right reason code, drafts the narrative, and 
                  opens a case in your system—so your team can review and decide, not retype.
                </p>
              </div>
            </FadeInStaggerItem>
            <FadeInStaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100 h-full">
                <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6">
                  <FileText className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Total loss</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Flynn ingests data from IAAI, Copart, and CCC Valuation, pulls loan and 
                  collateral details from your LMS, runs lender rules, tracks offers and 
                  counteroffers, and logs settlement terms, deficiency handling, waivers, 
                  and payment plans.
                </p>
              </div>
            </FadeInStaggerItem>
          </FadeInStagger>
        </Container>
      </Section>

      {/* Borrower Memory */}
      <Section className="bg-neutral-50">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">
                <Brain className="h-4 w-4" />
                Contextual Memory
              </div>
              <h2 className="prose-head">Every interaction builds on the last</h2>
              <p className="mt-4 prose-subhead">
                Each agent remembers what's happened with a borrower: promises to pay, 
                hardship conversations, prior disputes, and total-loss discussions. That 
                context shapes what they say, what options they present, and when they escalate.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
            {[
              "On the third broken promise, Taylor doesn't act like it's the first call.",
              "If a borrower previously raised a dispute, Alex knows the history and reduces repeated questions.",
              "When a vehicle later becomes totaled, Flynn has payment and hardship context ready.",
            ].map((text, i) => (
              <FadeInStaggerItem key={i}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100 h-full">
                  <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{text}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* How We Work */}
      <Section>
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-6">
                <Users className="h-4 w-4" />
                Our Process
              </div>
              <h2 className="prose-head">Co-designed with risk, compliance, and operations</h2>
              <p className="mt-4 prose-subhead">
                We typically start with a single portfolio and one agent, sitting down with 
                your teams to define guardrails, success metrics, and what would make the 
                pilot exam-safe.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              { step: "01", title: "Discover", desc: "Current policies, scripts, systems, and volumes" },
              { step: "02", title: "Design", desc: "Guardrails, flows, and success criteria" },
              { step: "03", title: "Deploy", desc: "Tightly-scoped pilot within your LMS/CCaaS stack" },
              { step: "04", title: "Document", desc: "Evidence, learnings, and rollout plan" },
            ].map((item) => (
              <FadeInStaggerItem key={item.step}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100 h-full">
                  <div className="text-3xl font-bold text-brand-accent mb-4">{item.step}</div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-dark text-white">
        <Container className="text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Ready to see Salient in action?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Book a demo to see how our agents can automate your lending workflows 
              while keeping you exam-ready.
            </p>
            <div className="mt-10">
              <Link href="/pilot">
                <Button size="lg" className="bg-white text-brand-dark hover:bg-white/90 gap-2">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
