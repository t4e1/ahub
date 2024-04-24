<template>
    <div class="post-container">
        <FairCard v-for="fair in fairList" :key="fair.fairId" :fair="fair"/>
    </div>
</template>

<script setup>
    import { onMounted, inject, defineProps } from "vue";
    import FairCard from "./FairCard.vue";

    const fairList = inject('postResult')
    // defineProps(['fairList']);

    onMounted(async () => {
        const response = await axios.get(`http://127.0.0.1:8000/board/fairs/lists?search_type=titleContent&search_condition=`);
        // fairs.value = response.data.result;
        // console.log(fairs.value);

        fairList.value = response.data.result;
    });

</script>

<style scoped>

</style>