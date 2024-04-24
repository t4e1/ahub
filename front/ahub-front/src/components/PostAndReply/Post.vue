<template>
    <div class="wrapper">
        <section>
            <div class="clickdiv" @click="mainBoard()">
                <h1 class="boardname">후기 게시판</h1>
            </div>
            <hr class="boardtitleLine">
        </section>
        <div class="allboard">
            <div class="boardtitlediv">
                <h2 class="boardtitle"> {{ posts.result.postTitle }}</h2>
            </div>
            <div class="writerdiv">
                <h3 class="writer">{{ posts.result.memberNickname }}</h3>
            </div>
            <div class="datediv">
                <h3 class="date">{{posts.result.postDate}}</h3>
            </div>
        </div>
        <hr class="titleLine">
        <div class="maincontent">
            <p v-html="posts.result.postContent">
            </p>
        </div>
        

        <Reply/>
    </div>
</template>

<script setup>
    import router from '@/router/router';
    import Reply from './Reply.vue';
    import axios from "axios";
    import { ref, onBeforeMount } from "vue";
    import {useRoute} from "vue-router";

    const posts = ref({
        result: {}
    });

    const postId = useRoute();

    const fetchPosts = () => {
        axios.get(`http://localhost:8000/post/content/${postId.params.id}`)
        .then(response => {
            posts.value = response.data;
            console.log('post', posts);
            console.log('post.result', posts.result);
            console.log(response);
            console.log(posts.value);
            console.log(posts.value.result.postTitle);
        })
    }
    onBeforeMount(() => {
        fetchPosts();    
    })

    function mainBoard() {
        router.push('/post/posts');
    }

</script>

<style scoped>
        .clickdiv {
            width: 20%;
        }

        .boardtitleLine {
            width:100%;
            height: 3px;
            border: 0;
            background-color: #8c52ff;
        }

        .titleLine {
            width:95%;
            margin-left: 2%;
            margin-right: 2%;
            height: 2px;
            border: 0;
            background-color: grey;
        }

        .wrapper {
            height: auto;
            min-height: 100%;
            width: 68%;
            margin-top: 50px;
            padding-bottom: 100px;
            margin-left: 16%;
            margin-right: 16%;
        }

        .boardname {
            font-size: 32px;
            cursor: pointer;
        }

        .boardtitle {
            font-size: 20px;
            margin-top: 20px;  
        }

        .writer {
            font-size: 16px;
            margin-top: 20px;
        }

        .date {
            font-size: 16px;
            margin-top: 20px;
        }

        .allboard {
            display: flex;
            flex-direction: rows;
            justify-content: flex-start;
            width: 100%;
        }

        .boardtitlediv {
            padding-left: 10px;
            padding-right: 10px;
            margin-left: 2%;
            width: 70%;
        }

        .writerdiv {
            width: 15%;
        }

        .datediv {
            width:20%;
            margin-left:2%;
        }

        

        .maincontent {
            max-width: 80%;
            margin-left: 10%;
            margin-right: 10%;
            margin-top: 3%;
        }

        

        
</style>