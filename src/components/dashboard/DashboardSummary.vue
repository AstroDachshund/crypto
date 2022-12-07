<template>
    <BasicCardSmall :name="'Summary'">
        <LineChart />
    </BasicCardSmall>
</template>
<script>
import BasicCardSmall from '../basic/BasicCardSmall.vue';
import LineChart from '../charts/LineChart.vue';
export default {
    name: 'DashboardSummary',
    props: ['name'],
    components: {
        BasicCardSmall,
        LineChart,
    },
};
</script>