<template>
    <nav class="main-menu">
        <div class="area">
            <ul id="menu-items">
                <li class="menu-item">
                    <router-link to="/">
                        <font-awesome-icon class="fa-for-menu" :icon="['fas', 'desktop']"/>
                        <span class="nav-text"> Home</span>
                    </router-link>
                </li>
                <li class="menu-item">
                    <router-link to="/patient-card">
                        <font-awesome-icon  class="fa-for-menu" :icon="['fas', 'id-card-alt']"/>
                        <span class="nav-text"> Patient Info</span>
                    </router-link>
                </li>
                <li class="menu-item">
                    <router-link to="/about">
                        <font-awesome-icon class="fa-for-menu" :icon="['fas', 'cogs']"/>
                        <span class="nav-text"> Администрирование</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>
    #menu-items a.router-link-exact-active {
        color: #feed2e;
    }
    .fa-for-menu {
        position: relative;
        display: table-cell;
        width: 55px;
        height: 32px;
        text-align: center;
        vertical-align: middle;
        padding: 5px;
    }
    .main-menu {
        top:0;
        bottom:0;
        min-height:100px;
        left:0;
        width:270px;
        overflow:hidden;
        opacity:1;
        font-weight: bold;
        border-bottom-right-radius: 10px;
        border-bottom: solid 1px;
        border-color: #bcb8c3;
    }
    .main-menu>ul {
        margin:7px 0;
    }
    .main-menu li {
        position:relative;
        display:block;
        width:270px;
    }
    .main-menu li>a {
        position:relative;
        display:table;
        border-collapse:collapse;
        border-spacing:0;
        color: #e2ddea;
        font-size: 16px;
        text-decoration:none;
        -webkit-transform:translateZ(0) scale(1,1);
        -webkit-transition:all .14s linear;
        transition:all .14s linear;
        font-family: 'Strait', sans-serif;
        border-top:1px solid #1a2129;
        text-shadow: 1px 1px 1px  #000;
    }
    .main-menu .nav-icon {
        position:relative;
        display:table-cell;
        width:55px;
        height:36px;
        text-align:center;
        vertical-align:middle;
        font-size:18px;
    }
    .main-menu .nav-text  {
        position:relative;
        display:table-cell;
        vertical-align:middle;
        width:215px;
        font-family: 'Titillium Web', sans-serif;
    }
    .main-menu .fb-like {
        left: 180px;
        position:absolute;
        top: 15px;
    }
    .main-menu>ul {
        position:absolute;
        left:0;
        bottom:0;
    }
    a:hover,a:focus {
        text-decoration:none;
        border-left:0px solid #F7F7F7;
    }
    nav {
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        -o-user-select:none;
        user-select:none;
    }
    nav ul,nav li {
        outline:0;
        margin:0;
        padding:0;
        text-transform: uppercase;
    }

    /* Darker element side menu End*/
    .main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {
        color:#fff;
        background-color: #37474f;
        text-shadow: 0px 0px 0px;
    }
    .area {
        float: left;
        background: #263238;
        width: 100%;
    }
    .menu-link{
        color: #e2ddea;
    }
    .menu-item.selected{
        background-color: #37474f !important;
    }
    .menu-item.selected a{
        color: #e8e857 !important;
    }
</style>