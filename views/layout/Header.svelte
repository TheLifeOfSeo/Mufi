<script>
    let width = window.innerWidth;
</script>
<svelte:window bind:innerWidth={width}/>

<header id="header-wide" class="layout-wide">
    <div>
    </div>
    <div>
        <span class="uk-margin-small-right" uk-icon="bell"></span>
        <a href="#" class="uk-icon-link uk-margin-small-right" uk-icon="bell"></a>
        <span class="uk-badge">1</span>
    </div>
</header>
    
<div class="layout-mobile" id="header-space"></div>
<header id="header-mobile" class="layout-mobile">
    <div>
        <div>

        </div>
        <div>
            <a href="#">MUFI 점포 솔루션</a>
        </div>
        <div>
            <span uk-icon="menu"></span>
        </div>
    </div>
</header>

<!-- <header uk-sticky> 순수 CSS로 만들기
    <nav class="uk-navbar uk-background-primary uk-height-10px">
        <div class="uk-navbar-center">
            <a href="#" class="uk-button-primary uk-padding-small uk-light" uk-icon="">MUFI 점포 솔루션</a>
        </div>
        <div class="uk-navbar-right uk-hidden@s">
            <a href="#" class="uk-button-primary uk-padding-small uk-light" type="button" uk-toggle="target: #offcanvas-nav" uk-icon="menu"></a>
        </div>
    </nav>
</header> -->

<style>
    a {
        text-decoration-line: none;
        color: white;
        font-size: 18px;
    }
    a:hover {
        color: gainsboro;
    }
    @media (min-width: 769px) {
        #header-wide{
            padding: 18px;
            display: flex;
            justify-content: space-between;
            height: 72px;
        }
    }

    #header-space {
        height: 54px;
        width: 100%;
    }
    #header-mobile {
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 54px;
        background-color: #303050;
        box-shadow: 0px 2px 12px 4px rgba(0,0,0,0.2);
    }

    #header-mobile > div {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 14px;
    }
    #header-mobile > div > div {
        min-width: 50px;
    }
</style>