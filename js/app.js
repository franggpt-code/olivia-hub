/**
 * =============================================================================
 * CONTROLADOR PRINCIPAL · PORTAL DE APRENDIZAJE DE OLIVIA (4.º PRIMARIA)
 * =============================================================================
 */

class HubApp {
  constructor() {
    this.sound = new SoundManager();
    this.currentFilter = 'all'; // 'all', 'matematicas', 'lengua', 'science', 'extras'
    this.searchQuery = '';
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.sound.initContext();
      this.renderStats();
      this.renderSubjects();
      this.setupEventListeners();
      console.log('🌟 Olivia Hub iniciado correctamente con', this.getTotalTopicsCount(), 'temas cargados.');
    });
  }

  setupEventListeners() {
    // Escuchar entrada de búsqueda
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderSubjects();
      });
    }

    // Toggle de sonido
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        const enabled = this.sound.toggleSound();
        soundToggle.innerHTML = enabled ? '🔊 <span class="hidden sm:inline">Sonido ON</span>' : '🔇 <span class="hidden sm:inline">Sonido OFF</span>';
        if (enabled) {
          this.sound.initContext();
          this.sound.playClick();
        }
      });
    }

    // Inicializar audio al primer toque en la pantalla
    document.addEventListener('click', () => {
      this.sound.initContext();
    }, { once: true });
  }

  getTotalTopicsCount() {
    return HUB_DATA.subjects.reduce((sum, s) => sum + s.topics.length, 0);
  }

  renderStats() {
    const totalTopics = this.getTotalTopicsCount();
    const totalSubjects = HUB_DATA.subjects.length;

    const elTotalTemas = document.getElementById('stat-total-temas');
    if (elTotalTemas) elTotalTemas.textContent = totalTopics;

    const elTotalAsig = document.getElementById('stat-total-asignaturas');
    if (elTotalAsig) elTotalAsig.textContent = totalSubjects;
  }

  setFilter(filterId) {
    this.sound.playClick();
    this.currentFilter = filterId;

    // Actualizar botones de filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      const active = btn.getAttribute('data-filter') === filterId;
      if (active) {
        btn.classList.add('bg-slate-900', 'text-white', 'shadow-md');
        btn.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      } else {
        btn.classList.remove('bg-slate-900', 'text-white', 'shadow-md');
        btn.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      }
    });

    this.renderSubjects();
  }

  renderSubjects() {
    const container = document.getElementById('subjects-container');
    if (!container) return;

    let html = '';
    const q = this.searchQuery;

    // Filtrar asignaturas según filtro y búsqueda
    let subjectsToRender = HUB_DATA.subjects;
    if (this.currentFilter !== 'all' && this.currentFilter !== 'extras') {
      subjectsToRender = HUB_DATA.subjects.filter(s => s.id === this.currentFilter);
    }

    let totalMatches = 0;

    if (this.currentFilter !== 'extras') {
      subjectsToRender.forEach(subject => {
        // Filtrar temas que coincidan con la búsqueda
        const matchingTopics = subject.topics.filter(topic => {
          if (!q) return true;
          return topic.title.toLowerCase().includes(q) ||
                 topic.summary.toLowerCase().includes(q) ||
                 topic.keyPoints.some(k => k.toLowerCase().includes(q)) ||
                 subject.name.toLowerCase().includes(q);
        });

        if (matchingTopics.length > 0) {
          totalMatches += matchingTopics.length;
          html += this.renderSubjectSection(subject, matchingTopics);
        }
      });
    }

    // Renderizar extras si el filtro es 'all' o 'extras'
    if (this.currentFilter === 'all' || this.currentFilter === 'extras') {
      const matchingExtras = HUB_DATA.extras.filter(extra => {
        if (!q) return true;
        return extra.title.toLowerCase().includes(q) ||
               extra.summary.toLowerCase().includes(q) ||
               extra.name.toLowerCase().includes(q);
      });

      if (matchingExtras.length > 0) {
        totalMatches += matchingExtras.length;
        html += this.renderExtrasSection(matchingExtras);
      }
    }

    if (totalMatches === 0) {
      html = `
        <div class="text-center py-12 px-4 bg-white rounded-3xl border-2 border-dashed border-slate-300">
          <div class="text-5xl mb-3">🔍</div>
          <h3 class="text-xl font-bold text-slate-800 mb-1">No se encontraron temas con "${this.escapeHtml(q)}"</h3>
          <p class="text-slate-500 mb-4 text-sm">Prueba con palabras clave como <em>plantas, agudas, salud, fracciones, números romanos</em>.</p>
          <button onclick="app.clearSearch()" class="btn-bounce px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-md">
            Limpiar búsqueda y ver todo
          </button>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  renderSubjectSection(subject, topics) {
    const cardBorderClass = subject.id === 'matematicas' ? 'card-math' :
                           subject.id === 'lengua' ? 'card-lengua' : 'card-science';

    const cardsHtml = topics.map(topic => this.renderTopicCard(subject, topic, cardBorderClass)).join('');

    return `
      <section class="mb-12" id="section-${subject.id}">
        <!-- Encabezado de la Asignatura -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b-2 border-slate-200">
          <div class="flex items-center gap-3">
            <span class="text-3xl p-2.5 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">${subject.icon}</span>
            <div>
              <div class="flex items-center gap-2">
                <h2 class="text-2xl font-black text-slate-800 tracking-tight">${subject.name}</h2>
                <span class="text-xs px-2.5 py-1 rounded-full font-bold border ${subject.badgeColor}">
                  ${topics.length} ${topics.length === 1 ? 'tema' : 'temas'}
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-500 font-medium">${subject.description}</p>
            </div>
          </div>
        </div>

        <!-- Cuadrícula de Temas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${cardsHtml}
        </div>
      </section>
    `;
  }

  renderTopicCard(subject, topic, cardBorderClass) {
    const keyPointsHtml = topic.keyPoints.map(point => `
      <li class="flex items-start gap-1.5 text-xs text-slate-600">
        <span class="text-emerald-500 font-bold">✓</span>
        <span>${point}</span>
      </li>
    `).join('');

    return `
      <div class="card-playful ${cardBorderClass} p-6 flex flex-col justify-between">
        <div>
          <!-- Header de la tarjeta -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider ${subject.badgeColor}">
              Tema ${topic.topicNumber}
            </span>
            <div class="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <span class="w-2 h-2 rounded-full bg-emerald-500 pulse-live"></span>
              <span>En línea</span>
            </div>
          </div>

          <!-- Título y emoji -->
          <div class="flex items-start gap-2 mb-2">
            <span class="text-2xl">${topic.emoji || '📘'}</span>
            <h3 class="text-lg font-black text-slate-800 leading-snug">
              ${topic.title}
            </h3>
          </div>

          <!-- Resumen -->
          <p class="text-xs text-slate-500 font-medium mb-4 leading-relaxed">
            ${topic.summary}
          </p>

          <!-- Puntos clave del tema -->
          <div class="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-5">
            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">Saberes clave:</span>
            <ul class="space-y-1">
              ${keyPointsHtml}
            </ul>
          </div>
        </div>

        <!-- Acciones directas -->
        <div class="pt-4 border-t border-slate-100 flex flex-col gap-2">
          <!-- Botón Principal: Abrir Tema -->
          <a href="${topic.vercelUrl}" target="_blank" rel="noopener noreferrer" 
             onclick="app.onTopicClick('${topic.title}')"
             class="btn-bounce w-full py-3 px-4 rounded-xl font-black text-sm text-center text-white bg-gradient-to-r ${subject.gradient} shadow-md flex items-center justify-center gap-2 hover:opacity-95">
            <span>Entrar al Tema ${topic.topicNumber}</span>
            <span>🚀</span>
          </a>

          <!-- Botones secundarios: Copiar URL y Ver GitHub -->
          <div class="flex items-center gap-2">
            <button onclick="app.copyUrl('${topic.vercelUrl}', '${topic.title}')" 
                    class="btn-bounce flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center gap-1.5 border border-slate-200">
              <span>📋</span>
              <span>Copiar URL</span>
            </button>
            <a href="${topic.githubUrl}" target="_blank" rel="noopener noreferrer"
               class="btn-bounce py-2 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center gap-1 border border-slate-200" title="Ver código en GitHub">
              <span>🐙</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  renderExtrasSection(extras) {
    const extrasCards = extras.map(item => {
      let linksHtml = '';
      if (item.vercelUrl) {
        linksHtml = `
          <a href="${item.vercelUrl}" target="_blank" rel="noopener noreferrer"
             class="btn-bounce w-full py-2.5 px-4 rounded-xl font-bold text-xs text-center text-white bg-slate-800 hover:bg-slate-900 shadow flex items-center justify-center gap-1.5">
            <span>Abrir Aplicación</span> <span>🚀</span>
          </a>
        `;
      } else if (item.links) {
        linksHtml = `
          <div class="grid grid-cols-3 gap-2">
            ${item.links.map(l => `
              <a href="${l.url}" target="_blank" rel="noopener noreferrer"
                 class="btn-bounce py-2 px-2 rounded-lg text-center font-bold text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200">
                ${l.name}
              </a>
            `).join('')}
          </div>
        `;
      }

      return `
        <div class="card-playful p-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-slate-500 uppercase">${item.subject}</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">${item.tag}</span>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">${item.icon}</span>
              <h4 class="font-bold text-slate-800 text-sm">${item.title}</h4>
            </div>
            <p class="text-xs text-slate-500 mb-4">${item.summary}</p>
          </div>
          <div>${linksHtml}</div>
        </div>
      `;
    }).join('');

    return `
      <section class="mb-12" id="section-extras">
        <div class="flex items-center gap-3 mb-6 pb-3 border-b-2 border-slate-200">
          <span class="text-3xl p-2.5 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">⭐</span>
          <div>
            <h2 class="text-2xl font-black text-slate-800 tracking-tight">Música y Archivo Histórico</h2>
            <p class="text-xs sm:text-sm text-slate-500 font-medium">Otros proyectos educativos interactivos y repositorios complementarios.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${extrasCards}
        </div>
      </section>
    `;
  }

  onTopicClick(title) {
    this.sound.playCelebration();
  }

  copyUrl(url, title) {
    this.sound.playCorrect();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        this.showToast(`¡Enlace copiado! ${url}`);
      }).catch(() => {
        this.fallbackCopy(url);
      });
    } else {
      this.fallbackCopy(url);
    }
  }

  fallbackCopy(url) {
    const input = document.createElement('input');
    input.value = url;
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand('copy');
      this.showToast(`¡Enlace copiado! ${url}`);
    } catch (e) {
      window.prompt('Copia este enlace:', url);
    }
    document.body.removeChild(input);
  }

  showToast(message) {
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('show');

    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  clearSearch() {
    this.searchQuery = '';
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    this.currentFilter = 'all';
    this.setFilter('all');
  }

  escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
}

// Inicializar la aplicación global
const app = new HubApp();
window.app = app;
