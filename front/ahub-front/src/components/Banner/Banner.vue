<template>
    <div class="banner">
        <div id="demo" class="carousel slide" data-bs-ride="carousel">

            <!-- Indicators/dots -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>

            <!-- The slideshow/carousel -->
            <div class="carousel-inner">
                <div class="carousel-item active" @click="toPost(3)">
                    <img src="@/assets/img/banner3.png" alt="banner_img" height="200" width="100%">
                </div>
                <div class="carousel-item" @click="toPost(2)">
                    <img src="@/assets/img/banner2.png" alt="banner_img" height="200" width="100%">
                </div>
                <div class="carousel-item" @click="toPost(4)">
                    <img src="@/assets/img/banner1.png" alt="banner_img" height="200" width="100%">
                </div>
            </div>

            <!-- Left and right controls/icons -->
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
    function toPost(num) {
        router.push(`/board/fairs/${num}`)
    }
</script>

<style scoped>
.banner {
    grid-area: banner;
}

.carousel-inner :hover {
    cursor: pointer;
}

</style>