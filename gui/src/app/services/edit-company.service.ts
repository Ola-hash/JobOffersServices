import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";
import {CompanyModel} from "../models/company.model";

@Injectable()
export class EditCompanyService {
  constructor() {
  }

  public editForm(company: CompanyModel): FormGroup {
    return new FormGroup({
      name: new FormControl(company.name, [Validators.required]),
      description: new FormControl(company.description, [Validators.required]),
      city: new FormControl(company.city, [Validators.required]),
      employees: new FormControl(company.employees, [Validators.pattern("([0-9]|[1-9][0-9]|[1-9][0-9][0-9])"),
        Validators.required]),
      telephone: new FormControl(company.telephone, [Validators.pattern("^(?:\\(?\\?)?(?:[-\\.\\(\\)\\s]*(\\d)){9}\\)?$"),
        Validators.required]),
      email: new FormControl(company.email, [Validators.pattern("^[a-z0-9_.-]+@[a-z0-9_.-]+\\.\\w{2,4}"),
        Validators.required])
    })
  }
}
