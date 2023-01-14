<script>
    import Card from "../../../layout/component/Card.svelte";
    import Modal from '../../../layout/component/Modal.svelte';
    import StoreAdd from "./StoreAdd.svelte";
    import fetchData from '../../../statics/js/fetchAPI'

    let modalStatus = "none";

    $:{
        console.log(storeInfo)
    }

    let storeInfo = {
        name : "",
        code : "",
        description : "",
        postcode : "",
        address1 : "",
        address2 : "",
        address3 : "",
    }

    let storeAddForm;

    function addStore() {
        const storeData = new FormData(storeAddForm);
        const urlEncodedForm = new URLSearchParams(storeData)
        const header = {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        fetchData('/api/buser/store', "POST", urlEncodedForm, header);
    }
</script>

<Card>
    <div>
        <h2>매장 통합 관리</h2>
    </div>
    <div>
        <button class="btn-primary bg-primary-clickable" on:click={() => {modalStatus = "add"}}>매장 추가하기</button>
    </div>
</Card>



{#if modalStatus === "add"}
<Modal on:close={() => {modalStatus = "none"}}>
    <slot slot="header">
        매장 신규 등록
    </slot>
    <StoreAdd bind:storeInfo={storeInfo} bind:storeAddForm={storeAddForm}/>
    <slot slot="footer">
        <button on:click={addStore} class="bg-primary-clickable btn-primary">등록</button>
    </slot>
</Modal>
{/if}

<style>

</style>