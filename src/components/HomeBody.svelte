<script>

    $: outerWidth = 0
    $: innerWidth = 0
    $: outerHeight = 0
    $: innerHeight = 0

    $: s1 = true;
    $: s2 = true;
    $: s3 = true;
    $: s4 = true;
    $: s5 = true;
    $: s6 = true;
    $: s7 = true;
    $: s8 = true;
    
    $: pictures = ['hslide0', 'hslide1', 'hslide2', 'hslide3', 'hslide4']
    $: index = 1
    //$: twClass = `rounded-lg w-[80vw] md:w-[32vw] h-[80vw] md:h-[32vw] bg-${pictures[index % pictures.length]} bg-cover`

    const incr = () => {
        index ++
        //twClass = `rounded-lg w-[80vw] md:w-[32vw] h-[80vw] md:h-[32vw] bg-${pictures[index % pictures.length]} bg-cover`
    }
    setInterval(incr, 2000)

</script>
<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div class="flex flex-col gap-3 text-center justify-center items-center bg-slate-800 text-white font-bold p-5">
    <div class="text-orange-300 text-2xl">Make your speical occasion magical.</div>
    <div class="text-md md:max-w-[50%]"> 
        From intimate gatherings to grand soirees, our expertise ensures every moment is crafted to perfection. 
        Elevate your experience with our unparalleled attention to detail and commitment to excellence.
        Begin the journey to your unforgettable event by exploring our services below. Entrust us with your celebration.
    </div>
    <div class="p-5">
        <div class="relative w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw]">
            <img src="/general-img/hslide{index % pictures.length}.jpg" alt="" class="absolute top-0 object-cover w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] opacity-50 z-1 rounded-lg">
            <div class="flex flex-col items-center justify-center bg-slate-900 w-[100%] h-[100%] rounded-lg z-10">
                <a href="/gallery" class="text-white text-xl font-bold border-white border-[3px] p-2 z-10">View Gallery</a>
            </div>
        </div>
    </div>
    <div class="text-orange-300 text-2xl">Our Services</div>
    <div class="text-left bg-orange-300 max-w-[70w] divide-y divide-slate-800 rounded-md">

        <div class="flex flex-row text-slate-800 w-[70vw] p-2" on:click = {() => {s1 = !s1}}>
            <div class="">Event Consultation</div>
            <div class="ml-auto">⌄</div>
        </div>
        <div class="w-[70vw] p-2 bg-orange-200 text-slate-700 duration-300 scale-0 scale-100 duration-300 text-xs" hidden={s1}>
            Dive deep into custom planning sessions meticulously tailored to reflect your unique vision. 
            We're here to guide, suggest, and perfect every idea you bring forward.
        </div>
        
        <div class="flex flex-row text-slate-800 w-[70vw] p-2" on:click = {() => {s2 = !s2}}>
            <div class="">Venue Selection</div>
            <div class="ml-auto">⌄</div>
        </div>
        <div class="w-[70vw] p-2 bg-orange-200 text-slate-700 duration-300 scale-0 scale-100 duration-300 text-xs" hidden={s2}>
            Discover handpicked venues that resonate with the ambiance you desire. 
            Whether you're aiming for grandeur, intimacy, or a specific theme, 
            we source the ideal locations to match your event's scale and mood.
        </div>
        
        <div class="flex flex-row text-slate-800 w-[70vw] p-2" on:click = {() => {s3 = !s3}}>
            <div class="">Catering Coordination</div>
            <div class="ml-auto">⌄</div>
        </div>
        <div class="w-[70vw] p-2 bg-orange-200 text-slate-700 duration-300 scale-0 scale-100 duration-300 text-xs" hidden={s3}>
            Feast your senses on everything from gourmet five-course dinners to artfully presented hors d'oeuvres. 
            With our expertise, we guarantee a culinary experience that not only tantalizes the taste buds but 
            also serves as a talking point among guests.
        </div>
        <div class="flex flex-row text-slate-800 w-[70vw] p-2" on:click = {() => {s4 = !s4}}>
            <div class="">Entertainment & Music</div>
            <div class="ml-auto">⌄</div>
        </div>
        <div class="w-[70vw] p-2 bg-orange-200 text-slate-700 duration-300 scale-0 scale-100 duration-300 text-xs" hidden={s4}>
            Elevate the mood with top-tier entertainers - be it pulsating DJs, soulful live bands, or majestic orchestral ensembles. 
            This, harmonized with state-of-the-art lighting and impeccable sound systems, promises a sensory treat.
        </div>
        <div class="flex flex-row text-slate-800 w-[70vw] p-2" on:click = {() => {s5 = !s5}}>
            <div class="">Decor & Theming</div>
            <div class="ml-auto">⌄</div>
        </div>
        <div class="w-[70vw] p-2 bg-orange-200 text-slate-700 duration-300 scale-0 scale-100 duration-300 text-xs" hidden={s5}>
            Whether you envision a setting of timeless elegance, playful whimsy, or a unique blend of styles, 
            we're poised to craft environments that breathe life into your chosen theme.
        </div>
        <div class="flex flex-row text-slate-800 w-[70vw] p-2" on:click = {() => {s6 = !s6}}>
            <div class="">Logistics & Transportation</div>
            <div class="ml-auto">⌄</div>
        </div>
        <div class="w-[70vw] p-2 bg-orange-200 text-slate-700 duration-300 scale-0 scale-100 duration-300 text-xs" hidden={s6}>
            Experience smooth, hassle-free movement of guests and resources. 
            We take care of all the behind-the-scenes coordination, ensuring timely arrivals and departures, 
            so you can focus on enjoying the event.
        </div>
        <div class="flex flex-row text-slate-800 w-[70vw] p-2" on:click = {() => {s7 = !s7}}>
            <div class="">Vendor Management</div>
            <div class="ml-auto">⌄</div>
        </div>
        <div class="w-[70vw] p-2 bg-orange-200 text-slate-700 duration-300 scale-0 scale-100 duration-300 text-xs" hidden={s7}>
            Collaborate seamlessly with a range of professionals, from skilled photographers to creative florists. 
            We manage these collaborations with precision, ensuring each vendor aligns perfectly with your event's objectives
        </div>
        <div class="flex flex-row text-slate-800 w-[70vw] p-2" on:click = {() => {s8 = !s8}}>
            <div class="">Day-of Coordination</div>
            <div class="ml-auto">⌄</div>
        </div>
        <div class="w-[70vw] p-2 bg-orange-200 text-slate-700 duration-300 scale-0 scale-100 duration-300 rounded-b-md text-xs" hidden={s8}>
            With our hands-on, dedicated team present on the event day, you're assured a flawless execution.
            We handle all real-time needs, adjustments, and coordination, ensuring your vision translates to reality without a hitch.
        </div>
    </div>
    










<!--     
       <div class="border-[2px] border-b-[0px] border-orange-300">Venue Selection</div>
       <div class="border-[2px] border-b-[0px] border-orange-300">Catering Coordination</div>
       <div class="border-[2px] border-b-[0px] border-orange-300">Entertainment & Audio-Visual</div>
       <div class="border-[2px] border-b-[0px] border-orange-300">Custom Decor & Theming</div>
       <div class="border-[2px] border-b-[0px] border-orange-300">Logistics & Transportation</div>
       <div class="border-[2px] border-b-[0px] border-orange-300">Vendor Management</div>
       <div class="border-[2px] border-orange-300">Day-of Coordination</div> -->

    <!-- </div> -->
    <a href="/events" class="text-lg py-2 px-8 bg-orange-300 text-slate-800 rounded-md">Events</a>
</div>

