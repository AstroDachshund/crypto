<template>
    <div class="card-wrapper">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'BasicCardLarge',
    props: ['name']
};
</script>
<style scoped>
.card-wrapper {
    width: 100%;
    height: 504px;
    background: #F7F7F9;
    border-radius: 16px;
    border: none;
    color: #9896A1;
    margin: 30px 20px 0 20px;
}
</style>