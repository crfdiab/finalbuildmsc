import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to SiteName</h1>
      <p className="text-xl text-muted-foreground mb-8">Your go-to resource for SEO tips, tools, and templates.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/articles" className="group">
          <div className="border rounded-lg p-6 transition-all hover:shadow-md">
            <h2 className="text-2xl font-bold mb-4 group-hover:text-primary">Articles</h2>
            <p className="text-muted-foreground mb-4">
              Explore our collection of SEO articles covering basics, content, link building, and technical SEO.
            </p>
            <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
              Browse Articles
            </Button>
          </div>
        </Link>
        <Link href="/tools" className="group">
          <div className="border rounded-lg p-6 transition-all hover:shadow-md">
            <h2 className="text-2xl font-bold mb-4 group-hover:text-primary">Tools</h2>
            <p className="text-muted-foreground mb-4">
              Discover free SEO tools and comprehensive guides to help you optimize your website.
            </p>
            <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
              Explore Tools
            </Button>
          </div>
        </Link>
        <Link href="/templates" className="group">
          <div className="border rounded-lg p-6 transition-all hover:shadow-md">
            <h2 className="text-2xl font-bold mb-4 group-hover:text-primary">Templates</h2>
            <p className="text-muted-foreground mb-4">
              Access our collection of SEO templates for on-page, off-page, technical, and more.
            </p>
            <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
              View Templates
            </Button>
          </div>
        </Link>
      </div>
    </div>
  )
}
