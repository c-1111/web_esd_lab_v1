<template>
    <div class="user_card bg-esd_gray_200 flex flex-row justify-between px-2 pt-4 py-5 mb-12 rounded-r-2xl gap-3 items-end">
        <div class="user_layout flex flex-row  gap-3">
            <div class="user_left_pic min-w-[30px]"><img src="../public/img/user_pic.png" alt=""></div>
            <div class="user_content flex flex-col gap-4">
                <div class="user_cont_top">User Name</div>
                <div class="user_cont_bttm flex flex-rox gap-2">
                    <div class="usr_pill rounded-full bg-esd_gray_400 text-xs items-center px-2">alumno</div>
                    <div class="usr_pill rounded-full bg-esd_gray_400 text-xs items-center px-2">grafico</div>
                    <div class="usr_pill rounded-full bg-esd_gray_400 text-xs items-center px-2">3º</div>
                </div>
            </div>
        </div>
        <div class="user_settings flex flex-col gap-2">
            <div class="settings_icon">
                <img src="/img/usr_settings_(2).png" alt="">
            </div>
            <div class="settings_icon">
                <img src="/img/usr_settings_(1).png" alt="">
            </div>

        </div>
    </div>
</template>

<style lang="sass">

.user_cont_top
    .user_cont_bttm
        .usr_pill

            @apply rounded-full bg-esd_gray_400


</style>