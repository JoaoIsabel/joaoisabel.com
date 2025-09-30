<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Helper function to get skills as array
const getSkills = (jobKey: string) => {
  const skills = t(`experience.jobs.${jobKey}.skills`)
  return Array.isArray(skills) ? skills : []
}
</script>

<template>
  <div class="experience-page">
    <section class="experience">
      <h2>{{ t('experience.title') }}</h2>
      <p class="intro">{{ t('experience.subtitle') }}</p>

      <article class="experience-item">
        <h3>{{ t('experience.jobs.worten.title') }}</h3>
        <p class="company">{{ t('experience.jobs.worten.company') }}</p>
        <p class="period">{{ t('experience.jobs.worten.period') }}</p>
        <p class="description">
          {{ t('experience.jobs.worten.description') }}
        </p>
        <ul class="skills">
          <li v-for="skill in getSkills('worten')" :key="skill">{{ skill }}</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>{{ t('experience.jobs.ja.title') }}</h3>
        <p class="company">{{ t('experience.jobs.ja.company') }}</p>
        <p class="period">{{ t('experience.jobs.ja.period') }}</p>
        <p class="description">
          {{ t('experience.jobs.ja.description') }}
        </p>
        <ul class="skills">
          <li v-for="skill in getSkills('ja')" :key="skill">{{ skill }}</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>{{ t('experience.jobs.sheerme.title') }}</h3>
        <p class="company">{{ t('experience.jobs.sheerme.company') }}</p>
        <p class="period">{{ t('experience.jobs.sheerme.period') }}</p>
        <p class="description">
          {{ t('experience.jobs.sheerme.description') }}
        </p>
        <ul class="skills">
          <li v-for="skill in getSkills('sheerme')" :key="skill">{{ skill }}</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>{{ t('experience.jobs.portugalRoots.title') }}</h3>
        <p class="company">{{ t('experience.jobs.portugalRoots.company') }}</p>
        <p class="period">{{ t('experience.jobs.portugalRoots.period') }}</p>
        <p class="description">
          {{ t('experience.jobs.portugalRoots.description') }}
        </p>
        <ul class="skills">
          <li v-for="skill in getSkills('portugalRoots')" :key="skill">{{ skill }}</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>{{ t('experience.jobs.finantia.title') }}</h3>
        <p class="company">{{ t('experience.jobs.finantia.company') }}</p>
        <p class="period">{{ t('experience.jobs.finantia.period') }}</p>
        <p class="description">
          {{ t('experience.jobs.finantia.description') }}
        </p>
        <ul class="skills">
          <li v-for="skill in getSkills('finantia')" :key="skill">{{ skill }}</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>{{ t('experience.jobs.neodent.title') }}</h3>
        <p class="company">{{ t('experience.jobs.neodent.company') }}</p>
        <p class="period">{{ t('experience.jobs.neodent.period') }}</p>
        <p class="description">
          {{ t('experience.jobs.neodent.description') }}
        </p>
        <ul class="skills">
          <li v-for="skill in getSkills('neodent')" :key="skill">{{ skill }}</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>{{ t('experience.jobs.segurihigiene.title') }}</h3>
        <p class="company">{{ t('experience.jobs.segurihigiene.company') }}</p>
        <p class="period">{{ t('experience.jobs.segurihigiene.period') }}</p>
        <p class="description">
          {{ t('experience.jobs.segurihigiene.description') }}
        </p>
        <ul class="skills">
          <li v-for="skill in getSkills('segurihigiene')" :key="skill">{{ skill }}</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>{{ t('experience.jobs.phoneHouse.title') }}</h3>
        <p class="company">{{ t('experience.jobs.phoneHouse.company') }}</p>
        <p class="period">{{ t('experience.jobs.phoneHouse.period') }}</p>
        <p class="description">
          {{ t('experience.jobs.phoneHouse.description') }}
        </p>
        <ul class="skills">
          <li v-for="skill in getSkills('phoneHouse')" :key="skill">{{ skill }}</li>
        </ul>
      </article>

      <article class="experience-item">
        <h3>{{ t('experience.jobs.nielsen.title') }}</h3>
        <p class="company">{{ t('experience.jobs.nielsen.company') }}</p>
        <p class="period">{{ t('experience.jobs.nielsen.period') }}</p>
        <p class="description">
          {{ t('experience.jobs.nielsen.description') }}
        </p>
        <ul class="skills">
          <li v-for="skill in getSkills('nielsen')" :key="skill">{{ skill }}</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<style scoped>
/* Experience page styles - Mobile First & Responsive */
.experience-page {
  background: linear-gradient(to bottom, #f8fafc 0%, white 100%);
  min-height: calc(100vh - 80px);
  width: 100%;
}

.experience {
  width: 100%;
  margin: 0 auto;
  padding: clamp(1rem, 4vw, 5rem) clamp(1rem, 5vw, 4rem);
}

.experience h2 {
  font-size: clamp(2rem, 6vw, 4rem);
  color: #2d3748;
  margin-bottom: clamp(0.75rem, 2vw, 2rem);
  text-align: center;
  font-weight: 700;
  line-height: 1.2;
}

.intro {
  font-size: clamp(1rem, 3vw, 1.8rem);
  color: #4a5568;
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 5rem);
  line-height: 1.6;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.experience-item {
  background: white;
  border-radius: clamp(8px, 2vw, 20px);
  padding: clamp(1.25rem, 4vw, 3.5rem);
  margin-bottom: clamp(1.5rem, 3vw, 3rem);
  box-shadow: 0 4px 20px rgba(0, 122, 204, 0.08);
  border-left: clamp(3px, 1vw, 6px) solid #007acc;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 122, 204, 0.1);
  position: relative;
  overflow: hidden;
}

.experience-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #007acc, #38b2ac);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.experience-item:hover::before {
  transform: scaleX(1);
}

.experience-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 122, 204, 0.15);
  border-color: rgba(0, 122, 204, 0.2);
}

.experience-item h3 {
  font-size: clamp(1.2rem, 3.5vw, 2rem);
  color: #007acc;
  margin-bottom: clamp(0.5rem, 1.5vw, 1rem);
  font-weight: 700;
  line-height: 1.3;
}

.company {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: #2d3748;
  margin-bottom: clamp(0.4rem, 1vw, 0.8rem);
  line-height: 1.4;
}

.period {
  font-size: clamp(0.85rem, 2vw, 1.2rem);
  color: #718096;
  margin-bottom: clamp(1rem, 2.5vw, 1.8rem);
  font-style: italic;
  font-weight: 500;
}

.description {
  font-size: clamp(0.95rem, 2.2vw, 1.4rem);
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: clamp(1.25rem, 3vw, 2.5rem);
  text-align: justify;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.4rem, 1vw, 0.8rem);
  list-style: none;
  padding: 0;
  margin: 0;
}

.skills li {
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  color: #007acc;
  padding: clamp(0.4rem, 1vw, 0.8rem) clamp(0.8rem, 2vw, 1.6rem);
  border-radius: clamp(15px, 3vw, 25px);
  font-size: clamp(0.8rem, 2vw, 1.1rem);
  border: 1px solid rgba(0, 122, 204, 0.3);
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: default;
}

.skills li:hover {
  background: linear-gradient(135deg, #007acc 0%, #0056b3 100%);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 122, 204, 0.3);
}

/* Breakpoints específicos para melhor controle */
@media (max-width: 480px) {
  .experience {
    padding: 1rem 0.75rem;
  }

  .experience-item {
    margin-bottom: 1.25rem;
  }

  .skills li {
    flex: 1;
    min-width: calc(50% - 0.2rem);
    text-align: center;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .experience {
    padding: 1.5rem 1rem;
  }

  .skills li {
    min-width: auto;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .experience {
    padding: 2rem 1.5rem;
  }
}

@media (min-width: 1025px) {
  .experience {
    padding: 3rem 2rem;
  }
}

/* Melhorias para dispositivos touch */
@media (hover: none) {
  .experience-item:hover {
    transform: none;
    box-shadow: 0 4px 20px rgba(0, 122, 204, 0.08);
  }

  .skills li:hover {
    background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
    color: #007acc;
    transform: none;
    box-shadow: none;
  }
}

/* Melhorias para acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .experience-item,
  .skills li,
  .experience-item::before {
    transition: none;
  }

  .experience-item:hover {
    transform: none;
  }

  .skills li:hover {
    transform: none;
  }
}

/* Modo escuro - preparação futura */
@media (prefers-color-scheme: dark) {
  .experience-page {
    background: linear-gradient(to bottom, #1a202c 0%, #2d3748 100%);
  }

  .experience h2 {
    color: #f7fafc;
  }

  .intro {
    color: #e2e8f0;
  }

  .experience-item {
    background: #2d3748;
    border-color: #4a5568;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .company {
    color: #f7fafc;
  }

  .description {
    color: #e2e8f0;
  }
}
</style>
