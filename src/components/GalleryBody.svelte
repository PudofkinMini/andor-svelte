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
                newImg.tabIndex = -1
                newImg.className = "flex shrink h-[70vw] w-[70vw] md:h-[20vw] md:w-[20vw] object-cover rounded-md md:focus:w-[35vw] md:focus:h-[35vw] duration-300"
                container.appendChild(newImg)
            });
        }
    })
    
</script>

<div class="bg-slate-800 flex flex-col text-center items-center py-0">
    <div class="relative flex flex-col w-[90%] text-center bg-transparent items-center mx-auto">
        <img src="/general-img/marble.jpg" alt="" class="fixed w-[80%] h-[100%] object-cover z-[-1] opacity-75">
        <div class="text-3xl md:text-9xl font-bold text-white py-1 z-[5]">Gallery</div>
        <div bind:this={container} class="flex flex-col flex-wrap items-center justify-center md:flex md:flex-row gap-5 p-1 md:p-[3vw] md:px-[4vw] z-[2] mx-auto"/>
    </div>
    
</div>


