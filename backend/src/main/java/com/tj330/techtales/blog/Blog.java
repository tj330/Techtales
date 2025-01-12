package com.tj330.techtales.blog;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Blog {
    @Id
    @GeneratedValue
    private Integer id;
    private String user;
    private String topic;
    @Lob
    private String content;

    public Blog() {
    }

    public Blog(Integer id, String user, String topic, String content) {
        this.id = id;
        this.user = user;
        this.topic = topic;
        this.content = content;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
