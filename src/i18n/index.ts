import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ru from '../locales/ru.json'
import tk from '../locales/tk.json'

const messages = {
  en,
  ru,
  tk
}

const i18n = createI18n({
  legacy: false,
  locale: 'tk',
  fallbackLocale: 'tk',
  messages,
})

export default i18n