<template>
    <div class="notification-button_wrapper">
        <SquareButton class="notification-button">
            <font-awesome-icon icon="fa-regular fa-bell" />
        </SquareButton>
        <font-awesome-icon v-if="newNotification" class="notification-dot" icon="fa-solid fa-circle" />

    </div>
</template>
<script>
import SquareButton from './basic/SquareButton.vue';
export default {
    name: 'NotificationButton',
    components: {
        SquareButton,
    },
    data() {
        return {
            newNotification: true,
        };
    }
};
</script>
<style>
.notification-button_wrapper {
    position: relative;
}

.notification-button svg {
    transition: all 0.2s ease-in-out;
}

.notification-button:hover svg,
.notification-button:focus svg,
.notification-button:active svg {
    transform: scale(1.2)
}

.notification-button:hover+.notification-dot {
    transform: scale(1.1)
}

.notification-dot {
    position: absolute;
    top: 0px;
    right: 3px;
    font-size: 12px;
    color: #EA4D4D;
    z-index: 1;
    transition: all 0.2s ease-in-out;
}
</style>