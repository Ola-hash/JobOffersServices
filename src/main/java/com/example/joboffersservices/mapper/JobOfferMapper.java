package com.example.joboffersservices.mapper;

import com.example.joboffersservices.dto.JobOfferDTO;
import com.example.joboffersservices.entity.Company;
import com.example.joboffersservices.entity.JobOffer;

public class JobOfferMapper {
    public static JobOfferDTO mapToJobOfferDTO(JobOffer jobOffer) {
        JobOfferDTO joDTO = new JobOfferDTO();
        joDTO.setId(jobOffer.getId());
        joDTO.setTitle(jobOffer.getTitle());
        joDTO.setDescription(jobOffer.getDescription());
        joDTO.setRequirements(jobOffer.getRequirements());
        joDTO.setDuties(jobOffer.getDuties());
        joDTO.setLocation(jobOffer.getLocation());
        joDTO.setMinSalary(jobOffer.getMinSalary());
        joDTO.setMaxSalary(jobOffer.getMaxSalary());
        joDTO.setDateAdded(jobOffer.getDateAdded());
        joDTO.setDateExpired(jobOffer.getDateExpired());
        joDTO.setCompanyName(jobOffer.getCompany().getName());
        return joDTO;
    }

    public static JobOffer mapToJobOffer(JobOfferDTO jobOfferDTO, Company company) {
        JobOffer jobOffer = new JobOffer();
        jobOffer.setId(jobOfferDTO.getId());
        jobOffer.setTitle(jobOfferDTO.getTitle());
        jobOffer.setDescription(jobOfferDTO.getDescription());
        jobOffer.setRequirements(jobOfferDTO.getRequirements());
        jobOffer.setDuties(jobOfferDTO.getDuties());
        jobOffer.setLocation(jobOfferDTO.getLocation());
        jobOffer.setMinSalary(jobOfferDTO.getMinSalary());
        jobOffer.setMaxSalary(jobOfferDTO.getMaxSalary());
        jobOffer.setDateAdded(jobOfferDTO.getDateAdded());
        jobOffer.setDateExpired(jobOfferDTO.getDateExpired());
        jobOffer.setCompany(company);
        return jobOffer;
    }
}
