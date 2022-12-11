<template>
    <div class="chart-wrapper">
        <Line id="chart" :options="chartOptions" :data="chartData" />
        <div class="chart-legend">
            <div class="chart-legend-item">
                <font-awesome-icon class="chart-legend-item-icon chart-legend-item_this" icon="fa-solid fa-circle" />
                <div class="chart-legend-item-text">This Month</div>
            </div>
            <div class="chart-legend-item">
                <font-awesome-icon class="chart-legend-item-icon chart-legend-item_last" icon="fa-solid fa-circle" />
                <div class="chart-legend-item-text">Last Month</div>
            </div>
        </div>
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
    name: 'BarChart',
    components: { Line },
    data() {
        return {
            chartData: {
                datasets: [
                    {
                        label: 'This Month',
                        backgroundColor: (ctx) => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0, 0, 0, 180);

                            gradient.addColorStop(0, 'rgba(116, 69, 251, 0.16)');
                            gradient.addColorStop(1, 'rgba(116, 69, 251, 0)');

                            return gradient;
                        },
                        borderColor: '#7445FB',
                        data: [
                            { x: new Date(2022, 4, 1), y: 0 },
                            { x: new Date(2022, 4, 2), y: 1340 },
                            { x: new Date(2022, 4, 3), y: 2330 },
                            { x: new Date(2022, 4, 4), y: 2750 },
                            { x: new Date(2022, 4, 5), y: 3950 },
                            { x: new Date(2022, 4, 6), y: 4643 },
                            { x: new Date(2022, 4, 7), y: 5370 },
                            { x: new Date(2022, 4, 8), y: 6380 },
                            { x: new Date(2022, 4, 9), y: 7390 },
                            { x: new Date(2022, 4, 10), y: 8765 },
                            { x: new Date(2022, 4, 11), y: 9875 },
                            { x: new Date(2022, 4, 12), y: 10120 },
                            { x: new Date(2022, 4, 13), y: 11899 },
                            { x: new Date(2022, 4, 14), y: 12140 },
                            { x: new Date(2022, 4, 15), y: 17895 },
                            { x: new Date(2022, 4, 16), y: 20900 },
                            { x: new Date(2022, 4, 17), y: 21370 },
                            { x: new Date(2022, 4, 18), y: 21989 },
                            { x: new Date(2022, 4, 19), y: 22103 },
                            { x: new Date(2022, 4, 20), y: 21700 },
                            { x: new Date(2022, 4, 21), y: 21300 },
                            { x: new Date(2022, 4, 22), y: 18990 },
                            { x: new Date(2022, 4, 23), y: 17389 },
                            { x: new Date(2022, 4, 24), y: 16240 },
                            { x: new Date(2022, 4, 25), y: 17250 },
                            { x: new Date(2022, 4, 26), y: 17860 },
                            { x: new Date(2022, 4, 27), y: 18270 },
                            { x: new Date(2022, 4, 28), y: 19780 },
                            { x: new Date(2022, 4, 29), y: 22890 },
                            { x: new Date(2022, 4, 30), y: 25000 },
                            { x: new Date(2022, 4, 31), y: 25500 },
                        ],
                        tension: 0.4,
                        fill: true,
                        pointRadius: 0,
                        pointHoverBorderColor: '#FFFFFF',
                        borderWidth: 2,
                    },
                    {
                        label: 'Last Month',
                        borderColor: '#4D858585',
                        data: [
                            { x: new Date(2022, 4, 1), y: 0 },
                            { x: new Date(2022, 4, 2), y: 2340 },
                            { x: new Date(2022, 4, 3), y: 3730 },
                            { x: new Date(2022, 4, 4), y: 4250 },
                            { x: new Date(2022, 4, 5), y: 5950 },
                            { x: new Date(2022, 4, 6), y: 6643 },
                            { x: new Date(2022, 4, 7), y: 8370 },
                            { x: new Date(2022, 4, 8), y: 12380 },
                            { x: new Date(2022, 4, 9), y: 13233 },
                            { x: new Date(2022, 4, 10), y: 13765 },
                            { x: new Date(2022, 4, 11), y: 11875 },
                            { x: new Date(2022, 4, 12), y: 10120 },
                            { x: new Date(2022, 4, 13), y: 9899 },
                            { x: new Date(2022, 4, 14), y: 8140 },
                            { x: new Date(2022, 4, 15), y: 12895 },
                            { x: new Date(2022, 4, 16), y: 15900 },
                            { x: new Date(2022, 4, 17), y: 17370 },
                            { x: new Date(2022, 4, 18), y: 19989 },
                            { x: new Date(2022, 4, 19), y: 18103 },
                            { x: new Date(2022, 4, 20), y: 16700 },
                            { x: new Date(2022, 4, 21), y: 15300 },
                            { x: new Date(2022, 4, 22), y: 18990 },
                            { x: new Date(2022, 4, 23), y: 21389 },
                            { x: new Date(2022, 4, 24), y: 22240 },
                            { x: new Date(2022, 4, 25), y: 23250 },
                            { x: new Date(2022, 4, 26), y: 24860 },
                            { x: new Date(2022, 4, 27), y: 25270 },
                            { x: new Date(2022, 4, 28), y: 26780 },
                            { x: new Date(2022, 4, 29), y: 27890 },
                            { x: new Date(2022, 4, 30), y: 27000 },
                            { x: new Date(2022, 4, 31), y: 28500 },
                        ],
                        tension: 0.3,
                        fill: false,
                        pointRadius: 0,
                        borderWidth: 2,
                        borderDash: [9, 5]
                    },
                ]
            },
            chartOptions: {
                responsive: true,
                locale: 'en',
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        display: false,
                        time: {
                            unit: 'day',
                            display: true,
                        }
                    },
                    y: {
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            stepSize: 5000,
                            callback: function (value) {
                                if (value > 1000) {
                                    return value / 1000 + 'k';
                                } else {
                                    return value;
                                }
                            }
                        }
                    }

                }
            }
        }
    }
}
</script>
<style scoped>
#chart {
    max-height: 200px;
}

.chart-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-height: 230px;
}

.chart-legend {
    display: flex;
    margin-top: 10px;
}

.chart-legend-item {
    display: flex;
    align-items: center;
    margin: 0 4px;

    font-weight: 400;
    font-size: 12px;
    line-height: 10px;
}

.chart-legend-item-icon {
    font-size: 8px;
    margin-right: 4px;
}

.chart-legend-item_this {
    color: #7445FB;
}

.chart-legend-item_last {
    color: #D5D5D6;
}
</style>