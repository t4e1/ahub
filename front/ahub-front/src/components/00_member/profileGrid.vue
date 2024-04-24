<template>
    <div class="wrapper">
        <div class="left-box item img-box-wrapper">
            <div class="img-box">
                <img src="@/assets/img/image.png" alt="profile"
                    class="profile-img">
            </div>
        </div>
        <div class="right-box item">
            <h3>{{ profile.info.memberId }}</h3>
            <p class="introduction-box">
                내 소개가 아직 없습니다!
            </p>
        </div>

        <div class="left-box item">
            <div>이메일</div>
            <br>
            <div>주소</div>
            <br>
            <div>핸드폰 번호</div>
        </div>
        <div class="right-box item">
            <div>{{ profile.info.memberEmail }}</div>
            <br>
            <div>{{ profile.info.memberAddr }}</div>
            <br>
            <div>{{ profile.info.memberPhone }}</div>
        </div>
    </div>
    <div class="quit-wrapper">
        <span>
            <button class="modify-btn">수정</button>
            <button class="quit-btn">회원 탈퇴</button>
        </span>
    </div>
    <!-- <button @click="getData"></button> 버튼 누르면 axios 동작되도록 할 때 -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// axios로 받아온 데이터를 저장할 profile 객체 생성
const profile = ref({
    info: {}    // promise 타입으로 넘어온 객체의 데이터를 사용하기 위해 info 배열에 담아서 꺼내오도록 함
});

const currentMember = localStorage.getItem('member_id');

const getData = async (e) => {
    axios.get(
        // localhost 포트번호 변경, /api 붙이기
        `http://localhost:5173/api/member/findMyprofile/${currentMember}`
    ).then((response) => {
        // console.log(response.data);
        if (response.status == 200) {
            profile.value = { info: response.data };        // profile 객체의 info 배열에 넘어온 데이터를 저장
            console.log('response.data: ', response.data)
            console.log('profile: ', profile.value);
            // console.log('profile.info: ', profile.value.info)
        }
    }).catch((e) => {
        console.log('데이터 못가져왔다')
    });

    // fetch('http://localhost:5174/api/member/findMyprofile/user01')
    // .then((res) => res.json())
    // .then((data) => console.log(data));
    // const data = await response.json();
    // console.log(data);
}
onMounted(() => {
    getData();
})


</script>

<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 10px;
    padding: 40px;
    padding-top: 80px;
    background-color: #f9f9f9;
}

.align {
    text-align: center;
}

.quit-wrapper {
    text-align: right;
}

span>button {
    color: white;
    width: 80px;
    height: 40px;
    margin: 5px;
    padding: 10px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
}

.modify-btn {
    background-color: #6D31ED;
}

.quit-btn {
    background-color: #5c5c5c;
}

.img-box-wrapper {
    justify-self: end;
}

.img-box {
    width: 150px;
    height: 150px;
    border-radius: 70%;
    overflow: hidden;
}

.profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

h3 {
    font-weight: 700;
}
.introduction-box {
    width: 60%;
    height: 50%;
    font-size: 12px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 4px;
    background-color: #ccc;
}

.left-box {
    padding: 20px;
    text-align: right;
}

.right-box {
    padding: 20px;
}
</style>