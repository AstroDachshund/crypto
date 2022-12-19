<template>
    <div class="sidebar-header">
        <div class="sidebar-header__logo">
            <img src="../../assets/logo.png" alt="logo" />
        </div>
        <div class="sidebar-header__title">
            <h1>Payte</h1>
        </div>
    </div>
    <div class="sidebar-footer">
        <div class="sidebar-footer__img">
            <img src="../../assets/user.png" alt="user" />
        </div>
        <div class="sidebar-footer__user">
            <h3>Piotr Mazurek</h3>
            <p>mazur1205@gmail.com</p>
        </div>
        <div class="sidebar-footer__more">
            <DotButton></DotButton>
        </div>
    </div>
</template>
<script>
import DotButton from '../buttons/basic/DotButton.vue';
export default {
    name: 'TheSidebar',
    components: {
        DotButton,
    },
}
</script>
<style>
.sidebar-header {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 100px;
    padding: 0 30px;
}

.sidebar-header__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
}

.sidebar-header__logo img {
    width: 40px;
}

.sidebar-header__title h1 {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: #0A041C;
}

.sidebar-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    padding: 0 30px;
}

.sidebar-footer__img {
    display: flex;
    align-items: center;
    justify-content: center;
}

.sidebar-footer__img img {
    width: 40px;
    height: 40px;
    border-radius: 50%;

}

.sidebar-footer__user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
}

.sidebar-footer__user h3 {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0A041C;
    margin: 0;
    padding: 0;
}

.sidebar-footer__user p {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #9896A1;
    margin: 0;
    padding: 0;

}

.sidebar-footer__more {
    margin-left: 15px;
}
</style>