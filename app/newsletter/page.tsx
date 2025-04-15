import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NewsletterPage() {
  return (
    <div className="container py-12">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Subscribe to our Newsletter</CardTitle>
            <CardDescription>Get the latest SEO tips, tricks, and updates delivered to your inbox.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interests">Interests</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="on-page" className="rounded border-gray-300" />
                    <label htmlFor="on-page" className="text-sm">
                      On-Page SEO
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="technical" className="rounded border-gray-300" />
                    <label htmlFor="technical" className="text-sm">
                      Technical SEO
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="content" className="rounded border-gray-300" />
                    <label htmlFor="content" className="text-sm">
                      Content SEO
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="link-building" className="rounded border-gray-300" />
                    <label htmlFor="link-building" className="text-sm">
                      Link Building
                    </label>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
