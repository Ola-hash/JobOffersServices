package com.example.joboffersservices.controller;

import com.example.joboffersservices.dto.JobOfferDTO;
import com.example.joboffersservices.service.JobOfferService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class JobOfferController {
    private final JobOfferService jobOfferService;

    public JobOfferController(JobOfferService jobOfferService) {
        this.jobOfferService = jobOfferService;
    }

    @GetMapping("/offers/{id}")
    public JobOfferDTO getOfferById(@PathVariable Long id) {
        return jobOfferService.getOfferById(id);
    }

    @GetMapping("/offers")
    public List<JobOfferDTO> getOffers() {
        return jobOfferService.getOffers();
    }

    @GetMapping("/offer/{name}")
    public JobOfferDTO getOfferByName(@PathVariable String name) {
        return jobOfferService.getOfferByName(name);
    }

    @PutMapping("/offers/{jobOfferId}")
    public JobOfferDTO putJobOffer(@Valid @RequestBody JobOfferDTO jobOfferDTO, @PathVariable Long jobOfferId) {
        return jobOfferService.putJobOffer(jobOfferDTO, jobOfferId);
    }

    @PostMapping("/offers")
    public void postJobOffer(@Valid @RequestBody JobOfferDTO jobOfferDTO) {
        jobOfferService.postJobOffer(jobOfferDTO);
    }

    @DeleteMapping("/offers/{jobOfferId}")
    public void deleteJobOffer(@PathVariable Long jobOfferId) {
        jobOfferService.deleteJobOffer(jobOfferId);
    }
}
