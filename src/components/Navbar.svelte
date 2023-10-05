<script>
    $: outerWidth = 0
    $: innerWidth = 0
    $: outerHeight = 0
    $: innerHeight = 0

    let menuExpanded = false;
    
    function menuClickHandler() {
        menuExpanded = !menuExpanded;
        console.log('hello');
    }
    
</script>
<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />
    <div class="sticky top-0 h-20 md:h-30  flex flex-row bg-slate-900 text-white sticky top-0 font-bold text-lg md:text-4xl p-2 items-center z-[100]">

        <a href="/"><div class="mr-auto ml-4 border-4 border-white p-2">Andor Events</div></a>

    <!-- Desktop Logic -->
        {#if outerWidth >= 700}
        <div class="flex flex-row ml-auto gap-6 items-center text-4xl mr-4">
            <a href="#"><div class="hover:scale-[1.05]">Weddings</div></a>
            <a href="#"><div class="hover:scale-[1.05]">Events</div></a>
            <a href="/gallery"><div class="hover:scale-[1.05]">Gallery</div></a>
        </div>
        {/if}

        


    <!-- Mobile Logic -->
        {#if outerWidth < 700}
        <button class="md:hidden ml-auto mr-4 justify-center {menuExpanded ? "gap-4" : "gap-3"} duration-300 flex flex-col" on:click={menuClickHandler}>
            <div id="h1" class="bg-white h-[3px] w-12"></div>
            <div id="h2" class="bg-white h-[3px] w-12"></div>
            <div id="h3" class="bg-white h-[3px] w-12"></div>
        </button>
        {/if}
    </div>
    {#if menuExpanded}
        <div class="fixed w-full top-30 px-10 bg-slate-700 flex flex-col items-center gap-5 text-white font-bold text-2xl z-[100] divide-y divide-slate-900">
            <a href="https://www.youtube.com/"><div id="weddingsLink" class="py-2">Weddings</div></a>
            <a href="/events"><div id="weddingsLink" class="py-2">Events</div></a>
            <a href="/gallery"><div id="weddingsLink" class="py-2">Gallery</div></a>
        </div>
    {/if}




