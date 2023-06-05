<template>
    <div class="aside w-80 min-w-[430px] max-w-[430px] pr-11 mr-[-208px]" :class="{ hidden: !isSideBarOpened }">
        <div class="desplegable_title pl-12 pt-6 mb-8 text-[1.5rem] ">
            area personal
        </div>
        <div class="desplegable_content">
            <user_card />

            <div class="desplegable_option flex flex-col gap-6">
                <div class="desplegable_thumb flex flex-row items-center justify-between w-full">
                    <div class="option_title h4">Mis asignaturas</div>
                    <div class="desplegable_icon pr-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="8"
                            fill="none" viewBox="0 0 12 8">
                            <path fill="#0F0F0F" d="m6 7.7-6-6L1.4.3 6 4.9 10.6.3 12 1.7l-6 6Z" />
                        </svg></div>
                </div>

                <div class="desplegable_asignaturas_container flex flex-col gap-3 w-[353px]">

                    <!--ASIGNATURA -------------------------->

                    <div class="desp_asignatura rounded-2xl bg-esd_gray_350 text-esd_gray_800 px-6 py-4 w-full mb-2">
                        <div class="asignatura_top mb-4">
                            <div class="asignatura_title h3 mb-2">Expresión fotográfica</div>
                            <div class="asignatura_teacher flex items-center body_semibold gap-4 mt-4">
                                <div class="teacher_pic"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="none" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="12" fill="#DEDEDE" />
                                    </svg></div>
                                <div class="teacher_name">Pablo María García Llamas</div>
                            </div>
                        </div>
                        <div class="asignatura_bottom flex items-center gap-4 mt-7">
                            <div class="mostrar_entregas body_caption"> Mostrar entregas</div>
                            <div class="entregas_toggle"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="15"
                                    fill="none" viewBox="0 0 34 15">
                                    <rect width="34" height="15" fill="#C8C8C8" rx="7.5" />
                                    <rect width="11" height="11" x="3" y="2" fill="#F7F7F7" rx="5.5" />
                                </svg></div>
                        </div>
                    </div>

                    <!--ASIGNATURA -------------------------->

                    <!-- <div class="desp_asignatura rounded-2xl bg-esd_gray_350 text-esd_gray_800 px-6 py-4 w-full mb-2">
                        <div class="asignatura_top mb-4">
                            <div class="asignatura_title h3 mb-2">Expresión fotográfica</div>
                            <div class="asignatura_teacher flex items-center body_semibold gap-4 mt-4">
                                <div class="teacher_pic"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="none" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="12" fill="#DEDEDE" />
                                    </svg></div>
                                <div class="teacher_name">Pablo María García Llamas</div>
                            </div>
                        </div>
                        <div class="asignatura_bottom flex items-center gap-4 mt-7">
                            <div class="mostrar_entregas body_caption"> Mostrar entregas</div>
                            <div class="entregas_toggle"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="15"
                                    fill="none" viewBox="0 0 34 15">
                                    <rect width="34" height="15" fill="#C8C8C8" rx="7.5" />
                                    <rect width="11" height="11" x="3" y="2" fill="#F7F7F7" rx="5.5" />
                                </svg></div>
                        </div>
                    </div> -->


                </div>


            </div>


            <div class="desplegable_option">
                <div class="option_title h4">Mi calendario</div>
                <div class="desplegable_icon pr-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" fill="none"
                        viewBox="0 0 12 8">
                        <path fill="#0F0F0F" d="m6 7.7-6-6L1.4.3 6 4.9 10.6.3 12 1.7l-6 6Z" />
                    </svg></div>


            </div>
            <div class="desplegable_option">
                <div class="option_title h4">E/S/D archivo</div>
                <div class="desplegable_icon pr-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" fill="none"
                        viewBox="0 0 12 8">
                        <path fill="#0F0F0F" d="m6 7.7-6-6L1.4.3 6 4.9 10.6.3 12 1.7l-6 6Z" />
                    </svg></div>
            </div>
            <div class="desplegable_option flex flex-col gap-6">
                <div class="desplegable_thumb flex flex-row items-center justify-between w-full" >
                    <div class="option_title h4">Biblioteca</div>
                    <div class="desplegable_icon pr-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="8"
                            fill="none" viewBox="0 0 12 8">
                            <path fill="#0F0F0F" d="m6 7.7-6-6L1.4.3 6 4.9 10.6.3 12 1.7l-6 6Z" />
                        </svg></div>
                </div>
                <div class="biblioteca_content hidden">
                    La Biblioteca de la ESD cuenta con un fondo documental de más de 3.500 ejemplares. Especializada en las
                    diferentes ramas del diseño impartidas en el centro (Diseño Gráfico, de Producto, de Interiores y de
                    Moda) y materias afines. El objetivo de este servicio es poner a disposición de los usuarios de la
                    escuela la documentación necesaria y de interés   para el desarrollo de la docencia. 

                    HORARIO DE ACCESO, PRÉSTAMO E INFORMACIÓN BIBLIOGRÁFICA 
                    Lunes a Viernes de 8:00 a 15:00

                    SERVICIOS
                    Información bibliográfica y documental
                    Préstamo domiciliario: se prestarán como máximo, tres documentos (cada documento se prestará por un
                    periodo de 15 días, renovable una vez. El retraso en la devolución de los documentos podrá suponer la
                    suspensión del servicio).
                    Consulta en Sala
                    Formación de usuarios
                    Solicitud de nuevas adquisiciones
                    Reproducción de documentos (según legislación vigente)

                    Para cualquier consulta acerca de este servicio, escribir a biblioteca@esdmadrid.org 
                    <div class="biblioteca_cta text-center w-full bg-esd_gray_700 text-esd_gray_200 py-1 mb-4 mt-4 rounded-2xl"> <span class="body_semibold"> ACCEDER AL CATÁLOGO </span> (enlace externo)</div>
                </div>
                
            </div>
            <div class="desplegable_option">
                <div class="option_title h4">Mi expediente</div>
                <div class="desplegable_icon pr-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" fill="none"
                        viewBox="0 0 12 8">
                        <path fill="#0F0F0F" d="m6 7.7-6-6L1.4.3 6 4.9 10.6.3 12 1.7l-6 6Z" />
                    </svg></div>
            </div>
            <div class="desplegable_option text-esd_gray_700">
                <div class="option_title h4">Cerrar sesión</div>
                <div class="desplegable_icon fill-esd_gray_600 pr-2"><svg xmlns="http://www.w3.org/2000/svg" width="14"
                        height="18" fill="none" viewBox="0 0 14 18">
                        <path class="fill-esd_gray_700"
                            d="M1.167 17.5h7c.309 0 .606-.128.824-.356.219-.228.342-.536.342-.858v-1.822H8.167v1.822h-7V1.714h7v1.822h1.166V1.714c0-.322-.123-.63-.342-.858A1.145 1.145 0 0 0 8.167.5h-7C.857.5.56.628.342.856A1.241 1.241 0 0 0 0 1.714v14.572c0 .322.123.63.342.858.219.228.515.356.825.356Z" />
                        <path class="fill-esd_gray_700"
                            d="m9.606 11.86 2.126-2.235H3.333V8.378h8.399L9.606 6.143l.838-.881L14 9.002l-3.556 3.74-.838-.882Z" />
                    </svg></div>
            </div>

        </div>
    </div>
</template>

<style lang="sass">
.desplegable_option
    @apply flex items-center px-2 py-2 shadow-md justify-between w-full mb-8 rounded-r-2xl bg-esd_gray_100
    &:hover
        @apply bg-esd_gray_200
    .option_title h4
        @apply ml-2


</style>

<script setup>

const { isSideBarOpened } = inject("sidebar");

// const desplegableThumb = document.querySelector(".desplegable_thumb")
// const contenidoDesplegableBiblioteca = document.querySelector(".biblioteca_content")

// const showBiblioteca = () => {
//     addEventListener.apply('click').contenidoDesplegableBiblioteca.classList.remove(".hidden")
// }

// showBiblioteca()

</script>