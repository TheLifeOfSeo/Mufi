<script>
    import Modal from "../layout/component/Modal.svelte";
    let modalOn = false;
</script>

<button on:click={() => {modalOn = modalOn ? false : true}}>go</button>
{#if modalOn}
<Modal on:close={() => {modalOn = false}}>
    <slot slot="header">
        <h2>요</h2>
    </slot>
    <p>안녕하세요</p>
</Modal>
{/if}