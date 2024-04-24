<template>
    <!-- 
        이 페이지에 들어갈 컴포넌트 목록: 
        1. 배너 
        2. 타이틀 & 서치 (페이지 내로 옮김-컴포넌트 사용x)
        3. 페어 카드 컨테이너 
    -->
    <section class="container" id="global-container">
        <Banner />
        <div class="left-sidebar"></div>
        <div class="titleAndSearch">
            <div class="board-title" @click="resetBoard">
                <h2 style="font-size: 30px;">페어 정보</h2>
            </div>
            <div class="search" id="search-1">
                <div id="searchDropdown">
                    <select class="form-control" name="search_type" v-model="search_type"
                        style="height: 30px; font-size: 12px;">
                        <option value="titleContent">제목 내용</option>
                        <option value="title">제목</option>
                        <option value="content">내용</option>
                        <option value="writerId">작성자</option>
                    </select>
                </div>
                <div>
                    <input type="text" id='searchText' class="form-control" placeholder="Search..."
                        v-model="search_condition" @keyup.enter="callData">
                </div>
                <div class="">
                    <button class="btn" id="searchBtn" type="button" @click="callData">검색</button>
                </div>

                <div id="search-2">
                    <button type="button" id="writeBtn" class="btn btn-primary">게시글 작성</button>
                </div>
            </div>
        </div>
        <article class="main-article">
            <hr>
            <div v-if="isTrue">
                <FairListContainer />
            </div>
            <div v-if="!isTrue" class="no-search-result">
                <img src="@/assets/img/nopostimg.png" alt="결과 없음 이미지">
            </div>
        </article>
        <div class="right-sidebar"></div>
    </section>
</template>

<script setup>
    import { ref, provide } from 'vue';
    import Banner from '../components/Banner/Banner.vue';
    import FairListContainer from '../components/FairList/FairListContainer.vue';
    import { useRouter } from 'vue-router';



    const search_type = ref('titleContent');
    const search_condition = ref('');
    const postResult = ref([]);
    const isTrue = ref(true);

    /* 입력한 정보(search_type&search_condition) 받아서 axios로 호출 */
    async function callData() {

        const response = await axios.get(`http://127.0.0.1:8000/board/fairs/lists?search_type=${search_type.value}&search_condition=${search_condition.value}`);
        // const searchList = response.data;
        // console.log(searchList);
        // console.log(JSON.stringify(searchList.result, null, 2));

        postResult.value = response.data.result;
        console.log(postResult.value)

        if ( postResult.value.length == 0 ) {
            isTrue.value = false;
        } else { 
            isTrue.value = true;
        }
    }
    const router = useRouter();
    function resetBoard() {
        router.go(0);
    }   

    provide('postResult', postResult);

</script>

<style scoped>

section {
    display: grid;
    min-width: 100%;
    min-height: 800px;
    grid-template-columns: 0.8fr 3fr 0.8fr;
    grid-template-rows: 200px 101.61px 5px auto;
    grid-template-areas:
        "banner banner banner"
        "left  title   right"
        "left   none    right"
        "left   main    right";
    padding: 0;
    margin: 0;
}

hr {
    margin: 5px;
}

.main-article {
    grid-area: main;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

}

.left-sidebar {
    grid-area: left;
}

.right-sidebar {
    grid-area: right;
}


/* fairTitle 부분 css */

h2 {
    color: black;
    margin: 0;
    padding: 0;
    font-weight: bold;
}

.titleAndSearch {
    display: flex;
    grid-area: title;
}

.board-title {
    display: flex;
    align-items: flex-end;
    width: 20%;
    height: 100%;
    margin: 0;
    padding: 20 0 0 0;
    font-size: 30px;
}

.board-title :hover {
    cursor: pointer;
}

.search {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    height: 100%;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
}

.searchBar {
    margin: 0, auto;
    border-radius: 4px;
}

#searchDropdown {
    border-radius: 4px;
    height: 30px;
    width: 90px;
    margin: 0 3px 0 0;
    font-size: 12px;
}

#searchText {
    height: 30px;
    border-radius: 4px;
    font-size: 12px;
}

#searchBtn {
    background-color: #8c52ff;
    color: white;
    padding: 4px 10px;
    margin: 0px 3px 0px 3px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-style: bold;
    height: 30px;
}

#writeBtn {
    background-color: #8c52ff;
    color: white;
    padding: 6px 10px;
    /* margin: 8px 0; */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-style: bold;
    height: 30px;
}

.no-search-result {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}
</style>