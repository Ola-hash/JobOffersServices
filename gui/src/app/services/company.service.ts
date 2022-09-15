import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {CompanyFormModel} from "../models/company-form-model";
import {CompanyModel} from "../models/company.model";

@Injectable()
export class CompanyService {
  constructor(private readonly httpClient: HttpClient) {
  }

  public getCompanyNames(): Observable<string[]> {
    return this.httpClient.get<string[]>('api/company/names');
  }

  public createCompany(companyModel: CompanyFormModel): Observable<void> {
    return this.httpClient.post<void>("api/companies", companyModel);
  }

  public editCompany(companyModel: CompanyModel, id: number): Observable<void> {
    return this.httpClient.put<void>('api/companies/' + id, companyModel);
  }
  public deleteCompany(id: number): Observable<void>{
    return this.httpClient.delete<void>('api/companies/' + id)
  }


  public getCompanies(): Observable<CompanyModel[]> {
    return this.httpClient.get<CompanyModel[]>("api/companies"); //
  }

  public getCompanyByName(name: string | null): Observable<CompanyModel> {
    return this.httpClient.get<CompanyModel>('api/company/' + name);
  }

  public getCompanyById(id: number): Observable<CompanyModel> {
    return this.httpClient.get<CompanyModel>('api/companies/' + id);
  }
}
