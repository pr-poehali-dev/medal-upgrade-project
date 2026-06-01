import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const links = [
  { label: "Услуги", href: "#services" },
  { label: "Галерея", href: "#showcase" },
  { label: "Статьи", href: "#insights" },
  { label: "Цены", href: "#pricing" },
  { label: "Контакты", href: "#footer" },
]

interface NavBarProps {
  onOrder: () => void
}

export function NavBar({ onOrder }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}
        className="font-serif text-xl text-foreground"
        data-clickable
      >
        PRINT.
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-clickable
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        onClick={onOrder}
        className="bg-foreground text-background text-sm px-5 py-2 rounded-full hover:bg-foreground/80 transition-colors"
        data-clickable
      >
        Заказать
      </button>
    </motion.header>
  )
}