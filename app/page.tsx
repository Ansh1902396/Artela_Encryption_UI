/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FIAxq2o5anO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <main key="1" className="w-full p-6 ">
      <div className="w-full h-20 bg-black flex items-center justify-center px-6">
        <h1 className="text-2xl font-bold text-white">Test</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6 items-center justify-center px-6">
        <Card className="w-1/2 h-[30rem] flex items-center justify-center mx-auto">
          <CardContent>
            <form>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name4">Name</Label>
                <Input id="name4" placeholder="Enter your name" />
                <Button className="bg-sky-500 text-white">Submit</Button>
              </div>
            </form>
            
            <form>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name4">Name</Label>
                <Input id="name4" placeholder="Enter your name" />
                <Button className="bg-sky-500 text-white">Submit</Button>
              </div>
            </form>
            <p className="mt-4 text-center">Submitted Name: [Placeholder]</p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

