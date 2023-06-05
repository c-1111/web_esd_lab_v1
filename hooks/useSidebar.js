import { provide } from "vue";

export const useSidebar = () => {
  let isSideBarOpened = ref(false);

  const closeSidebar = () => {
    isSideBarOpened.value = false;
  };

  const openSidebar = () => {
    isSideBarOpened.value = true;
  };

  const toggleSidebar = () => {
    isSideBarOpened.value = !isSideBarOpened.value;
  };

  provide("sidebar", {
    isSideBarOpened,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  });
};

