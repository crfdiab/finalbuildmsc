"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { ChevronRight, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu)
  }

  const closeMenu = () => {
    setActiveMenu(null)
  }

  return (
    <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-2xl text-primary">
            BACKLINKO
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => toggleMenu("articles")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeMenu === "articles" ? "text-primary" : "text-foreground",
              )}
              aria-expanded={activeMenu === "articles"}
              aria-controls="articles-menu"
            >
              Articles
            </button>
            <button
              onClick={() => toggleMenu("tools")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeMenu === "tools" ? "text-primary" : "text-foreground",
              )}
              aria-expanded={activeMenu === "tools"}
              aria-controls="tools-menu"
            >
              Tools
            </button>
            <Link href="/templates" className="text-sm font-medium transition-colors hover:text-primary">
              Templates
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/newsletter" className="text-sm font-medium transition-colors hover:text-primary">
              Newsletter
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="p-2 rounded-full hover:bg-muted">
            <Search className="h-5 w-5" />
          </button>
          <ThemeToggle />
          <a
            href="https://example.com/seo-services"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button className="bg-primary text-white hover:bg-primary/90">Check My Site's SEO</Button>
          </a>
        </div>
      </div>

      {/* Articles Mega Menu */}
      {activeMenu === "articles" && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={closeMenu}>
          <div
            className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container py-8">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold mb-6">Articles</h2>
                <button onClick={closeMenu} aria-label="Close menu" className="p-1 hover:bg-muted rounded-full">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-8">
                {/* Left Sidebar */}
                <div className="col-span-1 border-r pr-4">
                  <nav className="space-y-1">
                    <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-muted text-left">
                      <span className="font-medium">Popular</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-muted text-left">
                      <span className="font-medium">SEO Fundamentals</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-muted text-left">
                      <span className="font-medium">Content Marketing</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-muted text-left">
                      <span className="font-medium">Link Building</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-muted text-left">
                      <span className="font-medium">Marketing</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </nav>
                </div>

                {/* Right Content Grid */}
                <div className="col-span-3 grid grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-bold">What Is SEO?</h3>
                    <p className="text-sm text-muted-foreground">
                      For people that are new to search engine optimization.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">SEO Checklist</h3>
                    <p className="text-sm text-muted-foreground">
                      Covers technical SEO, On-page SEO, and keyword research.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">SEO Audit Checklist</h3>
                    <p className="text-sm text-muted-foreground">18-step guide to get higher Google rankings.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">SEO Strategy</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn exactly how to create a strategy, step by step.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">SEO Competitor Analysis</h3>
                    <p className="text-sm text-muted-foreground">Learn how to outrank your rivals in the SERPs.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Google E-E-A-T</h3>
                    <p className="text-sm text-muted-foreground">Understand what it is and how to demonstrate it.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Internal Linking for SEO</h3>
                    <p className="text-sm text-muted-foreground">
                      Key for any site that wants higher rankings in Google.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Technical SEO</h3>
                    <p className="text-sm text-muted-foreground">Technical SEO is still SUPER important.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">On-Page SEO</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimize for UX, bounce rate, search intent, and more.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Ecommerce SEO</h3>
                    <p className="text-sm text-muted-foreground">
                      Boost your online store's visibility in search results.
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="mt-8 pt-6 border-t">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold">Newsletter:</span> Get access to exclusive tips, strategies and case
                      studies that we don't share anywhere else.
                    </div>
                    <Button className="bg-primary text-white hover:bg-primary/90">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tools Mega Menu */}
      {activeMenu === "tools" && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={closeMenu}>
          <div
            className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container py-8">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold mb-6">Tools</h2>
                <button onClick={closeMenu} aria-label="Close menu" className="p-1 hover:bg-muted rounded-full">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-8">
                {/* Left Sidebar */}
                <div className="col-span-1 border-r pr-4">
                  <nav className="space-y-1">
                    <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-muted text-left">
                      <span className="font-medium">Free Tools</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-muted text-left">
                      <span className="font-medium">Tools Guides</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </nav>
                </div>

                {/* Right Content Grid */}
                <div className="col-span-3 grid grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-bold">Keyword Research Tool</h3>
                    <p className="text-sm text-muted-foreground">
                      Find keywords that your customers actually search for.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Backlink Analyzer</h3>
                    <p className="text-sm text-muted-foreground">Analyze your competitor's backlink profile.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Content Gap Finder</h3>
                    <p className="text-sm text-muted-foreground">
                      Discover content opportunities your competitors are missing.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">SEO Analyzer</h3>
                    <p className="text-sm text-muted-foreground">Get a complete analysis of your website's SEO.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Rank Tracker</h3>
                    <p className="text-sm text-muted-foreground">Monitor your keyword rankings over time.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Page Speed Optimizer</h3>
                    <p className="text-sm text-muted-foreground">Improve your website's loading speed.</p>
                  </div>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="mt-8 pt-6 border-t">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold">Newsletter:</span> Get access to exclusive tips, strategies and case
                      studies that we don't share anywhere else.
                    </div>
                    <Button className="bg-primary text-white hover:bg-primary/90">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
