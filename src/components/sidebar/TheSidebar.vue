<template>
    <div class="sidebar-header">
        <div class="sidebar-header__logo">
            <img src="../../assets/logo.png" alt="logo" />
        </div>
        <div class="sidebar-header__title">
            <h1>Payte</h1>
        </div>
    </div>
    <div class="sidebar-menu">
        <ul class="sidebar-menu-list">
            <li class="sidebar-menu-list__item">
                <font-awesome-icon class="menu-icon sidebar-menu-list__item-content" icon="fa-solid fa-house-user" />
                <span class="sidebar-menu-list__item-content">Home</span>
            </li>
            <li class="sidebar-menu-list__item">
                <font-awesome-icon class="menu-icon sidebar-menu-list__item-content"
                    icon="fa-solid fa-building-columns" />
                <span class="sidebar-menu-list__item-content">Buy / Sell</span>
            </li>
            <li class="sidebar-menu-list__item">
                <font-awesome-icon class="menu-icon sidebar-menu-list__item-content" icon="fa-solid fa-wallet" />
                <span class="sidebar-menu-list__item-content">Wallets</span>
            </li>
            <li class="sidebar-menu-list__item">
                <font-awesome-icon class="menu-icon sidebar-menu-list__item-content" icon="fa-solid fa-cubes" />
                <span class="sidebar-menu-list__item-content">Bundles</span>
            </li>
            <li class="sidebar-menu-list__item">
                <font-awesome-icon class="menu-icon sidebar-menu-list__item-content" icon="fa-solid fa-flag" />
                <span class="sidebar-menu-list__item-content">Reports</span>
            </li>
            <li class="sidebar-menu-list__item">
                <font-awesome-icon class="menu-icon sidebar-menu-list__item-content" icon="fa-solid fa-atom" />
                <span class="sidebar-menu-list__item-content">Community</span>
            </li>
        </ul>
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
    flex: 0 1 auto;
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
    flex: 0 1 90px;
    align-items: center;
    justify-content: center;
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

.sidebar-menu {
    display: flex;
    flex: 1 1 auto;
    align-items: flex-start;

    width: 100%;
}

.sidebar-menu-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 10px;
    width: 100%;
}

.sidebar-menu-list__item {
    display: flex;
    align-items: center;
    justify-content: start;

    margin: 5px 0;

    height: 44px;
    width: 100%;
    list-style: none;
    border-radius: 4px;
    border: 1px solid #F7F7F9;
    transition: all 0.3s ease-in-out;
}

.sidebar-menu-list__item span {

    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

}

.sidebar-menu-list__item:hover {
    background: #FFFFFF;
    border: 1px solid #EBEBF3;
}

.menu-icon {
    font-size: 24px;
}

.sidebar-menu-list__item-content {
    margin-left: 10px;
    color: #660A041C;
    transition: all 0.3s ease-in-out;
}

.sidebar-menu-list__item:hover .menu-icon {
    color: #7445FB;
}

.sidebar-menu-list__item:hover span {
    color: #0A041C;
}
</style>