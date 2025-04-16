<template>
  <nav
    class="flex-none flex flex-col justify-between w-[70px] items-center text-center select-none z-20 bg-base-200"
    style="--wails-draggable: drag"
  >
    <div class="menu mt-10 my-4 flex flex-col gap-6 text-2xl text-base-content">
      <router-link
        v-for="item in menu"
        :key="item.text"
        :to="item.href"
        v-slot="{ isActive }"
      >
        <Icon :icon="item.icon" :class="isActive && activeClass" />
      </router-link>
    </div>
    <div class="menu my-4 flex flex-col gap-4 text-2xl text-base-content">
      <button @click="toggleDark()" class="text-2xl mt-1">
        <span v-if="isDark"><Icon icon="icon-park:dark-mode" /></span>
        <span v-else><Icon icon="icon-park:sun-one" /></span>
      </button>
      <router-link to="/setup" v-slot="{ isActive }">
        <Icon
          icon="material-symbols:menu-rounded"
          :class="isActive && activeClass"
        />
      </router-link>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useDark, useToggle } from "@vueuse/core";

const menu = [
  { text: "首页", href: "/", icon: "material-symbols:home-app-logo" },
  {
    text: "对话模型",
    href: "/llm",
    icon: "material-symbols:supervisor-account-outline-rounded",
  },
];
const activeClass = "text-primary";

let isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
