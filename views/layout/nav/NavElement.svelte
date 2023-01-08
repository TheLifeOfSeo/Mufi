<script>
    import NavBtn from "./NavBtn.svelte";
    import NavIndex from "./NavIndex.svelte";
    import {list} from "../../json/nav-element.json"
    console.log(list);
</script>
<div>
    {#each list as list}
        <NavIndex>{list.board}</NavIndex>
        {#each list.index as index}
            <NavBtn bind:href={index.dest}>{index.name}</NavBtn>
        {/each}
    {/each}
</div>