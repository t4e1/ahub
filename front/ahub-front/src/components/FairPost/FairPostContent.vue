<template>
    <div v-if="isTrue">
        <div class="fairinfo">
            <img :src="fairInfo.thumImage" alt="fair1_img" height="480px" width="370px">
        </div>
        <div class="fairtitlediv">
            <h1 class="fairtitle">{{ fairInfo.fairTitle }}</h1>
        </div>
        <div class="tags-container1">
            <button class="tagbtn1">태그</button>
            <button class="tagbtn2">#{{ fairInfo.fairTag1 }}</button>
            <button class="tagbtn3">#{{ fairInfo.fairTag2 }}</button>
            <button class="tagbtn4">#{{ fairInfo.fairTag3 }}</button>
        </div>
        <div class="tags-container2">
            <button class="tagbtn5">개최일</button>
            <button class="tagbtn6">{{ fairInfo.fairStartdate }}</button>
            <h3>~</h3>
            <button class="tagbtn6">{{ fairInfo.fairEnddate }}</button>
        </div>
        <div class="tags-container3">
            <button class="tagbtn8">장소</button>
            <button class="tagbtn9">{{ fairInfo.fairLocation }}</button>
        </div>
        <hr class="titleLine">
        <div class="fairdetaildiv">
            <button class="fairdetail">상세 정보</button>
        </div>
        <div class="maincontent">
            <p>
                {{ fairInfo.fairContent }}
            </p>
        </div>
    </div>
    <div v-if="!isTrue" class="no-post-content">
        <img src="@/assets/img/no-post-content.png" alt="검색 결과 없음" class="no-post-img">
    </div>
    
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const fairInfo = ref({});
const isTrue = ref(false);

onMounted(
    async () => {
        console.log('params가져오는지', route.params.fairId)
        const fairId = route.params.fairId;
        const response = await axios.get(`http://127.0.0.1:8000/board/fairs/${fairId}`);
        fairInfo.value = response.data.result;
        console.log('테스트',fairInfo.value);

        if (!isNaN(fairId)) {
            isTrue.value = true;
        }
        if (fairInfo.value == undefined) {
            isTrue.value = false;
        } else {
            isTrue.value = true;
        }
    });

</script>

<style scoped>
.fairinfo img {
    display: block;
    margin-left: 15%;
    margin-top: -2%;
    margin-bottom: -31%;
}

.fairtitle {
    font-size: 30px;
    margin-left: 48%;
    margin-top: 10%;
    margin-bottom: 20%;
}


.tags-container1 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 50%;
    margin-top: -18%;
    margin-bottom: 18%;
}

.tagbtn1,
.tagbtn2,
.tagbtn3,
.tagbtn4 {
    border: none;
    padding: 10px 20px;
    font-size: 12px;
    width: 100px;
    height: 40px;
    font-weight: bold;
}

.tagbtn1 {
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.tagbtn2 {
    border-radius: 20px;
    background-color: #e0f7fa;
    color: #0072e4c6;
}

.tagbtn3 {
    border-radius: 20px;
    background-color: #e9dfff;
    color: #8c52ff;
}

.tagbtn4 {
    border-radius: 20px;
    background-color: #cbffe3c6;
    color: #00a84ec6;
}

.tags-container2 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 50%;
    margin-top: -17%;
    margin-bottom: 17%;
}

.tagbtn5,
.tagbtn6,
.tagbtn7 {
    border: none;
    padding: 10px 20px;
    font-size: 12px;
    font-weight: bold;
}

.titleLine {
    width: 70%;
    margin-left: 15%;
    height: 2px;
    border: 0;
    background-color: grey;
    margin-top: -4%;
}

.tagbtn5 {
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    width: 100px;
    height: 40px;
}

.tagbtn6 {
    border: 2px solid rgb(185, 182, 195);
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.tagbtn7 {
    border: 2px solid rgb(185, 182, 195);
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.tags-container3 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 50%;
    margin-top: -16%;
    margin-bottom: 16%;
}

.tagbtn8,
.tagbtn9 {
    border: none;
    padding: 10px 20px;
    font-size: 12px;
    font-weight: bold;
}

.tagbtn8 {
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    width: 100px;
    height: 40px;
}

.tagbtn9 {
    border: 2px solid rgb(185, 182, 195);
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.fairdetail {
    margin-top: 2.5%;
    margin-left: 19%;
    margin-bottom: 60%;
    border-radius: 10px;
    background-color: #e9dfff;
    color: #8c52ff;
    font-size: 20px;
    border: none;
    padding: 10px 20px;
    font-weight: bold;
}

.maincontent {
    font-size: 15px;
    max-width: 80%;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: -57%;
    margin-bottom: 20%;
}

.no-post-content {
    display: flex;
    align-items: center;
    justify-content: center;
}   

.no-post-img {
    margin-top : 20px;
    margin-bottom : 60px;
}
</style>