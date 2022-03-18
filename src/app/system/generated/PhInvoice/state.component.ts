import { Component, OnInit, Inject } from '@angular/core';
import { UIService } from 'src/app/components/shared/uiservices/UI.service';
import { MessageBoxService } from 'src/app/components/messagebox/message-box.service';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { CommonService } from 'src/app/components/common/common.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { APIResultModel } from 'src/app/components/misc/APIResult.Model';

import { Observable, of } from 'rxjs';
import { SelectModel, SelectCodeModel } from 'src/app/components/misc/SelectModel';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, switchMap, map } from 'rxjs/operators';
import { SelectService } from 'src/app/components/common/select.service';
import { AppGlobals } from 'src/app/app.global';
import { Send } from 'src/app/send.model';
import { Sources } from 'src/app/source.model';
import { PhInvoiceService } from './PhInvoice.service';
import { PhInvoiceEntryService } from './phinvoice-entry/phinvoice-entry.service';
import { phInvoiceState } from './PhInvoice.model';
import { ConfirmPageComponent } from './state/confirm/confirm.component';



@Component({
  selector: 'app-state-entry',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})

export class StatePageComponent implements OnInit {
    url: string;
  
    model: Send = {
      tableId: 69,
      recordId: 0,
      userId: 26,
      roleId: 2,
      languageId: +localStorage.getItem(this._globals.baseAppName + '_language')
    };
    last: any = {
      records: [],
      auditColumn: {
        approvalStatusId: 1100001,
        companyId: 10001,
        branchId: 201,
        financialYearId: 1,
        userId: 1,
        mACAddress: "unidentified",
        hostName: "unidentified",
        iPAddress: "unidentified",
        deviceType: "Win32"
      }
  
    }
    myFormGroup: FormGroup;
  
    breakpoint: number;
    checked= false;
    checkedR = false;
    disabled = false;
    sources: Sources[] = [];
    res: any;
    spacepoint: any;
    spacezone: boolean;
    data: Sources[];
    ver: Sources;
    maxSize: number;
    submit: string;
    cancel: string;
  
    light: Sources[] = [];
    dark: Sources[] = [];
  
    ver2: Sources;
    ver3: Sources;
    ver4: Sources;
    obj1: Sources;
    obj2: Sources;
  
    direction: string;
  
    dropItem: Sources;
    container: any[][] =[];
  
    accountList: SelectModel[] = [];
  
    dialog_title: string = localStorage.getItem(this._globals.baseAppName + '_Add&Edit');
  
    dropList: Sources[] = [];


  constructor(
    public dialog: MatDialog,
    private dapiService: PhInvoiceEntryService,
      private _ui: UIService,
      private _msg: MessageBoxService,
      private _auth: AuthService,
      private _globals: AppGlobals,
      private _select: SelectService,
      
      private dialogRef: MatDialogRef<StatePageComponent>,
      @Inject(MAT_DIALOG_DATA) public pModel: phInvoiceState
  ) { }

  ngOnInit() {
    console.log(this.pModel);
    

  }





onApprove() {
    if(this.pModel.status == 2){
        this.pModel.stateId = 3
    }else if(this.pModel.status == 3){
        this.pModel.stateId = 4
    }else if(this.pModel.status == 4){
        this.pModel.stateId = 100
    }
    // console.log(this.pModel);
    this.openConfirm(this.pModel)
}
onReject() {
    
    this.pModel.stateId = -1
    this.openConfirm(this.pModel)
}
openConfirm = function (result: phInvoiceState) {
    this.dialogRef = this.dialog.open(ConfirmPageComponent, {
      disableClose: true,
      data: result
    });
  this.dialogRef.afterClosed().subscribe(() => {
    
  });
};


  onResize(event) {
    this.spacepoint =
      event.target.innerWidth <= 960
        ? (this.spacezone = false)
        : (this.spacezone = true);
    this.breakpoint =
      event.target.innerWidth <= 960
        ? 1
        : this.data[0].maxRowSize;
  }

  onCancel() {
    this.dialogRef.close();
  }
}
