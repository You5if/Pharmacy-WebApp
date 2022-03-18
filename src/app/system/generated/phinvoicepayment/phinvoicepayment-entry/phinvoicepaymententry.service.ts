import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map, catchError } from "rxjs/operators";
import { AppGlobals } from "src/app/app.global";
import { CommonService } from "src/app/components/common/common.service";
import { AuthService } from "src/app/components/security/auth/auth.service";
import { Send } from "src/app/send.model";

@Injectable({
    providedIn: 'root'
})
export class PhInvoicePaymentEntryService {

    constructor(private _globals: AppGlobals,
        private httpClient: HttpClient,
        private _cf: CommonService,
        private http: Http,
        private _auth: AuthService) {}

        Controllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'PhInvoicePayment/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
           return response.json();
           }), catchError(this._cf.handleError));
        }

        EntryA(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'PhInvoicePayment/createuniv',arr);
        }

        EntryE(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'PhInvoicePayment/edituniv',arr);
        }
}
