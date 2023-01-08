<div id="nav-index">
    <span></span>
    <span id="nav-slot">
        <slot></slot>
    </span>
    <span></span>
</div>


<style>
    #nav-index {
        margin-top: 48px;
        height: 48px;
        /* margin: 8px 8px; */
        /* border-radius: 24px; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #nav-slot {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        
        color: rgb(240, 240, 255);
        /* font-family: Pretendard; */
    }
</style>