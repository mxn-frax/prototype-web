import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  WalletIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  BanknotesIcon,
  GlobeAmericasIcon,
  ArrowRightIcon,
  QuestionMarkCircleIcon,
  Bars3Icon,
  XMarkIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const stats = [
  { 
    label: 'Usuarios Activos', 
    value: '10,000+',
    icon: WalletIcon
  },
  { 
    label: 'Transacciones Diarias', 
    value: '50,000+',
    icon: ChartBarIcon
  },
  { 
    label: 'Países Soportados', 
    value: '20+',
    icon: GlobeAmericasIcon
  },
]

const features = [
  {
    name: 'Fácil de Usar',
    description: 'Envía dinero tan fácil como mandar un mensaje por WhatsApp.',
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-green-500',
  },
  {
    name: 'Seguro y Confiable',
    description: 'Tu dinero está protegido por la mejor tecnología blockchain.',
    icon: ShieldCheckIcon,
    color: 'bg-blue-500',
  },
  {
    name: 'Ahorra en Comisiones',
    description: 'Olvídate de las altas comisiones de envío tradicionales.',
    icon: BanknotesIcon,
    color: 'bg-purple-500',
  },
]

const steps = [
  {
    id: 1,
    name: 'Descarga la App',
    description: 'Disponible en iOS y Android',
  },
  {
    id: 2,
    name: 'Conecta tu Cuenta',
    description: 'WhatsApp o correo electrónico',
  },
  {
    id: 3,
    name: 'Recibe $MAIZ',
    description: 'Listo para usar',
  },
]

const testimonials = [
  {
    name: "María González",
    role: "Usuario desde 2024",
    content: "MAIZ me ha ayudado a enviar dinero a mi familia en México de forma rápida y segura.",
    rating: 5
  },
  {
    name: "Juan Pérez",
    role: "Usuario desde 2023",
    content: "Las comisiones son mucho más bajas que Western Union. ¡Increíble servicio!",
    rating: 5
  },
  {
    name: "Ana Ramírez",
    role: "Usuario desde 2024",
    content: "La app es super fácil de usar. Mi familia recibe el dinero en minutos.",
    rating: 5
  }
]

const faqs = [
  {
    question: "¿Cómo funciona MAIZ?",
    answer: "MAIZ utiliza tecnología blockchain para hacer transferencias instantáneas y seguras. Solo necesitas conectar tu WhatsApp o correo electrónico para comenzar."
  },
  {
    question: "¿Cuánto cuestan las transferencias?",
    answer: "Nuestras comisiones son hasta 70% más bajas que los servicios tradicionales. El costo exacto depende del monto y destino."
  },
  {
    question: "¿Es seguro usar MAIZ?",
    answer: "Sí, utilizamos la mejor tecnología de encriptación y cumplimos con todas las regulaciones financieras necesarias."
  }
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('/aztec-pattern.svg')] opacity-5 pointer-events-none" />
      
      {/* Navigation */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <img src="/maiz-icon.svg" alt="" className="h-8 w-auto" />
                <div>
                  <span className="text-[#78350F] text-[22px] font-black">MAIZ</span><span className="text-[#F59E0B] text-2xl font-extrabold">.crypto</span>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex gap-6">
                <a href="#como-funciona" className="text-amber-900 hover:text-amber-600 transition-colors">Cómo Funciona</a>
                <a href="#beneficios" className="text-amber-900 hover:text-amber-600 transition-colors">Beneficios</a>
                <a href="#faq" className="text-amber-900 hover:text-amber-600 transition-colors">FAQ</a>
              </nav>
              <div className="flex items-center gap-4">
                <button className="text-amber-900 hover:text-amber-700">
                  Español
                </button>
                <button className="px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors">
                  Comenzar
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                className="text-amber-900"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
              
              <motion.div 
                className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30 }}
              >
                <div className="flex items-center justify-between p-4 border-b border-amber-100">
                  <div className="flex items-center gap-2">
                    <img src="/maiz-icon.svg" alt="" className="h-8 w-auto" />
                    <span className="text-[#78350F] text-[22px] font-black">MAIZ</span>
                  </div>
                  <button className="text-amber-900" onClick={() => setMobileMenuOpen(false)}>
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                <nav className="p-4 space-y-4">
                  <a href="#como-funciona" className="block py-2 text-amber-900 hover:text-amber-600 transition-colors">
                    Cómo Funciona
                  </a>
                  <a href="#beneficios" className="block py-2 text-amber-900 hover:text-amber-600 transition-colors">
                    Beneficios
                  </a>
                  <a href="#faq" className="block py-2 text-amber-900 hover:text-amber-600 transition-colors">
                    FAQ
                  </a>
                  <button className="w-full px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors">
                    Comenzar
                  </button>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <div className="relative pt-24 pb-16 sm:pt-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-100/50 to-transparent" />
          <div className="container-custom relative">
            <div className="text-center">
              <motion.h1 
                className="text-4xl sm:text-6xl font-bold text-amber-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                La Manera Más Fácil de
                <span className="block gradient-text">Enviar Dinero a Casa</span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg text-amber-800 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Envía dinero a tu familia de forma rápida, segura y sin comisiones altas.
                <br className="hidden sm:block" />
                Tan fácil como usar WhatsApp.
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button className="btn-primary">
                  Comienza Ahora
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
                <button className="btn-secondary">
                  Ver Tutorial
                  <QuestionMarkCircleIcon className="h-5 w-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="py-16 bg-white/80 backdrop-blur-sm border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="relative overflow-hidden rounded-2xl bg-amber-50 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-amber-100 opacity-50" />
                  <stat.icon className="h-8 w-8 text-amber-500" />
                  <p className="mt-4 text-4xl font-semibold text-amber-900">{stat.value}</p>
                  <p className="mt-2 text-amber-800">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="section bg-gradient-to-b from-amber-50/50 to-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-900">¿Por Qué Usar MAIZ?</h2>
              <p className="mt-4 text-amber-800">Diseñado pensando en nuestra comunidad</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`absolute right-0 top-0 h-24 w-24 rounded-full ${feature.color} opacity-10 -mr-8 -mt-8`} />
                  <feature.icon className={`h-8 w-8 ${feature.color} text-white rounded-lg p-1.5`} />
                  <h3 className="mt-4 text-xl font-semibold text-amber-900">{feature.name}</h3>
                  <p className="mt-2 text-amber-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="section bg-white/80 backdrop-blur-sm border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-900">¿Cómo Funciona?</h2>
              <p className="mt-4 text-amber-800">Comienza en tres pasos simples</p>
            </div>
            <div className="relative">
              <div className="absolute top-12 left-4 right-4 h-0.5 bg-amber-100" />
              <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-3">
                {steps.map((step) => (
                  <motion.div
                    key={step.id}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center justify-center">
                      <div className="rounded-full bg-amber-500 text-white w-10 h-10 flex items-center justify-center font-bold text-lg">
                        {step.id}
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold text-amber-900">{step.name}</h3>
                      <p className="mt-2 text-amber-700">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="section bg-gradient-to-b from-white to-amber-50/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-900">Lo que dicen nuestros usuarios</h2>
              <p className="mt-4 text-amber-800">Miles de personas confían en MAIZ para sus envíos</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-amber-900 mb-4">{testimonial.content}</p>
                  <div className="mt-4">
                    <p className="font-semibold text-amber-900">{testimonial.name}</p>
                    <p className="text-sm text-amber-700">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-900">Preguntas Frecuentes</h2>
              <p className="mt-4 text-amber-800">Todo lo que necesitas saber sobre MAIZ</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{faq.question}</h3>
                  <p className="text-amber-800">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="section overflow-hidden">
          <div className="container-custom">
            <div className="rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 sm:p-16 text-center text-white relative overflow-hidden card-hover">
              <div className="absolute inset-0 bg-[url('/aztec-pattern.svg')] opacity-10" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold">¿Listo para Comenzar?</h2>
                <p className="mt-4 text-lg text-amber-100 max-w-2xl mx-auto">
                  Únete a miles de personas que ya confían en MAIZ para enviar dinero a sus seres queridos
                </p>
                <button className="mt-8 px-8 py-4 rounded-xl bg-white text-amber-500 hover:bg-amber-50 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  Descarga la App
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-amber-900 text-amber-200 py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/aztec-pattern.svg')] opacity-5" />
          <div className="container-custom relative">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <div className="flex items-center gap-2">
                  <img src="/maiz-icon.svg" alt="" className="h-8 w-auto" />
                  <div>
                    <span className="text-white text-[22px] font-black">MAIZ</span><span className="text-[#F59E0B] text-2xl font-extrabold">.crypto</span>
                  </div>
                </div>
                <p className="mt-4">Haciendo las finanzas más accesibles para nuestra comunidad</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white">Acerca de</a></li>
                  <li><a href="#" className="hover:text-white">Cómo Funciona</a></li>
                  <li><a href="#" className="hover:text-white">Soporte</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2">
                  <li>soporte@maiz.finance</li>
                  <li>WhatsApp: +1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-amber-800 text-center">
              <p>&copy; 2025 MAIZ Finance. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
