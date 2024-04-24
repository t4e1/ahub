<template>
    <div class="wrapper">
        <section>
            <loginTitle/>
            <loginInputForm/>
        </section>
    </div>
</template>

<script setup>
import loginTitle from '@/components/00_member/loginTitle.vue';
import loginInputForm from '@/components/00_member/loginInputForm.vue';
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

    .wrapper {
        margin: 16vh;
        height: auto;
        /* min-height: 100%; */
    }

</style>