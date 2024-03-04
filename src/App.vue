<template>
  <div class="sidebar">
    <RouterLink to="/dashboard">
        <img src="/src/assets/images/brand/brand-logo.svg" alt="Brand Logo" width="170">
    </RouterLink>
    <div class="sidebar-link d-flex flex-column justify-content-between">
        <div class="wrapper d-flex flex-column">
            <RouterLink to="/dashboard" class="link-item d-flex align-items-center">
                <div class="dashboard-icon"></div>
                <p>Dashboard</p>
            </RouterLink>
            <button type="button" class="link-item link-item-parent d-flex align-items-center" @click="toggleAgenda" :class="{ 'active': agendaActive }">
                <div class="agenda-icon"></div>
                <p>Agenda</p>
            </button>
            <div class="item-child d-flex flex-column" :class="{ 'active': agendaActive }">
                <RouterLink to="/module" class="child-item">Array</RouterLink>
                <RouterLink to="/module" class="child-item">Record</RouterLink>
                <RouterLink to="/module" class="child-item">Pointer</RouterLink>
                <RouterLink to="/module" class="child-item">Linked List</RouterLink>
                <RouterLink to="/module" class="child-item">Searching</RouterLink>
                <RouterLink to="/module" class="child-item">Sorting</RouterLink>
                <RouterLink to="/module" class="child-item">Stack</RouterLink>
                <RouterLink to="/module" class="child-item">Queue</RouterLink>
                <RouterLink to="/module" class="child-item">Tree</RouterLink>
            </div>
        </div>
        <form class="w-100">
            <button type="button" class="link-item d-flex align-items-center">
                <div class="logout-icon"></div>
                <p>Logout</p>
            </button>
        </form>
    </div>
  </div>

  <RouterView />
</template>

<script>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    RouterLink,
    RouterView,
  },
  setup() {
    const agendaActive = ref(false);

    const toggleAgenda = () => {
      agendaActive.value = !agendaActive.value;
    };

    return {
      agendaActive,
      toggleAgenda,
    };
  },
};
</script>

<style scoped>
</style>