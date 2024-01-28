/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FIAxq2o5anO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export default function Component() {
  return (
    <main key="1" className="w-full p-6 ">
      <div className="w-full h-20  flex items-center justify-center px-6">
        <h1 className="text-2xl font-bold text-white">The Encryption Aspect </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6 items-center justify-center px-6">
        <Card className="w-1/4 h-[30rem] flex items-center justify-center mx-auto border border border-white">

          <CardContent className = "space-y-[3rem]">
            <form className = "flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name4">Message</Label>
                <Input id="name4" placeholder="Enter your message" />
                <Button className="bg-sky-500 text-white">Submit</Button>
              </div>
            </form>
            <div className="flex items-center space-x-2">
      <Switch id="airplane-mode"  />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
          </CardContent>
          
        </Card>
      </div>
    
    </main>
  )
}

