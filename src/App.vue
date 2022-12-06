
<script>
import BasicCardLarge from './components/basic/BasicCardLarge.vue';
import BasicCardSmall from './components/basic/BasicCardSmall.vue';
import SearchBar from './components/SearchBar.vue';
import SquareButton from './components/SquareButton.vue';
export default {
  components: {
    SquareButton,
    SearchBar,
    BasicCardSmall,
    BasicCardLarge,
  }
};
</script>

<template>
  <div class="wrapper">
    <div class="sidebar-container"></div>
    <div class="main-container">
      <section class="nav-container">
        <SearchBar></SearchBar>
        <div class="nav-buttons_wrapper">
          <SquareButton class="notification-button">
            <font-awesome-icon icon="fa-regular fa-bell" />
          </SquareButton>
          <SquareButton>
            <font-awesome-icon icon="fa-solid fa-bars" />
          </SquareButton>
        </div>
      </section>
      <section class="dashboard-container">
        <BasicCardSmall class="dashboard-item" :name="'Current Balance'"></BasicCardSmall>
        <BasicCardSmall class="dashboard-item" :name="'Summary'"></BasicCardSmall>
        <BasicCardLarge class="dashboard-item"></BasicCardLarge>
      </section>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
