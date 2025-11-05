<template>
  <section id="contact" class="py-16 md:py-24 px-6 max-w-400 mx-auto">
    <div class="px-0 md:px-8 lg:px-12">
      <div class="text-center mb-6 md:mb-16 animate-slide-up">
        <h2 class="text-2xl md:text-3xl text-horjunBlue font-bold font-[horjunfontbold]  mb-4 md:mb-6">
          {{ $t('contact.title') }}
        </h2>
      </div>

      <div class="animate-slide-up">
        <div class="space-y-3 md:space-y-8 grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          <div class="flex items-start justify-start lg:justify-center space-x-4 pt-4  rounded-xl   duration-300">
            <div class="shrink-0">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center">
                <PhoneIcon class="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold  mb-2">{{ $t('contact.phone') }}</h3>
              <p>+993 61 48 48 40</p>
              <p>+993 63 55 61 56</p>
            </div>
          </div>

          <div class="flex items-start justify-start lg:justify-center space-x-4 pt-4  rounded-xl duration-300">
            <div class="shrink-0">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center">
                <EnvelopeIcon class="h-6 w-6 " />
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold  mb-2">{{ $t('contact.email') }}</h3>
              <p>info@sanlyhorjun.tm</p>
            </div>
          </div>

          <div class="flex items-start justify-start lg:justify-center space-x-4 pt-4 rounded-xl duration-300">
            <div class="shrink-0">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center">
                <MapPinIcon class="h-6 w-6 " />
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold  mb-2">{{ $t('contact.address') }}</h3>
              <p>
                {{ $t('contact.location') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline'
  useI18n()
</script>