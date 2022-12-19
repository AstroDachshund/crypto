<template>
    <li class="summary-list__item" v-for="crypto in cryptoData" :key="crypto.symbol">
        <div class="list-title">
            <div class="list-icon">
                <img class="list-icon__img" :src="crypto.icon" :alt="crypto.name" />
            </div>
            <div class="list-element">
                <span class="list-element-key">{{ crypto.symbol }}</span>
                <span class="list-element-value">{{ crypto.name }}</span>
            </div>
        </div>
        <div class="list-element">
            <span class="list-element-key">Price</span>
            <span class="list-element-value">${{ crypto.price }}</span>
        </div>
        <div class="list-element">
            <span class="list-element-key">Change</span>
            <span class="list-element-value crypto-change" :class="changeColor(crypto.change)">
                {{ (crypto.change * 100).toFixed(2) }}%
                <font-awesome-icon class="change-icon" v-if="(crypto.change > 0)" icon="fa-solid fa-arrow-trend-up" />
                <font-awesome-icon class="change-icon" v-else icon="fa-solid fa-arrow-trend-down" />
            </span>
        </div>
        <CryptoLineChart :valueChange="crypto.change"></CryptoLineChart>
        <div class="button-wrapper">
            <RectangleButton :mode="'secondary'">Sell</RectangleButton>
            <RectangleButton :mode="'primary'">Buy</RectangleButton>
        </div>
    </li>
</template>
<script>
import RectangleButton from '../../buttons/basic/RectangleButton.vue';
import CryptoLineChart from '../../charts/CryptoLineChart.vue';
export default {
    components: {
        RectangleButton,
        CryptoLineChart,
    },
    props: {
        cryptoData: {
            type: Array,
            required: true,
        },
    },
    methods: {
        changeColor(value) {
            return value > 0 ? 'crypto-change__positive' : 'crypto-change__negative';
        },
    },
}
</script>
<style scoped>
.summary-list__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    background: #FFFFFF;
    border: 1px solid #EBEBF3;
    border-radius: 8px;
}

.list-title {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 120px;
}

.list-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid #EBEBF3;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}

.list-icon__img {
    width: 32px;
    height: 32px;
}

.list-element {
    display: flex;
    flex-direction: column;

}

.list-element-key {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #9896A1;
}

.list-element-value {
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    color: #0A041C;
    margin-top: 5px;

    display: flex;
    align-items: center;

}

.crypto-change__positive {
    color: #2DC78F;
}

.crypto-change__negative {
    color: #FF4D4D;
}

.change-icon {
    font-size: 12px;
    margin-left: 5px;
}
</style>