<template>
    <label for="search-bar">
        <font-awesome-icon class="search-bar_icon" icon="fa-solid fa-search" />
        <input type="search" name="search-bar" id="search-bar" placeholder="Search">
    </label>
</template>
<style scoped>
label {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 48px;
}

#search-bar {
    background: #F7F7F9;
    color: #242424;
    border-radius: 8px;
    width: 232px;
    height: 48px;
    border: none;

    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: #9896A1;
}

#search-bar:focus {
    outline: none;
}

#search-bar::placeholder {
    position: absolute;
    top: 50%;
    left: 26%;
    font-size: 14px;
    transform: translate(-50%, -50%);
}

@media screen and (max-width: 375px) {
    #search-bar {
        width: 190px;
    }

    #search-bar::placeholder {
        left: 35%;
    }
}
</style>