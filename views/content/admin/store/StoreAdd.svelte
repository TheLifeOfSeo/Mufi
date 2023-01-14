<script>
    export let storeAddForm;
    let element_wrap;
    let storeInfo = {
        name : "",
        code : "",
        description : "",
        postcode : "",
        address1 : "",
        address2 : "",
        address3 : "",
    }
    $:{
        console.log(storeInfo)
    }
    function foldDaumPostcode() {
        // iframe을 넣은 element를 안보이게 한다.
        element_wrap.style.display = 'none';
    }
    function execDaumPostcode() {
        console.log("yessirski")
        const currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        new daum.Postcode({
            oncomplete: function(data) {
                console.log(data);
                console.log("done")
                storeInfo.address1 = ''
                storeInfo.address2 = ''
                storeInfo.address3 = ''
                storeInfo.postcode = ''
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    storeInfo.address1 = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    storeInfo.address1 = data.jibunAddress;
                }
                if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        storeInfo.address1 +=  ` (${data.bname})`;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        storeInfo.address1 += ` (${data.buildingName})`;
                        // storeInfo.address1 += (storeInfo.address3 !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    // if(storeInfo.address3 !== ''){
                    //     storeInfo.address1 += ' (' + storeInfo.address3 + ')';
                    // }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    // document.getElementById("extraAddress").value = extraAddr;
                
                } 
                // else {
                //     storeInfo.address3 = '';
                // }
                element_wrap.style.display = 'none';
                document.body.scrollTop = currentScroll;
                storeInfo.postcode = data.zonecode
                console.log(storeInfo.address1);
                console.log(storeInfo.address3);
            },
            // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
            onresize : function(size) {
                element_wrap.style.height = size.height+'px';
            },
            width : '100%',
            height : '100%'
            }).embed(element_wrap)
            element_wrap.style.display = 'block';
    }
</script>
<svelte:head>
    <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" on:load={() => {console.log("external js loaded");}}/>
</svelte:head>
<div id="div-form">
    <form bind:this={storeAddForm}>
        <div class="div-flex">
            <div>
                <h4>매장 이름</h4>
                <input class="uk-input" type="text" name="name" bind:value={storeInfo.name} placeholder="명칭">
            </div>
            <div>
                <h4>매장 코드</h4>
                <input class="uk-input" type="text" name="code" bind:value={storeInfo.code} placeholder="명칭">
            </div>
        </div>
        <div>
            <h4>메모</h4>
            <textarea class="uk-textarea" type="text" rows="3" name="description" bind:value={storeInfo.description} placeholder="매장의 위치, 특징에 대한 간단한 설명을 입력해주세요"></textarea>
        </div>
        <div uk-margin>
            <h4>매장 주소</h4>
            
            <div class="div-flex" uk-margin>
                <div>
                    <input bind:value={storeInfo.postcode} class="uk-input" type="text" name="zip_code" placeholder="우편번호" readonly>
                </div>
                <div>
                    <input class="btn-primary bg-primary-clickable" type="button" on:click={execDaumPostcode} style="height:40px; width: 100%" value="주소 검색"><br>
                </div>
            </div>
            <div bind:this="{element_wrap}" style="display:none;border:1px solid;width:100%;height:600px;margin:5px 0;position:relative">
                <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnFoldWrap" style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1" on:click={foldDaumPostcode} alt="접기 버튼">
            </div>
            <div>
                <input bind:value={storeInfo.address1} class="uk-input" type="text" name="address" placeholder="주소" readonly>
            </div>
            <div>
                <input bind:value={storeInfo.address2} class="uk-input" type="text" name="detail_address" placeholder="상세주소">
            </div>
        </div>
    </form>
</div>

<style>
    * {
        letter-spacing: 0px;
    }
    @media (min-width: 481px) {
        .div-flex {
            display: flex;
        }
        .div-flex > div {
            width: 50%;
        }
        .div-flex > div:nth-child(1) {
            margin-right: 6px;
        }
        .div-flex > div:nth-child(2) {
            margin-left: 6px;
        }
    }
    h4 {
        margin: 24px 0 12px 0 ;
    }
    input {
        margin: 0;
    }
    input, textarea {
        border-radius: 8px;
    }
    input:focus, textarea:focus {
        border: 1px solid rgb(48,48,144);
    }
</style>
