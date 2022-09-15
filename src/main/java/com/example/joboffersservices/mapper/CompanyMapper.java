package com.example.joboffersservices.mapper;

import com.example.joboffersservices.dto.CompanyDTO;
import com.example.joboffersservices.dto.JobOfferDTO;
import com.example.joboffersservices.entity.Company;
import com.example.joboffersservices.entity.JobOffer;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompanyMapper {
    public CompanyDTO mapToCompanyDTO(Company company) {
        List<JobOfferDTO> jobOfferDTOS = company.getJobOffers().stream()
                .map(jobOffer -> JobOfferMapper.mapToJobOfferDTO(jobOffer))
                .collect(Collectors.toList());

        CompanyDTO dto = new CompanyDTO();
        dto.setId(company.getId());
        dto.setName(company.getName());
        dto.setDescription(company.getDescription());
        dto.setCity(company.getCity());
        dto.setEmployees(company.getEmployees());
        dto.setTelephone(company.getTelephone());
        dto.setEmail(company.getEmail());
        dto.setJobOffers(jobOfferDTOS);
        return dto;
    }

    public Company mapToCompany(CompanyDTO companyDTO) {
        Company company = new Company();
        company.setId(companyDTO.getId());
        company.setName(companyDTO.getName());
        company.setDescription(companyDTO.getDescription());
        company.setCity(companyDTO.getCity());
        company.setEmployees(companyDTO.getEmployees());
        company.setTelephone(companyDTO.getTelephone());
        company.setEmail(companyDTO.getEmail());
        if (!CollectionUtils.isEmpty(companyDTO.getJobOffers())) {
            List<JobOffer> jobOffers = companyDTO.getJobOffers().stream()
                    .map(jobOfferDTO -> JobOfferMapper.mapToJobOffer(jobOfferDTO, company))
                    .collect(Collectors.toList());
            company.setJobOffers(jobOffers);
        }
        return company;
    }
}
