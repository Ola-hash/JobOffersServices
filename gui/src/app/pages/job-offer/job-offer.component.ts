import {Component, OnInit} from '@angular/core';
import {JobOfferService} from "../../services/job-offer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {JobOfferModel} from "../../models/job-offer-model";
import {FormGroup} from "@angular/forms";
import {CompanyModel} from "../../models/company.model";

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.css']
})
export class JobOfferComponent implements OnInit {
 public id: string;
 public jobOffer:JobOfferModel;

  public jobOfferForm: FormGroup;
  public company: CompanyModel;

  constructor(private readonly jobOfferService: JobOfferService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.route.snapshot.paramMap.get('id');
    this.jobOfferService.getJobOfferById(this.id).subscribe(response =>{
      this.jobOffer = response});
  }

  public navigate(id:number){
    this.router.navigate(['edit-offer/',id]).then();
  }

}
