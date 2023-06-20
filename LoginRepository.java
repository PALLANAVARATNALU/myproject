package com.project.my.project.repository;

import com.project.my.project.model.LoginPage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<LoginPage,String> {
    LoginPage findByName(String mname);
}