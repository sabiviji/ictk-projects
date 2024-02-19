package dev.sike.ocms.services;

import dev.sike.ocms.entity.User;
import dev.sike.ocms.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User getUserById(Long userId) {
        return userRepository.findById(userId).get();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUserById(Long userId, User user) {
        User updateUser = userRepository.findById(userId).get();

        if (Objects.nonNull(user.getName())&&!"".equalsIgnoreCase(user.getName())){
            updateUser.setName(user.getName());
        }
        if (Objects.nonNull(user.getPhoneNo())&&!"".equalsIgnoreCase(user.getPhoneNo())){
            updateUser.setPhoneNo(user.getPhoneNo());
        }
        if (Objects.nonNull(user.getEmailId())&&!"".equalsIgnoreCase(user.getEmailId())) {
            updateUser.setEmailId(user.getEmailId());
        }

        return userRepository.save(updateUser);
    }

    @Override
    public String deleteUserById(Long userId) {
        try{
            userRepository.deleteById(userId);
            return "Deleted Successfully";
        } catch (Exception e) {
            return "Failed to delete";
        }
    }
}
