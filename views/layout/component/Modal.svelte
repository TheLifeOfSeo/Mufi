<script>
	import { blur } from 'svelte/transition';
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown}/>
<div class="modal-container" transition:blur={{duration: 200}}>

    <div class="modal-background" on:click={close}></div>
    
    <div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
        <div>
            <div style="display: flex; justify-content:space-between">
                <div>
                    <h2>
                        <slot name="header"></slot>
                    </h2>
                </div>
                <div>
                    <span class="clickable-black" uk-icon="icon:close; ratio: 2" on:click={close}></span>
                </div>
                
            </div>
            <slot></slot>
            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>
            <!-- <button autofocus on:click={close}>close modal</button> -->
            <!-- svelte-ignore a11y-autofocus -->
        </div>
    </div>
</div>

<style>
    .modal-container {
        position: fixed;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
	.modal-background {
        position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}
    
	.modal {
        position: fixed;
		left: 50%;
		top: 50%;
		/* min-width: 32em; */
        min-height: calc(25vh);
		max-height: calc(100vh - 4em);
		transform: translate(-50%,-50%);
		padding: 36px;
		border-radius: 24px;
		background: white;
        box-shadow: 0px 0px 18px 12px rgba(0,0,0,0.1);
        overflow-y: scroll;
	}
    @media(max-width:768px) {
        .modal {
            position: fixed;
            min-width: none;
            height: 100%;
            width: 100%;
            padding: auto;
        }
        .modal > div {
            padding: 5%;
        }
    }
    
    .modal::-webkit-scrollbar {
        display: none;
    }
    
    .modal-footer {
        margin: 24px 0px 0px 0px;
        float: right;
    }
</style>