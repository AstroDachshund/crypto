<template>
    <div class="wrapper">
        <ul class="summary-list">
            <li class="summary-list__item" v-for="crypto in cryptoData" :key="crypto.symbol">
                <div class="list-icon">
                    <img class="list-icon__img" :src="crypto.icon" :alt="crypto.name" />
                </div>
                <div class="list-element">
                    <span class="list-element-key">{{ crypto.symbol }}</span>
                    <span class="list-element-value">{{ crypto.name }}</span>
                </div>
                <div class="list-element">
                    <span class="list-element-key">Price</span>
                    <span class="list-element-value">${{ crypto.price }}</span>
                </div>
                <div class="list-element">
                    <span class="list-element-key">Change</span>
                    <span class="list-element-value">
                        {{ crypto.change }}
                        <font-awesome-icon class="change-icon" v-if="(crypto.change > 0)"
                            icon="fa-solid fa-arrow-trend-up" />
                        <font-awesome-icon class="change-icon" v-else icon="fa-solid fa-arrow-trend-down" />
                    </span>
                </div>

                <div class="button-wrapper">
                    <RectangleButton :mode="'secondary'">Sell</RectangleButton>
                    <RectangleButton :mode="'primary'">Buy</RectangleButton>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import RectangleButton from '../../buttons/basic/RectangleButton.vue';
export default {
    name: 'TabSummary',
    components: {
        RectangleButton,
    },
    data() {
        return {
            cryptoData: [
                {
                    name: 'Bitcoin',
                    symbol: 'BTC',
                    price: 0,
                    change: 0,
                    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
                }
            ],
        };
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
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    background: #FFFFFF;
    border: 1px solid #EBEBF3;
    border-radius: 8px;
}

.list-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid #EBEBF3;
    display: flex;
    justify-content: center;
    align-items: center;
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

.change-icon {
    font-size: 12px;
    margin-left: 5px;
}
</style>