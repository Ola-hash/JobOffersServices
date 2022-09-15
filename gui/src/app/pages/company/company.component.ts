import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../services/company.service";
import {CompanyFormModel} from "../../models/company-form-model";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyModel} from "../../models/company.model";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  id: number;
  public companies: CompanyModel;


  constructor(private readonly companyService: CompanyService,
              private route: ActivatedRoute,
              private router:Router) {
  }


  ngOnInit(): void {
    // @ts-ignore
    this.id = this.route.snapshot.paramMap.get('id');
    (this.companyService.getCompanyById(this.id).subscribe(response => this.companies = response));
  }

  public navigate(id:number){
    this.router.navigate(['edit-companies/',id]).then();
  }
}
