import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Salient — Our Mission and Team",
  description:
    "We're building compliance-first AI agents for lenders who can't afford to get it wrong.",
};

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 md:pt-24 lg:pt-32 pb-16">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="prose-title">About Salient</h1>
              <p className="mt-6 prose-subhead">
                We're building compliance-first AI agents for lenders who can't afford 
                to get it wrong.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Mission */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="prose-head">Our mission</h2>
                <p className="mt-4 text-xl text-neutral-700 leading-relaxed">
                  To make consumer lending more efficient and humane by automating the 
                  work that slows teams down—without compromising on compliance or 
                  borrower outcomes.
                </p>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  We believe that AI can help lenders serve borrowers better while 
                  reducing operational costs and compliance risk. But only if it's 
                  built with the realities of US consumer lending regulation at its core.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-brand-base">4</div>
                    <div className="text-neutral-600">Specialized AI agents</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-brand-base">100%</div>
                    <div className="text-neutral-600">Interaction coverage</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-brand-base">0</div>
                    <div className="text-neutral-600">Compliance compromises</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section>
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="prose-head">Our story</h2>
              <p className="mt-4 prose-subhead">
                Salient was founded by a team that has lived the challenges of consumer 
                lending from multiple perspectives.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid gap-8 md:grid-cols-3" staggerDelay={0.1}>
            {[
              {
                year: "The Problem",
                title: "We saw the gap",
                desc: "Generic AI tools don't understand the regulatory complexity of US consumer lending. Lenders need solutions built specifically for their world.",
              },
              {
                year: "The Approach",
                title: "Compliance-first design",
                desc: "We started with exam expectations and worked backward to build agents that are audit-ready from day one.",
              },
              {
                year: "The Result",
                title: "Agents that work",
                desc: "Four specialized agents that automate real workflows while maintaining the compliance rigor lenders need.",
              },
            ].map((item) => (
              <FadeInStaggerItem key={item.year}>
                <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100 h-full">
                  <div className="text-sm font-medium text-brand-base mb-2">{item.year}</div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* Team */}
      <Section className="bg-neutral-50">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="prose-head">Our team</h2>
              <p className="mt-4 prose-subhead">
                We bring together deep expertise in consumer lending, AI/ML, and 
                regulatory compliance.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.05}>
            {[
              { name: "Leadership", role: "Consumer lending veterans with decades of experience at top lenders and servicers" },
              { name: "Engineering", role: "AI/ML experts from leading technology companies, focused on reliable, auditable systems" },
              { name: "Compliance", role: "Former regulators and compliance officers who understand exam expectations" },
            ].map((team) => (
              <FadeInStaggerItem key={team.name}>
                <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100 h-full">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">{team.name}</h3>
                  <p className="text-neutral-600 leading-relaxed">{team.role}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="prose-head">What we believe</h2>
            </div>
          </FadeIn>
          <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              { title: "Compliance is non-negotiable", desc: "Every feature starts with regulatory requirements" },
              { title: "Borrowers deserve better", desc: "AI should improve the borrower experience, not just cut costs" },
              { title: "Transparency builds trust", desc: "Every action is logged, explainable, and auditable" },
              { title: "Start small, prove value", desc: "Focused pilots with measurable outcomes" },
            ].map((value) => (
              <FadeInStaggerItem key={value.title}>
                <div className="text-center">
                  <h3 className="font-semibold text-neutral-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-neutral-600">{value.desc}</p>
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
              Join us in transforming consumer lending
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Whether you're a lender looking to modernize your operations or a talented 
              individual who wants to work on hard problems, we'd love to hear from you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/pilot">
                <Button size="lg" className="bg-white text-brand-dark hover:bg-white/90 gap-2">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="mailto:careers@salient.com">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                  View open roles
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
