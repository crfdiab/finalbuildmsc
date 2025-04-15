import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TemplatesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">SEO Templates</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Access our comprehensive collection of SEO templates to streamline your optimization process.
      </p>

      {/* On-Page SEO Templates */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">On-Page SEO Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>On-Page Template {i + 1}</CardTitle>
                <CardDescription>Optimize your page content effectively</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Off-Page SEO Templates */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Off-Page SEO Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Off-Page Template {i + 1}</CardTitle>
                <CardDescription>Build your external presence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technical SEO Templates */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Technical SEO Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Technical Template {i + 1}</CardTitle>
                <CardDescription>Optimize your site's technical aspects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Misc SEO Templates */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Misc SEO Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Misc Template {i + 1}</CardTitle>
                <CardDescription>Additional SEO resources</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
