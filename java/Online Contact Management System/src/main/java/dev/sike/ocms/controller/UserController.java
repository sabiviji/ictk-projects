package dev.sike.ocms.controller;

import dev.sike.ocms.entity.User;
import dev.sike.ocms.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("users/{id}")
    public User getUserById(@PathVariable("id") Long userId) {
        return userService.getUserById(userId);
    }

    @PostMapping("users")
    public User createUser(@RequestBody User user) {
//        System.out.println(user.getUserId() + user.getPhoneNo() + user.getEmailId());
        return userService.createUser(user);
    }

    @PutMapping("users/{id}")
    public User updateUserById(@PathVariable("id") Long userId, @RequestBody User user) {
        return userService.updateUserById(userId, user);
    }

    @DeleteMapping("users/{id}")
    public String deleteUserById(@PathVariable("id") Long userId) {
        return userService.deleteUserById(userId);
    }

}
