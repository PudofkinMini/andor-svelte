<script>
    import {onMount} from 'svelte'
    
    
    const imageModules = import.meta.glob("../gallery-img/*.*");

    /**
     * @type {HTMLDivElement}
     */
    let container;

    onMount(() => {
        for (const modulePath in imageModules) {
            imageModules[modulePath]().then((imageUrl) => {
                const newImg = document.createElement("img");
                newImg.src = modulePath
                newImg.className = "h-[70vw] w-[70vw] md:h-60 md:w-60 object-cover"
                container.appendChild(newImg)
            });
        }
    })
    
</script>

<div class="bg-slate-800 text-center py-5">
    <div class="text-3xl md:text-5xl font-bold text-white py-5">Gallery</div>
    <div bind:this={container} class="flex flex-col items-center md:grid md:grid-cols-5 gap-5 p-5 md:p-10"/>
</div>


