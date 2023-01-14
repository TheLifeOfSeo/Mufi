<script>
    import {Route} from 'tinro';
    import {fade} from 'svelte/transition'
    import Dashboard from "../content/Dashboard.svelte";
    import Sales from "../content/Sales.svelte";
    import Admin from '../content/admin/admin.svelte';
</script>
<section>
    <Route path="/"><div in:fade={{duration: 150}}><Dashboard/></div></Route>
    <Route path="/admin"><div in:fade={{duration: 150}}><Admin/></div></Route>
    <Route path="/sales"><div in:fade={{duration: 150}}><Sales/></div></Route>
</section>

<!-- <div id="content" class="uk-child-width-expand uk-margin-remove" uk-grid>
    
    <section class="uk-padding-large uk-padding-small@s" uk-height-viewport="offset-bottom: 52px">
        <div id="content">
            안쪽
        </div>
    </section>
</div> -->

<style>
    section {
        min-height: 90%;
    }
</style>