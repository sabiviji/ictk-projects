package dev.sike.ocms.repository;

import dev.sike.ocms.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
