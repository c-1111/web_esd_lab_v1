<template>
    <div class="gral_card overflow-hidden shadow-md">
        <div class="card_pic"><img src="https://images.unsplash.com/photo-1557128928-66e3009291b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""></div>
        <div class="cardgral_cont">
        <div class="gral_card_title h3 text-esd_gray_800"><NuxtLink to="/informativa">Premiado</NuxtLink></div>
        <p class="gral_card_body body_small text-esd_gray_800">Información condensada de la card de la sección de anuncios generales.  </p>
    </div>
</div>
</template>

<style lang="sass">

.gral_card
    height: 350px
    width: 300px
    @apply flex flex-col bg-esd_gray_200 rounded-xl mb-5
    .card_pic
        img
            @apply top-0 w-full h-40 object-cover rounded-t-xl
    .cardgral_cont
        @apply flex flex-col justify-between pt-4 ml-4 h-full
        .gral_card_title
            @apply mr-6 
            &:hover
                 font-weight: bold
        .gral_card_body
            @apply mr-6 
</style>