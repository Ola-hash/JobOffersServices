package com.example.joboffersservices.controller;

import com.example.joboffersservices.dto.CompanyDTO;
import com.example.joboffersservices.dto.JobOfferDTO;
import com.example.joboffersservices.service.CompanyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CompanyController {
    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/companies/{id}")
    public CompanyDTO getCompanyById(@PathVariable Long id) {
        return companyService.getCompanyById(id);
    }

    @GetMapping("/company/{name}")
    public CompanyDTO getCompanyByName(@PathVariable String name) {
        return companyService.getCompanyByName(name);
    }

    @GetMapping("/companies")
    public List<CompanyDTO> getCompanies() {
        return companyService.getCompanies();
    }

    @GetMapping("/company/names")
    public List<String> getCompanyNames() {
        return companyService.getCompanyNames();
    }

    @PostMapping("/companies")
    public void postCompany(@RequestBody CompanyDTO companyDTO) {
        companyService.postCompany(companyDTO);
    }

    @PutMapping("/companies/{companyId}")
    public void putCompany(@RequestBody CompanyDTO companyDTO, @PathVariable Long companyId) {
        companyService.putCompany(companyDTO, companyId);
    }

    @DeleteMapping("/companies/{companyId}")
    public void deleteCompany(@PathVariable Long companyId) {
        companyService.deleteCompany(companyId);
    }

    @PostMapping("/companies/{companyId}/add-job-offer")
    public void addJobOfferToCompany(@RequestBody JobOfferDTO jobOfferDTO, @PathVariable Long companyId) {
        companyService.addJobOfferToCompany(jobOfferDTO, companyId);
    }

}
