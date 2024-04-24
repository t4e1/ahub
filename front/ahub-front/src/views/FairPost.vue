<template>
    <div class="board-title">
        <h1 class="boardname"  @click="toBoard">페어 정보</h1>
    </div>
    <div class="editbtndiv">
        <button class="editbtn" @click="toEdit">게시글 수정</button>
    </div>
    <hr class="boardtitleLine">
    <FairPostContent/>
</template>

<script setup>
import { useRouter } from 'vue-router';
import FairPostContent from '@/components/FairPost/FairPostContent.vue';

const router = useRouter();

function toBoard() {
    router.push('/board/fairs');
}

function toEdit() {
    router.push('/board/fairs/edit')
}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.board-title :hover {
    cursor: pointer;
}

.boardname {
    font-size: 30px;
    margin-top: 1.5%;
    margin-left: 15%;
}

.editbtn {
    background-color: #8c52ff;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-style: bold;
    margin-top: -3%;
    margin-right: 15%;
    float: right;
    font-weight: bold;
}

.boardtitleLine {
    margin-top: 1px;
    margin-bottom: 70px;
    margin-left: 15%;
    width: 70%;
    height: 3px;
    border: 0;
    background-color: #8c52ff;
}


</style>