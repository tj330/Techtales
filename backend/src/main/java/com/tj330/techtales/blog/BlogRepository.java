package com.tj330.techtales.blog;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
    @Modifying
    @Transactional
    @Query("update Blog b set b.topic=?2, b.content=?3 where id=?1")
    void updateById(Integer id, String topic, String content);
}
