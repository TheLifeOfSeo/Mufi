<div id="card-body">
    <div>
        <slot></slot>
    </div>
</div>

<style>
    @media (min-width: 769px) {
        #card-body {
            margin: 18px 18px;
            border-radius: 24px;
            box-shadow: 0px 4px 18px 0px #DDDDDD;
        }
    }

    @media (max-width: 768px) {
    
    }
    #card-body {
        padding: 36px;
        /* background-color:aliceblue; */
        /* border-radius: 24px; */
    }
</style>