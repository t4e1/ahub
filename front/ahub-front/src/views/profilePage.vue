<template>
    <section class="section">
        <profileTitle />
        <profileGrid />
    </section>
</template>

<script setup>
    import profileTitle from '@/components/00_member/profileTitle.vue';
    import profileGrid from '@/components/00_member/profileGrid.vue';
</script>

<style scoped>
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'GmarketSansMedium';
    }

    .section {
        width: 68%;
        margin: 20vh auto;
        height: auto;
        min-height: 100%;
    }
</style>