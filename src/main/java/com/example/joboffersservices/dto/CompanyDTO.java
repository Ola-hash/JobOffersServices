package com.example.joboffersservices.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

public class CompanyDTO {
    private Long id;
    @NotBlank(message = "not.blank")
    private String name;
    @NotBlank(message = "not.blank")
    private String description;
    @NotBlank(message = "not.blank")
    private String city;
    @NotBlank(message = "not.blank")
    private Integer employees;
    @NotNull
    private String telephone;
    @NotNull
    private String email;
    @NotBlank(message = "not.blank")
    private List<JobOfferDTO> jobOffers;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getEmployees() {
        return employees;
    }

    public void setEmployees(Integer employees) {
        this.employees = employees;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<JobOfferDTO> getJobOffers() {
        return jobOffers;
    }

    public void setJobOffers(List<JobOfferDTO> jobOffers) {
        this.jobOffers = jobOffers;
    }
}
