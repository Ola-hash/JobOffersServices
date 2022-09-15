import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {JobOfferModel} from "../models/job-offer-model";
import {Observable} from "rxjs";

@Injectable()
export class JobOfferService {
  constructor(private readonly httpClient: HttpClient) {
  }

  public createJobOffer(jobOfferModel: JobOfferModel): Observable<void> {
    return this.httpClient.post<void>("api/offers", jobOfferModel)
  }

  public editJobOffer(jobOfferModel: JobOfferModel, id: number): Observable<void> {
    return this.httpClient.put<void>('api/offers/' + id, jobOfferModel);
  }

  public deleteJobOffer(id: number): Observable<void>{
    return this.httpClient.delete<void>('api/offers/' + id)
  }

  public getJobOffers(): Observable<JobOfferModel[]> {
    return this.httpClient.get<JobOfferModel[]>('api/offers')
  }

  public getJobOfferByName(name: string | null): Observable<JobOfferModel> {
    return this.httpClient.get<JobOfferModel>('api/offer/' + name);
  }

  public getJobOfferById(id: string): Observable<JobOfferModel> {
    return this.httpClient.get<JobOfferModel>('api/offers/' + id);
  }

}
