<template>
    <div class="home_holder flex flex-row">
        <Aside />
        <div class="home_right top-0 ml-52 w-full">
            <Header />

            <Content />

            <Footer />
        </div>
    </div>
    
</template>

<script setup>

import { useSidebar } from '~/hooks/useSidebar';
useSidebar()

</script>

<style lang="sass">
.home_holder
    @apply overflow-x-hidden
    .home_right
        max-width: calc(100vw - 210px)  

</style>

<!-- TRABAJAR EN EL SIDEBAR, ANIMACIONES, CAMBIAR LOS ICONOS Y HACERLOS MÁS PEQUEÑOS -->
