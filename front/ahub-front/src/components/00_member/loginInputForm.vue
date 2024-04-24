<template>
    <form class="align">
        <div class="input-form">
            <label for="member_id">아이디</label><br>
            <input class="input-style" type="text" id="member_id" v-model.trim="member_id"><br>
            <div class="span-margin">
                <input type="checkbox" id="remember_id">
                <span>아이디 저장</span>
            </div>
            <label for="member_pwd">비밀번호</label><br>
            <input class="input-style" type="password" id="member_pwd" v-model.trim="member_pwd"><br>
            <div class="find-id-pwd-regist span-margin">
                <span><a href="#">아이디 찾기</a> | </span>
                <span><a href="#">비밀번호 찾기</a> | </span>
                <span><a href="#"><RouterLink to ='/member/regist'>회원 가입</RouterLink></a> </span>
            </div>
        </div>
        <button @click.prevent="[inputCheck(), tokenData()]">Login</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from "axios";
import { RouterLink } from 'vue-router';
import router from '@/router/router';

const member_id = ref('');
const member_pwd = ref('');

const tokenData = async () => {
    await axios.post("http://localhost:5173/api/login",
    {
        memberId: member_id.value,
        memberPwd: member_pwd.value
    }).then ((response) => {    // then: post 요청 성공 시 동작할 콜백 함수 등록
        if(response.status == 200) {
            console.log('response status: ', response.status);
            console.log('response headers: ', response.headers);

            // 토큰 및 아이디 로컬 스토리지에 저장
            localStorage.setItem('token', response.headers.token)
            localStorage.setItem('member_id', member_id.value)

            router.push('/');
        }
    }).catch ((e) => {
        console.log('로그인 실패');
        alert('입력한 정보가 유효하지 않습니다. 아이디와 비밀번호를 확인해주세요.');
    })
};

function inputCheck() {
    if(member_id.value == ''){
        alert('아이디를 입력해주세요.');
        return false;
    } else if (member_pwd.value == ''){
        alert('비밀번호를 입력해주세요.');
        return false;
    } else {
        // 서버 연동하여 토큰값 가져온 후 유효성 검사 코드 추가
        console.log('입력 정보 확인 완료');
        console.log(member_id.value);
        console.log(member_pwd.value);
        return true;
    }
}

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

.align {
    text-align: center;
}

.input-form {
    width: 50vh;
    margin: 0 auto;
    text-align: left !important;
}

.input-style {
    width: 50vh;
    padding: 8px 14px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #fefefe
}

input[type=checkbox] {
    accent-color: #6D31ED;
}

.span-margin {
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 1.5rem;
}

.find-id-pwd-regist {
    text-align: right;
}

button {
    background-color: #6D31ED;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-style: bold;
    width: 30vh;
}
</style>