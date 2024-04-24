<template>
    <form class="input-form align">
        <div class="input-form-text">
            <label>아이디</label><br>
            <input class="input-style" type="text" ref="id" v-model.trim="member_id"><br>
            <label>비밀번호</label><br>
            <input class="input-style" type="password" ref="pwd" v-model.trim="member_pwd"><br>
            <label>이름</label><br>
            <input class="input-style required-text" type="text" ref="name" v-model.trim="member_name"><br>
            <label>주소</label><br>
            <input class="input-style" type="text" ref="addr" v-model="member_addr"><br>
            <label>이메일</label><br>
            <input class="input-style" type="text" ref="email" v-model.trim="member_email"><br>
            <label>전화번호</label><br>
            <input class="input-style" type="text" ref="phone" v-model.trim="member_phone"><br>
        </div>
        <div class="space">
            <input type="checkbox" id="agree_policy">
            <span>By signing up, I agree with the Terms of Use & Privacy Policy</span>
        </div>
        <div class="space">
            <span @click="changeRouter">Already have an account? <a href="#">Log in</a></span>
        </div>
        <button @click.prevent="[validateForm(), postData()]">Sign up</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

import axios from 'axios';
import router from '@/router/router';

const member_id = ref('');
const member_pwd = ref('');
const member_name = ref('');
const member_addr = ref('');
const member_email = ref('');
const member_phone = ref('');

const postData = async () => {
    // localhost 포트번호 변경, /api 붙이기
    await axios.post("http://localhost:5173/api/member/regist", {
        memberId: member_id.value,
        memberPwd: member_pwd.value,
        memberName: member_name.value,
        memberAddr: member_addr.value,
        memberEmail: member_email.value,
        memberPhone: member_phone.value,
    },{ "Content-Type": "application/json", withCredentials: true }
    ).then((response) => {
        if (response.status == 201) {
            alert(`${member_id.value}님 회원 가입이 완료되었습니다.`)
            console.log('response status: ', response.status);
            console.log('response data: ', response.data);
        }
    }).catch((e) => {
        console.log('회원 가입에 실패하였습니다.');
        // DB 조회 후 중복되는 값이 있는지 확인하는 코드 추후에 추가
    })
};

function validateForm() {
    var agreementCheckbox = document.getElementById("agree_policy");

    if (member_id.value == '') {
        alert('아이디를 입력해주세요');
        return false;
    } else if (member_pwd.value == '') {
        alert('비밀번호를 입력해주세요');
        return false;
    } else if (member_name.value == '') {
        alert('이름을 입력해주세요');
        return false;
    } else if (member_email.value == '') {
        alert('이메일을 입력해주세요');
        return false;
    } else if (member_phone.value == '') {
        alert('전화번호를 입력해주세요');
        return false;
    } else if (!agreementCheckbox.checked) {
        alert("회원 가입 약관에 동의해주세요.");
        return false;
    } else {
        console.log('회원 정보 입력 확인')

        router.push('/login');

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
    font-size: 12px;
}

.align {
    text-align: center;
}

.input-form {
    width: 50vh;
    margin: 0 auto;
}

.input-form-text {
    text-align: left;

}

.required-text {
    border: 2px solid red;
}

.input-style {
    width: 50vh;
    padding: 8px 14px;
    margin: 3px 0 10px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #fefefe
}

span {
    font-size: 12px;
}

.space {
    margin: 10px 0 10px 0;
}

input[type=checkbox] {
    accent-color: #6D31ED;
}

button {
    background-color: #6D31ED;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-style: bold;
    width: 30vh;
}
</style>