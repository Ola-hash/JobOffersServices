import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {JobOfferModel} from "../models/job-offer-model";

@Injectable()
export class EditJobOfferService {

  constructor() {
  }

  public editForm(jobOffer: JobOfferModel): FormGroup {
    return new FormGroup({
      title: new FormControl(jobOffer.title, [Validators.required]),
      description: new FormControl(jobOffer.description, [Validators.required]),
      requirements: new FormControl(jobOffer.requirements, [Validators.required]),
      duties: new FormControl(jobOffer.duties, Validators.required),
      location: new FormControl(jobOffer.location, Validators.required),
      minSalary: new FormControl(jobOffer.minSalary, [Validators.pattern
      ("([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])"), Validators.required]),
      maxSalary: new FormControl(jobOffer.maxSalary, [Validators.pattern
      ("([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])"), Validators.required]),
      dateAdded: new FormControl(jobOffer.dateAdded, [Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$"), Validators.required]),
      dateExpired: new FormControl(jobOffer.dateAdded, [Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$"), Validators.required]),
      companyName: new FormControl(jobOffer.companyName)
    })
  }
}
