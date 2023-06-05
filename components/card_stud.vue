<template>
    <div class="stud_card">
        <div class="stud_card_cont p-4 h-full flex flex-col justify-between">
        <div class="stud_top flex flex-col gap-2">
        <div class="stud_card_title h3 text-esd_gray_800">Talleres en el jardín</div>
        <div class="stud_card_date body_caption text-esd_gray_800">12/04</div>
    </div>
        <div class="stud_card_body body_small text-esd_gray_800">Desde la Comisión de Convivencia de la ESD os invitamos a colaborar con la asignatura de Proyecto de Jardín de interiores. </div>
    
        </div>
        <div class="img_hover"><img src="https://plus.unsplash.com/premium_photo-1673340684095-9967791eea84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt=""></div>

    </div>
</template>

<style lang="sass">

.stud_card
    height: 240px
    width: 300px
    scroll-snap-align: start

    @apply flex flex-col font-finl rounded-md shadow-md  justify-between bg-esd_gray_200 relative overflow-hidden mb-6
    .img_hover
        @apply  absolute top-0 left-0 opacity-0 
        width: 500px
        &:hover
                @apply  opacity-100 



</style>