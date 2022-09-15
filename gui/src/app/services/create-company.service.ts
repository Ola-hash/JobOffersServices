import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Injectable()
export class CreateCompanyService {
  constructor() {
  }

  public createForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      employees: new FormControl(null, [Validators.pattern("([0-9]|[1-9][0-9]|[1-9][0-9][0-9])"),
        Validators.required]),
      telephone: new FormControl(null, [Validators.pattern("^(?:\\(?\\?)?(?:[-\\.\\(\\)\\s]*(\\d)){9}\\)?$"),
        Validators.required]),
      email: new FormControl(null, [Validators.pattern("^[a-z0-9_.-]+@[a-z0-9_.-]+\\.\\w{2,4}"),
        Validators.required])
    })
  }
}
