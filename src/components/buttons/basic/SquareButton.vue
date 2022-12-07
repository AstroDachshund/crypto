<template>
    <button class="square-button">
        <slot></slot>
    </button>
</template>
<style>
.square-button {
    width: 48px;
    height: 48px;

    background: #F7F7F9;
    border-radius: 8px;
    border: none;
    color: #9896A1;
    cursor: pointer;
    margin: 0 7px;
    display: flex;
    justify-content: center;
    align-items: center;


}

.square-button:hover {
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.2);
}
</style>
