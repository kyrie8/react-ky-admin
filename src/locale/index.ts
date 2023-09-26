import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enUS from './en_US.json'
import zhCN from './zh_CN.json'
const resources = {
  enUS: {
    translation: enUS
  },
  zhCN: {
    translation: zhCN
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'zhCN',
  interpolation: {
    escapeValue: false // react already safes from xss
  }
})
export default i18n
