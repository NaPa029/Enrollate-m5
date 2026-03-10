import { motion } from 'framer-motion';
import { Utensils, MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Definición de alérgenos con emojis representativos
const allergens = [
  { 
    id: 'gluten', 
    name: 'Gluten', 
    icon: '🌾', 
    description: 'Trigo, cebada, centeno, avena y productos derivados',
    color: 'bg-amber-100 border-amber-300'
  },
  { 
    id: 'crustaceos', 
    name: 'Crustáceos', 
    icon: '🦐', 
    description: 'Camarones, gambas, cangrejos, langostas y productos derivados',
    color: 'bg-orange-100 border-orange-300'
  },
  { 
    id: 'huevos', 
    name: 'Huevos', 
    icon: '🥚', 
    description: 'Huevo y productos derivados',
    color: 'bg-yellow-100 border-yellow-300'
  },
  { 
    id: 'pescado', 
    name: 'Pescado', 
    icon: '🐟', 
    description: 'Pescado y productos derivados',
    color: 'bg-blue-100 border-blue-300'
  },
  { 
    id: 'cacahuetes', 
    name: 'Cacahuetes', 
    icon: '🥜', 
    description: 'Cacahuetes y productos derivados',
    color: 'bg-amber-100 border-amber-400'
  },
  { 
    id: 'soja', 
    name: 'Soja', 
    icon: '🫘', 
    description: 'Soja y productos derivados (tofu, salsa de soja)',
    color: 'bg-green-100 border-green-300'
  },
  { 
    id: 'lacteos', 
    name: 'Lácteos', 
    icon: '🥛', 
    description: 'Leche y productos derivados (queso, mantequilla, nata)',
    color: 'bg-cyan-100 border-cyan-300'
  },
  { 
    id: 'frutos-cascara', 
    name: 'Frutos de cáscara', 
    icon: '🌰', 
    description: 'Almendras, avellanas, nueces, anacardos, pistachos',
    color: 'bg-amber-50 border-amber-300'
  },
  { 
    id: 'apio', 
    name: 'Apio', 
    icon: '🥬', 
    description: 'Apio y productos derivados',
    color: 'bg-green-50 border-green-400'
  },
  { 
    id: 'mostaza', 
    name: 'Mostaza', 
    icon: '🟡', 
    description: 'Mostaza y productos derivados',
    color: 'bg-yellow-50 border-yellow-500'
  },
  { 
    id: 'sesamo', 
    name: 'Sésamo', 
    icon: '⚫', 
    description: 'Semillas de sésamo y productos derivados',
    color: 'bg-gray-100 border-gray-400'
  },
  { 
    id: 'sulfitos', 
    name: 'Sulfitos', 
    icon: '🍷', 
    description: 'Dióxido de azufre y sulfitos (conservantes)',
    color: 'bg-purple-100 border-purple-300'
  },
  { 
    id: 'altramuces', 
    name: 'Altramuces', 
    icon: '🫘', 
    description: 'Altramuces y productos derivados',
    color: 'bg-rose-100 border-rose-300'
  },
  { 
    id: 'moluscos', 
    name: 'Moluscos', 
    icon: '🦪', 
    description: 'Mejillones, ostras, calamares, pulpos y productos derivados',
    color: 'bg-indigo-100 border-indigo-300'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')]" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Enrollate<br />
                <span className="text-green-300">Montequinto</span>
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Cocina fusión con los mejores rollitos gourmet y smash burgers de Sevilla
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/menu"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  <Utensils className="w-5 h-5" />
                  Ver Carta
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-green-200 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Montequinto, Dos Hermanas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Abierto</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80" 
                  alt="Smash Burger - Enrollate Montequinto"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-4 -left-4 bg-white text-green-800 px-4 py-2 rounded-full shadow-lg font-bold"
              >
                🍔 Smash Burgers
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                className="absolute -top-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-full shadow-lg font-bold"
              >
                🌯 Rollitos
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-md text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              🥩
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Carne Madurada</h3>
            <p className="text-gray-600">Nuestras smash burgers llevan carne de ternera madurada de la mejor calidad</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-md text-center"
          >
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              🌯
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Rollitos Artesanales</h3>
            <p className="text-gray-600">Hechos a mano cada día con ingredientes frescos y recetas únicas</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-md text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              🥡
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Take Away & Delivery</h3>
            <p className="text-gray-600">Pide para recoger o te lo llevamos a casa. ¡Caliente y rápido!</p>
          </motion.div>
        </div>
      </section>

      {/* Allergens Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Información sobre Alérgenos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En Enrollate Montequinto nos preocupamos por tu salud. A continuación te mostramos los 14 alérgenos 
              principales reconocidos por la UE. Si tienes alguna alergia o intolerancia, consúltanos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {allergens.map((allergen, index) => (
              <motion.div
                key={allergen.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`${allergen.color} border-2 rounded-xl p-4 text-center cursor-help transition-shadow hover:shadow-lg`}
              >
                <div className="text-4xl mb-2">{allergen.icon}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{allergen.name}</h3>
                <p className="text-xs text-gray-600 leading-tight">{allergen.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-4xl bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                ⚠️
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">¿Tienes alguna alergia?</h3>
                <p className="text-green-700">
                  Si tienes alguna intolerancia alimentaria o alergia, no dudes en consultarnos. 
                  Muchos de nuestros platos pueden adaptarse. Ofrecemos opción de pan sin gluten 
                  en nuestras hamburguesas (+1€).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Te apetece probar algo delicioso?</h2>
          <p className="text-green-100 text-xl mb-8">
            Desde nuestros famosos rollitos hasta las smash burgers más jugosas de Sevilla
          </p>
          <Link 
            to="/menu"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            <Utensils className="w-6 h-6" />
            Ver la Carta Completa
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Enrollate Montequinto</h3>
              <p className="text-gray-400">Cocina fusión con cariño</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contacto</h4>
              <div className="space-y-2">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4" />
                  Montequinto, Dos Hermanas, Sevilla
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="https://www.google.es/maps/place/Enrollate+Montequinto/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Ver en Google Maps
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Horario</h4>
              <p className="text-gray-400">Abierto todos los días</p>
              <p className="text-gray-400">Consultar horario de cocina</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© 2025 Enrollate Montequinto. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}