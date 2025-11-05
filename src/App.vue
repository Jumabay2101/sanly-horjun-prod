<template>
    <HeaderSection />
    <AboutSection />
    <ServiceSection />
    <ContactSection />
    <FooterSection />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import HeaderSection from './components/HeaderSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import ServiceSection from './components/ServiceSection.vue'

const { t,locale } = useI18n()

import { useHead } from '@vueuse/head'

useHead({
  title: 'Sanly Horjun',
  meta: [
    { name: 'description', content: `${t('services.description')}` },
    { name: 'og:image', property: 'og:image', content: 'https://sanly.horjun.tm/favicon.png' },
    { name: 'og:type', property: 'og:type', content: 'website' },
    { name: 'og:title', property: 'og:title', content: "Sanly Horjun" },
    { name: 'og:site_name', property: 'og:site_name', content: 'Sanly Horjun' },
    { name: 'og:description', property: 'og:description', content: `${t('services.description')}` },
    { name: 'og:url', property: 'og:url', content: 'https://sanly.horjun.tm' },
    
  ],
})

onMounted(() => {
  // Load saved language preference
  const savedLocale = localStorage.getItem('sanly-locale')
  if (savedLocale) {
    locale.value = savedLocale
  }
  // Update document title and meta
  document.title = `Sanly Horjun`
  
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', `${t('services.description')}`)
  } else {
    const meta = document.createElement('meta')
    meta.name = 'description'
    meta.content = `${t('services.description')}`
    document.head.appendChild(meta)
  }
  
  // Add structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sanly Horjun",
    "description": `${t('services.description')}`,
    "url": "https://sanly.horjun.tm",
    // "logo": "",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+993-61-48-48-40",
      "contactType": "Customer Service"
    }
  }
  
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)
})
</script>

<style>

html {
  scroll-behavior: smooth;
}

/* Animation classes */
.animate-fade-in {
  animation: fadeIn 0.6s ease-in-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out both;
}

.animate-bounce-gentle {
  animation: bounceGentle 2s infinite;
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: 2px solid #e50914;
  outline-offset: 2px;
}
</style>