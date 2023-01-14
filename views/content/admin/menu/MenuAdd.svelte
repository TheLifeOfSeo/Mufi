<div class="form-div">
    <form id="menu-form">
        <div>
            <div>
                <div>
                    <h5>매장 선택</h5>
                    <select id="modal-store-list" class="uk-select" disabled>
                        <option>매장 선택</option>
                    </select>
                </div>
            </div>
            <div>
                <div>
                    <h5>상품명</h5>
                    <input class="uk-input" id="menu-modal-name" name="label" type="text" placeholder="명칭" value="일반 사진">
                </div>
            </div>
            <div>
                <div>
                    <h5>상품 가격</h5>
                    <input class="uk-input" id="menu-modal-price" name="price" type="text" placeholder="가격" value="4000">
                </div>
            </div>
            <div>
                <div>
                    <h5>상품 사진 업로드</h5>
                    <div class="uk-width-medium@s" uk-form-custom="target: true">
                        <input type="file" id="menu-modal-image" name="image">
                        <input class="uk-input" id="menu-modal-image-name" type="text" placeholder="이미지 선택" disabled value="경로">
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h5>상품 설명</h5>
                    <textarea class="uk-textarea" id="menu-modal-description" type="text" rows="3" name="description" placeholder="사용자에게 보여줄 상품에 대한 설명을 간단하게 적어주세요">일반 사진과 동일한 상품</textarea>
                </div>
            </div>
        </div>
        <div class="uk-flex uk-flex-between uk-margin-small">
            <span>
            </span>
            <span>
                <button class="uk-button uk-button-default uk-modal-close" type="button">취소</button>
                <button class="uk-button uk-button-primary" type="submit">저장</button>
            </span>
        </div>
    </form>
</div>
