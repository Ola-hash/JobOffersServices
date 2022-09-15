package com.example.joboffersservices.repository;

import com.example.joboffersservices.entity.Company;
import com.example.joboffersservices.entity.JobOffer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface JobOfferRepository extends CrudRepository<JobOffer, Long> {
    Optional<JobOffer> findJobOfferByTitle(String title);
}
