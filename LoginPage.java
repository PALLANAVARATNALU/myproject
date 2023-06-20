
package com.project.my.project.model;

        import jakarta.persistence.Entity;
        import jakarta.persistence.GeneratedValue;
        import jakarta.persistence.Id;
@Entity
public class LoginPage {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String gmail;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    private String password;

    public String getName() {
        return name;
    }

    public String getGmail() {
        return gmail;
    }



    public void setName(String name) {
        this.name = name;
    }

    public void setGmail(String gmail) {
        this.gmail = gmail;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}