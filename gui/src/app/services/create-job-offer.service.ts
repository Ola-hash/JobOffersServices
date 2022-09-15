import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable()
export class CreateJobOfferService {
  constructor() {
  }

  public createForm(): FormGroup {
    return new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      requirements: new FormControl(null, [Validators.required]),
      duties: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      minSalary: new FormControl(null, [Validators.pattern
      ("([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])"), Validators.required]),
      maxSalary: new FormControl(null, [Validators.pattern
      ("([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])"), Validators.required]),
      dateAdded: new FormControl(null, [Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$"), Validators.required]),
      dateExpired: new FormControl(null, [Validators.pattern("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$"), Validators.required]),
      companyName: new FormControl(null)
    })
  }
}
