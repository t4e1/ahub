<script>
</script>

<template>
    <div>
        <h1 class="boardname">페어 정보 게시판</h1>
        <div class="writebtndiv">
            <button class="writebtn">등록/수정</button>
        </div>
        <hr class="boardtitleLine">
        <div class="dropzone">
            <div class="cloudicon">
                <img src="@/assets/img/cloudicon.png" alt="cloudicon_img" height="50px" width="50px">
            </div>
            <div class="dropzonetext">섬네일 이미지를 등록해 주세요. JPEG, PNG 지원됩니다!</div>
        </div>
        <div class="tags-container1">
            <button class="tagbtn1">제목</button>
            <button class="tagbtn2">게시글 제목을 입력하세요.</button>
        </div>
        <div class="tags-container2">
            <button class="tagbtn3">지역/장소</button>
            <button class="tagbtn4">개최 지역을 선택해 주세요.</button>
            <button class="tagbtn5">행사 개최 장소를 입력해주세요.</button>
        </div>
        <div class="tags-container3">
            <button class="tagbtn6">시작일/종료일</button>
            <button class="tagbtn7">2024-02-27</button>
            <h3>~</h3>
            <button class="tagbtn8">2024-02-28</button>
        </div>
        <div class="tags-container4">
            <button class="tagbtn6">태그</button>
        </div>
        <div class="maincontent">
            <p>내용 입력하세요.</p>
        </div>
        <div class="dropzone2">
            <div class="cloudicon2">
                <img src="@/assets/img/cloudicon.png" alt="cloudicon_img" height="50px" width="50px">
            </div>
            <div class="dropzonetext2">본문 이미지를 등록해 주세요. JPEG, PNG 지원됩니다!</div>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.boardname {
    font-size: 30px;
    margin-top: 1.5%;
    margin-left: 15%;
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

.writebtn {
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

.maincontent {
    border-radius: 12px;
    background-color: #f9f9f9;
    padding: 20px;
    text-align: center;
    margin-left: 15%;
    margin-bottom: 20px;
    margin-top: -12.5%; 
    width: 66.5%;
    height: auto; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.dropzone {
    border: 2px dashed #ccc;
    border-radius: 12px;
    background-color: #f9f9f9;
    padding: 20px;
    text-align: center;
    margin-top: -3.5%;
    margin-left: 15%;
    margin-right: 52%;
    height: 230px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.dropzone2 {
    border: 2px dashed #ccc;
    border-radius: 12px;
    background-color: #f9f9f9;
    padding: 20px;
    text-align: center;
    margin-left: 15%;
    margin-bottom: 10%;
    width: 66.5%;
    height: auto; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.cloudicon, .cloudicon2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}

.dropzonetext, .dropzonetext2 {
    color: #888;
    font-size: 14px;
    margin-bottom: 20px;
}

.tags-container1, .tags-container2, .tags-container3, .tags-container4 {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-bottom: 13px; 
    margin-left: 50%;
    position: relative;
    top: -235px; 
}

.tagbtn1, .tagbtn2, .tagbtn3, .tagbtn4, .tagbtn5, .tagbtn6, .tagbtn7, .tagbtn8 {
    border: 2px solid rgb(185, 182, 195);
    border-radius: 10px;
    background-color: white;
    padding: 10px 20px;
    font-size: 12px;
    font-weight: bold;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
</style>