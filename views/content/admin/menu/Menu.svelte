<script>
    import Card from "../../../layout/component/Card.svelte";
</script>
<Card>
    <div class="uk-flex uk-flex-between">
        <div>
            <h2>판매중인 상품 조회</h2>
        </div>
        <div>
            <box-icon name='x'></box-icon>
            <span uk-icon="icon: check"></span>
            <a href="#" uk-icon="close"></a>
            <span class="clickable-black" uk-icon="icon:close; ratio: 2" style="z-index:0"></span>
        </div>
    </div>
    <!-- <div>
        <button id="btn-add-menu" class="uk-button uk-button-primary" href="#menu-modal" uk-toggle>상품 추가</button>
    </div> -->
    <!-- <select class="uk-select" id="store-list">
        <option>매장 선택</option>
    </select> -->
    <div id="menu-data">
    </div>
</Card>

<style>
    span {
        overflow: hidden;
    }
</style>