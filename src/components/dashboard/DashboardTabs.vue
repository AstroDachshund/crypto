<template>
    <BasicCardLarge>
        <div>
            <div class="dashboard-tabs">
                <div class="dashboard-tabs__tab" :class="{ active: activeTab === tab.name }" v-for="tab in tabs"
                    :key="tab.name" @click="switchTab(tab.name)">
                    <p class="dashboard-tabs__tab__name" :class="{ activeName: activeTab === tab.name }">{{ tab.name }}
                    </p>
                </div>
            </div>
        </div>
        <component :is="('Tab' + activeTab)"></component>
    </BasicCardLarge>
</template>
<script>
import BasicCardLarge from '../basic/BasicCardLarge.vue';
import TabSummary from './DashboardTabs/TabSummary.vue';
export default {
    name: 'DashboardTabs',
    props: ['name'],
    components: {
        BasicCardLarge,
        TabSummary,
    },
    data() {
        return {
            tabs: [
                {
                    name: 'Summary',
                },
                {
                    name: 'Table',
                },
                {
                    name: 'Charts',
                },
                {
                    name: 'Reporting',
                },
                {
                    name: 'Analysis',
                },
            ],
            activeTab: 'Summary',
        };
    },
    methods: {
        switchTab(tabName) {
            this.activeTab = tabName;
        },
    },
};
</script>
<style>
.dashboard-tabs {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 20px 0px 0px 0px;
    border-bottom: 1px solid #EBEBF3;

}

.dashboard-tabs__tab {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-right: 1.2rem;
    height: 100%;
    cursor: pointer;
    border-bottom: 4px solid #F7F7F9;
    transition: border 0.2s ease-in-out;
}

.dashboard-tabs__tab:hover p {
    font-style: normal;
    font-weight: 600;
    color: #0A041C;
    line-height: 24px;
}

.active {
    border-bottom: 4px solid #7445FB;
    font-style: normal !important;
    font-weight: 600 !important;
    color: #0A041C !important;
    line-height: 24px !important;
}
</style>