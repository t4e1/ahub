<template>
    <table class="table">
        <tr class="top">
            <td class="post">
                <h1 class="boardTitle">후기 게시판</h1>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td> 
            <td class="thing">
                <button onclick="" class="writebutton">게시글 작성</button>
            </td>
        </tr>
        <!-- <hr class="titleLine"> -->
        <tr class="header1">
            <td class="num">게시글 번호</td>
            <td>게시글 제목</td>
            <td>댓글수</td>
            <td>조회수</td>
            <td>좋아요</td>
            <td>작성자</td>
            <td>작성일자</td>
        </tr>
    <tbody>
        <tr v-for="post in posts" :key="post.postId" class="allpost">
            <td>{{ count++ }}</td>
            <td class="boardname" @click="changeRouter(post.postId)"> {{ post.postTitle }}</td>
            <td>{{ post.countReply }}</td>
            <td>0</td>
            <td>{{ post.likeAmount }}</td>
            <td>{{ post.memberNickname }}</td>
            <td>{{ post.postDate }}</td>
        </tr>
    </tbody>        
    </table>    
</template>
<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import axios from "axios";
    import { onMounted, ref } from "vue";
    import router from '@/router/router';
    import { useRoute } from 'vue-router';

    const posts = ref([]);
    const count = 1;

    onMounted(async () =>{
        axios.get("http://localhost:8000/post/posts")
        .then(response => {
            posts.value = response.data;
            console.log(posts.value);
            console.log(posts.value[0].postTitle);
        })
    });


    function changeRouter(id) {
        const postId = id;
        console.log(postId);
        router.push(`/post/content/${postId}`)
    }
</script>

<style scoped>
    table {
        margin: auto;
        width: 68%;
        height: auto;
        min-height: 100%;
        border-radius: 5px;
        border-collapse: collapse;
        border-top: none;
    }

    .boardname {
        text-decoration: none;
        color: black;
        cursor: pointer;
    }

    .boardTitle {
        font-size:32px;
        margin-top: 50px;
    }

    .titleLine {
            width:440%;
            margin-left: 2%;
            margin-right: 2%;
            height: 2px;
            border: 0;
            background-color: grey;
    }

    .writebutton{
        background-color: #8c52ff;
        color: white;
        padding: 14px 20px;
        margin-top: 40px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        font-style: bold;
        float: right;
    }

    .header1 {
        background-color: rgb(218, 231, 255);
        height: 50px;
        font-size: 12px;
        text-align: center;

    }

    .header1 .td {
        width: 10%;
    }

    .header2 {
        font-size: 12px;
    }

    .allpost{
        text-align: center;
    }
    
    
</style>