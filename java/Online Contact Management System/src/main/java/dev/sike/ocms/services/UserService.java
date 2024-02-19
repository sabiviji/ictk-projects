package dev.sike.ocms.services;

import dev.sike.ocms.entity.User;

import java.util.List;

public interface UserService {
    User getUserById(Long userId);

    List<User> getAllUsers();

    User createUser(User user);

    User updateUserById(Long userId, User user);

    String deleteUserById(Long userId);
}
