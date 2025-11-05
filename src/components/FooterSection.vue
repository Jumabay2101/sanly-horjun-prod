<template>
  <footer class="border-t">
    <div class="px-4 pt-12 md:pt-16 pb-5 max-w-400 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center mb-4">
            <h3 class="text-2xl font-bold text-horjunBlue font-[horjunfontbold]">SANLY HORJUN</h3>
          </div>
          <p class=" leading-relaxed mb-2 pr-0 sm:pr-20 lg:pr-24">
            {{ $t('about.missionText') }}
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-lg mb-4 font-[horjunfontmedium]">{{ $t('footer.quickLinks') }}</h4>
          <ul class="space-y-3">
            <li>
              <a href="#about" class="hover:text-horjunBlue">
                {{ $t('nav.about') }}
              </a>
            </li>
            <li>
              <a href="#services" class="hover:text-horjunBlue">
                {{ $t('nav.services') }}
              </a>
            </li>
            <!-- <li>
              <a href="#works" class="hover:text-horjunBlue">
                {{ $t('nav.works') }}
              </a>
            </li> -->
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-lg font-semibold font-[horjunfontmedium] mb-4">{{ $t('footer.contact') }}</h4>
          <div class="space-y-2">
            <div class="flex items-center gap-4">
              <div class="w-6 h-6 rounded-lg flex items-center justify-center">
                <EnvelopeIcon class="h-6 w-6 " />
              </div>
              <div>
                <h3 class="text-base mb-1">{{ $t('contact.email') }}</h3>
                <p class="text-sm">info@sanlyhorjun.tm</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-6 h-6 rounded-lg flex items-center justify-center">
                <PhoneIcon class="h-6 w-6" />
              </div>
              <div>
                <h3 class="text-base mb-1">{{ $t('contact.phone') }}</h3>
                <p class="text-sm">+993 61 48 48 40</p>
                <p class="text-sm">+993 63 55 61 56</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-6 h-6 rounded-lg flex items-center justify-center">
                <MapPinIcon class="h-6 w-6 " />
              </div>
              <div>
                <h3 class="text-base mb-1">{{ $t('contact.address') }}</h3>
                <p class="text-sm">
                  {{ $t('contact.location') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t pt-5">
        <div class="flex flex-col md:flex-row justify-center items-center ">
          <p class="text-sm">
            {{ $t('footer.copyright') }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline'
</script>