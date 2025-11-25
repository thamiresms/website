import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Shield, FileCheck, TestTube, GitBranch, Download, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Compliance & Governance — Built In | Salient",
  description:
    "Designed for the way US lenders are examined — with clear policies, controlled changes, automated testing, and strong documentation.",
};

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 md:pt-24 lg:pt-32 pb-16">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1.5 text-sm font-medium text-brand-dark mb-6">
                <Shield className="h-4 w-4" />
                Compliance-First
              </div>
              <h1 className="prose-title">Compliance and governance, built in</h1>
              <p className="mt-6 prose-subhead">
                Salient is designed for the way US lenders are actually examined—with clear 
                policies, controlled changes, automated testing, and documentation that's 
                ready when regulators come calling.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Supervisory Alignment */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="prose-head">Built around how exams really work</h2>
                <p className="mt-4 prose-subhead">
                  We align our approach with the structure and expectations in supervisory 
                  guidance and exam manuals from the CFPB, OCC, FDIC, NCUA, and state regulators.
                </p>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  Our team has experience on both sides of the exam table. We understand 
                  that compliance isn't about checking boxes—it's about demonstrating that 
                  you have effective policies, that they're actually implemented, that you're 
                  monitoring for issues, and that you remediate when things go wrong.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100">
                <h3 className="font-semibold text-neutral-900 mb-6">Regulatory alignment</h3>
                <div className="space-y-4">
                  {["CFPB", "OCC", "FDIC", "NCUA", "State regulators"].map((agency) => (
                    <div key={agency} className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0">
                      <span className="font-medium text-neutral-700">{agency}</span>
                      <span className="text-sm text-brand-base font-medium">Aligned</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Laws & Regimes */}
      <Section>
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="prose-head">Anchored to key US consumer-lending laws</h2>
              <p className="mt-4 prose-subhead">
                Salient's agents are configured around the major laws that govern US consumer 
                lending, with state-level customization for your specific markets.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.05}>
            {[
              { abbr: "FDCPA", name: "Fair Debt Collection Practices Act" },
              { abbr: "UDAAP", name: "Unfair, Deceptive, or Abusive Acts or Practices" },
              { abbr: "Reg Z", name: "Truth in Lending Act" },
              { abbr: "FCRA", name: "Fair Credit Reporting Act" },
              { abbr: "ECOA / Reg B", name: "Equal Credit Opportunity Act" },
              { abbr: "SCRA / MLA", name: "Servicemember protections" },
            ].map((law) => (
              <FadeInStaggerItem key={law.abbr}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
                  <div className="text-lg font-semibold text-brand-base mb-1">{law.abbr}</div>
                  <div className="text-sm text-neutral-600">{law.name}</div>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
          <FadeIn delay={0.3}>
            <div className="mt-8 text-center">
              <p className="text-neutral-600">
                Plus state-level rules customized for your specific programs and markets.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Automated Testing */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
                  <TestTube className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="prose-head">Automated testing for every change</h2>
                <p className="mt-4 prose-subhead">
                  Before any change goes live, it runs through our automated testing suite 
                  to catch potential issues before they reach borrowers.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Scenario suites that simulate edge cases and unusual situations",
                    "Regression tests when prompts or flows change",
                    "Policy-specific checks for disclosure timing and content",
                    "Language analysis for potential UDAAP concerns",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">Scenario tests</div>
                      <div className="text-sm text-neutral-500">247 scenarios passed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">Regression tests</div>
                      <div className="text-sm text-neutral-500">All flows verified</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">Language checks</div>
                      <div className="text-sm text-neutral-500">No UDAAP flags</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Change Control */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100">
                <div className="space-y-4">
                  {[
                    { label: "Version", value: "v2.4.1" },
                    { label: "Last updated", value: "Nov 15, 2024" },
                    { label: "Approved by", value: "Compliance, Risk, Ops" },
                    { label: "Environment", value: "Production" },
                    { label: "Audit entries", value: "1,247" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0">
                      <span className="text-neutral-500">{item.label}</span>
                      <span className="font-medium text-neutral-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div>
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <GitBranch className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="prose-head">Structured change control</h2>
                <p className="mt-4 prose-subhead">
                  Every change to prompts, flows, and policies goes through a structured 
                  approval process that you can explain to regulators.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Versioned prompts, flows, and policies",
                    "Approval workflow across risk, compliance, and operations",
                    "Staging and production environment separation",
                    "Complete audit log of all changes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Evidence Packs */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                  <Download className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="prose-head">Exam-ready documentation, one click away</h2>
                <p className="mt-4 prose-subhead">
                  When it's time for an exam or audit, you can generate comprehensive 
                  evidence packs that demonstrate your controls and their effectiveness.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Interaction samples keyed to policies and time periods",
                    "QA findings and remediation logs",
                    "Volume, error rate, and complaint trend data",
                    "Control descriptions and testing methodology",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100">
                <h3 className="font-semibold text-neutral-900 mb-6">Evidence pack contents</h3>
                <div className="space-y-3">
                  {[
                    { icon: FileCheck, label: "Policy documentation" },
                    { icon: FileCheck, label: "Implementation evidence" },
                    { icon: FileCheck, label: "Monitoring reports" },
                    { icon: FileCheck, label: "Remediation records" },
                    { icon: FileCheck, label: "Testing results" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 py-2">
                      <item.icon className="h-5 w-5 text-emerald-600" />
                      <span className="text-neutral-700">{item.label}</span>
                    </div>
                  ))}
                </div>
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
              See how Salient supports your compliance program
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Book a demo to see our compliance controls in action and discuss how 
              Salient can fit into your regulatory framework.
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
