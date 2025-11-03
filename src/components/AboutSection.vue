<template>
  <section id="about" class="pt-16 md:pt-24 pb-3 px-6">
    <div class="px-4 md:px-8 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <!-- Content -->
        <div class="animate-slide-up">
          <h2 class="text-center lg:text-start text-2xl md:text-3xl lg:text-4xl text-horjunBlue font-bold font-[horjunfontbold] mb-6 md:mb-8">
            {{ $t('about.title') }}
          </h2>
          <p class="text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
            {{ $t('about.description') }}
          </p>
          
          <div class="rounded-xl p-6 md:p-8 border-l-4 ">
            <h3 class="text-xl md:text-2xl font-semibold mb-4 flex items-center">
              <span class="w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <span class="font-bold">★</span>
              </span>
              {{ $t('about.mission') }}
            </h3>
            <p class="leading-relaxed italic">
              "{{ $t('about.missionText') }}"
            </p>
          </div>
        </div>

        <!-- Visual -->
        <div class="animate-slide-up" style="animation-delay: 0.2s;">
          <div class="relative">
            <img 
              src="../assets/img/about.webp"
              alt="About Sanly Horjun"
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

useI18n()
</script>