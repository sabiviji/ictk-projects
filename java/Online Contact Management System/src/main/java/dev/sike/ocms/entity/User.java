package dev.sike.ocms.entity;

import jakarta.persistence.*;

import javax.naming.Name;

@Entity
@Table(name = "Users")
public class User {
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getName() {
        return username;
    }

    public void setName(String username) {
        this.username = username;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;
    private String username;
    private String phoneNo;
    private  String emailId;

    public User() {}

    public User(String username, String phoneNo, String emailId) {
        this.username = username;
        this.phoneNo = phoneNo;
        this.emailId = emailId;
    }
}
