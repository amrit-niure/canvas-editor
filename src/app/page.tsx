import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Play,
  SquareMousePointer,
  Sun,
} from "lucide-react";

export default function HOme() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SquareMousePointer  strokeWidth={1} size={30}/>
            <span className="text-xl font-semibold">Newray</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-300">
              <Sun className="h-5 w-5" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link href="/canvas" passHref>
            <Button className="bg-amber-700 hover:bg-amber-600 text-white">
              Go to Canvas
            </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dashboard-preview.png"
            alt="Dashboard preview"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1 mb-8">
            <span className="text-xs font-medium bg-amber-700 text-white px-2 py-0.5 rounded-full">
              New
            </span>
            <span className="text-sm">The canvas is ready!</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
         
          Design and Edit Seamlessly
            <br />
            Unleash Your Creativity
          </h1>

          <p className="text-gray-400 text-md max-w-2xl mx-auto mb-8">
          Bring your ideas to life with our powerful canvas editor—designed for seamless collaboration, precision, and creative freedom. Create, edit, and share with ease. 🚀
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/canvas" passHref>
              <Button className="bg-amber-700 hover:bg-amber-600 text-white min-w-[150px] flex items-center gap-2">
                <Play className="w-5 h-5" />
                Get Started
              </Button>
            </Link>
            <Link href="/canvas" passHref>
              <Button
                variant="secondary"
                className="bg-white/10 hover:bg-white/20 text-white min-w-[150px] flex items-center gap-2"
              >
                <LayoutDashboard className="w-5 h-5" />
                Canvas
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
