/**
 * =============================================================================
 * BANCO DE DATOS CENTRALIZADO · PORTAL DE APRENDIZAJE DE OLIVIA (4.º PRIMARIA)
 * =============================================================================
 * Este archivo contiene todas las asignaturas y temas desarrollados para Olivia,
 * con sus URLs oficiales de producción en Vercel, enlaces a GitHub, etiquetas
 * conceptuales y descriptores pedagógicos basados en Santillana CLAVES.
 * 
 * PARA AÑADIR UN NUEVO TEMA:
 * 1. Localiza el array 'topics' de la asignatura correspondiente.
 * 2. Añade un nuevo objeto con el número de tema, título, URLs de Vercel y GitHub.
 * 3. Guarda y realiza commit/push en el repositorio olivia-hub.
 */

const HUB_DATA = {
  lastUpdated: "14 de Noviembre de 2026",
  course: "4.º de Educación Primaria",
  editorial: "Santillana · Proyecto CLAVES / Construyendo Mundos",
  student: "Olivia",

  subjects: [
    {
      id: "matematicas",
      name: "Matemáticas",
      shortName: "Mates",
      icon: "🔢",
      colorName: "emerald",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      accentBg: "bg-emerald-500",
      accentText: "text-emerald-600",
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      heroBg: "linear-gradient(135deg, #064e3b 0%, #047857 50%, #0e7490 100%)",
      description: "Numeración de hasta 5 cifras, cálculo mental, sumas y restas, propiedades, problemas y números romanos.",
      topics: [
        {
          id: "matematicas-t1",
          topicNumber: 1,
          title: "Tema 1: Números de hasta 5 cifras y Números Romanos",
          shortTitle: "Números de 5 cifras y Romanos",
          summary: "Descomposición posicional (DM, UM, C, D, U), lectura, aproximaciones a millares y reglas de la numeración romana.",
          keyPoints: [
            "Descomposición posicional (DM, UM, C, D, U)",
            "Aproximaciones a la decena y al millar",
            "Reglas de suma y resta de números romanos (I, V, X, L, C)",
            "Aventuras temáticas de monumentos y castillos"
          ],
          vercelUrl: "https://olivia-matematicas-4-tema1.vercel.app",
          githubUrl: "https://github.com/franggpt-code/olivia-matematicas-4-tema1",
          status: "verified",
          emoji: "🏛️"
        },
        {
          id: "matematicas-t2",
          topicNumber: 2,
          title: "Tema 2: La Suma y la Resta",
          shortTitle: "La Suma y la Resta",
          summary: "Propiedades conmutativa y asociativa, estimaciones, prueba de la resta y resolución de problemas reales.",
          keyPoints: [
            "Propiedad conmutativa y asociativa",
            "Estimación de sumas y restas",
            "Prueba de la resta (Sustraendo + Diferencia = Minuendo)",
            "Operaciones combinadas y problemas en dos pasos"
          ],
          vercelUrl: "https://olivia-matematicas-4-tema2.vercel.app",
          githubUrl: "https://github.com/franggpt-code/olivia-matematicas-4-tema2",
          status: "verified",
          emoji: "➕"
        },
        {
          id: "matematicas-t3",
          topicNumber: 3,
          title: "Tema 3: La Multiplicación",
          shortTitle: "La Multiplicación",
          summary: "Términos de la multiplicación, ceros finales, propiedades conmutativa, asociativa y distributiva, estimaciones y operaciones combinadas.",
          keyPoints: [
            "Propiedad conmutativa, asociativa y distributiva",
            "Multiplicación por 1, 2 y 3 cifras con ceros finales",
            "Estimación de productos (redondeo a decena y centena)",
            "Jerarquía sagrada de operaciones combinadas"
          ],
          vercelUrl: "https://olivia-matematicas-4-tema3.vercel.app",
          githubUrl: "https://github.com/franggpt-code/olivia-matematicas-4-tema3",
          status: "verified",
          emoji: "✖️"
        }
      ]
    },

    {
      id: "lengua",
      name: "Lengua Castellana",
      shortName: "Lengua",
      icon: "📖",
      colorName: "amber",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      accentBg: "bg-amber-500",
      accentText: "text-amber-600",
      gradient: "from-amber-600 via-orange-600 to-rose-700",
      heroBg: "linear-gradient(135deg, #78350f 0%, #c2410c 50%, #9f1239 100%)",
      description: "Comunicación, campos semánticos y léxicos, prefijos, palabras agudas y llanas, pronombres, demostrativos y obras narrativas.",
      topics: [
        {
          id: "lengua-t1",
          topicNumber: 1,
          title: "Tema 1: La Comunicación, el Abecedario y el Campo Semántico",
          shortTitle: "La Comunicación y Campo Semántico",
          summary: "Elementos de la comunicación (emisor, receptor, mensaje), orden en el diccionario, sílaba tónica/átona y campos semánticos.",
          keyPoints: [
            "Emisor, receptor, mensaje y código",
            "Manejo del diccionario y orden alfabético",
            "Sílaba tónica vs. sílabas átonas",
            "Clasificación en campos semánticos temáticos"
          ],
          vercelUrl: "https://olivia-lengua-4-tema1.vercel.app",
          githubUrl: "https://github.com/franggpt-code/olivia-lengua-4-tema1",
          status: "verified",
          emoji: "🗣️"
        },
        {
          id: "lengua-t2",
          topicNumber: 2,
          title: "Tema 2: Campo Léxico, Palabras Agudas y Pronombres",
          shortTitle: "Campo Léxico, Agudas y Pronombres",
          summary: "Estructura de textos instructivos, campo léxico vs. semántico, tilde en palabras agudas (-n, -s o vocal) y pronombres personales.",
          keyPoints: [
            "Textos instructivos: pasos ordenados y materiales",
            "Campo léxico (sustantivos, verbos, adjetivos vinculados)",
            "Regla de acentuación de palabras agudas",
            "Pronombres personales (1.ª, 2.ª y 3.ª persona, singular y plural)"
          ],
          vercelUrl: "https://olivia-lengua-4-tema2.vercel.app",
          githubUrl: "https://github.com/franggpt-code/olivia-lengua-4-tema2",
          status: "verified",
          emoji: "✍️"
        },
        {
          id: "lengua-t3",
          topicNumber: 3,
          title: "Tema 3: Prefijos, Palabras Llanas, Demostrativos y el Anuncio",
          shortTitle: "Prefijos, Llanas y Demostrativos",
          summary: "Morfemas derivativos (des-, in-, sub-, re-, pre-), acentuación de palabras llanas y trampa de examen, demostrativos y el cartel publicitario.",
          keyPoints: [
            "Prefijos de negación, posición, repetición y anterioridad",
            "Regla de acentuación de palabras llanas y trampa de examen (-n)",
            "Los demostrativos (cercanía, distancia media y lejanía)",
            "Obras narrativas (cuento, novela, fábula) y partes del anuncio"
          ],
          vercelUrl: "https://olivia-lengua-4-tema3.vercel.app",
          githubUrl: "https://github.com/franggpt-code/olivia-lengua-4-tema3",
          status: "verified",
          emoji: "📖"
        }
      ]
    },

    {
      id: "science",
      name: "Science / Cono",
      shortName: "Science",
      icon: "🔬",
      colorName: "indigo",
      badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
      accentBg: "bg-indigo-600",
      accentText: "text-indigo-600",
      gradient: "from-indigo-700 via-blue-600 to-teal-600",
      heroBg: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 45%, #0f766e 100%)",
      description: "Ciencias de la Naturaleza: salud y nutrición, anatomía y reproducción de las plantas, células y los 5 reinos.",
      topics: [
        {
          id: "science-t1",
          topicNumber: 1,
          title: "Tema 1: La Salud y el Bienestar",
          shortTitle: "La Salud y Hábitos Saludables",
          summary: "Salud física, mental y social, nutrientes y grupos alimentarios, prevención, vacunas, procesados y descanso activo.",
          keyPoints: [
            "Dimensiones de la salud (física, mental y social)",
            "Funciones de los nutrientes (energéticos, constructores, reguladores)",
            "Alimentos frescos vs. procesados y ultraprocesados",
            "Prevención: higiene, vacunas, revisiones y postura corporal"
          ],
          vercelUrl: "https://olivia-science-4-tema1.vercel.app",
          githubUrl: "https://github.com/franggpt-code/olivia-science-4-tema1",
          status: "verified",
          emoji: "🍎"
        },
        {
          id: "science-t2",
          topicNumber: 2,
          title: "Tema 2: La Vida de las Plantas",
          shortTitle: "La Vida de las Plantas",
          summary: "Anatomía vegetal (raíz, tallo, hojas), fotosíntesis (savia bruta y elaborada), partes de la flor y clasificación de plantas.",
          keyPoints: [
            "Anatomía vegetal: raíz, tallo leñoso/herbáceo y hoja (limbo, haz, envés, peciolo)",
            "La fotosíntesis: savia bruta vs. savia elaborada, luz y clorofila",
            "Reproducción floral: cáliz, corola, estambres masculinos y pistilo femenino",
            "Clasificación: con semillas (angiospermas/gimnospermas) y sin semillas (musgos/helechos)"
          ],
          vercelUrl: "https://olivia-science-4-tema2.vercel.app",
          githubUrl: "https://github.com/franggpt-code/olivia-science-4-tema2",
          status: "verified",
          emoji: "🌿"
        },
        {
          id: "science-t3",
          topicNumber: 3,
          title: "Tema 3: Los Seres Vivos y los Cinco Reinos",
          shortTitle: "Los Seres Vivos y los 5 Reinos",
          summary: "La célula como unidad de vida, herramientas de laboratorio (microscopio, lupa) y clasificación en los cinco reinos biológicos.",
          keyPoints: [
            "La célula: unidad viva mínima, unicelulares vs. pluricelulares",
            "Herramientas científicas: microscopio óptico, lupa binocular y prismáticos",
            "Los 5 Reinos: Animales, Plantas, Hongos, Protoctistas y Bacterias",
            "Bacterias y levaduras beneficiosas en la industria alimentaria"
          ],
          vercelUrl: "https://olivia-science-4-tema3.vercel.app",
          githubUrl: "https://github.com/franggpt-code/olivia-science-4-tema3",
          status: "verified",
          emoji: "🦠"
        }
      ]
    }
  ],

  // Recursos adicionales y repositorios previos de Olivia
  extras: [
    {
      id: "musica-carrillon",
      name: "Música: Carrillón & Bingo",
      subject: "Música",
      icon: "🎵",
      title: "Carrillón Interactivo y Bingo Musical",
      summary: "Simulador táctil de láminas de carillón diatónico y juego interactivo de bingo de notas musicales.",
      vercelUrl: "https://carrillon-bingo.vercel.app",
      githubUrl: "https://github.com/franggpt-code/carrillon-bingo",
      tag: "4.º de Primaria"
    },
    {
      id: "archivo-3-primaria",
      name: "Archivo 3.º de Primaria",
      subject: "3.º Primaria",
      icon: "📚",
      title: "Colección de Repaso de 3.º de Primaria",
      summary: "Aplicaciones originales de repaso de Matemáticas, Lengua y Conocimiento del Medio de 3.º.",
      links: [
        { name: "Mates 3.º", url: "https://app-practica-matematicas-3-primaria.vercel.app" },
        { name: "Lengua 3.º", url: "https://app-practica-lengua.vercel.app" },
        { name: "Cono 3.º", url: "https://app-practica-conocimientomedio.vercel.app" }
      ],
      tag: "Archivo Histórico"
    }
  ]
};

// Exportar globalmente para navegador y módulos
if (typeof window !== "undefined") {
  window.HUB_DATA = HUB_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = HUB_DATA;
}
