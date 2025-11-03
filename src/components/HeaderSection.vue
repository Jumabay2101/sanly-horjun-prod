<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Language } from '../types/index'

const { t, locale } = useI18n()
const isMenuOpen = ref(false)

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'tk', name: 'Türkmençe', flag: '🇹🇲' }
]

const activeLink = ref('')

// Update active link when clicked
const setActiveLink = (link: string) => {
  activeLink.value = link
}

// Typewriter class
class TxtType {
  private toRotate: string[];
  private el: HTMLElement;
  private loopNum: number;
  private period: number;
  private txt: string;
  private isDeleting: boolean;
  private timeout?: number;

  constructor(el: HTMLElement, toRotate: string[], period: string | null) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period || '2000', 10)
    this.txt = ''
    this.isDeleting = false
    this.tick()
  }

  private tick(): void {
    const i = this.loopNum % this.toRotate.length
    const fullTxt = this.toRotate[i] as any

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`

    let delta = 200 - Math.random() * 100
    if (this.isDeleting) delta /= 2

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    this.timeout = window.setTimeout(() => this.tick(), delta)
  }

  public destroy() {
    if (this.timeout) clearTimeout(this.timeout)
  }
}

// Track typewriter instances
let typewriterInstances: TxtType[] = []

const initTypewriter = () => {
  // Destroy existing instances
  typewriterInstances.forEach(instance => instance.destroy())
  typewriterInstances = []

  const elements = document.getElementsByClassName("typewrite") as HTMLCollectionOf<HTMLElement> as any
  for (let i = 0; i < elements.length; i++) {
    const period = elements[i].getAttribute("data-period")
    elements[i].innerHTML = '<span class="wrap"></span>' // Reset text
    const toRotate = [t('hero.title')]
    typewriterInstances.push(new TxtType(elements[i], toRotate, period))
  }

  // Inject CSS once
  if (!document.getElementById('typewrite-css')) {
    const css = document.createElement("style")
    css.type = "text/css"
    css.id = 'typewrite-css'
    css.innerHTML = `.typewrite > .wrap { border-right: 0.08em solid #4562d7 }`
    document.body.appendChild(css)
  }
}

// Reactive locale
const currentLocale = computed({
  get: () => locale.value,
  set: (value) => {
    locale.value = value
    localStorage.setItem('sanly-locale', value)
    initTypewriter()
  }
})

onMounted(() => {
  locale.value = localStorage.getItem('sanly-locale') || 'tk'
  initTypewriter()
  activeLink.value = window.location.hash || ''
})
</script>

<template>
<header class="bg-[#f5f5f5] border-b border-gray-300 px-4 md:px-12 shadow-md fixed w-full top-0 left-0 z-30">
  <nav class="flex items-center justify-between px-4 py-4">
    <!-- Logo -->
    <div class="flex items-center">
      <a href="/">
        <h1 class="text-2xl font-bold text-[#4E6EF1] font-[horjunfontbold]">
          Sanly Horjun
        </h1>
      </a>
    </div>

    <div class="flex items-center gap-8">
      <!-- Desktop Navigation -->
      <div class="hidden xlg:flex items-center gap-8">
        <a href="#about" @click="setActiveLink('#about')"
           :class="[
             'transition-colors duration-300',
             activeLink === '#about' ? 'text-[#4E6EF1]' : 'hover:text-[#4E6EF1] text-[#313450]'
           ]">
          {{ $t('nav.about') }}
        </a>
        <a href="#services" @click="setActiveLink('#services')"
           :class="[
             'transition-colors duration-300',
             activeLink === '#services' ? 'text-[#4E6EF1]' : 'hover:text-[#4E6EF1] text-[#313450]'
           ]">
          {{ $t('nav.services') }}
        </a>
        <a href="#works" @click="setActiveLink('#works')"
           :class="[
             'transition-colors duration-300',
             activeLink === '#works' ? 'text-[#4E6EF1]' : 'hover:text-[#4E6EF1] text-[#313450]'
           ]">
          {{ $t('nav.works') }}
        </a>
        <a href="#contact" @click="setActiveLink('#contact')"
           :class="[
             'transition-colors duration-300',
             activeLink === '#contact' ? 'text-[#4E6EF1]' : 'hover:text-[#4E6EF1] text-[#313450]'
           ]">
          {{ $t('nav.contact') }}
        </a>
      </div>

      <!-- Right Side -->
      <div class="flex items-center gap-4">
        <!-- Language Switcher -->
        <div class="flex items-center space-x-2">
          <select v-model="currentLocale" class="cursor-pointer rounded px-2 py-1 outline outline-[#4E6EF1]" aria-label="Select language">
            <option v-for="lang in languages" :key="lang.code" :value="lang.code" >
              {{ lang.flag }}
            </option>
          </select>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="xlg:hidden flex flex-col justify-between w-6 h-5 focus:outline-none cursor-pointer">
          <span :class="['block h-0.5 bg-[#313450] transition-all duration-300', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
          <span :class="['block h-0.5 bg-[#313450] transition-all duration-300', isMenuOpen ? 'opacity-0' : '']"></span>
          <span :class="['block h-0.5 bg-[#313450] transition-all duration-300', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <transition name="fade">
    <div class="xlg:hidden bg-[#f5f5f5] px-6 py-4 flex flex-col gap-4"
         :class="isMenuOpen ? 'block transition-all duration-900' : 'hidden duration-300'">
      <a href="#about" @click="setActiveLink('#about'); isMenuOpen = false"
         :class="[ 'transition-colors duration-300', activeLink === '#about' ? 'text-[#4E6EF1]' : 'hover:text-[#4E6EF1] text-[#313450]' ]">
        {{ $t('nav.about') }}
      </a>
      <a href="#services" @click="setActiveLink('#services'); isMenuOpen = false"
         :class="[ 'transition-colors duration-300', activeLink === '#services' ? 'text-[#4E6EF1]' : 'hover:text-[#4E6EF1] text-[#313450]' ]">
        {{ $t('nav.services') }}
      </a>
      <a href="#works" @click="setActiveLink('#works'); isMenuOpen = false"
         :class="[ 'transition-colors duration-300', activeLink === '#works' ? 'text-[#4E6EF1]' : 'hover:text-[#4E6EF1] text-[#313450]' ]">
        {{ $t('nav.works') }}
      </a>
      <a href="#contact" @click="setActiveLink('#contact'); isMenuOpen = false"
         :class="[ 'transition-colors duration-300', activeLink === '#contact' ? 'text-[#4E6EF1]' : 'hover:text-[#4E6EF1] text-[#313450]' ]">
        {{ $t('nav.contact') }}
      </a>
    </div>
  </transition>
</header>

<div class="w-full mt-20 xlg:mt-14 px-16">
  <div class="flex flex-col-reverse xlg:flex-row place-items-center h-full">
    <div class="basis-[50%] items-center">
      <img src="../assets/img/hero.webp" class="w-full h-auto" />
    </div>
    <div class="basis-[50%] items-center mt-4 xlg:mt-0 min-h-[175px]">
      <h1>
        <p class="typewrite font-bold text-3xl sm:text-4xl xlg:text-3xl lg:text-4xl text-center text-horjunBlue font-[horjunfontbold] leading-tight mb-6"
           data-period="2000">
          <span class="wrap"></span>
        </p>
      </h1>
    </div>
  </div>
</div>
</template>

<style>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
}
.animate-float { animation: float 3s ease-in-out infinite; }
.toggler-icon { background: #313450; }
</style>
