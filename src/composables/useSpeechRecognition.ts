import { ref, onUnmounted } from 'vue'

// Tipos para o reconhecimento de voz
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult
  length: number
}

interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative
  length: number
}

interface SpeechRecognitionAlternative {
  transcript: string
  confidence: number
}

interface SpeechRecognitionInterface {
  continuous: boolean
  interimResults: boolean
  lang: string
  maxAlternatives: number
  start(): void
  stop(): void
  onstart: (() => void) | null
  onresult: ((event: SpeechRecognitionEvent) => void) | null
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null
  onend: (() => void) | null
}

export function useSpeechRecognition() {
  const isListening = ref(false)
  const isSupported = ref(false)
  const transcript = ref('')
  const error = ref('')

  let recognition: SpeechRecognitionInterface | null = null

  // Verificar se o navegador suporta reconhecimento de voz
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    isSupported.value = true
    try {
      const globalWindow = window as {
        SpeechRecognition?: new () => SpeechRecognitionInterface
        webkitSpeechRecognition?: new () => SpeechRecognitionInterface
      }
      const SpeechRecognition =
        globalWindow.SpeechRecognition || globalWindow.webkitSpeechRecognition
      if (SpeechRecognition) {
        recognition = new SpeechRecognition()
      }
    } catch (e) {
      console.error('Erro ao inicializar reconhecimento de voz:', e)
    }

    if (recognition) {
      // Configurações do reconhecimento
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = 'pt-PT' // Português por padrão, mas vamos alternar
      recognition.maxAlternatives = 1

      recognition.onstart = () => {
        isListening.value = true
        error.value = ''
      }

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const result = event.results[0][0].transcript.toLowerCase().trim()
        transcript.value = result
        console.log('Comando ouvido:', result)
      }

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        error.value = event.error
        isListening.value = false
        console.error('Erro no reconhecimento de voz:', event.error)
      }

      recognition.onend = () => {
        isListening.value = false
      }
    }
  }

  const startListening = (language: string = 'pt-PT') => {
    if (!recognition || !isSupported.value) {
      error.value = 'Reconhecimento de voz não suportado'
      return
    }

    if (isListening.value) {
      stopListening()
      return
    }

    // Definir idioma do reconhecimento
    recognition.lang = language
    transcript.value = ''
    error.value = ''

    try {
      recognition.start()
    } catch (err) {
      error.value = 'Erro ao iniciar reconhecimento'
      console.error(err)
    }
  }

  const stopListening = () => {
    if (recognition && isListening.value) {
      recognition.stop()
    }
  }

  // Processar comandos específicos
  const processCommand = (
    command: string,
    currentLocale: string,
    changeLocale: (locale: string) => void,
  ) => {
    const normalizedCommand = command.toLowerCase().trim()

    // Comandos em português
    const portugueseCommands = [
      'português',
      'portugues',
      'pt',
      'muda para português',
      'mudar português',
      'idioma português',
      'lingua portuguesa',
    ]

    // Comandos em inglês
    const englishCommands = [
      'english',
      'inglês',
      'ingles',
      'en',
      'change to english',
      'switch to english',
      'english language',
      'idioma inglês',
      'lingua inglesa',
    ]

    // Verificar se é comando para português
    if (portugueseCommands.some((cmd) => normalizedCommand.includes(cmd))) {
      if (currentLocale !== 'pt') {
        changeLocale('pt')
        return { success: true, message: 'Idioma alterado para português' }
      }
      return { success: false, message: 'Já está em português' }
    }

    // Verificar se é comando para inglês
    if (englishCommands.some((cmd) => normalizedCommand.includes(cmd))) {
      if (currentLocale !== 'en') {
        changeLocale('en')
        return { success: true, message: 'Language changed to English' }
      }
      return { success: false, message: 'Already in English' }
    }

    // Comandos genéricos de trocar idioma
    const toggleCommands = [
      'mudar idioma',
      'trocar idioma',
      'change language',
      'switch language',
      'alternar idioma',
      'toggle language',
    ]

    if (toggleCommands.some((cmd) => normalizedCommand.includes(cmd))) {
      const newLocale = currentLocale === 'pt' ? 'en' : 'pt'
      changeLocale(newLocale)
      const message =
        newLocale === 'pt' ? 'Idioma alterado para português' : 'Language changed to English'
      return { success: true, message }
    }

    return { success: false, message: 'Comando não reconhecido' }
  }

  // Limpar recursos quando o componente for desmontado
  onUnmounted(() => {
    if (recognition) {
      recognition.stop()
      recognition = null
    }
  })

  return {
    isListening,
    isSupported,
    transcript,
    error,
    startListening,
    stopListening,
    processCommand,
  }
}
