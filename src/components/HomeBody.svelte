<script>
    $: outerWidth = 0
    $: innerWidth = 0
    $: outerHeight = 0
    $: innerHeight = 0
    
    $: pictures = ['hslide0', 'hslide1', 'hslide2', 'hslide3', 'hslide4']
    $: index = 1
    $: twClass = "rounded-lg w-[80vw] md:w-[30] h-[80vw] md:h-[30vw] bg-hslide0 bg-cover"

    const incr = () => {
        index += 1
        twClass = `rounded-lg w-[80vw] md:w-[32vw] h-[80vw] md:h-[32vw] bg-${pictures[index % pictures.length]} bg-cover`
    }
    setInterval(incr, 2000)

</script>
<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div class="flex flex-col gap-3 text-center justify-center items-center bg-slate-800 text-white font-bold p-5">
    <div class="text-orange-300 text-2xl">Lorem ipsum dolor sit.</div>
    <div class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus autem voluptas maiores sed nam.</div>
    <div class="p-5">
        <div class={twClass}>
            <div class="flex flex-col items-center justify-center bg-black bg-opacity-30 w-[100%] h-[100%] rounded-lg">
                <a class="text-white text-xl font-bold border-white border-[3px] p-2">View Gallery</a>
            </div>
        </div>
    </div>
    <div class="text-orange-300 text-2xl">Lorem ipsum dolor sit.</div>
    <div class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus autem voluptas maiores sed nam.</div>
    <a href="" class="text-lg py-2 px-8 bg-orange-300 text-slate-800 rounded-md">Events</a>
</div>

