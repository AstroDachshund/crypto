<template>
    <BasicCardSmall :name="'Current Balance'">
        <div class="balance-wrapper">
            <div class="balance">
                <div class="balance-current">
                    <span class="balance-currency">$</span>
                    <span class="balance-amount">21 432.23</span>
                </div>

                <div class="balance-comparison">
                    <span class="rise-icon balance-comparison_item">
                        <font-awesome-icon class="rise-icon_svg" icon="fa-solid fa-arrow-trend-up" />
                    </span>
                    <span class="balance-comparison-amount balance-comparison_item">2.3%</span>
                    <span class="balance-comparison-period balance-comparison_item"> vs last month</span>
                </div>
            </div>

            <div class="balance-actions">
                <RectangleButton :mode="'primary'">Quick Invest</RectangleButton>
                <RectangleButton :mode="'secondary'">Show Report</RectangleButton>
            </div>
        </div>
    </BasicCardSmall>
</template>
<script>
import BasicCardSmall from '../basic/BasicCardSmall.vue';
import RectangleButton from '../buttons/basic/RectangleButton.vue';
export default {
    name: 'DashboardBalance',
    props: ['name'],
    components: {
        BasicCardSmall,
        RectangleButton,

    },
};
</script>
<style scoped>
.balance-wrapper {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-height: 220px;
}

.balance-current {
    font-style: normal;
    font-weight: 300;
    font-size: 56px;
    line-height: 56px;
}

.balance-amount {
    color: #0A041C;
}

.balance-comparison {
    color: #2DC78F;
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.balance-comparison_item {
    margin-right: 5px;
}

.rise-icon_svg {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;

}

.rise-icon {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: #2DC78F;
    height: 18px;
    width: 18px;
    border-radius: 50%;
}

.balance-action_button {
    background: #2DC78F;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    padding: 10px 20px;
    margin-right: 10px;
}
</style>