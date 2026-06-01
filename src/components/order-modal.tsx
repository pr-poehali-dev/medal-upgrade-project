import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

interface OrderModalProps {
  open: boolean
  onClose: () => void
}

const services = [
  "Таблички и вывески",
  "Фото на стекле",
  "Фото на холсте",
  "Баннер",
  "Графический дизайн",
  "Другое",
]

export function OrderModal({ open, onClose }: OrderModalProps) {
  const [form, setForm] = useState({ name: "", phone: "", service: "", comment: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => setSent(false), 400)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative bg-background rounded-2xl p-8 w-full max-w-md shadow-2xl">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                data-clickable
              >
                <Icon name="X" size={20} />
              </button>

              {!sent ? (
                <>
                  <h2 className="font-serif text-2xl text-foreground mb-1">Оставить заявку</h2>
                  <p className="text-muted-foreground text-sm mb-6">Свяжемся с вами в течение рабочего дня</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-secondary rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="Телефон"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-secondary rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="bg-secondary rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm appearance-none"
                    >
                      <option value="">Выберите услугу</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <textarea
                      placeholder="Комментарий (необязательно)"
                      rows={3}
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      className="bg-secondary rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                    />
                    <button
                      type="submit"
                      className="bg-foreground text-background py-3 rounded-lg font-medium hover:bg-foreground/80 transition-colors mt-2"
                      data-clickable
                    >
                      Отправить заявку
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center py-8 text-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Check" size={28} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground">Заявка отправлена!</h3>
                  <p className="text-muted-foreground text-sm">Мы свяжемся с вами в ближайшее время.</p>
                  <button
                    onClick={handleClose}
                    className="mt-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-clickable
                  >
                    Закрыть
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
