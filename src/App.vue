<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useSpeechRecognition } from './composables/useSpeechRecognition'

const { t, locale } = useI18n()

// Configuração do reconhecimento de voz
const {
  isListening,
  isSupported,
  transcript,
  error,
  startListening,
  stopListening,
  processCommand,
} = useSpeechRecognition()

// Estados para feedback visual
const voiceMessage = ref('')
const showVoiceMessage = ref(false)

const changeLanguage = (lang: string) => {
  locale.value = lang
}

// Função para mostrar mensagem temporária
const showTemporaryMessage = (message: string, duration: number = 3000) => {
  voiceMessage.value = message
  showVoiceMessage.value = true
  setTimeout(() => {
    showVoiceMessage.value = false
  }, duration)
}

// Função para iniciar comando de voz
const toggleVoiceCommand = () => {
  if (!isSupported.value) {
    showTemporaryMessage(t('voice.notSupported'))
    return
  }

  if (isListening.value) {
    stopListening()
  } else {
    // Definir idioma do reconhecimento baseado no idioma atual
    const recognitionLang = locale.value === 'pt' ? 'pt-PT' : 'en-US'
    startListening(recognitionLang)
    showTemporaryMessage(t('voice.help'), 5000)
  }
}

// Observar mudanças no transcript para processar comandos
watch(transcript, (newTranscript) => {
  if (newTranscript) {
    console.log('Processando comando:', newTranscript)
    const result = processCommand(newTranscript, locale.value, changeLanguage)

    if (result.success) {
      showTemporaryMessage(result.message, 2000)
    } else {
      showTemporaryMessage(t('voice.commandNotRecognized'), 2000)
    }
  }
})

// Observar erros do reconhecimento
watch(error, (newError) => {
  if (newError) {
    showTemporaryMessage(t('voice.error'), 2000)
  }
})

// Funcionalidade de atalho de teclado
const handleKeyDown = (event: KeyboardEvent) => {
  // Ctrl + M para ativar/desativar comando de voz
  if (event.ctrlKey && event.key.toLowerCase() === 'm') {
    event.preventDefault()
    toggleVoiceCommand()
  }
}

// Adicionar e remover event listeners
onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <h1>João Isabel</h1>
        <div class="nav-links">
          <RouterLink to="/">{{ t('nav.home') }}</RouterLink>
          <RouterLink to="/experience">{{ t('nav.experience') }}</RouterLink>
          <RouterLink to="/about">{{ t('nav.about') }}</RouterLink>
          <RouterLink to="/skills">{{ t('nav.skills') }}</RouterLink>
          <RouterLink to="/education">{{ t('nav.education') }}</RouterLink>
          <div class="controls">
            <!-- Botão de comandos de voz -->
            <button
              v-if="isSupported"
              @click="toggleVoiceCommand"
              :class="{ listening: isListening }"
              class="voice-btn"
              :title="`${t('voice.button')} (Ctrl+M)`"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 14c1.66 0 3-1.34 3-3l.02-6c0-1.66-1.34-3-3.02-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
                />
              </svg>
              <span class="voice-text">{{
                isListening ? t('voice.listening') : t('voice.button')
              }}</span>
              <span class="keyboard-shortcut">Ctrl+M</span>
            </button>

            <div class="language-selector">
              <span class="language-label">{{ t('common.language') }}:</span>
              <button
                @click="changeLanguage('pt')"
                :class="{ active: locale === 'pt' }"
                class="lang-btn"
              >
                PT
              </button>
              <button
                @click="changeLanguage('en')"
                :class="{ active: locale === 'en' }"
                class="lang-btn"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Mensagem de feedback dos comandos de voz -->
    <div v-if="showVoiceMessage" class="voice-message">
      {{ voiceMessage }}
    </div>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Global styles for responsive layout */
* {
  box-sizing: border-box;
}

html {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  width: 100% !important;
  max-width: none !important;
}

/* Container utility class for consistent centering */
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
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

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

header {
  background: #007acc;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav h1 {
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  margin: 0;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: clamp(1rem, 3vw, 2rem);
  align-items: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  transition: all 0.3s ease;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #cce7ff;
  background-color: rgba(255, 255, 255, 0.1);
}

main {
  flex: 1;
  background: #f8fafc;
  width: 100%;
}

/* Mobile and tablet responsive design */
@media (max-width: 480px) {
  nav {
    padding: 0 0.75rem;
  }

  .nav-links {
    gap: 0.75rem;
  }

  .nav-links a {
    padding: 0.4rem 0.6rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 640px) {
  nav {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 1rem;
  }

  header {
    padding: 0.75rem 0;
  }
}

@media (min-width: 576px) {
  nav {
    padding: 0 1.5rem;
  }
}

@media (min-width: 768px) {
  nav {
    padding: 0 2rem;
  }
}

@media (min-width: 992px) {
  nav {
    padding: 0 2.5rem;
  }
}

@media (min-width: 1200px) {
  nav {
    padding: 0 3rem;
  }
}

/* Controls container */
.controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Voice command button */
.voice-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.voice-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-1px);
}

.voice-btn.listening {
  background: #ff6b6b;
  border-color: #ff5252;
  animation: pulse 1.5s infinite;
}

.voice-btn svg {
  flex-shrink: 0;
}

.voice-text {
  white-space: nowrap;
}

.keyboard-shortcut {
  font-size: 0.7rem;
  opacity: 0.7;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  margin-left: 0.25rem;
  font-family: monospace;
  white-space: nowrap;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

/* Voice message feedback */
.voice-message {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: #007acc;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  font-size: 0.9rem;
  font-weight: 500;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* Language selector styles */
.language-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}

.language-label {
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.lang-btn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.lang-btn.active {
  background: white;
  color: #007acc;
  border-color: white;
}

@media (max-width: 640px) {
  .controls {
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .voice-btn {
    padding: 0.4rem 0.6rem;
    font-size: 0.85rem;
  }

  .voice-text {
    display: none;
  }

  .keyboard-shortcut {
    display: none;
  }

  .language-selector {
    padding-left: 0;
    border-left: none;
  }

  .voice-message {
    top: 120px;
    left: 1rem;
    right: 1rem;
    transform: none;
    text-align: center;
  }
}
</style>
