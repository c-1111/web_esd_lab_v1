
<template>
    <div class="evento_box ">
        <div class="evento_top ">
            <div class="evento_title h3">EVENTO 1</div>
        </div>
        <div class="evento_data ">
            <div class="lugar body_caption">Madri</div>
            <div class="fecha body_caption">13/07</div>
            <div class="hora body_caption">17:00</div>
        </div>
    </div>
</template>

<style lang="sass">

.evento_box
    @apply h-[120px] w-[430px] border-r-esd_gray_600 border-r-2 w-fit pr-8 mr-6 mb-6 mt-5 rounded-l-xl pl-4 py-2
    &:hover
        @apply bg-esd_gray_200 
    .evento_top
        @apply flex flex-row justify-between
        .evento_title

    .evento_data
        @apply flex flex-row mt-16 gap-16 mr-1 
   
</style>

