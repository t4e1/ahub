<template>
    <div class="postCard" @click="changeRoute(fair.fairId)" :key="fair">
                    <div class="listImg" >
                        <img class="listThumnail" :src="fair.thumImage" alt="thumb">
                        <!-- <img class="listThumnail" src="https://bsiwse.com/data/designImages/POPUP_1709860556.png" alt="thumb"> -->
                    </div>
                    <div class="listContent">
                        <div id="content-title">
                            <div id="titleNum">
                                <div id="postTitle">
                                    {{ fair.fairTitle }}
                                </div>
                                <div id="postNum">
                                    #{{ fair.fairId }}
                                </div>
                            </div>
                            <div class="content-title-tags" >
                                <button type="button" id="tagbtn1">#{{ fair.fairTag1 }}</button>
                                <button type="button" id="tagbtn2">#{{ fair.fairTag2 }}</button>
                                <button type="button" id="tagbtn3">#{{ fair.fairTag3 }}</button>
                            </div>
                        </div>
                        <div id="content-description">
                            <div>
                                {{ fair.fairContent }}
                            </div>
                        </div>
                        <div id="content-location">
                            <div class="locationitem" style="margin: 0 5px 0 0;">
                                {{ fair.fairStartdate }}
                            </div>
                            <p style="padding: 5px">~</p>
                            <div class="locationitem" style="margin: 0 5px 0 0;">
                                {{ fair.fairEnddate }}
                            </div>
                            <div class="locationitem" id="event-location">
                                {{ fair.fairLocation }}
                            </div>
                        </div>
                    </div>  
                </div>
</template>

<script setup>
    import { defineProps, ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const props = defineProps(['fair']);
    const fair = props.fair;

    function changeRoute(fairId) {
        // console.log(props);
        router.push(`/board/fairs/${fairId}`);
    }
</script>

<style scoped>
.postCard {
    height: 150px;
    display: flex;
    flex-direction: row;
    width: 100%;
}

.postCard :hover {
    cursor: pointer;
}

.listImg {
    border: 0.5px solid rgb(227, 224, 224);
    width: 27%;
    height: 150px;
    overflow: hidden;
}

.listImg img {
    transition: 0.3s;
}

.listImg img:hover {
    transform: scale(1.1);
}

.listThumnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.listContent {
    padding: 0;
    margin: 0;
    border: 0.5px solid rgb(227, 224, 224);
    overflow: hidden;
    transition: border-color 0.3s;
    width: 73%;
}

.postCard:hover .listContent {
    filter: blur(0.3px);
    border-color: #d490e0;
}

#content-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    /* justify-content: flex-start; */
    height: 50px;
    margin-left: 10px;
}

#titleNum {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
}

#titleNum #postNum {
    margin: 0 auto;
}

#tagbtn1,
#tagbtn2,
#tagbtn3 {
    border-radius: 20px;
    border: none;
    padding: 5px 10px;
    font-size: 10px;
    width: 58px;
    height: 25px;
    font-weight: bold;
}

#tagbtn1 {
    background-color: #e9dfff;
    color: #8c52ff;
}

#tagbtn2 {
    margin-left: 3px;
    margin-bottom: 1px;
    background-color: #b6ebb0;
    color: #528651c6;
}

#tagbtn3 {
    margin-left: 3px;
    margin-bottom: 1px;
    margin-right: 5px;
    background-color: #e0f7fa;
    color: #0072e4c6;
}

#postTitle{
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 0 3px;
}

#postNum{
    font-size: 10px;
    margin: 15 0 0 0;
    color: rgb(220, 218, 218);
}

#content-description {
    height: 50px;
    display: flex;
    align-items: center;
    margin: 0 0 0 3px;
    color:rgb(73, 70, 70);
    font-size: 12px;
    margin-left: 10px;
}

#content-location {
    display: flex;
    flex-direction: row;
    height: 50px;
    margin-left: 10px;
}

.locationitem {
    font-size:9pt ;
    width: 80px;
    height: 30px;
    padding: 5px 0 0 3px;
    color:rgb(87, 85, 85);
}

#event-location{
    width: 400px;
}
</style>