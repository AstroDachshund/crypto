<template>
    <div class="wrapper">
        <ul class="summary-list">
            <SummaryListItem :cryptoData="cryptoData"></SummaryListItem>
        </ul>
    </div>
</template>
<script>
import RectangleButton from '../../buttons/basic/RectangleButton.vue';
import CryptoLineChart from '../../charts/CryptoLineChart.vue';
import SummaryListItem from './SummaryListItem.vue';
export default {
    name: 'TabSummary',
    components: {
        RectangleButton,
        CryptoLineChart,
        SummaryListItem,
    },
    data() {
        return {
            cryptoData: [
                {
                    name: 'Bitcoin',
                    symbol: 'BTC',
                    price: 17241.80,
                    change: 0.0129,
                    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
                },
                {
                    name: 'Ethereum',
                    symbol: 'ETH',
                    price: 1194.34,
                    change: -0.0089,
                    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
                },
                {
                    name: 'EOS',
                    symbol: 'EOS',
                    price: 16242.10,
                    change: 0.0239,
                    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1765.png',
                },
            ],
        };
    },
    methods: {
        changeColor(value) {
            return value > 0 ? 'crypto-change__positive' : 'crypto-change__negative';
        },
    },
};
</script>
<style>
.summary-list {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 30px;
}

.summary-list__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #FFFFFF;
    border: 1px solid #EBEBF3;
    border-radius: 8px;
}

.list-title {
    display: flex;
    align-items: center;
    flex-direction: row;
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