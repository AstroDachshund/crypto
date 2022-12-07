
<script>
import BasicCardLarge from './components/basic/BasicCardLarge.vue';
import SquareButton from './components/buttons/basic/SquareButton.vue';
import NotificationButton from './components/buttons/NotificationButton.vue';
import SearchBar from './components/buttons/SearchBar.vue';
import DashboardBalance from './components/dashboard/DashboardBalance.vue';
import DashboardSummary from './components/dashboard/DashboardSummary.vue';
export default {
  components: {
    SquareButton,
    SearchBar,
    BasicCardLarge,
    DashboardBalance,
    NotificationButton,
    DashboardSummary,
  },
  data() {
    return {
      sidebarOpen: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
  watch: {
    sidebarOpen() {
      if (this.sidebarOpen) {
        document.querySelector('.sidebar-container').style.transform = 'translateX(0)';
        document.querySelector('.sidebar-container').style.width = '100%';
      } else {
        document.querySelector('.sidebar-container').style.transform = 'translateX(-100%)';
        document.querySelector('.sidebar-container').style.width = '0';
      }
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="sidebar-container"></div>
    <div class="main-container">
      <section class="nav-container">
        <SearchBar></SearchBar>
        <div class="nav-buttons_wrapper">
          <NotificationButton class="notify"></NotificationButton>
          <SquareButton class="menu-button" @click="toggleSidebar">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </SquareButton>
        </div>
      </section>
      <section class="dashboard-container">
        <DashboardBalance class="dashboard-item"></DashboardBalance>
        <DashboardSummary class="dashboard-item"></DashboardSummary>
        <BasicCardLarge class="dashboard-item"></BasicCardLarge>
      </section>
    </div>
  </div>
</template>
<style scoped>
.menu-button svg {
  transition: all 0.2s ease-in-out;
}

.menu-button:hover svg {
  transform: scale(1.2)
}
</style>