<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Interface para os itens de educação
interface EducationItem {
  key: string
  title: string
  titlePt?: string
  institution: string
  period: string
  periodPt: string
  type: string
  typePt: string
  icon: string
  color: string
}

// Dados da educação definidos diretamente para evitar problemas com i18n
const educationItems: EducationItem[] = [
  {
    key: 'bootcamp',
    title: 'Bootcamp Web Development',
    institution: 'Wild Code School',
    period: '09/2020 - Present',
    periodPt: '09/2020 - Presente',
    type: 'Bootcamp',
    typePt: 'Bootcamp',
    icon: '🎓',
    color: '#e74c3c',
  },
  {
    key: 'udemy',
    title: 'Responsive websites w/ HTML5 & CSS3',
    institution: 'Udemy',
    period: '05/2020 - 08/2020',
    periodPt: '05/2020 - 08/2020',
    type: 'Online Course',
    typePt: 'Curso Online',
    icon: '💻',
    color: '#9b59b6',
  },
  {
    key: 'master',
    title: 'Master Degree in Management',
    titlePt: 'Mestrado em Gestão',
    institution: 'Instituto Superior de Gestão',
    period: '2004 - 2010',
    periodPt: '2004 - 2010',
    type: 'Master Degree',
    typePt: 'Mestrado',
    icon: '🎯',
    color: '#3498db',
  },
  {
    key: 'trainer',
    title: 'Trainer Certification (CAP)',
    titlePt: 'Certificação de Formador (CAP)',
    institution: 'INEPI',
    period: '',
    periodPt: '',
    type: 'Certification',
    typePt: 'Certificação',
    icon: '📋',
    color: '#27ae60',
  },
]

const { locale } = useI18n()

// Função para obter o título baseado no idioma
const getTitle = (item: EducationItem): string => {
  return locale.value === 'pt' && item.titlePt ? item.titlePt : item.title
}

// Função para obter o período baseado no idioma
const getPeriod = (item: EducationItem): string => {
  return locale.value === 'pt' ? item.periodPt : item.period
}

// Função para obter o tipo baseado no idioma
const getType = (item: EducationItem): string => {
  return locale.value === 'pt' ? item.typePt : item.type
}
</script>

<template>
  <div class="education-view">
    <div class="container">
      <!-- Header -->
      <header class="education-header">
        <h1>{{ t('education.title') }}</h1>
        <p class="subtitle">{{ t('education.subtitle') }}</p>
      </header>

      <!-- Education Timeline -->
      <div class="education-timeline">
        <div
          v-for="(item, index) in educationItems"
          :key="item.key"
          class="timeline-item"
          :class="{ 'timeline-item-reverse': index % 2 === 1 }"
        >
          <div class="timeline-marker" :style="{ backgroundColor: item.color }">
            <span class="timeline-icon">{{ item.icon }}</span>
          </div>

          <div class="timeline-content">
            <div class="education-card" :style="{ borderLeftColor: item.color }">
              <div class="card-header">
                <h3 class="education-title">{{ getTitle(item) }}</h3>
                <span class="education-type" :style="{ backgroundColor: item.color }">
                  {{ getType(item) }}
                </span>
              </div>

              <div class="education-details">
                <div class="institution">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
                    />
                  </svg>
                  <span>{{ item.institution }}</span>
                </div>

                <div v-if="getPeriod(item)" class="period">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
                    />
                  </svg>
                  <span>{{ getPeriod(item) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-view {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 0;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

.education-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.education-header h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin: 0;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  margin: 1rem 0 0;
  opacity: 0.9;
  font-weight: 300;
}

.education-timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
}

.education-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #3498db, #9b59b6, #e74c3c, #27ae60);
  transform: translateX(-50%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin: 3rem 0;
  display: flex;
  align-items: center;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 4px solid white;
}

.timeline-icon {
  font-size: 1.5rem;
}

.timeline-content {
  width: calc(50% - 40px);
  padding: 0 2rem;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-left: auto;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-right: auto;
}

.education-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  transition: all 0.3s ease;
  position: relative;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.education-title {
  color: #333;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  margin: 0;
  font-weight: 600;
  line-height: 1.3;
  flex: 1;
}

.education-type {
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.education-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.institution,
.period {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.95rem;
}

.institution svg,
.period svg {
  color: #007acc;
  flex-shrink: 0;
}

.institution span,
.period span {
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .education-view {
    padding: 1rem 0;
  }

  .education-header {
    margin-bottom: 2rem;
  }

  .education-timeline::before {
    left: 30px;
  }

  .timeline-item {
    margin: 2rem 0;
    flex-direction: column;
    align-items: flex-start;
  }

  .timeline-marker {
    left: 30px;
    width: 50px;
    height: 50px;
  }

  .timeline-icon {
    font-size: 1.2rem;
  }

  .timeline-content {
    width: calc(100% - 80px);
    margin-left: 80px !important;
    margin-right: 0 !important;
    padding: 0 1rem;
  }

  .education-card {
    padding: 1.5rem;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .education-type {
    align-self: flex-start;
  }
}

@media (min-width: 576px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}

@media (min-width: 992px) {
  .container {
    padding: 0 2.5rem;
  }
}

@media (min-width: 1200px) {
  .container {
    padding: 0 3rem;
  }
}
</style>
