"use client";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDown, Menu, X } from "lucide-react";

const navLink =
  "text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-medium";

const agentLinks = [
  { name: "Taylor", desc: "Customer Service & Collections", href: "/agents/taylor" },
  { name: "Marshall", desc: "Compliance & QA", href: "/agents/marshall" },
  { name: "Alex", desc: "Disputes & Chargebacks", href: "/agents/alex" },
  { name: "Flynn", desc: "Total Loss & Mitigation", href: "/agents/flynn" },
];

export function Header() {
  const [agentsOpen, setAgentsOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-100">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image 
            src="/salient_logo.avif" 
            alt="Salient" 
            width={140} 
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/why-salient" className={navLink}>
            Why Salient
          </Link>

          <Popover.Root open={agentsOpen} onOpenChange={setAgentsOpen}>
            <Popover.Trigger asChild>
              <button className={cn(navLink, "inline-flex items-center gap-1")}>
                Agents <ChevronDown className={cn("h-4 w-4 transition-transform", agentsOpen && "rotate-180")} />
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                sideOffset={12}
                className="bg-white rounded-2xl p-2 shadow-card border border-neutral-100 w-[320px] z-50"
              >
                <div className="grid gap-1">
                  {agentLinks.map((agent) => (
                    <Link
                      key={agent.href}
                      href={agent.href}
                      className="rounded-xl px-4 py-3 hover:bg-neutral-50 transition-colors group"
                      onClick={() => setAgentsOpen(false)}
                    >
                      <div className="font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">{agent.name}</div>
                      <div className="text-sm text-neutral-500">{agent.desc}</div>
                    </Link>
                  ))}
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>

          <Link href="/compliance" className={navLink}>
            Compliance
          </Link>
          <Link href="/customers" className={navLink}>
            Customers
          </Link>
          <Link href="/company" className={navLink}>
            Company
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/pilot">
            <Button>Book a demo</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -mr-2 text-neutral-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 py-4">
          <Container>
            <nav className="grid gap-4">
              <Link href="/why-salient" className="text-neutral-700 font-medium py-2" onClick={() => setMobileOpen(false)}>
                Why Salient
              </Link>
              <div className="border-t border-neutral-100 pt-4">
                <div className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">Agents</div>
                {agentLinks.map((agent) => (
                  <Link
                    key={agent.href}
                    href={agent.href}
                    className="block py-2 text-neutral-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {agent.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-neutral-100 pt-4 grid gap-4">
                <Link href="/compliance" className="text-neutral-700 font-medium py-2" onClick={() => setMobileOpen(false)}>
                  Compliance
                </Link>
                <Link href="/customers" className="text-neutral-700 font-medium py-2" onClick={() => setMobileOpen(false)}>
                  Customers
                </Link>
                <Link href="/company" className="text-neutral-700 font-medium py-2" onClick={() => setMobileOpen(false)}>
                  Company
                </Link>
              </div>
              <div className="border-t border-neutral-100 pt-4">
                <Link href="/pilot" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full">Book a demo</Button>
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
