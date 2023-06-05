import { provide } from "vue";

export const useAsignatura = () => {
  let isAsignaturaOpened = ref(false);

  const closeAsignatura = () => {
    isAsignaturaOpened.value = false;
  };

  const openAsignatura = () => {
    isAsignaturaOpened.value = true;
  };

  const toggleAsignatura = () => {
    isAsignaturaOpened.value = !isAsignaturaOpened.value;
  };

  provide("Asignatura", {
    isAsignaturaOpened,
    openAsignatura,
    closeAsignatura,
    toggleAsignatura,
  });
};

