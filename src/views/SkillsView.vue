<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Configuração dos logotipos das tecnologias
const techLogos: Record<string, string> = {
  JavaScript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Redux.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  GitLab: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
  Postman: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  Jira: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  Trello: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
  Excel:
    'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg',
  Primavera: 'https://www.primaverasystems.com/wp-content/uploads/2020/06/primavera-logo.png',
  PHC: 'https://www.phcsoftware.com/wp-content/uploads/2020/06/phc-logo.png',
}

// Definir as tecnologias diretamente para evitar problemas com i18n
const skillCategories = {
  frontend: ['JavaScript', 'HTML', 'CSS', 'React.js', 'Vue.js', 'Redux.js'],
  backend: ['Node.js', 'Express.js', 'SQL', 'MySQL'],
  tools: ['Git', 'GitHub', 'GitLab', 'Postman', 'Jira', 'Trello'],
  business: ['Primavera', 'PHC', 'Excel'],
}

// Função para obter as tecnologias de uma categoria
const getTechnologies = (category: keyof typeof skillCategories): string[] => {
  return skillCategories[category] || []
}

// Função para obter URL do logotipo
const getLogoUrl = (tech: string): string => {
  return techLogos[tech] || `https://via.placeholder.com/64x64/007acc/ffffff?text=${tech.charAt(0)}`
}
</script>

<template>
  <div class="skills-view">
    <div class="container">
      <!-- Header -->
      <header class="skills-header">
        <h1>{{ t('skills.title') }}</h1>
        <p class="subtitle">{{ t('skills.subtitle') }}</p>
      </header>

      <!-- Skills Grid -->
      <div class="skills-grid">
        <!-- Frontend -->
        <section class="skill-category">
          <h2>{{ t('skills.categories.frontend.title') }}</h2>
          <div class="tech-grid">
            <div v-for="tech in getTechnologies('frontend')" :key="tech" class="tech-item">
              <div class="tech-logo">
                <img :src="getLogoUrl(tech)" :alt="tech" />
              </div>
              <span class="tech-name">{{ tech }}</span>
            </div>
          </div>
        </section>

        <!-- Backend & Database -->
        <section class="skill-category">
          <h2>{{ t('skills.categories.backend.title') }}</h2>
          <div class="tech-grid">
            <div v-for="tech in getTechnologies('backend')" :key="tech" class="tech-item">
              <div class="tech-logo">
                <img :src="getLogoUrl(tech)" :alt="tech" />
              </div>
              <span class="tech-name">{{ tech }}</span>
            </div>
          </div>
        </section>

        <!-- Tools & Platforms -->
        <section class="skill-category">
          <h2>{{ t('skills.categories.tools.title') }}</h2>
          <div class="tech-grid">
            <div v-for="tech in getTechnologies('tools')" :key="tech" class="tech-item">
              <div class="tech-logo">
                <img :src="getLogoUrl(tech)" :alt="tech" />
              </div>
              <span class="tech-name">{{ tech }}</span>
            </div>
          </div>
        </section>

        <!-- Business Software -->
        <section class="skill-category">
          <h2>{{ t('skills.categories.business.title') }}</h2>
          <div class="tech-grid">
            <div v-for="tech in getTechnologies('business')" :key="tech" class="tech-item">
              <div class="tech-logo">
                <img :src="getLogoUrl(tech)" :alt="tech" />
              </div>
              <span class="tech-name">{{ tech }}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-view {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 0;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

.skills-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.skills-header h1 {
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-category {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.skill-category h2 {
  color: #333;
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  margin: 0 0 1.5rem;
  font-weight: 600;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #007acc;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(248, 250, 252, 0.8);
  transition: all 0.3s ease;
  cursor: pointer;
}

.tech-item:hover {
  background: rgba(0, 122, 204, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 122, 204, 0.2);
}

.tech-logo {
  width: 64px;
  height: 64px;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 8px;
}

.tech-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

.tech-name {
  font-size: clamp(0.8rem, 2vw, 0.95rem);
  font-weight: 600;
  color: #333;
  line-height: 1.2;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .skills-view {
    padding: 1rem 0;
  }

  .skills-header {
    margin-bottom: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skill-category {
    padding: 1.5rem;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }

  .tech-item {
    padding: 0.75rem;
  }

  .tech-logo {
    width: 48px;
    height: 48px;
    margin-bottom: 0.5rem;
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
