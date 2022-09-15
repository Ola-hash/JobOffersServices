import {Component, OnInit} from '@angular/core';
import {CompanyModel} from "../../models/company.model";
import {CompanyService} from "../../services/company.service";
import {FormGroup} from "@angular/forms";
import {EditCompanyService} from "../../services/edit-company.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  public id: number;
  public company: CompanyModel;
  public companyForm: FormGroup;
  public isSubmitted = false;


  constructor(private readonly companyService: CompanyService,
              private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly editCompanyService: EditCompanyService) {

  }

  ngOnInit(): void {
    // @ts-ignore
    const idParam: string = this.route.snapshot.paramMap.get('id');
    if (idParam.match("^[\\d]+$")) {
      this.id = parseInt(idParam, 10);
      this.companyService.getCompanyById(this.id).subscribe(response => {
        this.company = response;
        this.companyForm = this.editCompanyService.editForm(this.company);
      });
    } else {
      alert("Nieprawidłowy parametr id");
      this.router.navigate(['company-list']).then()
    }

  }

  public editCompany() {
    this.isSubmitted = true;
    if (this.companyForm.invalid) {
      this.companyForm.markAllAsTouched()
      return;
    }
    this.companyService.editCompany(this.companyForm.value, this.id).subscribe(() => {
      this.navigate();
    });
  }

  public isFormControlInValid(formControlName: string): boolean {
    return this.companyForm.controls[formControlName].invalid && this.companyForm.controls[formControlName].touched;
  }

  public hasError(formControlName: string, error: string): boolean {
    return this.companyForm.controls[formControlName].hasError(error);
  }

  public navigate() {
    this.router.navigate(['company-list']).then();
  }

  public deleteJobOffer() {
    this.companyService.deleteCompany(this.id)
      .subscribe(() => this.router.navigate(['company-list']).then());
  }

}
