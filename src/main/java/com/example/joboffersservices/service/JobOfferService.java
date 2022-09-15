package com.example.joboffersservices.service;

import com.example.joboffersservices.dto.CompanyDTO;
import com.example.joboffersservices.dto.JobOfferDTO;
import com.example.joboffersservices.entity.Company;
import com.example.joboffersservices.entity.JobOffer;
import com.example.joboffersservices.exception.ValidationException;
import com.example.joboffersservices.mapper.JobOfferMapper;
import com.example.joboffersservices.repository.CompanyRepository;
import com.example.joboffersservices.repository.JobOfferRepository;
import org.apache.logging.log4j.util.Strings;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class JobOfferService {
    private final JobOfferRepository jobOfferRepository;
    private final CompanyRepository companyRepository;


    public JobOfferService(JobOfferRepository jobOfferRepository, CompanyRepository companyRepository) {
        this.jobOfferRepository = jobOfferRepository;
        this.companyRepository = companyRepository;
    }

    public JobOfferDTO getOfferById(Long id) {
        return jobOfferRepository.findById(id).map(jobOffer -> JobOfferMapper.mapToJobOfferDTO(jobOffer))
                .orElseThrow(() -> new RuntimeException("Nieznaleziono oferty o podanym id"));
    }

    public List<JobOfferDTO> getOffers() {
        return Streamable.of(jobOfferRepository.findAll()).stream().map(jobOffer -> JobOfferMapper.mapToJobOfferDTO(jobOffer)).toList();
    }

    public JobOfferDTO getOfferByName(String name) {
        return jobOfferRepository.findJobOfferByTitle(name).map(jobOffer -> JobOfferMapper.mapToJobOfferDTO(jobOffer))
                .orElseThrow(() -> new RuntimeException("Nie znaleziono oferty o podanej nazwie"));
    }


    public JobOfferDTO putJobOffer(JobOfferDTO jobOfferDTO, Long jobOfferId) {
        JobOffer jobOfferToUpdate = jobOfferRepository.findById(jobOfferId)
                .orElseThrow(() -> new RuntimeException("Nieznaleziono ofert o podanym id"));
        jobOfferToUpdate.setTitle(jobOfferDTO.getTitle());
        jobOfferToUpdate.setDescription(jobOfferDTO.getDescription());
        jobOfferToUpdate.setDuties(jobOfferDTO.getDuties());
        jobOfferToUpdate.setLocation(jobOfferDTO.getLocation());
        jobOfferToUpdate.setMinSalary(jobOfferDTO.getMinSalary());
        jobOfferToUpdate.setMaxSalary(jobOfferDTO.getMaxSalary());
        jobOfferToUpdate.setDateAdded(jobOfferDTO.getDateAdded());
        jobOfferToUpdate.setDateExpired(jobOfferDTO.getDateExpired());// nadpisuje dane
        if (!Objects.equals(jobOfferToUpdate.getCompany().getName(), jobOfferDTO.getCompanyName())) {
            Company newCompany = companyRepository.findCompanyByName(jobOfferDTO.getCompanyName())
                    .orElseThrow(() -> new RuntimeException("Nie znaleziono firmy o podanej nazwie"));
            jobOfferToUpdate.setCompany(newCompany);
        }
        return JobOfferMapper.mapToJobOfferDTO(jobOfferRepository.save(jobOfferToUpdate));
    }


    public void deleteJobOffer(Long jobOfferId) {
        JobOffer jobOfferToDelete = jobOfferRepository.findById(jobOfferId).orElseThrow(() -> new RuntimeException("Nie znaleziono oferty o podanym id"));
        jobOfferRepository.delete(jobOfferToDelete);
    }

    public void postJobOffer(JobOfferDTO jobOfferDTO) {
        Company company = companyRepository.findCompanyByName(jobOfferDTO.getCompanyName())
                .orElseThrow(() -> new RuntimeException("Nie znaleziono firmy o podanej nazwie"));
        JobOffer jobOffer = JobOfferMapper.mapToJobOffer(jobOfferDTO, company);
        jobOfferRepository.save(jobOffer);
    }
}