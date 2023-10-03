<script>
    $: outerWidth = 0
    $: innerWidth = 0
    $: outerHeight = 0
    $: innerHeight = 0
    
</script>
<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div class="bg-lights bg-cover flex flex-col items-center p-5 py-10 font-bold text-white gap-4">
    <div class="text-4xl md:text-6xl border-white border-[5px] p-3 my-3">Andor Events</div>
    <a class="text-lg hover:text-cyan-500" href="tel:+14168412004">(416) 841-2004</a>
    <a class="text-lg hover:text-cyan-500" href="mailto:andor4events@gmail.com">andor4events@gmail.com</a>
</div>

