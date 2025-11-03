<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <footer class="border-t px-6">
    <div class=" mx-auto px-4 md:px-8 lg:px-12 pt-12 md:pt-16 pb-5">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center mb-4">
            <!-- <img 
              src="https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" 
              alt="Sanly Horjun"
              class="h-10 w-10 rounded-lg mr-3"
            /> -->
            <h3 class="text-2xl font-bold text-horjunBlue font-[horjunfontbold]">Sanly Horjun</h3>
          </div>
          <p class=" leading-relaxed mb-2 pr-4 sm:pr-16 md:pr-24">
            {{ $t('about.description') }}
          </p>

        </div>

        <!-- Quick Links -->
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
            <li>
              <a href="#works" class="hover:text-horjunBlue">
                {{ $t('nav.works') }}
              </a>
            </li>
          </ul>
        </div>


        <!-- Legal -->
        <div>
          <h4 class="text-lg font-semibold font-[horjunfontmedium] mb-4">{{ $t('contact.title') }}</h4>
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
                <p class="text-sm">+993 12 34 56 78</p>
                <!-- <p class="text-sm">+993 65 43 21 09</p> -->
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-6 h-6 rounded-lg flex items-center justify-center">
                <MapPinIcon class="h-6 w-6 " />
              </div>
              <div>
                <h3 class="text-base mb-1">{{ $t('contact.address') }}</h3>
                <p class="text-sm">
                  Bitarap Türkmenistan şaýoly 10<br>
                  744000 Aşgabat, Türkmenistan
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

