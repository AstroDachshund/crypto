
<script>
import NotificationButton from './components/buttons/NotificationButton.vue';
import SearchBar from './components/buttons/SearchBar.vue';
import DotButton from './components/buttons/basic/DotButton.vue';
import SquareButton from './components/buttons/basic/SquareButton.vue';
import DashboardBalance from './components/dashboard/DashboardBalance.vue';
import DashboardSummary from './components/dashboard/DashboardSummary.vue';
import DashboardTabs from './components/dashboard/DashboardTabs.vue';
import TheSidebar from './components/sidebar/TheSidebar.vue';
export default {
  components: {
    SquareButton,
    SearchBar,
    DashboardBalance,
    NotificationButton,
    DashboardSummary,
    DashboardTabs,
    DotButton,
    TheSidebar,
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="sidebar-container">
      <TheSidebar></TheSidebar>
    </div>
    <div class="main-container">
      <section class="nav-container">
        <SearchBar></SearchBar>
        <div class="nav-buttons_wrapper">
          <NotificationButton class="notify"></NotificationButton>
          <SquareButton class="menu-button">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </SquareButton>
        </div>
      </section>
      <section class="dashboard-container">
        <DashboardBalance class="dashboard-item"></DashboardBalance>
        <DashboardSummary class="dashboard-item"></DashboardSummary>
        <DashboardTabs class="dashboard-item"></DashboardTabs>
      </section>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 1440px;
  height: 900px;

  margin: 0 auto;

  background: #FFF;
  border-radius: 24px;

  overflow: hidden;
}

.menu-button svg {
  transition: all 0.2s ease-in-out;
}

.menu-button:hover svg {
  transform: scale(1.2)
}
</style>