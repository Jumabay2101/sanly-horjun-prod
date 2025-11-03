<template>
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div  class="loader"></div>
    </div>

  <div v-else>
    <HeaderSection />
    <AboutSection />
    <ContactSection />
    <FooterSection />
  </div>
  </template>

<script setup lang="ts">
import { onBeforeMount, onMounted,ref } from 'vue'
import { useI18n } from 'vue-i18n'
import HeaderSection from './components/HeaderSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const { locale } = useI18n()

const isLoading = ref(true)

onBeforeMount(() => {
  // Simulate loading delay
  setTimeout(() => {
    isLoading.value = false
  }, 1200) // Adjust the delay as needed
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
    metaDescription.setAttribute('content', '«Sanly Horjun» HJ sanly ykdysadyýete geçmek üçin programma üpjünçilikleri we ýokary derejeli IT hyzmatlary ýerine ýetirýär.')
  } else {
    const meta = document.createElement('meta')
    meta.name = 'description'
    meta.content = '«Sanly Horjun» HJ sanly ykdysadyýete geçmek üçin programma üpjünçilikleri we ýokary derejeli IT hyzmatlary ýerine ýetirýär.'
    document.head.appendChild(meta)
  }
  
  // Add structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sanly Horjun",
    "description": "Sanly Horjun - hojalyk jemgyyeti",
    "url": "https://sanlyhorjun.tm",
    "logo": "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+993-12-34-56-78",
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

/* HTML: <div class="loader"></div> */
.loader {
  width: 60px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #4E6EF1;
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {to{transform: rotate(1turn)}}

/* Global styles */
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

/* Selection color */
::selection {
  background-color: #e50914;
  color: black;
}

::-moz-selection {
  background-color: #e50914;
  color: black;
}
</style>