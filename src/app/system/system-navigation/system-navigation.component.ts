import { Component, OnInit } from '@angular/core';
import { matDrawerAnimations } from '@angular/material';
import { ResizeEvent } from 'angular-resizable-element';
import { AppGlobals } from 'src/app/app.global';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { LoginModule } from 'src/app/components/security/auth/login/login.model';

@Component({
  selector: 'app-system-navigation',
  templateUrl: './system-navigation.component.html',
  styleUrls: ['./system-navigation.component.scss']
})
export class SystemNavigationComponent implements OnInit {

  showFiller = false;
  showButton: boolean = false;
  key: number;
  lang: string = "Arabic";
  direction: string = "ltr";
  lang_LS: string = "16001";
  break: boolean = true;
  title = 'SystemHR1';
  home: string;
  PhDriver: string
  PhDeliverPrice: string
  inventory :string
  config :string
  pharmM :string
  PhFeedback: string
  PhInvoice: string
  PhInvProd: string
  PhLoc: string
  PhMoveProd: string
  Notification: string
  PhProdCat: string
  PhProdGroup: string
  PhProdPrice: string
  PhProdStock: string
  PhProduct: string
  PhProdUnit: string
  PhProdUnitCon: string
  PhPromo: string
  invPayment: string
  PhSaleConf: string
  PhStockIn: string
  PhStockMove: string
  PhStockProd: string
  PhTrack: string
  PhWarehouse: string
  logout: string;
  change: string;
  resizeStyle: object = {};
  role = localStorage.getItem("role");

  isOpen_YourVariable = true;
  

  navigation: string = "Home";
  

  model: LoginModule = {
    'username': 'milesh@markoncs.com',
    'password': '123456789',
    'loginType': 1
  }

  constructor(private _globals: AppGlobals,
    private _auth: AuthService,) { }
    


ngOnInit(): void {

  this.role = localStorage.getItem("role");
  console.log(this.role);

  this.resizeStyle = {
    "max-width": `30%`,
  };
  this.home = "Home"
  this.PhDriver = "Driver"
  this.PhDeliverPrice = "Delivery pricing"
  this.PhFeedback = "Feedback"
  this.PhInvoice = "Invoice"
  this.inventory = "Inventory"
      this.config = "Configurations"
      this.pharmM = "Pharmacy management"
  this.PhInvProd = "InvProd"
  this.PhLoc = "Location"
  this.PhMoveProd = "MoveProd"
  this.Notification = "Notification"
  this.PhProdCat = "Product category"
  this.PhProdGroup = "Product group"
  this.PhProdPrice = "Product pricing"
  this.PhProdStock = "Product stock"
  this.PhProduct = "Product"
  this.PhProdUnit = "Product unit"
  this.PhProdUnitCon = "Product unit conversion"
  this.PhPromo = "Promotion"
  this.invPayment = "Invoice payment"
  this.PhSaleConf = "Sales configuration"
  this.PhStockIn = "Stock in"
  this.PhStockMove = "Stock movement"
  this.PhStockProd = "StockProd"
  this.PhTrack = "Tracking"
  this.PhWarehouse = "Warehouse"
     
      this.logout = "Logout"
      this.change = "Language:"
  localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation)
  if(localStorage.getItem(this._globals.baseAppName + '_nav') == "Home") {
    this.key = 0
    this.navigation = "Home"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhDriver") {
    this.key = 1
    this.navigation = "PhDriver"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhDeliverPrice") {
    this.key = 1
    this.navigation = "PhDeliverPrice"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhFeedback") {
    this.key = 1
    this.navigation = "PhFeedback"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhInvoice") {
    this.key = 1
    this.navigation = "PhInvoice"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhInvProd") {
    this.key = 1
    this.navigation = "PhInvProd"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "Notification") {
    this.key = 1
    this.navigation = "Notification"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhLoc") {
    this.key = 1
    this.navigation = "PhLoc"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhMoveProd") {
    this.key = 1
    this.navigation = "PhMoveProd"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhProdCat") {
    this.key = 1
    this.navigation = "PhProdCat"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhProdGroup") {
    this.key = 1
    this.navigation = "PhProdGroup"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhProdPrice") {
    this.key = 1
    this.navigation = "PhProdPrice"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhProdStock") {
    this.key = 1
    this.navigation = "PhProdStock"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhProduct") {
    this.key = 1
    this.navigation = "PhProduct"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhProdUnit") {
    this.key = 1
    this.navigation = "PhProdUnit"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhProdUnitCon") {
    this.key = 1
    this.navigation = "PhProdUnitCon"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhPromo") {
    this.key = 1
    this.navigation = "PhPromo"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhSaleConf") {
    this.key = 1
    this.navigation = "PhSaleConf"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhStockIn") {
    this.key = 1
    this.navigation = "PhStockIn"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhStockMove") {
    this.key = 1
    this.navigation = "PhStockMove"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhStockProd") {
    this.key = 1
    this.navigation = "PhStockProd"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhTrack") {
    this.key = 1
    this.navigation = "PhTrack"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "PhWarehouse") {
    this.key = 1
    this.navigation = "PhWarehouse"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "Class") {
    this.key = 1
    this.navigation = "Class"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "InvoicePayment") {
    this.key = 1
    this.navigation = "InvoicePayment"
  }

  var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("side_list_item");
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  btns[this.key].className += " active";

  // this._auth.login(this.model);
  // this._auth.logout();
  localStorage.setItem(this._globals.baseAppName + '_language', this.lang_LS);
  var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("side_list_item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
  console.log(this.navigation);
    this.break =
    window.innerWidth <= 740
      ? false
      : true;
  }

  

  onSignOut() {
    this._auth.logout();
  }

  onBusiness(name: string) {
    this.navigation = "Home"
    localStorage.getItem(this._globals.baseAppName + '_nav');
    var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("side_list_item");
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  btns[0].className += " active";
  
  
}

onToggle() {
  this.break = !this.break
}
  
  onClickListItem(event: string) {
    if(event == 'H' ) {
      this.navigation = "Home"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'D' ) {
      this.navigation = "PhDriver"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'DP' ) {
      this.navigation = "PhDeliverPrice"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'F' ) {
      this.navigation = "PhFeedback"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'I' ) {
      this.navigation = "PhInvoice"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'IP' ) {
      this.navigation = "PhInvProd"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'N' ) {
      this.navigation = "Notification"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'L' ) {
      this.navigation = "PhLoc"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'MP' ) {
      this.navigation = "PhMoveProd"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'PC' ) {
      this.navigation = "PhProdCat"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'PG' ) {
      this.navigation = "PhProdGroup"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'PP' ) {
      this.navigation = "PhProdPrice"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'PS' ) {
      this.navigation = "PhProdStock"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'P' ) {
      this.navigation = "PhProduct"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'PU' ) {
      this.navigation = "PhProdUnit"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'PUC' ) {
      this.navigation = "PhProdUnitCon"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'Pr' ) {
      this.navigation = "PhPromo"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'SC' ) {
      this.navigation = "PhSaleConf"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'SI' ) {
      this.navigation = "PhStockIn"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'SM' ) {
      this.navigation = "PhStockMove"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'SP' ) {
      this.navigation = "PhStockProd"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'T' ) {
      this.navigation = "PhTrack"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'W' ) {
      this.navigation = "PhWarehouse"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'C1' ) {
      this.navigation = "Class"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      
    }else if(event == 'FR' ) {
      this.navigation = "FinancialReports"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'FRP' ) {
      this.navigation = "FinancialReportsPage"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'InP' ) {
      this.navigation = "InvoicePayment"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }
  }

  onChangeLanguage() {
    this.navigation = "Home"
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("side_list_item");
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      btns[0].className += " active";
    if (localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
      this.lang = "Arabic"
      this.direction = "ltr"
      this.home = "Home"
  this.PhDriver = "Driver"
  this.PhDeliverPrice = "Delivery pricing"
  this.PhFeedback = "Feedback"
  this.PhInvoice = "Invoice"
  this.PhInvProd = "InvProd"
  this.PhLoc = "Location"
  this.PhMoveProd = "MoveProd"
  this.PhProdCat = "Product category"
  this.PhProdGroup = "Product group"
  this.PhProdPrice = "Product pricing"
  this.PhProdStock = "Product stock"
  this.PhProduct = "Product"
  this.PhProdUnit = "Product unit"
  this.PhProdUnitCon = "Product unit conversion"
  this.PhPromo = "Promotion"
  this.PhSaleConf = "Sales configuration"
  this.invPayment = "Invoice payment"
  this.Notification = "Notification"
  this.PhStockIn = "Stock in"
  this.inventory = "Inventory"
      this.config = "Configurations"
      this.pharmM = "Pharmacy management"
  this.PhStockMove = "Stock movement"
  this.PhStockProd = "StockProd"
  this.PhTrack = "Tracking"
  this.PhWarehouse = "Warehouse"
      this.logout = "Logout"
      this.change = "Language:"
      
      
      this.lang_LS = "16001"
    }else if (localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
      this.lang = "الإنجليزية"
      this.lang_LS = "16002"
      this.direction = "rtl"
      this.home = " الرئيسية "
      this.PhDriver = "السائق"
      this.PhDeliverPrice = "تسعيرة التوصيل"
      this.PhFeedback = "الإستجابة"
      this.PhInvoice = "الفواتير"
      this.invPayment = "دفع الفواتير"
      this.PhInvProd = "InvProd"
      this.PhLoc = "الموقع"
      this.PhMoveProd = "MoveProd"
      this.PhProdCat = "تصنيف المنتجات"
      this.PhProdGroup = "مجموعة المنتجات"
      this.PhProdPrice = "تسعيرة المنتجات"
      this.PhProdStock = "مخزون المنتجات"
      this.PhProduct = "المنتجات"
      this.PhProdUnit = "وحدة المنتجات"
      this.Notification = "الاشعارات"
      this.inventory = "المخزون"
      this.config = "الاعدادات"
      this.pharmM = "ادارة الصيدلية"
      this.PhProdUnitCon = "تحويل وحدة المنتجات"
      this.PhPromo = "الترويجات"
      this.PhSaleConf = "اعدادات المبيعات"
      this.PhStockIn = "المخزون الداخل"
      this.PhStockMove = "المخزون الخارج"
      this.PhStockProd = "PhStockProd"
      this.PhTrack = "التتبع"
      this.PhWarehouse = "المخازن"
      this.logout = "تسجيل الخروج"
      this.change = "اللغة:"
    }else if (localStorage.getItem(this._globals.baseAppName + '_language') == "") {
      this.lang = "Arabic"
      this.direction = "ltr"
      this.home = "Home"
      this.PhDriver = "Driver"
      this.PhDeliverPrice = "Delivery pricing"
      this.PhFeedback = "Feedback"
      this.PhInvoice = "Invoice"
      this.PhInvProd = "InvProd"
      this.PhLoc = "Location"
      this.PhMoveProd = "MoveProd"
      this.PhProdCat = "Product category"
      this.PhProdGroup = "Product group"
      this.PhProdPrice = "Product pricing"
      this.PhProdStock = "Product stock"
      this.PhProduct = "Product"
      this.PhProdUnit = "Product unit"
      this.PhProdUnitCon = "Product unit conversion"
      this.PhPromo = "Promotion"
      this.PhSaleConf = "Sales configuration"
      this.PhStockIn = "Stock in"
      this.PhStockMove = "Stock movement"
      this.Notification = "Notification"
      this.inventory = "Inventory"
      this.config = "Configurations"
      this.pharmM = "Pharmacy management"
      this.PhStockProd = "StockProd"
      this.PhTrack = "Tracking"
      this.PhWarehouse = "Warehouse"
      this.logout = "Logout"
      this.change = "Change to:"
      this.invPayment = "Invoice payment"
      
      this.lang_LS = "16001"
    }
    localStorage.setItem(this._globals.baseAppName + '_language', this.lang_LS);
    console.log("lang: ",localStorage.getItem(this._globals.baseAppName + '_language'))
  }

  onResize(event: any){
    this.break =
    window.innerWidth <= 740
      ? false
      : true;
  }
  checkEng(){
    return (localStorage.getItem(this._globals.baseAppName + '_language') == '16002')
      
  }
  resizeValidate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  resizeEdges(){
    if(localStorage.getItem(this._globals.baseAppName + '_language') == '16001'){
      return {right: true}
    } else {return{left: true}}
  }
 
                    /**
                     * Finilizes resize positions
                     * (used for drawer/sidenav width)
                     * @param event 
                     */
  onResizeEnd(event: ResizeEvent): void {
    this.resizeStyle = {
                     // enable/disable these per your needs
      //position: 'fixed',
      //left: `${event.rectangle.left}px`,
      //top: `${event.rectangle.top}px`,
      //height: `${event.rectangle.height}px`,
      width: `${event.rectangle.width}px`,
    };
  }

}
