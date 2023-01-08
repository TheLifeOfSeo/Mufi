<script>
  import Card from "../layout/component/Card.svelte";

</script>

<Card>
    <div>
        <h2>매장 통합 관리</h2>
    </div>
    <div>
        <button id="btn-add-store" class="uk-button uk-button-primary" href="#store-modal" uk-toggle>매장 추가하기</button>
    </div>
    <div>
        <table class="uk-table uk-table-hover uk-table-small uk-table-middle uk-table-divider">
            <thead>
                <tr>
                    <th>상점 이름</th>
                    <th>메뉴 추가</th>
                    <th>메뉴 보기</th>
                    <th>설정</th>
                </tr>
            </thead>
            <tbody id="table-data"></tbody>
        </table>
    </div>
</Card>
<Card>
        <div class="uk-flex uk-flex-between">
            <div>
                <h2>판매중인 상품 조회</h2>
            </div>
            <div id="btn-div-menu-close">
                <button class="uk-close-large" type="button" uk-close></button>
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