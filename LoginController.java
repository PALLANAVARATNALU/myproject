package com.project.my.project.controller;

import com.project.my.project.exception.UserNotFoundException;
import com.project.my.project.model.LoginPage;
import com.project.my.project.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class LoginController {
    @Autowired
    private LoginRepository repo;

    @PostMapping("/login")
    LoginPage news(@RequestBody LoginPage news){
        return repo.save(news);
    }

    @PostMapping("/sig/{mname}/{pass}")
    public String login(@PathVariable String mname,@PathVariable String pass)
    {
        LoginPage ll=repo.findByName(mname);
        if(ll == null)
        {
            return "invalid username";
        }
        else {
            if(ll.getPassword().equals(pass))
            {
                return "success";
            }
            else
            {
                return "invalidpassword";
            }
        }
    }


}