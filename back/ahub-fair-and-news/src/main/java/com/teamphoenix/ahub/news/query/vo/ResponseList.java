package com.teamphoenix.ahub.news.query.vo;

import java.time.LocalDateTime;

public class ResponseList {

    private int fairId;
    private String fairTitle;
    private String writeId;
    private LocalDateTime fairWritedate;

    public ResponseList() {
    }

    public ResponseList(int fairId, String fairTitle, String writeId, LocalDateTime fairWritedate) {
        this.fairId = fairId;
        this.fairTitle = fairTitle;
        this.writeId = writeId;
        this.fairWritedate = fairWritedate;
    }

    public int getFairId() {
        return fairId;
    }

    public void setFairId(int fairId) {
        this.fairId = fairId;
    }

    public String getFairTitle() {
        return fairTitle;
    }

    public void setFairTitle(String fairTitle) {
        this.fairTitle = fairTitle;
    }

    public LocalDateTime getFairWritedate() {
        return fairWritedate;
    }

    public void setFairWritedate(LocalDateTime fairWritedate) {this.fairWritedate = fairWritedate;
    }

    public String getWriteId() {
        return writeId;
    }

    public void setWriteId(String writeId) {
        this.writeId = writeId;
    }
}
