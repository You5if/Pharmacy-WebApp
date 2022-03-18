import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent, MatTableDataSource, MatButtonToggleGroup } from '@angular/material';
import { CommonService } from 'src/app/components/common/common.service';
import { UIService } from 'src/app/components/shared/uiservices/UI.service';
import { MessageBoxService } from 'src/app/components/messagebox/message-box.service';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { PhInvoiceEntryComponent } from './phinvoice-entry/phinvoice-entry.component';
import { PhInvoiceModel, phInvoiceState } from './PhInvoice.model';
import { RightModel } from 'src/app/components/security/auth/rights.model';
import { RouterModule, Routes } from '@angular/router';
import { PageSortComponent } from 'src/app/components/common/pageevents/page-sort/page-sort.component';
import { PhInvoiceService } from './PhInvoice.service';
import { SelectModel } from 'src/app/components/misc/SelectModel';
import { SelectService } from 'src/app/components/common/select.service';
import { Send } from 'src/app/send.model';
import { AppGlobals } from 'src/app/app.global';
import { SelectionModel } from '@angular/cdk/collections';
import { ReportPageService } from 'src/app/components/PR/report-page/report-page.service';
import { SystemNavigationComponent } from '../../system-navigation/system-navigation.component';
import { StatePageComponent } from './state.component';
import { PicPageComponent } from './state/pic/pic.component';
import { PaybtnComponent } from './paybtn/paybtn.component';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-PhInvoice',
    templateUrl: './PhInvoice.component.html',
    styleUrls: ['./PhInvoice.component.scss']
  })

export class PhInvoiceComponent implements OnInit {

    displayedColumns: string[] =
        ['select','phoneNumber','InvoiceNo', 'InvoiceDate', 'location', 'driverName', 'driverMobile', 'ccAgent', 'omRemarks', 'accRemarks', 'invoiceTotal', 'paymentTotal', 'report', 'state', 'pic', 'payment'];

        direction: string;
  customerCode: string;
  customerName: string;
  pic:string;
  invoiceTotal: string;
  paymentTotal: string;
  customerMobile: string;
  balance: string;
  invoiceNo: string;
  invoiceDate: string;
  phoneNumber:string;
  location:string;
  driverName:string;
  driverMobile:string;
  ccAgent:string;
  accRemarks:string;
  omRemarks:string;
  customer:string;
  warehouse:string;
  report: string
  edit: string;
  header: string;
  submit: string;
  cancel: string;
  stateModel: phInvoiceState;
  selection = new SelectionModel<PhInvoiceModel>(true, []);;
  clickedRows = new Set<PhInvoiceModel>();
    dataSource: any;
    invId: number;
    isLastPage = false;
    pTableName: string;
    pScreenId: number;
    pTableId: number;
    recordsPerPage: number;
    currentPageIndex: number;
    menuId: number;
    model: Send;
    role = localStorage.getItem("role");
    state :string
    indexes: PhInvoiceModel;
    pageNum: PageEvent

    totalRecords: number;
    pageSizeOptions: number[] = [5, 10, 25, 100];
    opC: boolean = true

    screenRights: RightModel = {
        amendFlag: true,
        createFlag: true,
        deleteFlag: true,
        editFlag: true,
        exportFlag: true,
        printFlag: true,
        reverseFlag: true,
        shortCloseFlag: true,
        viewFlag: true
      };

    constructor(
        public dialog: MatDialog,
        private _cf: CommonService,
        private _report: ReportPageService,
        public _nav: SystemNavigationComponent,
        private _ui: UIService,
        private _msg: MessageBoxService,
        private _globals: AppGlobals,
        private _auth: AuthService,
        private _select: SelectService,
        private PhInvoiceservice: PhInvoiceService,
        private titleService: Title,

      ) {
        this.pTableName = 'PhInvoice';
        this.pScreenId = 78;
        this.pTableId = 78;
        this.recordsPerPage = 10;
        this.currentPageIndex = 1;
        this.menuId = 1019106011;
      }

  ngOnInit() {
    this.titleService.setTitle("Invoice - BluMed")
      this.refreshMe();
  }

  refreshMe() {
    if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
      this.direction = "ltr"
      this.header = "Invoice"
      this.invoiceNo = "Invoice no"
      this.invoiceDate = "Date"
      this.phoneNumber = "Phone"
      this.location = "City"
      this.driverName = "Driver"
      this.driverMobile = "Driver contact"
      this.ccAgent = "CC Agent"
      this.omRemarks = "Operation manager"
      this.accRemarks = "Accountant"
      this.invoiceTotal = "Invoice total"
      this.paymentTotal = "Payment total"
      this.report = "Report"
      this.state = "State"
      this.pic = "prescription"
      this.customer = "Customer"
      this.warehouse = "Warehouse"
      this.edit = "Edit"
      // this.report = "Report"
      
    }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
      this.direction = "rtl"
      this.header = "الفواتير"
      this.invoiceNo = "الفاتورة"
      this.pic = "الوصفة الطبية"
      this.invoiceDate = "التاريخ"
      this.phoneNumber = "الهاتف"
      this.location = "المدينة"
      this.driverName = "السائق"
      this.driverMobile = "هاتف السائق"
      this.ccAgent = "CC Agent"
      this.omRemarks = "مدير العمليات"
      this.invoiceTotal = "الفاتورة الكلية"
      this.paymentTotal = "المدفوع الكلي"
      this.accRemarks = "المحاسب"
      this.report = "التقرير"
      this.customer = "العميل"
      this.warehouse = "المخزن"
      this.state = "احالة"
    //   this.nameT = "الاسم"
    //  this.amount = "المبلغ"
    //  this.statusT = "الحالة"
      this.edit = "تعديل"
      // this.report = "تقرير "
      
    }
    if(this.pageNum == null ) {
      
      this._cf.getPageData('PhInvoice', this.pScreenId, this._auth.getUserId(), this.pTableId,
        this.recordsPerPage, this.currentPageIndex, false).subscribe(
          (result) => {
            this.totalRecords = result[0].totalRecords;
            this.recordsPerPage = this.recordsPerPage;
            this.dataSource = new MatTableDataSource(result);
            console.log(result);
            this.indexes = result
            
  
          }
        );
        this._auth.getScreenRights(this.menuId).subscribe((rights: RightModel) => {
          this.screenRights = {
            amendFlag: true,
            createFlag: true,
            deleteFlag: true,
            editFlag: true,
            exportFlag: true,
            printFlag: true,
            reverseFlag: true,
            shortCloseFlag: true,
            viewFlag: true
          };
        });
    }else {
      this._cf.getPageDataOnPaginatorOperation(this.pageNum, this.pTableName, this.pScreenId, this._auth.getUserId(),
        this.pTableId, this.totalRecords).subscribe(
          (result: PhInvoiceModel) => {
            this._ui.loadingStateChanged.next(false);
            this.totalRecords = result[0].totalRecords;
            this.recordsPerPage = this.pageNum.pageSize;
            this.dataSource = result;
          }, error => {
            this._ui.loadingStateChanged.next(false);
            this._msg.showAPIError(error);
            return false;
          });
    }

      

    
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        (this.selection.clear() ,this.clickedRows.clear()):
        (this.selection.clear(), this.dataSource.data.forEach(row => {this.selection.select(row); if (!this.clickedRows.has(row)) {

          this.clickedRows.add(row)
        }}))
  }

  onId(id: number, row:PhInvoiceModel) {
    
    if (this.clickedRows.has(row)) {
      this.clickedRows.delete(row)
    }else {
      this.clickedRows.add(row)
    }

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  paginatoryOperation(event: PageEvent) {
    console.log(event.pageIndex);
    this.pageNum = event
    
    try {
      this._cf.getPageDataOnPaginatorOperation(event, this.pTableName, this.pScreenId, this._auth.getUserId(),
        this.pTableId, this.totalRecords).subscribe(
          (result: PhInvoiceModel) => {
            this._ui.loadingStateChanged.next(false);
            this.totalRecords = result[0].totalRecords;
            this.recordsPerPage = event.pageSize;
            this.dataSource = result;
          }, error => {
            this._ui.loadingStateChanged.next(false);
            this._msg.showAPIError(error);
            return false;
          });
    } catch (error) {
      this._ui.loadingStateChanged.next(false);
      this._msg.showAPIError(error);
      return false;
    }
  }

  onSort = function () {
    this.dialogRef = this.dialog.open(PageSortComponent, {
      disableClose: true,
      data: this.pTableId
    });
  };

  onReport(invId:number, status:number) { 
    if(status == 2) {
      if(this.role == '2' || this.role == '200') {
        var reportId: number
    reportId = 3
    let restOfUrl: string; 
    restOfUrl = 'invoiceid=' + invId; 
     
    console.log(restOfUrl)
    this._report.passReportData({ reportId: reportId, restOfUrl: restOfUrl }); 
    this._nav.onClickListItem('FRP');
      }
    }else if(status == 3) {
      if(this.role == '2' || this.role == '300') {
        var reportId: number
    reportId = 3
    let restOfUrl: string; 
    restOfUrl = 'invoiceid=' + invId; 
     
    console.log(restOfUrl)
    this._report.passReportData({ reportId: reportId, restOfUrl: restOfUrl }); 
    this._nav.onClickListItem('FRP');
      }
    }else if(status == 4) {
      if(this.role == '2' || this.role == '400') {
        var reportId: number
    reportId = 3
    let restOfUrl: string; 
    restOfUrl = 'invoiceid=' + invId; 
     
    console.log(restOfUrl)
    this._report.passReportData({ reportId: reportId, restOfUrl: restOfUrl }); 
    this._nav.onClickListItem('FRP');
      }
    }
    
  }

  onAdd = function () {
    this.model = {
      tableId: 78,
      recordId: 0,
      userId: +this._auth.getUserId(),
      roleId: +localStorage.getItem('role'),
      languageId: +localStorage.getItem(this._globals.baseAppName + '_language')
    };
    if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
      localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "Add invoice");
      localStorage.setItem(this._globals.baseAppName + '_Add&Edit2', "Add");
    }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
      localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "اضافة فاتورة");
      localStorage.setItem(this._globals.baseAppName + '_Add&Edit2', "Add");
    }
    
    this.openEntry2(this.model);
  };
  onPayment = function (id: number) {
    this.model = {
      tableId: 95,
      recordId: 0,
      invId: id,
      userId: +this._auth.getUserId(),
      roleId: +localStorage.getItem('role'),
      languageId: +localStorage.getItem(this._globals.baseAppName + '_language')
    };

    this.opC = false


    if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
      localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "Payment");
     
    }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
      localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "الدفع");
      
    }
    
    this.openEntry3(this.model,this.invId);
  };
  onState = function (id: number, status: number) {
    if(status == 2) {
      if(this.role == '2' || this.role == '200') {
        this.stateModel = {
          phInvoiceId :id,
          stateId : null,
          userId: +this._auth.getUserId(),
          roleId: +localStorage.getItem('role'), 
          remarks : "",
          status : status
        }
        this._ui.loadingStateChanged.next(true);
        this.opC = false
        this.openState(this.stateModel);
        this._ui.loadingStateChanged.next(false);
      }
    }else if(status == 3) {
      if(this.role == '2' || this.role == '300') {
        this.stateModel = {
          phInvoiceId :id,
          stateId : null,
          userId: +this._auth.getUserId(),
          roleId: +localStorage.getItem('role'), 
          remarks : "",
          status : status
        }
        this._ui.loadingStateChanged.next(true);
        this.opC = false
        this.openState(this.stateModel);
        this._ui.loadingStateChanged.next(false);
      }
    }else if(status == 4) {
      if(this.role == '2' || this.role == '400') {
        this.stateModel = {
      phInvoiceId :id,
      stateId : null,
      userId: +this._auth.getUserId(),
      roleId: +localStorage.getItem('role'), 
      remarks : "",
      status : status
    }
    this._ui.loadingStateChanged.next(true);
    this.opC = false
    this.openState(this.stateModel);
    this._ui.loadingStateChanged.next(false);
      }
    }
    
  };

  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }
  onPic = function (id: number, apiImg: string, status:number) {
    if(status == 2) {
      if(this.role == '2' || this.role == '200') {
        this._ui.loadingStateChanged.next(true);
    this.opC = false
    this.openPic(apiImg);
    this._ui.loadingStateChanged.next(false);
      }
    }else if(status == 3) {
      if(this.role == '2' || this.role == '300') {
        this._ui.loadingStateChanged.next(true);
    this.opC = false
    this.openPic(apiImg);
    this._ui.loadingStateChanged.next(false);
      }
    }else if(status == 4) {
      if(this.role == '2' || this.role == '400') {
        this._ui.loadingStateChanged.next(true);
    this.opC = false
    this.openPic(apiImg);
    this._ui.loadingStateChanged.next(false);
      }
    }
    
  };

  onView = (id: number) => {
    this._ui.loadingStateChanged.next(true);
    this.PhInvoiceservice.getPhInvoiceEntry(id).subscribe((result: PhInvoiceModel) => {
      this._ui.loadingStateChanged.next(false);
      result.entryMode = 'V';
      result.readOnly = true;
      this.openEntry(result);
    });
  }

  

  onEdit = (id: number, status: number) => {
    if(this.opC == true) {
      if(status == 2) {
        if(this.role == '2' || this.role == '200') {
          this.model = {
            tableId: 78,
            recordId: id,
            userId: +this._auth.getUserId(),
            roleId: +localStorage.getItem('role'),
            languageId: +localStorage.getItem(this._globals.baseAppName + '_language')
          };
          if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
            localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "Edit invoice");
            localStorage.setItem(this._globals.baseAppName + '_Add&Edit2', "Edit");
          }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
            localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "تعديل فاتورة");
            localStorage.setItem(this._globals.baseAppName + '_Add&Edit2', "Edit");
          }
          
          this.openEntry2(this.model)
        }
      }else if(status == 3) {
        if(this.role == '2' || this.role == '300') {
          this.model = {
            tableId: 78,
            recordId: id,
            userId: +this._auth.getUserId(),
            roleId: +localStorage.getItem('role'),
            languageId: +localStorage.getItem(this._globals.baseAppName + '_language')
          };
          if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
            localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "Edit invoice");
            localStorage.setItem(this._globals.baseAppName + '_Add&Edit2', "Edit");
          }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
            localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "تعديل فاتورة");
            localStorage.setItem(this._globals.baseAppName + '_Add&Edit2', "Edit");
          }
          
          this.openEntry2(this.model)
        }
      }else if(status == 4) {
        if(this.role == '2' || this.role == '400') {
          this.model = {
            tableId: 78,
            recordId: id,
            userId: +this._auth.getUserId(),
            roleId: +localStorage.getItem('role'),
            languageId: +localStorage.getItem(this._globals.baseAppName + '_language')
          };
          if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
            localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "Edit invoice");
            localStorage.setItem(this._globals.baseAppName + '_Add&Edit2', "Edit");
          }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
            localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "تعديل فاتورة");
            localStorage.setItem(this._globals.baseAppName + '_Add&Edit2', "Edit");
          }
          
          this.openEntry2(this.model)
        }
      }
    }else {
      this._ui.loadingStateChanged.next(false);
      this.opC = true
    }
    
  }

  onDelete = function(id: number) {
      
  };

  openEntry = function (result: PhInvoiceModel) {
    if (result === undefined) {
      this.dialogRef = this.dialog.open(PhInvoiceEntryComponent, {
        disableClose: true,
        data: {}
      });
    } else {
      this.dialogRef = this.dialog.open(PhInvoiceEntryComponent, {
        disableClose: false,
        data: result
      });
    }
    this.dialogRef.afterClosed().subscribe(() => {
      this.refreshMe();
    });
  };

  openEntry2 = function (result: Send) {
    if (result === undefined) {
      this.dialogRef = this.dialog.open(PhInvoiceEntryComponent, {
        disableClose: true,
        
        data: {}
      });
    } else {
      this.dialogRef = this.dialog.open(PhInvoiceEntryComponent, {
        disableClose: true,
        
        data: result
      });
    }
    this.dialogRef.afterClosed().subscribe(() => {
      this.refreshMe(this.pageNum);
    });
  };
  openState = function (result: phInvoiceState) {
      this.dialogRef = this.dialog.open(StatePageComponent, {
        disableClose: true,
        
        data: result
      });
    this.dialogRef.afterClosed().subscribe(() => {
      this.refreshMe();
    });
  };
  openPic = function (result: string) {
      this.dialogRef = this.dialog.open(PicPageComponent, {
        disableClose: true,
        
        data: result
      });
    this.dialogRef.afterClosed().subscribe(() => {
      this.refreshMe();
    });
  };
  openEntry3 = function (result: string) {
      this.dialogRef = this.dialog.open(PaybtnComponent, {
        disableClose: true,
        
        data: result
      });
    this.dialogRef.afterClosed().subscribe(() => {
      this.refreshMe();
    });
  };

}
