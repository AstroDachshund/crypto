<template>
    <BasicCardSmall :name="'Summary'">
        <BarChart />
    </BasicCardSmall>
</template>
<script>
import BasicCardSmall from '../basic/BasicCardSmall.vue';
import BarChart from '../charts/BarChart.vue';
export default {
    name: 'DashboardSummary',
    props: ['name'],
    components: {
        BasicCardSmall,
        BarChart,
    },
};
</script>