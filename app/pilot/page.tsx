import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/motion";
import ContactForm from "./contact-form";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Book a Demo — Start Your Pilot | Salient",
  description:
    "Start with one portfolio and one agent, with clear guardrails for compliance and measurable results in weeks.",
};

export default function PilotPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 md:pt-24 lg:pt-32 pb-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div>
                <h1 className="prose-title">Book a demo</h1>
                <p className="mt-6 prose-subhead">
                  Start with one portfolio and one agent, with clear guardrails for 
                  compliance and measurable results in weeks.
                </p>
                <div className="mt-10 space-y-4">
                  {[
                    "30-minute intro call with our team",
                    "See Salient agents in action with your use cases",
                    "Discuss pilot scope and success metrics",
                    "Get a custom implementation timeline",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-base flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* How Pilots Work */}
      <Section className="bg-neutral-50">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="prose-head">How pilots work</h2>
              <p className="mt-4 prose-subhead">
                We've designed our pilot process to minimize risk while demonstrating 
                clear value within weeks.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              {
                step: "01",
                title: "Define the scope",
                desc: "Select one portfolio, one agent, and clear success metrics",
              },
              {
                step: "02",
                title: "Connect systems",
                desc: "Read-only integrations for the pilot slice of your data",
              },
              {
                step: "03",
                title: "Configure guardrails",
                desc: "Set policies, scripts, allowed actions, and escalation rules",
              },
              {
                step: "04",
                title: "Run & measure",
                desc: "Operate the pilot alongside your existing process and track results",
              },
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

      {/* What We Need */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div>
                <h2 className="prose-head">What we need to get started</h2>
                <p className="mt-4 prose-subhead">
                  To design an effective pilot, we'll need access to a few key resources 
                  and stakeholders.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100">
                <ul className="space-y-4">
                  {[
                    "Primary contacts from operations, compliance, and technology",
                    "Access to pilot portfolio data and call environment",
                    "Existing scripts, policies, and training materials",
                    "Current performance metrics for baseline comparison",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-base flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-neutral-50">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="prose-head">Common questions</h2>
            </div>
          </FadeIn>
          <FadeInStagger className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto" staggerDelay={0.1}>
            {[
              {
                q: "How long does a typical pilot take?",
                a: "Most pilots run 4-8 weeks, depending on scope and integration complexity. We aim to show measurable results within the first 2-3 weeks.",
              },
              {
                q: "What systems do you integrate with?",
                a: "We connect to major LMS/LOS platforms, CCaaS solutions like Genesys and NICE, and common payment processors. We'll discuss your specific stack during the demo.",
              },
              {
                q: "How do you handle compliance?",
                a: "Compliance is built into everything we do. Our agents are configured around US consumer lending laws, and every interaction is logged and auditable.",
              },
              {
                q: "What does a pilot cost?",
                a: "Pilot pricing depends on scope and volume. We'll provide a detailed proposal after understanding your specific needs during the demo call.",
              },
            ].map((item) => (
              <FadeInStaggerItem key={item.q}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100 h-full">
                  <h3 className="font-semibold text-neutral-900 mb-3">{item.q}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.a}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>
    </>
  );
}
