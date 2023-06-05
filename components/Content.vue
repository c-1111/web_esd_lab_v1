<template>
    <div class="content_holder flex flex-col">

        <!--AGENDA---------------------------------------------------------------->
        <div class="agenda items-center flex flex-col ml-0 mt-12 overflow-hidden">
            <div class="anuncios_gral_title rounded-full h5 bg-esd_gray_200 self-start mb-10">
                AGENDA
            </div>
            <div class="agenda_gallery flex flex-row gap-2 overflow-x-scroll w-full ">

                <card_evento class=" flex-none"/>
                <card_evento class=" flex-none"/>
                <card_evento class=" flex-none"/>
                <card_evento class=" flex-none"/>
                <card_evento class=" flex-none"/>
                <card_evento class=" flex-none"/>
                <card_evento class=" flex-none"/>
                <card_evento class=" flex-none"/>




            </div>
        </div>
        <!--AGENDA---------------------------------------------------------------->


        <!--anuncios general-->
        <div class="agenda items-center flex flex-col ml-0 mt-14 overflow-hidden">
            <div class="anuncios_gral_title rounded-full h5 bg-esd_gray_200 self-start mb-10">ANUNCIOS GENERALES
            </div>
            <div class="gral_gallery flex flex-row gap-4 overflow-x-scroll w-full">

                <card_gral class=" flex-none"/>
                <card_gral class=" flex-none"/>
                <card_gral class=" flex-none"/>
                <card_gral class=" flex-none"/>
                <card_gral class=" flex-none"/>
                <card_gral class=" flex-none"/>
                <card_gral class=" flex-none"/>
                <card_gral class=" flex-none"/>



            </div>
        </div>
        <!--anuncios general-->

        <!--anuncios estud-->
        <div class="agenda items-center flex flex-col ml-0 mt-14 overflow-hidden">
            <div class="anuncios_gral_title rounded-full h5 bg-esd_gray_200 self-start mb-10">ANUNCIOS ESTUDIANTILES
            </div>
            <section class="stud_gallery flex gap-4 overflow-x-scroll w-full ">

                <card_stud class=" flex-none"/>
                <card_stud class=" flex-none"/>
                <card_stud class=" flex-none"/>
                <card_stud class=" flex-none"/>
                <card_stud class=" flex-none"/>
                <card_stud class=" flex-none"/>
                <card_stud class=" flex-none"/>
                <card_stud class=" flex-none"/>

            </section>
        </div>
        <!--anuncios estud-->

    </div>
</template>


<style lang="sass">
.anuncios_gral_title
    width: 300px
    @apply flex justify-center shadow-md

//     transform: rotate(270deg)
//     transform-origin: left
//     margin-top: 8rem



</style>