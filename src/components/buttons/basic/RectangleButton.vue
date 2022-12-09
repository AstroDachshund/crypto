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
    cursor: pointer;
    transition: all 0.2s ease-in;
}

.button-primary {
    background: #7445FB;
    color: #FFFFFF;
    border: 1px solid #7445FB;
}

.button-primary:hover {
    background: #8157F1;
    border: 1px solid #8157F1;
    box-shadow: 0 0 11px rgba(116, 69, 251, 0.25);
}

.button-secondary {
    background: #FFFFFF;
    border: 1px solid #EBEBF3;
    color: #7445FB;
}

.button-secondary:hover {
    border: 1px solid rgba(116, 69, 251, 0.15);
    box-shadow: 0 0 7px rgba(116, 69, 251, 0.15);
}

@media screen and (max-width: 426px) {
    button {
        font-size: 0.8rem;
        line-height: 0.8rem;
        padding: 10px 15px;
    }
}
</style>