<template>
    <div class="wrapper">
        <Line class="crypto-line-chart" :options="chartOptions" :data="chartData" />
    </div>

</template>
<script>
import {
    CategoryScale, Chart as ChartJS, Filler, Legend, LinearScale, LineElement, PointElement, TimeScale, Title,
    Tooltip
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Line } from 'vue-chartjs';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    Filler
)

export default {
    name: 'CryptoLineChart',
    components: { Line },
    props: ['valueChange'],
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Data One',
                        borderColor: this.chartColor(),
                        data: [40, 39, 10, 40, 39, 80, 40],
                        pointRadius: 0,
                        tension: 0.5,
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                }
            }
        }
    },
    methods: {
        chartColor() {
            return this.valueChange > 0 ? '#2DC78F' : '#EA4D4D'
        }
    },
}
</script>
<style scoped>
.wrapper {
    width: 100%;
    height: 38px;
    max-width: 148px;
}

.crypto-line-chart {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
}
</style>