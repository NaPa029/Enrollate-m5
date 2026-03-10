import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  dietary: string[];
}

interface Category {
  id: string;
  name: string;
  items: MenuItem[];
}

const categories: Category[] = [
  {
    id: 'smash',
    name: 'Smash Burgers',
    items: [
      {
        id: 'mib',
        name: 'M.I.B (Men in Black)',
        description: 'Doble Patty de 90g de ternera madurada, doble de queso cheddar, mermelada de tomate, pepinillo agridulce, cebolla plancha y doble de bacon',
        price: '10.90 €',
        dietary: ['SG+']
      },
      {
        id: 'carbonara',
        name: 'Carbonara Deluxe',
        description: 'Doble de Patty de 90g, de ternera madurada, doble queso cheddar, crema de carbonara, bacon bits y parmesano en polvo',
        price: '10.90 €',
        dietary: ['SG+']
      },
      {
        id: 'chicharrona',
        name: 'La Chicharrona',
        description: 'Doble Patty de 90g de ternera madurada, doble queso cheddar, mayonesa de pimentón y chicharrones a baja temperatura',
        price: '10.90 €',
        dietary: ['SG+']
      },
      {
        id: 'pulled',
        name: 'Pulled Pork Burger',
        description: 'Doble Patty de 90g, de ternera madurada, salsa de la casa, doble queso cheddar, BBQ y pulled pork casero a baja temperatura',
        price: '10.90 €',
        dietary: ['SG+']
      },
      {
        id: 'infantil',
        name: 'Menú Infantil',
        description: '1 Patty de 90g, queso cheddar, bacon y ketchup (incluye patatas)',
        price: '7.00 €',
        dietary: ['SG+']
      }
    ]
  },
  {
    id: 'rollitos',
    name: 'Rollitos Gourmets (2 uds)',
    items: [
      {
        id: 'pollo-thai',
        name: 'Rollito de Pollo Thai',
        description: 'Relleno de pollo asado al estilo criollo con cebolla, fideos chinos y brotes de soja',
        price: '6.00 €',
        dietary: []
      },
      {
        id: 'ternera-retinta',
        name: 'Rollito de Ternera Retinta',
        description: 'El más solicitado. Relleno de carne de vacuno, cebolla, fideos chinos y especias',
        price: '6.00 €',
        dietary: []
      },
      {
        id: 'carbonara-roll',
        name: 'Rollito a la Carbonara',
        description: 'Rollito relleno de mozzarella artesanal gallega, jamón de york, cebolla caramelizada y albahaca',
        price: '6.00 €',
        dietary: []
      },
      {
        id: 'chorizo',
        name: 'Rollito de Chorizo',
        description: 'Con queso mozzarella y cebolla caramelizada',
        price: '6.00 €',
        dietary: []
      },
      {
        id: 'solomillo-whisky',
        name: 'Rollito de Solomillo al Whisky',
        description: 'Nuestros rollitos más sevillanos. Solomillo a baja temperatura, salsa whisky casera y jamón serrano',
        price: '6.00 €',
        dietary: []
      },
      {
        id: 'serranito',
        name: 'Rollito de Serranito de Pollo',
        description: 'Serranito de pollo enrollado entre unas masas filos crujientes, pollo a la plancha, tortilla francesa, pimientos fritos, jamón serrano',
        price: '6.00 €',
        dietary: []
      },
      {
        id: 'costilla-bbq',
        name: 'Rollito de Costilla Barbacoa',
        description: 'Costillas de cerdo a baja temperatura en salsa barbacoa',
        price: '6.00 €',
        dietary: []
      },
      {
        id: 'lomo-queso',
        name: 'Rollito Lomo Adobado con Queso y Bacon Caramelizado',
        description: 'Lomo adobado, bacon, cebolla caramelizada y queso mozzarella',
        price: '6.00 €',
        dietary: []
      }
    ]
  },
  {
    id: 'patatas',
    name: 'Patatas y Para Compartir',
    items: [
      {
        id: 'patatas-bacon',
        name: 'Patatas Fritas con Queso y Bacon Caramelizado',
        description: '',
        price: '5.00 €',
        dietary: []
      },
      {
        id: 'patatas-chicken',
        name: 'Patatas Pulled Chicken',
        description: 'Con salsa gaucha y cebolla caramelizada',
        price: '5.00 €',
        dietary: []
      },
      {
        id: 'patatas-pulled-pork',
        name: 'Patatas Pulled Pork',
        description: '',
        price: '5.00 €',
        dietary: []
      },
      {
        id: 'patatas-arrieras',
        name: 'Patatas Arrieras',
        description: '',
        price: '5.00 €',
        dietary: []
      },
      {
        id: 'alitas',
        name: 'Alitas de Pollo (6 uds)',
        description: '',
        price: '5.00 €',
        dietary: []
      },
      {
        id: 'delicias',
        name: 'Delicias de Pollo Rebozadas (6 uds)',
        description: '',
        price: '5.00 €',
        dietary: []
      },
      {
        id: 'croquetas',
        name: 'Croquetas del Chef (6 uds)',
        description: '',
        price: '5.50 €',
        dietary: []
      },
      {
        id: 'samosas',
        name: 'Samosas de Pollo al Curry (5 uds)',
        description: '',
        price: '5.00 €',
        dietary: []
      }
    ]
  },
  {
    id: 'principales',
    name: 'Platos Principales',
    items: [
      {
        id: 'brioche-pipi',
        name: 'Brioche Fake Piripi',
        description: 'Brioche trenzado tostado, lomo adobado, ali oli, bacon plancha y queso',
        price: '7.50 €',
        dietary: []
      },
      {
        id: 'brioche-pringa',
        name: 'Brioche con Pringa',
        description: 'Brioche trenzado, pringa casera, rúcula, ali oli y crema de cheddar',
        price: '7.50 €',
        dietary: []
      },
      {
        id: 'fake-arepa',
        name: 'Fake Arepa',
        description: 'Pan de pita, mayo trufada, pulled pork y queso rallado',
        price: '8.50 €',
        dietary: []
      },
      {
        id: 'gofre-chorizo',
        name: 'Gofre Achorizado',
        description: 'Gofre, mayonesa de soja, chorizo caramelizada y queso eddam',
        price: '6.00 €',
        dietary: []
      },
      {
        id: 'pan-bao',
        name: 'Pan Bao de Chicharrones',
        description: 'Cocinados a baja temperatura con Ali-Oli de hierbabuena',
        price: '6.50 €',
        dietary: []
      },
      {
        id: 'wok-udon',
        name: 'Wok de Fideo Udon',
        description: 'Udon salteado con verduras mixtas, pollo, langostinos y salsas agridulces',
        price: '10.00 €',
        dietary: []
      },
      {
        id: 'wok-veg',
        name: 'Wok de Fideo Udon Vegetariano',
        description: 'Udon salteado con verduras mixtas y salsas agridulces',
        price: '10.00 €',
        dietary: ['V', 'VG']
      }
    ]
  },
  {
    id: 'postres',
    name: 'Postres',
    items: [
      {
        id: 'choco-cookies',
        name: 'Choco Cookies',
        description: '',
        price: '4.50 €',
        dietary: ['V']
      },
      {
        id: 'nutella',
        name: 'Nutella',
        description: '',
        price: '4.50 €',
        dietary: ['V']
      },
      {
        id: 'lotus',
        name: 'Lotus',
        description: '',
        price: '4.50 €',
        dietary: ['V']
      }
    ]
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    items: [
      { id: 'agua', name: 'Agua', description: '', price: '1.30 €', dietary: [] },
      { id: 'refrescos', name: 'Refrescos', description: '', price: '1.60 €', dietary: [] },
      { id: 'estrella-esp', name: 'Estrella Galicia Especial', description: '', price: '1.70 €', dietary: [] },
      { id: 'estrella-1906', name: 'Estrella Galicia 1906', description: '', price: '1.70 €', dietary: [] },
      { id: 'estrella-00', name: 'Estrella Galicia 00', description: '', price: '1.70 €', dietary: [] }
    ]
  },
  {
    id: 'packs',
    name: 'Packs Especiales',
    items: [
      {
        id: 'pack-6',
        name: 'Pack 6',
        description: 'Seis rollitos. Todo lo que necesitas para compartir una comida o cena',
        price: '17.40 €',
        dietary: []
      },
      {
        id: 'pack-12',
        name: 'Pack 12',
        description: 'Ni más ni menos que una docena de nuestros famosos rollitos hechos a mano recién horneados',
        price: '34.80 €',
        dietary: []
      },
      {
        id: 'pack-18',
        name: 'Pack 18',
        description: 'Ideal para compartir, nuestro pack de 18 es perfecto para reuniones de 6 a 8 personas',
        price: '49.90 €',
        dietary: []
      }
    ]
  }
];

const dietaryInfo: Record<string, { label: string; color: string }> = {
  'V': { label: 'Vegetariano', color: 'bg-green-100 text-green-800' },
  'VG': { label: 'Vegano', color: 'bg-green-200 text-green-900' },
  'SG': { label: 'Sin Gluten', color: 'bg-yellow-100 text-yellow-800' },
  'SG+': { label: 'Pan sin gluten disponible (+1€)', color: 'bg-orange-100 text-orange-800' },
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const activeItems = categories.find(cat => cat.id === activeCategory)?.items || [];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-green-800 text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-2">
            <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Volver</span>
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Enrollate Montequinto
          </h1>
          <p className="text-center text-green-100 mt-2">Cocina Fusión • Take Away & Delivery</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-md p-4 sticky top-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4 px-2">Categorías</h2>
              <ul className="space-y-1">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-green-600 text-white shadow-md'
                          : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Legend */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Leyenda</h3>
                <div className="space-y-2">
                  {Object.entries(dietaryInfo).map(([key, info]) => (
                    <div key={key} className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${info.color}`}>
                        {key}
                      </span>
                      <span className="text-xs text-gray-600">{info.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </nav>
          </aside>

          {/* Menu Content */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
                    {categories.find(c => c.id === activeCategory)?.name}
                  </h2>

                  <div className="grid gap-4">
                    {activeItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        className="border rounded-xl p-4 hover:shadow-md transition-shadow bg-white"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                              {item.dietary.length > 0 && (
                                <div className="flex gap-1">
                                  {item.dietary.map((diet) => (
                                    <span
                                      key={diet}
                                      className={`px-2 py-0.5 rounded text-xs font-bold ${dietaryInfo[diet]?.color || 'bg-gray-100 text-gray-800'}`}
                                    >
                                      {diet}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            )}
                          </div>
                          <span className="font-bold text-green-700 text-lg whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {activeCategory === 'smash' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                    <p className="text-green-800 font-medium">
                      Todas las Smash Burgers incluyen patatas
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      Opción de pan sin gluten disponible (+1€)
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">Enrollate Montequinto - Cocina Fusión</p>
          <p className="text-sm text-gray-500">Montequinto, Dos Hermanas, Sevilla</p>
        </div>
      </footer>
    </div>
  );
}