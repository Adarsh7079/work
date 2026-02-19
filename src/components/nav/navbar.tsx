"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAVIGATION_LINKS } from "@/constants/navigation"
import { motion, AnimatePresence } from "framer-motion"

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="bg-violet-600 h-9 w-9 rounded-xl flex items-center justify-center shadow-lg shadow-violet-200 group-hover:rotate-6 transition-transform duration-300">
      <span className="text-white font-black text-lg">10</span>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-sm font-black tracking-tighter text-slate-900">MINS</span>
      <span className="text-[10px] font-bold text-violet-600 tracking-[0.2em]">HOME</span>
    </div>
  </div>
)

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="flex flex-col gap-1 w-5 items-end">
    <span className={cn("h-0.5 bg-slate-900 transition-all duration-300", isOpen ? "w-5 rotate-45 translate-y-1.5" : "w-5")} />
    <span className={cn("h-0.5 bg-slate-900 transition-all duration-300", isOpen ? "opacity-0" : "w-3")} />
    <span className={cn("h-0.5 bg-slate-900 transition-all duration-300", isOpen ? "w-5 -rotate-45 -translate-y-1.5" : "w-4")} />
  </div>
)

export const Navbar01 = React.forwardRef<HTMLElement, any>(
  ({ className, ...props }, ref) => {
    const [isMobile, setIsMobile] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 1024)
      const handleScroll = () => setScrolled(window.scrollY > 20)
      
      handleResize()
      window.addEventListener("resize", handleResize)
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("resize", handleResize)
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

    return (
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 transition-all duration-500">
        <header 
          ref={ref}
          className={cn(
            "w-full max-w-6xl rounded-[2rem] border transition-all duration-300",
            scrolled 
              ? "bg-white/80 backdrop-blur-xl border-slate-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-2 px-6" 
              : "bg-transparent border-transparent py-4 px-6",
            className
          )} 
          {...props}
        >
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Center: Desktop Links */}
            {!isMobile && (
              <NavigationMenu className="hidden lg:block">
                <NavigationMenuList className="flex gap-1 bg-slate-100/50 p-4 rounded-full border border-slate-200/20">
                  {NAVIGATION_LINKS.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <Link 
                        href={link.href} 
                        className={cn(
                          "relative px-5 py-2 text-sm font-bold transition-all rounded-xl",
                          pathname === link.href 
                            ? "text-violet-600 bg-white shadow-sm" 
                            : "text-slate-500 hover:text-slate-900"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            )}

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex flex-col items-end mr-2">
                <span className="text-[10px] font-black text-emerald-500 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE
                </span>
                <span className="text-[11px] font-bold text-slate-400">142 Pros Nearby</span>
              </div>

              <Button 
                className="bg-violet-600 hover:bg-violet-700 text-white rounded-xl px-6 font-bold shadow-lg shadow-violet-200 transition-all hover:scale-105 active:scale-95"
              >
                Book Now
              </Button>
              
              {isMobile && (
                <Popover onOpenChange={setIsMenuOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-xl bg-slate-100 hover:bg-slate-200">
                      <HamburgerIcon isOpen={isMenuOpen} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-[calc(100vw-2rem)] p-3 rounded-[2rem] mt-4 border-slate-100 shadow-2xl backdrop-blur-2xl bg-white/90">
                    <div className="flex flex-col gap-2">
                      {NAVIGATION_LINKS.map((link, index) => (
                        <Link 
                          key={index}
                          href={link.href} 
                          className={cn(
                            "px-6 py-4 text-lg font-bold rounded-2xl transition-colors",
                            pathname === link.href ? "bg-violet-50 text-violet-600" : "hover:bg-slate-50"
                          )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </div>
          </div>
        </header>
      </div>
    )
  }
)

Navbar01.displayName = "Navbar01"