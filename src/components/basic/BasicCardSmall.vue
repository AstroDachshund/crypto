<template>
    <div class="card-wrapper">
        <div class="card-header">
            <p>{{ name }}</p>
            <button>
                <font-awesome-icon class="dot-icon" icon="fa-solid fa-ellipsis-h" />
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BasicCardSmall',
    props: ['name']
};
</script>
<style scoped>
.card-wrapper {
    width: 100%;
    max-width: 509px;
    height: 336px;
    background: #F7F7F9;
    border-radius: 16px;
    border: none;
    color: #9896A1;
    margin: 30px 20px 0 20px;
    flex: 2;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
}

.card-header p {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #0A041C;
}

.card-header button {
    background: #F7F7F9;
    border-radius: 8px;
    border: none;
    color: #9896A1;
}

.dot-icon {
    height: 16px;
}

@media screen and (max-width: 768px) {
    .card-wrapper {
        flex: 1;
    }
}
</style>