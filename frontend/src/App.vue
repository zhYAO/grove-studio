<template>
  <main class="flex h-screen overflow-hidden" :data-theme="isDark ? 'grovedark' : 'grovechat'">
    <Navigation/>
    <!-- 内容面板 -->
    <div class="w-full bg-base-100 flex flex-col h-screen">
      <!-- windows 定制化窗口按钮 -->
      <div v-if="isNotMac" class="flex h-10 justify-between items-center flex-0 border-b border-base-200">
        <div class="px-4 text-base-content">{{ route.name }}</div>
        <div class="flex">
          <button class="btn btn-ghost btn-sm w-10 h-10" @click="WindowMinimise">
            <Icon icon="mdi:window-minimize" />
          </button>
          <button class="btn btn-ghost btn-sm w-10 h-10" @click="isMaximised ? (WindowUnmaximise(),isMaximised = false) : (WindowMaximise(), isMaximised = true)">
            <Icon icon="mdi:window-maximize" />
          </button>
          <button class="btn btn-error btn-sm w-10 h-10 hover:text-white" @click="Quit">
            <Icon icon="mdi:window-close" />
          </button>
        </div>
      </div>
      <div v-else class="h-8 flex items-center justify-center text-base-content border-b border-base-200" style="--wails-draggable:drag">
        {{ route.name }}
      </div>
      <!-- 页面内容 -->
      <div class="overflow-y-auto flex-1 py-4 px-6" style="height: calc(100vh - 40px);">
        <router-view />
      </div>
    </div>
  </main>
</template>


<script setup lang="ts">
import { Icon } from '@iconify/vue';
import {useDark, useToggle} from "@vueuse/core";
import { WindowMinimise, WindowMaximise, WindowUnmaximise, Quit } from "../wailsjs/runtime";
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Navigation from '@/components/Navigation.vue';

const isNotMac = navigator.userAgent.toUpperCase().indexOf('MAC') < 0;
const isMaximised = ref(false);
let isDark = useDark()
const route = useRoute();
</script>



