<template>
    <button :class="(`button-` + this.mode)">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: ['mode'],
};
</script>
<style>
button {
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    padding: 10px 20px;
    margin-right: 10px;
}

.button-primary {
    background: #7445FB;
    color: #FFFFFF;
}

.button-secondary {
    background: #FFFFFF;
    border: 1px solid #EBEBF3;
    color: #7445FB;
}
</style>