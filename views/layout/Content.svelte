<script>
    import {Route} from 'tinro';
    import Store from "../content/Store.svelte";
    import Dashboard from "../content/Dashboard.svelte";
    import Sales from "../content/Sales.svelte";
</script>
<section>
    <Route path="/"><Dashboard/></Route>
    <Route path="/store"><Store/></Route>
    <Route path="/sales"><Sales/></Route>
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
    @media (min-width: 769px) {
        section {
            padding-left: 240px;
        }
    }

    @media (max-width: 768px) {
        section {
            padding-left: 0px;
        }
    }
</style>