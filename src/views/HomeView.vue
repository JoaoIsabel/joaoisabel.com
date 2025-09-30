<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>{{ t('home.title') }}</h1>
        <p class="hero-subtitle">
          {{ t('home.subtitle') }}
        </p>
        <RouterLink to="/experience" class="cta-button">{{ t('home.cta') }}</RouterLink>
      </div>
    </section>

    <section class="intro">
      <div class="container">
        <h2>{{ t('home.intro.title') }}</h2>
        <p>
          {{ t('home.intro.description') }}
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  min-height: calc(100vh - 80px);
}

.hero {
  background: linear-gradient(135deg, #007acc 0%, #005a9e 100%);
  color: white;
  padding: clamp(2rem, 8vw, 8rem) clamp(1rem, 3vw, 3rem);
  text-align: center;
  width: 100%;
}

.hero-content {
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 4rem);
}

.hero h1 {
  font-size: clamp(1.8rem, 6vw, 4.5rem);
  margin-bottom: clamp(1rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(1rem, 3vw, 1.8rem);
  margin-bottom: clamp(1.5rem, 4vw, 3rem);
  opacity: 0.95;
  line-height: 1.5;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-block;
  background: white;
  color: #007acc;
  padding: clamp(0.8rem, 2vw, 1.5rem) clamp(1.5rem, 4vw, 3rem);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: clamp(0.95rem, 2.5vw, 1.3rem);
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  background: #f8fafc;
}

.intro {
  padding: clamp(3rem, 8vw, 8rem) 0;
  background: white;
  width: 100%;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 4rem);
  text-align: center;
}

.intro h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #2d3748;
  margin-bottom: clamp(1rem, 3vw, 2.5rem);
  font-weight: 700;
}

.intro p {
  font-size: clamp(1rem, 2.5vw, 1.6rem);
  color: #4a5568;
  line-height: 1.7;
  width: 100%;
  margin: 0 auto;
}

/* Breakpoints específicos para melhor controle */
@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }

  .cta-button {
    width: 100%;
    max-width: 280px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

@media (min-width: 1025px) {
  .container {
    padding: 0 2.5rem;
  }
}

/* Melhorias para dispositivos touch */
@media (hover: none) {
  .cta-button:hover {
    transform: none;
  }

  .cta-button:active {
    transform: scale(0.98);
  }
}
</style>
