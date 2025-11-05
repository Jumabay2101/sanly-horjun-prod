<template>
  <section id="services" class="pt-16 md:pt-24 pb-3 px-6 max-w-400 mx-auto">
    <div class="px-4 md:px-8 lg:px-12">
        <div class="text-center mb-10 md:mb-16 animate-slide-up w-full">
            <h2 class="text-2xl md:text-3xl text-horjunBlue font-bold font-[horjunfontbold] mb-6">
            {{ $t('services.title') }}
            </h2>   
            <p class="max-w-200 text-center w-full mx-auto font-[horjunfontmedium]">
                {{ $t('services.description') }}
            </p>
            <div class="">
            </div>
        </div>
      <div class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 lg:gap-6 xl:gap-13  animate-slide-up">
        <div class="group transition text-center border border-[#4e6ff13f] rounded-xl px-6 py-10">
            <div class="flex justify-center">
                <div class="bg-[#4e6ff128] group-hover:bg-[#4e6ff1] rounded-full p-4 duration-300">
                    <WebIcon class="h-8 w-8 text-horjunBlue group-hover:text-white duration-300" />
                </div>
            </div>
            <div class="flex flex-col gap-4 mt-6">
                <h1 class="font-[horjunfontmedium] text-lg">{{ $t('services.web') }}</h1>
                <p class="text-[15px]">{{ $t('services.webdesc') }}</p>
            </div>
        </div>

        <div class="group transition text-center border border-[#4e6ff13f] rounded-xl px-6 py-10">
            <div class="flex justify-center">
                <div class="bg-[#f14e4e28] group-hover:bg-[#f14e4e] rounded-full p-4 duration-300">
                    <PaintBrushIcon class="h-8 w-8 text-horjunBlue group-hover:text-white duration-300" />
                </div>
            </div>
            <div class="flex flex-col gap-4 mt-6">
                <h1 class="font-[horjunfontmedium] text-lg">{{ $t('services.design') }}</h1>
                <p class="text-[15px]">{{ $t('services.designdesc') }}</p>
            </div>
        </div>

        <div class="group transition text-center border border-[#4e6ff13f] rounded-xl px-6 py-10">
            <div class="flex justify-center">
                <div class="bg-[#4ac03a28] group-hover:bg-[#4ac03a] rounded-full p-4 duration-300">
                    <AndroidIcon class="h-8 w-8 text-horjunBlue group-hover:text-white duration-300" />
                </div>
            </div>
            <div class="flex flex-col gap-4 mt-6">
                <h1 class="font-[horjunfontmedium] text-lg">{{ $t('services.android') }}</h1>
                <p class="text-[15px]">{{ $t('services.androiddesc') }}</p>
            </div>
        </div>

        <div class="group transition text-center border border-[#4e6ff13f] rounded-xl px-6 py-10">
            <div class="flex justify-center">
                <div class="bg-gray-500/20 group-hover:bg-gray-500 rounded-full p-4 duration-300">
                    <AppleIcon class="h-8 w-8 text-horjunBlue group-hover:text-white duration-300" />
                </div>
            </div>
            <div class="flex flex-col gap-4 mt-6">
                <h1 class="font-[horjunfontmedium] text-lg">{{ $t('services.ios') }}</h1>
                <p class="text-[15px]">{{ $t('services.iosdesc') }}</p>

            </div>
        </div>

         <div class="group transition text-center border border-[#4e6ff13f] rounded-xl px-6 py-10">
            <div class="flex justify-center">
                <div class="bg-orange-500/20 group-hover:bg-orange-500 rounded-full p-4 duration-300">
                    <MegaphoneIcon class="h-8 w-8 text-horjunBlue group-hover:text-white duration-300" />
                </div>
            </div>
            <div class="flex flex-col gap-4 mt-6">
                <h1 class="font-[horjunfontmedium] text-lg">{{ $t('services.marketing') }}</h1>
                <p class="text-[15px]">{{ $t('services.marketingdesc') }}</p>

            </div>
        </div>


         <div class="group transition text-center border border-[#4e6ff13f] rounded-xl px-6 py-10">
            <div class="flex justify-center">
                <div class="bg-purple-500/20 group-hover:bg-purple-500 rounded-full p-4 duration-300">
                    <RocketLaunchIcon class="h-8 w-8 text-horjunBlue group-hover:text-white duration-300" />
                </div>
            </div>
            <div class="flex flex-col gap-4 mt-6">
                <h1 class="font-[horjunfontmedium] text-lg">{{ $t('services.analytics') }}</h1>
                <p class="text-[15px]">{{ $t('services.analyticsdesc') }}</p>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RocketLaunchIcon, PaintBrushIcon, MegaphoneIcon } from '@heroicons/vue/24/outline'
 import { AndroidIcon, AppleIcon, WebIcon } from "mdi-vue3";
useI18n()
</script>