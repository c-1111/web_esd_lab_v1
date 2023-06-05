<template>
    <div class="articulo_title mt-20 mb-6 w-full">modelo de enseñanza</div>
    <div class="articulo_holder w-full flex flex-row gap-20">
        <div class="articulo_scroll_control w-[275px]">
            <div class="articulo_scroll_point" @click="scrollToElement1()">Misión</div>
            <div class="articulo_scroll_point" @click="scrollToElement2()">Visión</div>
            <div class="articulo_scroll_point" @click="scrollToElement3()">Valores</div>
            <div class="articulo_scroll_point" @click="scrollToElement4()">Nuestro proceso de enseñanza y aprendizaje</div>

        </div>
        <div class="articulo_content max-w-[640px]">
            <div class="articulo_section_title articulo_section_title1">Misión</div>
            <p> La Escuela Superior de Diseño es el centro público oficial que oferta en Madrid Enseñanza Superior en los
                niveles de grado y postgrado en diseño dentro del Espacio Europeo de Educación Superior a los estudiantes de
                diversos entornos económicos y culturales, de diversas nacionalidades e identidades.</p>
            <p>De financiación pública, la Escuela Superior de Diseño está comprometida con la innovación metodológica,
                poniendo en valor la tradición y rentabilizando los recursos que ofrecen los avances tecnológicos.</p>

            <ul>
                <p> En la Escuela Superior de Diseño de Madrid: </p>
                <li>
                    Ofertamos una enseñanza con competencias humanísticas, artísticas, tecnológicas y científicas que
                    permite a
                    los/as profesionales del diseño proponer soluciones a problemas complejos con respeto al medioambiente,
                    a la
                    diversidad, buscando el desarrollo de estrategias para afrontar retos y conformar, caracterizar y
                    mejorar la
                    sociedad y la calidad de vida de las personas en un entorno social en profunda transformación.</li>
                <li> Concebimos el diseño como pieza integradora en un entorno multicultural, un diseño transversal,
                    flexible, capaz
                    de prever y anticiparse a los cambios y necesidades de la sociedad. </li>
                <li> Entendemos el papel del diseñador como el del profesional que se integra en equipos multidisciplinares,
                    que
                    emprende propuestas propias, que interpreta y transforma un entorno saturado de información mejorando
                    los
                    recursos comunicativos, actualizando y optimizando las soluciones a los retos que los nuevos modos de
                    vida
                    requieren en nuestro hábitat, en la indumentaria que vestimos, en la configuración y producción de los
                    productos
                    que utilizamos, en los servicios y estrategias que se plantean los grupos humanos.Un profesional que
                    interviene
                    en el entorno doméstico, profesional y público, en el desarrollo de la actividad cotidiana y en aquellos
                    momentos que adquieren un significado simbólico.</li>

                <li> Entendemos el diseño como un proceso colaborativo y participamos con Instituciones públicas y privadas
                    para la
                    puesta en valor de nuestro patrimonio a través del diseño. </li>
                <li> Consideramos esencial la fluida y continua relación con el sector profesional y empresarial con los que
                    realizamos proyectos, procesos conjuntos y puesta en valor del diseño y prácticas formativas.
                    Creemos que en este mundo hiperconectado la colaboración entre instituciones de enseñanza superior del
                    ámbito
                    nacional e internacional es esencial por lo que desarrollamos programas internacionales de intercambio
                    de
                    estudiantes y profesores y estamos integrados en las asociaciones más prestigiosas de enseñanza del
                    diseño a
                    nivel mundial. </li>
            </ul>
            <div class=" articulo_section_title articulo_section_title2 pt-6">Visión</div>
            <p>
            Buscamos conseguir juntos, con la participación de todos los sectores educativos y de nuestro entorno social,
            institucional y profesional, una escuela superior de diseño pública, de referencia, abierta, colaborativa, que
            cultive la excelencia que emprende procesos de investigación en diseño.</p>

            <p> Un escuela que a través de una metodología innovadora sea capaz de identificar y proponer actualizaciones
            acordes los cambios de una sociedad en profunda transformación, una escuela conectada con la realidad
            profesional y social que forme profesionales del diseño capaces de ocupar los puestos de dirección y
            coordinación de las empresas, de dirigir, organizar y pensar globalmente, de investigar y replantearse su propio
            trabajo, participando activamente en los procesos de mejora de la sociedad en la que vivimos, anticipando las
            soluciones para la preservación de nuestro entorno natural y social. </p>
            <div class="articulo_section_title articulo_section_title3 pt-6">Valores</div>
            Formamos una comunidad educativa activa, solidaria, comprometida con el cuidado del entorno, que respeta la
            diversidad de culturas, de identidades de género, que busca superar las diferentes situaciones económicas y
            sociales, que considera la diversidad como un valor y una oportunidad, una comunidad educativa que es capaz de
            emprender proyectos ambiciosos para convertir las dificultades en una ocasión de mejora y aprendizaje
            colaborativo.

            Entendemos la enseñanza como un proceso abierto y versátil que debe contar necesariamente con el desarrollo de
            una red de sinergias con el mundo profesional con las instituciones y movimientos sociales, colaborando con los
            centros de enseñanza que comparten nuestros objetivos, buscando la conexión necesaria con las tendencias e
            inquietudes de los profesionales y docentes del ámbito nacional e internacional, generando oportunidades de
            intercambio de conocimiento y de experiencias.
            <div class="articulo_section_title articulo_section_title4 pt-6">Nuestro proceso de enseñanza y aprendizaje
            </div>
            Consideramos que el proceso de enseñanza/aprendizaje debe poner en valor el potencial de cada estudiante,
            acompañándole en el desarrollo de sus capacidades en función de sus objetivos como persona y como profesional
            del diseño, provocando el descubrimiento a través de la experiencia, generando narraciones críticas a partir de
            la información disponible y testada.

            Valoramos la importancia del proceso, de la huella que deja en el producto, en la solución resultante, creemos
            en una metodología de enseñanza abierta, transversal, versátil que permita al estudiante tener criterio propio e
            identificar oportunidades, poniendo en valor los conocimientos y destrezas tradicionales, buscando la innovación
            y aprovechando todas las oportunidades que ofrecen los avances tecnológicos.

        </div>
    </div>
</template>

<style lang="sass">

    .articulo_title
        @apply font-finl text-h3 font-bold
    .articulo_scroll_control
        .articulo_scroll_point
            @apply border-b border-esd_blck pb-4 mb-2 font-work font-semibold
    .articulo_content
        @apply font-work text-cuerpo 
        .articulo_section_title
            @apply font-finl font-bold mb-2 text-h4

p
    @apply mb-6
</style>

<script setup>


// ------------------------------------------AUTOSCROLL LISTA

const scrollToElement1 = () => {
    const element = document.querySelector(".articulo_section_title1");
    element.scrollIntoView({ behavior: 'smooth' });
}
const scrollToElement2 = () => {
    const element = document.querySelector(".articulo_section_title2");
    element.scrollIntoView({ behavior: 'smooth' });
}
const scrollToElement3 = () => {
    const element = document.querySelector(".articulo_section_title3");
    element.scrollIntoView({ behavior: 'smooth' });
}
const scrollToElement4 = () => {
    const element = document.querySelector(".articulo_section_title4");
    element.scrollIntoView({ behavior: 'smooth' });
}

// ------------------------------------------AUTOSCROLL LISTA


</script>