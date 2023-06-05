<template>
  <div class="home_holder flex flex-row w-full">
      <Aside />
      <div class="home_right ml-52 w-full">
          <Header />

          <ContentInformativa />

          <Footer />
      </div>
  </div>

</template>



<script setup>


let isSideBarOpened = ref(false)
const closeSidebar = () => {
  isSideBarOpened.value = false
}
const openSidebar = () => {
  isSideBarOpened.value = true
}
const toggleSidebar = () => {
  isSideBarOpened.value = !isSideBarOpened.value
}

provide("sidebar", {
isSideBarOpened, 
  openSidebar,
  closeSidebar,  
  toggleSidebar
})



</script>

