"use client";

import { Button } from "@/components/ui/button";
import { Tldraw } from "@tldraw/tldraw";
import { Sun, Github, User, Home, SquareMousePointer } from 'lucide-react';
import "@tldraw/tldraw/tldraw.css";
import Link from "next/link";

export default function EditorPage() {
  return (
    <div className="h-screen flex flex-col bg-zinc-50 dark:bg-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SquareMousePointer className="h-5 w-5 text-zinc-700 dark:text-zinc-300"  strokeWidth={2} size={30} />
            <span className="font-semibold text-zinc-900 dark:text-white">Canvas</span>
          </div>

          {/* Center Actions */}
          <div className="flex items-center gap-2">
            <Link href="/">
            <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
              <Home className="h-4 w-4" />
              Home
            </Button>
            </Link>   
            {/* <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button> */}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-zinc-700 dark:text-zinc-300">
              <Sun className="h-5 w-5" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-700 dark:text-zinc-300">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-700 dark:text-zinc-300">
              <User className="h-5 w-5" />
              <span className="sr-only">User profile</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        <div className="absolute inset-0 ">
          <Tldraw persistenceKey="canvas-editor" />
        </div>
      </main>
    </div>
  )
}
