<script>
    export let href;
    console.log(href);
</script>
<div id="nav-btn">
    <a href={href}>
        <slot></slot>
    </a>
</div>

<style>
    #nav-btn {
        height: 48px;
        margin: 0 16px;
        border-radius: 24px;
        text-align: center;
        align-items: center;
        transition-duration: 200ms;
    }
    #nav-btn:hover {
        background-color: #555588;
        cursor: pointer;
    }
    a {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 300;
        letter-spacing: -0.5px;
        color: rgb(240, 240, 255);
        /* font-family: Pretendard; */
    }
    a:hover {
        color: white;
        text-decoration: none;
    }
</style>