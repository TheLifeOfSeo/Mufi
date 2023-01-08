<div class="card-body">
    <div>
        <slot></slot>
    </div>
</div>

<style>
    @media (min-width: 769px) {
        .card-body {
            border-radius: 24px;
            box-shadow: 0px 4px 18px 0px #DDDDDD;
        }
    }

    @media (min-width:769px) and (max-width: 1280px) {
        .card-body {
            margin: 12px 12px;
        }
    }
    .card-body {
        padding: 36px;
        /* background-color:aliceblue; */
        /* border-radius: 24px; */
    }
</style>