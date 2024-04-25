<template>
    <Banner />
    <div style="width: 100%; height: 800px;">

        <input type="text" id="sample4_postcode" placeholder="우편번호">
        <input type="button" @click="findAddress()" value="우편번호 찾기"><br>


    </div>
</template>

<script setup>
import Banner from '@/components/Banner/Banner.vue'

function findAddress() {
    new window.daum.Postcode({
        oncomplete: (data) => {
            console.log("받은 주소 : ", data)
            this.zoneCode = data.zonecode;
            this.address01 = data.address;
        }

    }).open()
}

</script>

<style scoped></style>