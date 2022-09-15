package com.example.joboffersservices.service;

import com.example.joboffersservices.dto.CompanyDTO;
import com.example.joboffersservices.dto.JobOfferDTO;
import com.example.joboffersservices.entity.Company;
import com.example.joboffersservices.entity.JobOffer;
import com.example.joboffersservices.mapper.CompanyMapper;
import com.example.joboffersservices.mapper.JobOfferMapper;
import com.example.joboffersservices.repository.CompanyRepository;
import com.example.joboffersservices.repository.JobOfferRepository;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompanyService {
    private final CompanyRepository companyRepository;
    private final JobOfferRepository jobOfferRepository;
    private final CompanyMapper companyMapper;

    public CompanyService(CompanyRepository companyRepository, JobOfferRepository jobOfferRepository, CompanyMapper companyMapper) {
        this.companyRepository = companyRepository;
        this.jobOfferRepository = jobOfferRepository;
        this.companyMapper = companyMapper;
    }


    public CompanyDTO getCompanyById(Long id) {
        return companyRepository.findById(id).map(company -> companyMapper.mapToCompanyDTO(company))
                .orElseThrow(() -> new RuntimeException("Nieznaleziono firmy o podanym id"));
    }

    public CompanyDTO getCompanyByName(String name) {
        return companyRepository.findCompanyByName(name).map(company -> companyMapper.mapToCompanyDTO(company))
                .orElseThrow(() -> new RuntimeException("Nieznaloziono firmy o podanej nazwie"));
    }

    public List<CompanyDTO> getCompanies() {
        return Streamable.of(companyRepository.findAll()).stream().map(company -> companyMapper.mapToCompanyDTO(company)).toList();
    }

    public void postCompany(CompanyDTO companyDTO) {
        Company company = companyMapper.mapToCompany(companyDTO);
        companyRepository.save(company);
    }

    public void putCompany(CompanyDTO companyDTO, Long companyId) {
        Company companyToUpdate = companyRepository.findById(companyId)
                .orElseThrow(() -> new RuntimeException("Nieznaleziono firmy o podanym id"));
        companyToUpdate.setName(companyDTO.getName());
        companyToUpdate.setDescription(companyDTO.getDescription());
        companyToUpdate.setCity(companyDTO.getCity());
        companyToUpdate.setEmployees(companyDTO.getEmployees());
        companyToUpdate.setTelephone(companyDTO.getTelephone());
        companyToUpdate.setEmail(companyDTO.getEmail());
        companyRepository.save(companyToUpdate);
    }

    public void deleteCompany(Long companyId) {
        Company companyToDelete = companyRepository.findById(companyId)
                .orElseThrow(() -> new RuntimeException("Nieznaleziono firmy o podanym id"));
        companyRepository.delete(companyToDelete);

    }

    public void addJobOfferToCompany(JobOfferDTO jobOfferDTO, Long companyId) {
        Company company = companyRepository.findById(companyId).orElseThrow(() -> new RuntimeException("Nie znaleziono firmy o podanym id "));
        JobOffer jobOffer = JobOfferMapper.mapToJobOffer(jobOfferDTO, company);
        jobOfferRepository.save(jobOffer);
    }

    public List<String> getCompanyNames() {
        return Streamable.of(companyRepository.findAll()).stream()
                .filter(company -> company.getName() != null)
                .map(company -> company.getName())
                .collect(Collectors.toList());
    }
}
