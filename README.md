# 🌟 Portal de Aprendizaje de Olivia · Hub 4.º de Primaria

Landing page centralizada y portal interactivo que agrupa todos los repositorios y aplicaciones web educativas desarrolladas para **Olivia (alumna de 4.º de Educación Primaria)**.

> **Acceso directo al Portal:**
> - 🌐 **Producción Principal:** [https://olivia-hub-4.vercel.app](https://olivia-hub-4.vercel.app)
> - 🌐 **Dominio Alternativo:** [https://olivia-portal-4.vercel.app](https://olivia-portal-4.vercel.app)

Permite consultar, buscar y navegar directamente a cualquiera de los temas de repaso creados para las asignaturas de **Matemáticas**, **Lengua Castellana** y **Science (Conocimiento del Medio / Ciencias de la Naturaleza)**, basados en el proyecto oficial de Santillana (*CLAVES / Construyendo Mundos*).

---

## 🌐 URLs Oficiales de Producción en Vercel

### 🔢 Matemáticas
| Tema | Título y Saberes Clave | URL de Producción | Repositorio GitHub |
| :--- | :--- | :--- | :--- |
| **Tema 1** | Números de 5 cifras, descomposición y números romanos | [olivia-matematicas-4-tema1.vercel.app](https://olivia-matematicas-4-tema1.vercel.app) | [olivia-matematicas-4-tema1](https://github.com/franggpt-code/olivia-matematicas-4-tema1) |
| **Tema 2** | La Suma y la Resta (propiedades, estimaciones y problemas) | [olivia-matematicas-4-tema2.vercel.app](https://olivia-matematicas-4-tema2.vercel.app) | [olivia-matematicas-4-tema2](https://github.com/franggpt-code/olivia-matematicas-4-tema2) |
| **Tema 3** | La Multiplicación (propiedades, ceros, estimaciones y operaciones combinadas) | [olivia-matematicas-4-tema3.vercel.app](https://olivia-matematicas-4-tema3.vercel.app) | [olivia-matematicas-4-tema3](https://github.com/franggpt-code/olivia-matematicas-4-tema3) |

### 📖 Lengua Castellana
| Tema | Título y Saberes Clave | URL de Producción | Repositorio GitHub |
| :--- | :--- | :--- | :--- |
| **Tema 1** | La Comunicación, el Abecedario y el Campo Semántico | [olivia-lengua-4-tema1.vercel.app](https://olivia-lengua-4-tema1.vercel.app) | [olivia-lengua-4-tema1](https://github.com/franggpt-code/olivia-lengua-4-tema1) |
| **Tema 2** | Campo Léxico, Palabras Agudas y Pronombres Personales | [olivia-lengua-4-tema2.vercel.app](https://olivia-lengua-4-tema2.vercel.app) | [olivia-lengua-4-tema2](https://github.com/franggpt-code/olivia-lengua-4-tema2) |
| **Tema 3** | Prefijos, Palabras Llanas, Demostrativos y el Anuncio | [olivia-lengua-4-tema3.vercel.app](https://olivia-lengua-4-tema3.vercel.app) | [olivia-lengua-4-tema3](https://github.com/franggpt-code/olivia-lengua-4-tema3) |

### 🔬 Science / Conocimiento del Medio
| Tema | Título y Saberes Clave | URL de Producción | Repositorio GitHub |
| :--- | :--- | :--- | :--- |
| **Tema 1** | La Salud y el Bienestar (nutrientes, prevención y hábitos) | [olivia-science-4-tema1.vercel.app](https://olivia-science-4-tema1.vercel.app) | [olivia-science-4-tema1](https://github.com/franggpt-code/olivia-science-4-tema1) |
| **Tema 2** | La Vida de las Plantas (fotosíntesis, flor y frutos) | [olivia-science-4-tema2.vercel.app](https://olivia-science-4-tema2.vercel.app) | [olivia-science-4-tema2](https://github.com/franggpt-code/olivia-science-4-tema2) |
| **Tema 3** | Los Seres Vivos y los Cinco Reinos (célula, microscopio y reinos) | [olivia-science-4-tema3.vercel.app](https://olivia-science-4-tema3.vercel.app) | [olivia-science-4-tema3](https://github.com/franggpt-code/olivia-science-4-tema3) |

---

## 🏗️ Arquitectura Técnica

- **SPA 100% Autocontenida:** Sin frameworks pesados ni pasos de transpilación lentos.
- **Tailwind CSS Precompilado:** Estilos limpios y consistentes en cualquier dispositivo o tablet escolar (iPad).
- **Web Audio API:** Efectos auditivos sintetizados para navegación lúdica.
- **Buscador en Tiempo Real:** Permite filtrar instantáneamente por conceptos curriculares (ej: *fotosíntesis, agudas, salud, números romanos*).
- **Diseño Blindado (WCAG AAA):** Encabezado 100% sólido para evitar errores de superposición y contraste probado de textos.

---

## 🔄 Protocolo de Actualización al Añadir un Nuevo Tema

Cuando se genera una nueva aplicación temática (siguiendo la skill `olivia-app-builder`):

1. **Abrir `js/data.js`** en este repositorio (`c:\99_CODIGOFUENTE\Personal\Olivia_Hub\js\data.js`).
2. Localizar la asignatura correspondiente (`matematicas`, `lengua`, `science`).
3. Añadir el objeto del nuevo tema en el array `topics`:
   ```javascript
   {
     id: "<asignatura>-t<X>",
     topicNumber: <X>,
     title: "Tema <X>: <Título Oficial>",
     shortTitle: "<Título Corto>",
     summary: "<Breve descripción pedagógica>",
     keyPoints: [
       "Concepto clave 1",
       "Concepto clave 2",
       "Concepto clave 3"
     ],
     vercelUrl: "https://olivia-<asignatura>-4-tema<X>.vercel.app",
     githubUrl: "https://github.com/franggpt-code/olivia-<asignatura>-4-tema<X>",
     status: "verified",
     emoji: "🎯"
   }
   ```
4. Realizar commit y push a `main`:
   ```bash
   git add js/data.js
   git commit -m "feat: registrar Tema <X> de <Asignatura> en el Hub"
   git push origin main
   ```
   *Vercel actualizará el portal automáticamente en segundos.*
