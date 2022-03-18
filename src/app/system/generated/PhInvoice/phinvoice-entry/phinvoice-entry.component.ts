import { Component, OnInit, Inject } from '@angular/core';
import { UIService } from 'src/app/components/shared/uiservices/UI.service';
import { MessageBoxService } from 'src/app/components/messagebox/message-box.service';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { CommonService } from 'src/app/components/common/common.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { APIResultModel } from 'src/app/components/misc/APIResult.Model';
import { Observable, of } from 'rxjs';
import { SelectModel, SelectCodeModel } from 'src/app/components/misc/SelectModel';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, switchMap, map } from 'rxjs/operators';
import { SelectService } from 'src/app/components/common/select.service';
import { AppGlobals } from 'src/app/app.global';
import { Send } from 'src/app/send.model';
import { Sources } from 'src/app/source.model';
import { PhInvoiceEntryService } from './phinvoice-entry.service';
import { phproductModel, productPricingModel, productStockModel } from '../PhInvoice.model';

@Component({
  selector: 'app-phinvoice-entry',
  templateUrl: './phinvoice-entry.component.html',
  styleUrls: ['./phinvoice-entry.component.scss']
})

export class PhInvoiceEntryComponent implements OnInit {

	url: string;
  total: number;
  GTotal : number;
  totalTax: number;
  totalE: string;
  Ava: string;
  subTotalE: string;
  subTotal: number;
  model2: Send ;
    model: Send = {
      tableId: 78,
      recordId: 0,
      userId: +this._auth.getUserId(),
      roleId: +localStorage.getItem('role'),
      languageId: +localStorage.getItem(this._globals.baseAppName + '_language')
    };
    childElem: any = {
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
    childElem2: any = {
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

    last: any = {
      records: [],
      child1: [],
      child2: [],
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
    lastExt: any = {
      records: [],
      child1: [],
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
    lastDark: any = {
      records: [],
      child1: [],
      child2: [],
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
    model3 : Send
    model4 : Send

    breakpoint: number;
    checked= false;
    checkedR = false;
    disabled = false;
    sources: Sources[] = [];
    res: any;
    ReqExt: string
    spacepoint: any;
    spacezone: boolean;
    data: Sources[];
    ver: Sources;
    maxSize: number;
    submit: string;
    cancel: string;
    childElemInit: Sources[] = [];
  childElemDark: Sources[] = [];

  ver2: Sources;
  verCh2: Sources;
  verCh3: Sources;
  ver3: Sources;
  ver4: Sources;
  obj1: Sources;
  obj2: Sources;
  Ext: boolean = false
  
    light: Sources[] = [];
    dark: Sources[] = [];
    dropList: Sources[] = [];
  dropListItem: Sources[] = [];
  stringOfV: string;
  refString: string;

  dropItem: Sources;
  dropItemchild: Sources;
  disPromo: number;
  
    
  
    direction: string;
  
    
    container: any[][] =[];
  
    accountList: SelectModel[] = [];
  
    dialog_title: string = localStorage.getItem(this._globals.baseAppName + '_Add&Edit');
  
    

    child1Data: any;
    alarray: Sources[];
    locPrice: number

  constructor(
	  private dapiService: PhInvoiceEntryService,
      private _ui: UIService,
      private _msg: MessageBoxService,
      private _auth: AuthService,
      private _globals: AppGlobals,
      private _select: SelectService,
      private dialogRef: MatDialogRef<PhInvoiceEntryComponent>,
      @Inject(MAT_DIALOG_DATA) public pModel: Send
  ) { }

  ngOnInit() {
    this.subTotal = 0
    this.totalTax = 0
    this.GTotal = 0
    this.disPromo = 0

    this.child1Data = this.last.child1;
    if(localStorage.getItem(this._globals.baseAppName + '_Add&Edit2') == "Add") {
      console.log("dot");
      
      this.addChild1ExpenseItem(0)
      
    }
    if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
        this.direction = "ltr"
        this.submit = "Submit"
        this.cancel = "Cancel"
        this.ReqExt = "External"
      }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
        this.direction = "rtl"
        this.submit = "ارسال"
        this.cancel = "الغاء"
        this.ReqExt = "خارجي"
      }

      this._ui.loadingStateChanged.next(true);
      this.dapiService.Controllers(this.pModel).subscribe(res => {
        this._ui.loadingStateChanged.next(false);
        this.data = res;
        console.log(this.data)
        if(localStorage.getItem(this._globals.baseAppName + '_Add&Edit2') == "Edit") {
          this.Ext = true
          console.log(this.data.length)
        if(this.data.length > 0) {
          console.log(this.data[0].value)
  
          this.dapiService.getChild1byChild1(+this.data[0].value).subscribe((res) => {
    
            console.log("EditRes",res)
          this._ui.loadingStateChanged.next(false);
          
            
  
            
            for(let k=0;k<res.length;k++){
              this.addChild1ExpenseItem(res[k].phInvProdId)
              
              
              
            }
            
            
           
    
    } )
  
          
        }else {
          this.addChild1ExpenseItem(0)
        }
        
       
        
      }
  
        for(let i=0;i<=this.data.length;i++){
          this.ver2 = this.data[i]
          if (this.ver2 && this.ver2.inTransaction && this.ver2.access != "NoAccess"){
            if (this.ver2.type === "dropdown") {
              this.dropList.push(this.ver2);
              console.log("droplist: ",this.dropList)
            }
            this.light.push(this.ver2);
  
          }else{
            if(this.ver2) {
              this.dark.push(this.ver2);
            }
          }
        }
        this.breakpoint =
        window.innerWidth <= 960
          ? 1
          : this.data[0].maxRowSize;
  
        for(let k=0;k<=this.dropList.length;k++) {
          this.dropItem = this.dropList[k]
  
          this._select.getDropdown(this.dropItem.refId, this.dropItem.refTable, this.dropItem.refColumn, this.dropItem.refCondition, false).subscribe((res: SelectModel[]) => {
          this.dropList[k].myarray = res;
          this.container.push(res);
      });
  
        }  
      })
  }

  addChild1ExpenseItem(id:number) {  
    let myElem = {
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
    let childElemDark2 = {
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
    this.model2 = {
      tableId: 79,
      recordId: id,
      userId: 26,
      roleId: 2,
      languageId: +localStorage.getItem(this._globals.baseAppName + '_language')
    };
    let fresh = {
      access: "ViewOnly",
    accessId: 0,
    applicationOrder: 0,
    cssClass: "",
    designOrder:0,
    direction: "",
    entryMode: "A",
    groupName: "",
    inTransaction: true,
    instruction: "",
    label: "",
    language: "",
    max: 0,
    maxRowSize: 0,
    min: 0,
    recordId: 0,
    refColumn: "",
    refCondition: "",
    refId: "",
    refTable: "",
    tableColumnId: 90909,
    tableId: 0,
    type: "myType",
    value: "",
    myarray: 0,
    myarray2: 0
    };
    this._ui.loadingStateChanged.next(true);
    this.dapiService.child1Controllers(this.model2).subscribe((res) => {
      this._ui.loadingStateChanged.next(false);
      console.log('melish', res);
      
      this.childElemInit = res
      console.log("yousif",this.childElemInit)
      this.childElemInit.push(fresh)
      console.log(this.childElemInit)
      this.dropListItem.push(this.childElemInit[2])
     
      for(let k=0;k<this.dropListItem.length;k++) {
        console.log("loop cycle" + k)
        this.dropItemchild = this.dropListItem[k]
        console.log("DropitemTax", this.dropItemchild)

            // this.tableId = this.dropItem.refId;
            // this.tableName = this.dropItem.refTable;`
            // this.displayColumn = this.dropItem.refColumn;
            // this.condition = this.dropItem.refCondition;
            
            
           
              this._select.getDropdown(this.dropItemchild.refId, this.dropItemchild.refTable, this.dropItemchild.refColumn, this.dropItemchild.refCondition, false).subscribe((res: SelectModel[]) => {
                // console.log("drop: ", res);
                this.dropListItem[k].myarray = res;
                
              });
           

            
            
          
        
        // this.container.push(res);
        // console.log(this.container)


    
  }

  
      

      for(let i=0;i<this.childElemInit.length;i++){
        this.verCh2 = this.childElemInit[i]
        childElemDark2.records.push(this.verCh2);
        

      }
      this.lastDark.child1.push(childElemDark2);
      this.childElemInit.forEach((itemE) =>{
        if (itemE && itemE.inTransaction && itemE.access != "NoAccess"){
          
          // this.childElem.records.push(itemE);
          myElem.records.push(itemE)
          
  
        }else{
          
            this.childElemDark.push(this.verCh2);
            // console.log(this.childElemDark)
          
  
  
        }
      })

      
      // this.childElem = res
      // console.log(JSON.stringify(this.child1Data))
      this.childElem2 = null
      this.childElem2 = this.childElem
      // myElem.records.push(this.fresh)

      //this.last.child1.push(this.childElem2);
      this.last.child1.push(myElem)

      
        for (let i = 0; i < this.lastDark.child1.length; i++) {
          this.dapiService.getAvailableStock(this.lastDark.child1[i].records[2].value).subscribe((res: productStockModel) => {
            this.lastDark.child1[i].records[10].availableStock = res.stock.toString()
            this.last.child1[i].records[10].availableStock = res.stock.toString()
          })
          this.lastDark.child1[i].records[10].externalPharm = "-"
            this.lastDark.child1[i].records[10].available =  "-"
            this.lastDark.child1[i].records[10].unitPrice = "-"
            this.lastDark.child1[i].records[10].totalPrice =  "-"
            this.lastDark.child1[i].records[10].grandTotal =  "-"

          this.dapiService.getEx(this.lastDark.child1[i].records[0].value).subscribe((res) => {
            console.log(res);
            
            this.lastDark.child1[i].records[10].externalPharm = res.pharmName.toString()
            this.lastDark.child1[i].records[10].available = res.avQuantity.toString()
            this.lastDark.child1[i].records[10].unitPrice = res.unitPrice.toString()
            this.lastDark.child1[i].records[10].totalPrice = res.totalPrice.toString()
            this.lastDark.child1[i].records[10].grandTotal = res.totalPrice.toString()
            
          })

          this.dapiService.getProduct(+this.lastDark.child1[i].records[2].value).subscribe((res: phproductModel) => {
            console.log(res);
            var con: string = this.lastDark.child1[i].records[4].refCondition + res.phSaleUnitId.toString()
            console.log(con);
            
            
            
            this._select.getDropdown(this.lastDark.child1[i].records[4].refId, this.lastDark.child1[i].records[4].refTable, this.lastDark.child1[i].records[4].refColumn, con, false).subscribe((res2: SelectModel[]) => {
              console.log("drop: ", res2);
              this.lastDark.child1[i].records[4].myarray = res2;
              this.last.child1[i].records[4].myarray = res2;
              
              
            });
            
          })
          
    
          
        
        
        
      }
      this.subAgrand()
      
      
      
      
      
      
     
      
    })
    console.log("child1 final", this.last)
    console.log("DarlDarl",this.lastDark)
    console.log(this.data);
    
    
    
    
    
    

    
    
    

    

    
  }

  // allTotal() {
  //   console.log(this.data);
  //   console.log(this.lastDark);
  //   console.log(this.lastDark.child1.length);

    
   
  // }
  onReqExt() {
    this.model3 = {
      tableId: 98,
      recordId: 0,
      userId: 26,
      roleId: 2,
      languageId: +localStorage.getItem(this._globals.baseAppName + '_language')
    };
    this.model4 = {
      tableId: 99,
      recordId: 0,
      userId: 26,
      roleId: 2,
      languageId: +localStorage.getItem(this._globals.baseAppName + '_language')
    };
    let childElemExt = {
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
    var countQ = 0
    var suv = 0
    for (let i = 0; i < this.lastDark.child1.length; i++) {
      if(+this.lastDark.child1[i].records[3].value > +this.lastDark.child1[i].records[10].availableStock){
        countQ += 1
        console.log(countQ);
        this.dapiService.Controllers4(this.model4).subscribe((res) => {
          res[2].value = this.lastDark.child1[i].records[2].value
          res[3].value = (+this.lastDark.child1[i].records[3].value - +this.lastDark.child1[i].records[10].availableStock).toString()
          res[4].value = this.lastDark.child1[i].records[4].value
          res[5].value = "0"
          res[6].value = "0"
          res[7].value = "0"
          res[8].value = this.lastDark.child1[i].records[0].value
          console.log(res);
          childElemExt.records = res
          this.lastExt.child1.push(childElemExt)
          
        })
        
      }
      
    }
    if(countQ > 0) {
      
      this.dapiService.Controllers3(this.model3).subscribe((res2) => {
        for (let i = 0; i < this.lastDark.child1.length; i++) {
       
          countQ += 1
          console.log(countQ);
          this.dapiService.Controllers4(this.model4).subscribe((res22) => {
            res22[2].value = this.lastDark.child1[i].records[2].value
            res22[3].value = (+this.lastDark.child1[i].records[3].value - +this.lastDark.child1[i].records[10].availableStock).toString()
            res22[4].value = this.lastDark.child1[i].records[4].value
            res22[5].value = "0"
            res22[6].value = "0"
            res22[7].value = "0"
            res22[8].value = this.lastDark.child1[i].records[0].value
            console.log(res22);
            childElemExt.records = res22
            this.lastExt.child1.push(childElemExt)
            
          })
          if (i === this.lastDark.child1.length - 1) {
            suv = 1
          }
        
        
      }
        res2[3].value = this.data[0].value
        res2[4].value = "1"
        res2[5].value = "false"
        console.log(res2);
        this.lastExt.records = res2
        console.log(JSON.stringify(this.lastExt));
    
      if (suv === 1) {
        console.log(JSON.stringify(this.lastExt));
      this.dapiService.EntryEXT(this.lastExt).subscribe(nexto => {
        this.res = nexto;
        if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
         this._msg.showInfo("Message", "saved succesfully");
       this.dialogRef.close();
       }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
         this._msg.showInfo("رسالة", "تم الحفظ بنجاح");
       this.dialogRef.close();
       }
  
      }, error => {
        console.log(error);
        if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
         this._msg.showInfo("Message", "Error!!");
       this.dialogRef.close();
       }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
         this._msg.showInfo("رسالة", "توجد مشكلة");
       this.dialogRef.close();
       }
      });
      }
    
      })
      
    }
    
    

  }

  onChangeLoc(searchValue: string, id) {
    console.log(searchValue);
    this.subAgrand()
    
  }
  onAmountChange(searchValue: string, id): void {
    // this.elem[this.selectedElement].reference = searchValue
    
    
    this.lastDark.child1[id].records[3].value = searchValue.toString()
    this.lastDark.child1[id].records[6].value = (+this.lastDark.child1[id].records[3].value * +this.lastDark.child1[id].records[5].value).toString()
    console.log(searchValue)
    console.log(this.lastDark.child1[id].records[3].value);
    
    this.subAgrand()
    
  }

  onDiscountChange(searchValue: string): void {
    console.log(searchValue);
    if (searchValue == "") {
      this.disPromo = 0
    }
    this.data[3].value = searchValue.toString()
    this.subAgrand()
    
  }

  onChangeDate(idD: Date){

    for (let c = 0; c < this.lastDark.child1.length; c++) {
      this.onChangeValue(+this.lastDark.child1[c].records[2].value, c)
  }
  }


  onChangeValue(id: number, id2: number) {
    this._ui.loadingStateChanged.next(true);
    this.dapiService.getAvailableStock(id).subscribe((res: productStockModel) => {
      this.lastDark.child1[id2].records[10].availableStock = res.stock.toString()
    })
    this.dapiService.getProduct(id).subscribe((res: phproductModel) => {
      console.log(res);
      var con: string = this.lastDark.child1[id2].records[4].refCondition + res.phSaleUnitId.toString()
      console.log(con);
      
      
      
      this._select.getDropdown(this.lastDark.child1[id2].records[4].refId, this.lastDark.child1[id2].records[4].refTable, this.lastDark.child1[id2].records[4].refColumn, con, false).subscribe((res2: SelectModel[]) => {
        console.log("drop: ", res2);
        this.lastDark.child1[id2].records[4].myarray = res2;
        
        
      });
      
    })
    
    console.log(id);
    this.dapiService.getProductPricing2(id).subscribe((resu: productPricingModel) => {
      this._ui.loadingStateChanged.next(false);
      console.log(resu)
      this.lastDark.child1[id2].records[5].myarray = resu
      this.lastDark.child1[id2].records[5].value = resu.price.toString()
      this.lastDark.child1[id2].records[6].value = (+this.lastDark.child1[id2].records[3].value * +this.lastDark.child1[id2].records[5].value).toString()
      
    })
    this.subAgrand()
  
    
    
    
    
  }

  

  

  subAgrand() {
    this.subTotal = 0
    this.GTotal = 0
    this.locPrice = 0
    for (let i = 0; i < this.lastDark.child1.length; i++) {

      this.subTotal += +this.lastDark.child1[i].records[6].value
      this.GTotal = this.subTotal + this.locPrice
      
    }  
    this.dapiService.getLocPrice(+this.data[8].value).subscribe((resLoc) =>{
      console.log(resLoc);
      
      this.locPrice = resLoc.price
      this.GTotal = this.subTotal + this.locPrice
    console.log(this.lastDark.child1);
    
    
    })
    this.dapiService.getPromo(this.data[3].value).subscribe((resPromo) => {
      console.log(resPromo);
      if(resPromo != null) {
        if(resPromo.discountType = 27001) {
          this.disPromo = (this.subTotal * resPromo.discountAmount / 100)
          this.GTotal = this.subTotal - (this.subTotal * resPromo.discountAmount / 100) + this.locPrice
        }else {
          this.disPromo = resPromo.discountAmount
          this.GTotal = this.subTotal - resPromo.discountAmount + this.locPrice
        }
      }
      
    })
  }


  deleteFun(id: number) {
    console.log('I ran from delete');
    // this.elem.splice(id, 1);
    
    this.last.child1.splice(id, 1)
    if(this.last.child1.length == 0){
      this.addChild1ExpenseItem(0)
    }
    this.lastDark.child1.splice(id, 1)
    this.subTotal = 0
    this.subAgrand()
    }
  onSubmit() {
    this.data.forEach((Object)=> this.light.forEach((obj)=>
    {
      if(Object.tableColumnId === obj.tableColumnId){
        Object.value = obj.value
      }
    }));
	
    for(let i=0;i<=this.data.length;i++){
      this.obj1 = this.data[i];
       if(this.obj1 ){
         this.lastDark.records.push(this.obj1);
       }
     }

     this.lastDark.records.sort(function(a, b) { 
      return a.applicationOrder - b.applicationOrder  ||  a.label.localeCompare(b.label);
    });
    for (let i = 0; i < this.lastDark.child1.length; i++) {
      this.lastDark.child1[i].records.splice(10, 1)
    }
    for (let i = 0; i < this.lastDark.child1.length; i++) {
      this.lastDark.child1[i].records.sort(function(a, b) { 
        return a.applicationOrder - b.applicationOrder  ||  a.label.localeCompare(b.label);
      });
    }

    console.log("Dark",JSON.stringify(this.lastDark));

          if(this.lastDark.records[0].entryMode == "A"){
           this.last.auditColumn = this._auth.getAuditColumns();
           this.dapiService.EntryA(this.lastDark).subscribe(nexto => {
             this.res = nexto;
             if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
              this._msg.showInfo("Message", "saved succesfully");
            this.dialogRef.close();
            }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
              this._msg.showInfo("رسالة", "تم الحفظ بنجاح");
            this.dialogRef.close();
            }
     
           }, error => {
             console.log(error);
             if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
              this._msg.showInfo("Message", "Error!!");
            this.dialogRef.close();
            }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
              this._msg.showInfo("رسالة", "توجد مشكلة");
            this.dialogRef.close();
            }
           });
         }else if(this.lastDark.records[0].entryMode == "E"){
           this.last.auditColumn = this._auth.getAuditColumns();
           this.dapiService.EntryE(this.lastDark).subscribe(nexto => {
             this.res = nexto;
             if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
              this._msg.showInfo("Message", "saved succesfully");
            this.dialogRef.close();
            }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
              this._msg.showInfo("رسالة", "تم الحفظ بنجاح");
            this.dialogRef.close();
            }
     
           }, error => {
             if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
              this._msg.showInfo("Message", "Error!!");
            this.dialogRef.close();
            }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
              
              this._msg.showInfo("خطأ!!", "توجد مشكلة");
            this.dialogRef.close();
            }
           });
         }
      }

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

