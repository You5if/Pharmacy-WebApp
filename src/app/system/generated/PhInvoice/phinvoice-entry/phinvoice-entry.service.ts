import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {catchError, map} from 'rxjs/operators';
import { Send } from 'src/app/send.model';
import { AppGlobals } from 'src/app/app.global';
import { CommonService } from 'src/app/components/common/common.service';
import { Http } from '@angular/http';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { Observable } from 'rxjs';
import { phInvExInfo, phInvoiceproductModel, phInvoiceState, phproductModel, productPricingModel, productStockModel,promoModel } from '../PhInvoice.model';


@Injectable({
    providedIn: 'root'
})


export class PhInvoiceEntryService {

    constructor(private _globals: AppGlobals,
        private httpClient: HttpClient,
        private _cf: CommonService,
        private http: Http,
        private _auth: AuthService) {}

        Controllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'PhInvoice/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
           return response.json();
           }), catchError(this._cf.handleError));
        }

        EntryA(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'PhInvoice/createuniv',arr);
        }

        EntryE(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'PhInvoice/edituniv',arr);
        }
        Controllers2(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'PhInvoicePayment/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
           return response.json();
           }), catchError(this._cf.handleError));
        }
        Controllers3(model: Send) {
         return this.http.post(this._globals.baseAPIUrl + 'ExtReq/getuniventry', model, this._cf.requestOptions()).pipe(
        map((response: any) => {
        return response.json();
        }), catchError(this._cf.handleError));
     }
        Controllers4(model: Send) {
         return this.http.post(this._globals.baseAPIUrl + 'ExtReqDet/getuniventry', model, this._cf.requestOptions()).pipe(
        map((response: any) => {
        return response.json();
        }), catchError(this._cf.handleError));
     }

        EntryA2(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'PhInvoicePayment/createuniv',arr);
        }
        EntryEXT(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'ExtReq/createuniv',arr);
        }

        EntryE2(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'PhInvoicePayment/edituniv',arr);
        }
        sendState(model: phInvoiceState){
            return this.http.post(this._globals.baseAPIUrl + 'PhInvoice/updatestate',model);
         }
        child1Controllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'PhInvProd/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
               console.log('here: ', response.json());
           return response.json();
           }), catchError(this._cf.handleError));
           }
        getChild1byChild1(id: number): Observable<phInvoiceproductModel[]> {
            return this.httpClient.get<phInvoiceproductModel[]>(this._globals.baseAPIUrl + 'PhInvProd/byinvoice/' + id).pipe(
            map((result: phInvoiceproductModel[]) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }

           getProductPricing(id: number): Observable<productPricingModel> {
            return this.httpClient.get<productPricingModel>(this._globals.baseAPIUrl + 'ProductPricing/productpricing/' + id).pipe(
            map((result: productPricingModel) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }
           getProductPricing2(id: number): Observable<productPricingModel> {
            return this.httpClient.get<productPricingModel>(this._globals.baseAPIUrl + 'PhProduct/getprice/' + id).pipe(
            map((result: productPricingModel) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }

           getPromo(promoCode: string): Observable<promoModel> {
            return this.httpClient.get<promoModel>(this._globals.baseAPIUrl + 'phpromo/code/' + promoCode).pipe(
            map((result: promoModel) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }
           getProduct(id: number): Observable<phproductModel> {
            return this.httpClient.get<phproductModel>(this._globals.baseAPIUrl + 'PhProduct/' + id).pipe(
            map((result: phproductModel) => {  
            return result;
            }), catchError(this._cf.handleError)
            );
           }
           getEx(id: number): Observable<phInvExInfo> {
            return this.httpClient.get<phInvExInfo>(this._globals.baseAPIUrl + 'PhInvProd/externalinfo/' + id).pipe(
            map((result: phInvExInfo) => {  
            return result;
            }), catchError(this._cf.handleError)
            );
           }
           getAvailableStock(id: number): Observable<productStockModel> {
            return this.httpClient.get<productStockModel>(this._globals.baseAPIUrl + 'PhProduct/getstock/' + id).pipe(
            map((result: productStockModel) => {  
            return result;
            }), catchError(this._cf.handleError)
            );
           }
           getLoc(loc: number): Observable<any> {
            return this.httpClient.get<any>(this._globals.baseAPIUrl + 'PhLoc/' + loc).pipe(
            map((result: any) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }
           getLocPrice(loc: number): Observable<any> {
            return this.httpClient.get<any>(this._globals.baseAPIUrl + 'PhDeliverPrice/fetchprice/' + loc).pipe(
            map((result: any) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }

           
}

