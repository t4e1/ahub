<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';

const router = useRouter();
function login() {
  router.push('/login');
}

function profile() {
  router.push('/member/findMyprofile/:id');
}

const loginState = ref('로그인');
let loginCheck = localStorage.getItem('member_id');

const clickLoginBtn = () => {
    if (loginState.value == '로그인') {
    } else {
        localStorage.clear();
        loginCheck = null;
        loginState.value = '로그인';
    }
    router.push('/login');
};

if (localStorage.getItem('member_id') !== null) {
  loginState.value = '로그아웃';
}

// watch(loginCheck, (newValue, oldValue) => {
//   if(newValue !== null) {
//     loginState.value = '로그아웃';
//   }
// });

</script>
<template>
  <header class="header">
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <div class="container-fluid">
        <RouterLink to="/"><img src="@/assets/img/purple.png" class="logoimage"></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav" style="margin-left:30px;">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style="font-size:14pt">일반 게시판</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"><RouterLink to="/post/posts">후기</RouterLink></a></li>
                <li><a class="dropdown-item" href="#">레시피</a></li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav" style="margin-left: 15px">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style="font-size:14pt">정보 게시판</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">
                    <RouterLink to="/board/fairs">페어 정보</RouterLink>
                  </a></li>
                <li><a class="dropdown-item" href="#">뉴스</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="icon-div">
        <i class="bi bi-person-circle iconSize" @click="profile"></i>
      </div>
      <button type="button" class="loginbtn" @click="clickLoginBtn">{{ loginState }}</button>
    </nav>
    <!-- <div class="logo">
      <RouterLink to="/"><img src="@/assets/img/purple.png" class="logoimage"></RouterLink>
    </div>
    <div id="menu">

      <ul>
        <li><a href="#">일반 게시판 ▼</a>
          <ul>
            <li><a href="#"><RouterLink to="/board/fairs">페어 정보</RouterLink></a></li>
            <li><a href="#">뉴스 정보</a></li>
          </ul>
        </li>
        <li><a href="#">정보 게시판 ▼</a>
          <ul>
            <li><a href="#">후기 게시판</a></li>
            <li><a href="#">레시피 공유 게시판</a></li>
          </ul>
        </li>
      </ul> -->
    <!-- </div> -->
    <!-- <div class="loginbtndiv">
      <button type="button" class="loginbtn" onclick="login()">로그아웃</button>
    </div> -->
  </header>
  <!-- <RouterLink to="/board/fairs">Event</RouterLink> -->
  <main>
    <RouterView />
  </main>
  <hr>
  <footer>
    <div class="leftthings">
      <p>
        <span class="ahub">AHUB</span>
        <span>서비스 소개</span>
        <span> | </span>
        <span>서비스 약관</span>
        <span> | </span>
        <span>개인정보 처리방침</span>
        <span> | </span>
        <span>채용</span>
      </p>
    </div>
    <div class="rightthings">
      <p>
        <span>Team Phoenix | 대표: 백동현 | 사업자등록번호:472-56-00332</span><br>
        <span>주소: 서울특별시 동작구 보라매로 87 SFC빌딩 3층</span><br>
        <span>Copyright@2024XI#CIQ ALL RIGHTS RESERVED</span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
@font-face {
  font-family: 'GmarketSansMedium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: GmarketSansMedium;
  font-size: 12px;
}

.header {
  width: 100%;
  height: 80px;
  position: relative;
  top: 0;
  background-color: #F8F9FC;
}

.loginbtn {
  background-color: #8c52ff;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-style: bold;
  float: right;
  /* margin-top: 1.5%; */
  margin-right: 2%;
  width: 80px;
}

.logoimage {
  width: 70px;
  height: 70px;
}

.logo {
  float: left;
  cursor: pointer;
}

.icon-div {
  width: 27px;
  height: 27px;
  margin-right: 15px;
}

.iconSize {
  font-size: 27px;
  color: #7030ee;
}

ul li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

#menu {
  text-align: center;
  float: left;
  margin-left: 2%;
  margin-top: 2%;
  line-height: 30px;
  cursor: pointer;
}

/* #menu>ul>li {
  float: left;
  width: 140px;
  position: relative;
}

#menu>ul>li>ul {
  width: 130px;
  display: none;
  position: absolute;
  font-size: 14px;
}

#menu>ul>li:hover>ul {
  display: block;
}

#menu>ul>li>ul>li:hover {
  background: #8c52ff;
  transition: ease 1s;
} */

.footer {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #F8F9FC;
}

.rightthings {
  margin-right: 50px;
  margin-top: 1%;
  float: right;
  font-size: 13px;
}

.leftthings {
  margin-left: 50px;
  margin-top: 2%;
  float: left;
  font-size: 13px;
}

.ahub {
  font-size: 15px;
  font-weight: bold;
  margin-right: 5px;
}
</style>
