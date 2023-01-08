<script>
    import NavElement from "./NavElement.svelte";
    import NavHeader from "./NavHeader.svelte";
    let width = window.innerWidth;
</script>
<svelte:window bind:innerWidth={width}/>

<!--네비게이션-->
<nav id="nav-wide" class="nav layout-wide">
    <NavHeader/>
    <NavElement/>
</nav>

<!-- 모바일 네비게이션 -->
<nav id="nav-mobile" class="nav layout-mobile">
    <div id="offcanvas-nav" uk-offcanvas="flip: true;overlay: true">
        <div id="nav-mobile-bg" class="uk-offcanvas-bar">
            <NavElement/>
        </div>
    </div>
</nav>


<style>
    #nav-wide {
        float: left;
        position: fixed;
        height: 100%;
        width: 240px;
        box-shadow: 0px 4px 12px 4px rgb(144, 144, 144);
        background-color: #303050;
    }
    
    #nav-mobile-bg {
        background-color: #303050;
    }
    


    /* header > div {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 14px;
    } */
</style>