
<template>
    <div class="ovelray w-screen h-screen bg-esd_gray_800 opacity-40 fixed m-0 z-20 ml-[-208px]" v-if="openedIndex >= 0"></div>

    <header class=" flex flex-row mt-4 items-center justify-between w-full relative z-30">
        <nav class=" flex flex-row gap-2 items-center">
            <button @click="toggleSidebar()" class="nav_item rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="none" viewBox="0 0 21 29">
                    <path fill="#0F0F0F"
                        d="M.5 28.5h20v-5a7.008 7.008 0 0 0-7-7h-6a7.008 7.008 0 0 0-7 7v5Zm3-21a7 7 0 1 0 14 0 7 7 0 0 0-14 0Z" />
                </svg>
            </button>


            <div class="dropdown_nav"><button @click.stop="openMenuByIndex(0)" class="nav_item header_buttons">e/s/d/<svg
                        xmlns="http://www.w3.org/2000/svg" width="20" height="12" fill="none" viewBox="0 0 20 12">
                        <path fill="#0F0F0F" d="M10 11.4 0 1.4 1.4 0 10 8.6 18.6 0 20 1.4l-10 10Z" />
                    </svg></button>
                <div v-if="openedIndex == 0" class="dropdown_cont ">
                    <a class="header_buttons" href="">contacto</a>
                    <a class="header_buttons" href="">sobre la escuela</a>
                    <a class="header_buttons" href="">estudios</a>
                    <a class="header_buttons" href="">modelo de enseñanza</a>
                    <a class="header_buttons" href="">estructura organizativa</a>
                    <a class="header_buttons" href="">normativa</a>
                    <a class="header_buttons" href="">servicios</a>
                    <a class="header_buttons" href="">póster</a>
                    <a class="header_buttons" href="">la escuela crece</a>
                    <a class="header_buttons" href="">e/s/d archivo</a>
                </div>
            </div>

            <div class="dropdown_nav"><button @click.stop="openMenuByIndex(1)" class="nav_item header_buttons">acceso<svg
                        xmlns="http://www.w3.org/2000/svg" width="20" height="12" fill="none" viewBox="0 0 20 12">
                        <path fill="#0F0F0F" d="M10 11.4 0 1.4 1.4 0 10 8.6 18.6 0 20 1.4l-10 10Z" />
                    </svg></button>
                <div v-if="openedIndex == 1" class="dropdown_cont ">
                    <a class="header_buttons" href="">jornada de puertas abiertas</a>
                    <a class="header_buttons" href="">inscripción</a>
                    <a class="header_buttons" href="">pruebas de acceso</a>
                    <a class="header_buttons" href="">calificaciones acceso</a>
                    <a class="header_buttons" href="">matriculación</a>
                    <a class="header_buttons" href="">acceso directo</a>
                    <a class="header_buttons" href="">prueba de madurez</a>
                    <a class="flex justify-between items-center" href="">acceso máster <svg
                            xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="none" viewBox="0 0 15 16">
                            <path fill="#0F0F0F"
                                d="M6.818 1.764V.4H0v15h15V8.582h-1.364v5.455H1.364V1.764h5.454ZM15 .4H8.182v1.364h4.485L6.339 8.103l.959.959 6.338-6.329V7.22H15V.4Z" />
                        </svg></a>
                </div>
            </div>

            <div class="dropdown_nav"><button @click.stop="openMenuByIndex(2)" class="nav_item header_buttons">académico<svg
                        xmlns="http://www.w3.org/2000/svg" width="20" height="12" fill="none" viewBox="0 0 20 12">
                        <path fill="#0F0F0F" d="M10 11.4 0 1.4 1.4 0 10 8.6 18.6 0 20 1.4l-10 10Z" />
                    </svg></button>
                <div v-if="openedIndex == 2" class="dropdown_cont ">
                    <a class="header_buttons" href="">instrucciones curso</a>
                    <a class="header_buttons" href="">calendarios 2022-2023 y horarios</a>
                    <a class="header_buttons" href="">guías docentes 2022-2023</a>
                    <a class="header_buttons" href="">optativas 2022-2023</a>
                    <a class="header_buttons" href="">talleres abiertos y clc 2022-2023</a>
                    <a class="header_buttons" href="">trabajo fin de grado</a>
                    <a class="header_buttons" href="">selección de tfgs y tfms</a>
                    <a class="flex justify-between items-center" href="">secretaría <svg xmlns="http://www.w3.org/2000/svg"
                            width="8" height="13" fill="none" viewBox="0 0 8 13">
                            <path fill="#0F0F0F" stroke="#0F0F0F" stroke-width=".3"
                                d="m7.108 7.004.1-.104-.1-.103-5.263-5.5-.108-.114-.109.114-.736.77-.1.103.1.104L5.319 6.9.892 11.527l-.1.103.1.104.736.77.109.113.108-.113 5.263-5.5Z" />
                        </svg></a>
                </div>
            </div>

            <div class="dropdown_nav"><button @click.stop="openMenuByIndex(3)" class="nav_item header_buttons">prácticas<svg
                        xmlns="http://www.w3.org/2000/svg" width="20" height="12" fill="none" viewBox="0 0 20 12">
                        <path fill="#0F0F0F" d="M10 11.4 0 1.4 1.4 0 10 8.6 18.6 0 20 1.4l-10 10Z" />
                    </svg></button>
                <div v-if="openedIndex == 3" class="dropdown_cont ">
                    <a class="header_buttons" href="">prácticas externas curriculares</a>
                    <a class="header_buttons" href="">prácticas externas extracurriculares</a>
                    <a class="header_buttons" href="">empresas colaboradoras</a>
                    <a class="header_buttons" href="">calendario de prácticas</a>
                    <a class="header_buttons" href="">documentación y formularios para prácticas</a>
                    <a class="header_buttons" href="">preguntas frecuentes</a>
                </div>
            </div>


            <div class="dropdown_nav"><button @click.stop="openMenuByIndex(4)" class="nav_item header_buttons">internacional<svg
                        xmlns="http://www.w3.org/2000/svg" width="20" height="12" fill="none" viewBox="0 0 20 12">
                        <path fill="#0F0F0F" d="M10 11.4 0 1.4 1.4 0 10 8.6 18.6 0 20 1.4l-10 10Z" />
                    </svg></button>
                <div v-if="openedIndex == 4" class="dropdown_cont">
                    <a class="header_buttons" href="">estrategia internacional</a>
                    <a class="header_buttons" href="">centros con convenio</a>
                    <a class="header_buttons" href="">movilidad estudiantes</a>
                    <a class="header_buttons" href="">movilidad profesores</a>
                    <a class="header_buttons" href="">erasmus incoming students</a>
                </div>
            </div>



            <div class="search_container"> <button @click.stop="openMenuByIndex(5)" class="search_icon pt-2 ml-4"><svg
                        xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 26 26">
                        <path fill="#0F0F0F" stroke="#0F0F0F" stroke-width=".4"
                            d="m25.141 23.386.142-.141-.142-.142-6.576-6.576a9.98 9.98 0 1 0-1.538 1.538l6.576 6.576.142.142.141-.142 1.255-1.255ZM3.007 10.296a7.79 7.79 0 1 1 7.79 7.79 7.798 7.798 0 0 1-7.79-7.79Z" />
                    </svg></button>
                <form v-if="openedIndex == 5"
                    class="search_modal pt-2 pb-2 flex bg-esd_gray_350 rounded-3xl mt-8 fixed px-3 ml-3">
                    <input class="header_buttons justify-center m-auto ml-3 mr-2 h-full bg-esd_gray_350" type="text"
                        placeholder="introduce tu búsqueda">
                </form>
            </div>
        </nav>
        <div class="esd_logo  ml-24 mr-4" :class="{ hidden: isSideBarOpened }">
            <nuxt-link to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="130" height="30" fill="none"
                    viewBox="0 0 204 47">
                    <path fill="#000"
                        d="M13.591 12.646c8.276 0 13.524 5.28 13.524 13.103v3.194c0 1.89-1.547 3.977-4.239 3.977H6.93v1.238c0 3.39 1.75 6.714 6.661 6.714 2.96 0 5.046-.717 6.796-1.368 1.01-.392 1.682-.587 2.355-.587 1.816 0 3.162 1.369 3.162 3.064 0 1.173-.538 2.216-1.817 2.803C21.06 46.283 16.148 47 13.591 47 4.911 47 0 41.394 0 33.897V25.75c0-7.888 5.248-13.103 13.591-13.103Zm0 6.193c-4.642 0-6.66 2.542-6.66 6.714v1.174h13.254v-.978c0-4.368-1.951-6.91-6.594-6.91ZM58.184 0c2.019 0 3.364 1.5 3.364 3.26 0 .39-.067.847-.269 1.368L44.66 44.914C44.122 46.153 42.911 47 41.43 47c-2.085 0-3.363-1.565-3.363-3.26 0-.39.067-.847.269-1.368l16.552-40.22C55.425.781 56.704 0 58.184 0Zm25.661 12.646c3.23 0 6.796.783 9.15 1.89 1.144.587 1.817 1.565 1.817 2.739 0 1.89-1.48 3.063-3.095 3.063-.673 0-1.346-.195-1.951-.39-1.75-.587-3.297-1.174-5.786-1.174-2.894 0-5.047 1.304-5.047 3.455 0 2.216 2.355 3.129 3.903 3.716l5.92 2.15c4.374 1.565 6.93 4.173 6.93 8.931 0 5.541-4.103 9.974-11.841 9.974-3.97 0-7.468-.913-9.756-2.02-1.144-.522-1.884-1.435-1.884-2.739 0-1.825 1.211-3.063 3.095-3.063.471 0 1.077.195 1.682.39 1.548.522 3.566 1.304 6.527 1.304 3.364 0 5.45-1.564 5.45-3.78 0-2.021-2.355-3.26-4.576-4.107l-5.517-2.086c-2.893-1.108-6.661-3.064-6.661-8.735 0-5.932 4.844-9.518 11.64-9.518ZM126.453 0c2.019 0 3.364 1.5 3.364 3.26 0 .39-.067.847-.269 1.368l-16.619 40.286C112.391 46.153 111.18 47 109.7 47c-2.086 0-3.364-1.565-3.364-3.26 0-.39.067-.847.269-1.368l16.551-40.22C123.695.781 124.973 0 126.453 0Zm38.378 0c2.018 0 3.498 1.369 3.498 3.325v38.134c0 1.76-1.144 3.26-2.893 3.846A34.297 34.297 0 0 1 154.738 47c-8.343 0-13.591-4.302-13.591-12.972v-8.41c0-8.539 5.248-12.972 12.918-12.972 2.153 0 5.046.652 7.334 1.89V3.326c0-1.956 1.48-3.325 3.432-3.325Zm-10.093 18.84c-4.373 0-6.661 2.215-6.661 6.387v9.192c0 4.107 2.355 6.453 6.661 6.453 2.288 0 4.575-.325 6.661-.912V21.055c-1.951-1.369-4.171-2.216-6.661-2.216ZM200.636 0C202.654 0 204 1.5 204 3.26c0 .39-.067.847-.269 1.368l-16.619 40.286c-.538 1.239-1.749 2.086-3.23 2.086-2.086 0-3.364-1.565-3.364-3.26 0-.39.067-.847.269-1.368l16.552-40.22C197.877.781 199.156 0 200.636 0Z" />
                </svg> </nuxt-link>
        </div>
    </header>
</template>

<style lang="sass">
    .nav_item
        @apply px-8 py-4 rounded-full bg-esd_gray_100 text-esd_gray_900 shadow-md flex justify-between items-center gap-[20px]
        &:hover
            @apply bg-esd_accent
        svg
            @apply pt-1 
    .dropdown_cont
        @apply flex flex-col gap-3 fixed mt-7 
        a
            @apply px-3 pt-2 pb-2 bg-esd_gray_350 rounded-3xl text-esd_gray_900 px-6 max-w-[205px] sticky
</style>





<script setup>
import { ref } from 'vue';
import { useSidebar } from '~/hooks/useSidebar';

useSidebar()
const { isSideBarOpened, toggleSidebar } = inject("sidebar");



const openedIndex = ref(-1)
const openMenuByIndex = (index) => {
    openedIndex.value = index
}
onMounted(() => {
    window.addEventListener("click", () => {
        openedIndex.value = -1
    })
})


</script>

