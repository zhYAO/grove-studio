import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "Grove Studio", component: Home },
        { path: "/llm", name: '对话模型', component: () => import("@/views/LLM.vue") },
        { path: "/api", name: 'API集成', component: () => import("@/views/API.vue") },
        { path: "/setup", name: '设置', component: () => import("@/views/Setup.vue") },
    ],
});

export default router;
