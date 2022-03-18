import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhInvoiceModel {
constructor(


        public phInvoiceId: number,
                public invoiceNo: string,
                public invoiceDate: Date,
                public promoCode: string,
                public pharmUserId: number,
                public phWarehouseId: number,
                public discJournalEntryId: number,
                public discJournalDetailId: number,
                public phLocId: number,
                public description: string,
                public locationX: number,
                public locationY: number,
                public locationURL: string,
                public orderStatus: number,
                public remarks: string,
                public phDriverId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

export class phInvoiceproductModel {
        constructor(
                public phInvProdId: number,
                public phInvoiceId: number,
                public productId: number,
                public phProductId: number,
                public phProductUnitId: number,
                public unitPrice: number,
                public totalPrice: number,
                public active: boolean,
    public entryMode: string,
    public readOnly: boolean,
    public auditColumns: any,
        ) { }
}
export class productPricingModel {
        constructor(
                public phProductId: number,
                public price: number,
                
        ) { }
}
export class productStockModel {
        constructor(
                public phProductId: number,
                public stock: number,
                
        ) { }
}
export class promoModel {
        constructor(
                        public auditColumns: null,
                        public phPromoId: number,
                        public promoCode: string,
                        public discountType: number,
                        public discountAmount: number,
                        public active: boolean
                
        ) { }
}
export class phInvoiceState { 
        constructor (
                public  phInvoiceId :number,
                public  stateId :number,
                public  userId :number,
                public  roleId :number, 
                public  remarks :string, 
                public  status :number

        ) { }
        
    }

    export class phproductModel { 
        constructor( 
                public phProductId: number, 
                public productCode: string, 
                public productName: string, 
                public phProdCatId: number, 
                public phProdGroupId: number, 
                public barcode: string, 
                public qrcode: string, 
                public phProdUnitId: number, 
                public phSaleUnitId: number, 
                public phWarehouseId: number, 
                public aPIImagePath: string, 
                public aPIPath: string, 
                public extension: string, 
                public fileName: string, 
                public fullPath: string, 
                public originalFileName: string, 
                public unitMeasure: string, 
                public sciName: string, 
                public description: string, 
                public active: boolean, 
    public entryMode: string, 
    public readOnly: boolean, 
    public auditColumns: any, 
        ) { } 
}
    export class phInvExInfo { 
        constructor( 
                public phInvProdId: number, 
                public extReqDetId: number, 
                public extReqId: number, 
                public phProductId: number, 
                public phProdUnitId: number, 
                public quantity: number, 
                public avQuantity: number,  
                public unitPrice: number, 
                public totalPrice: number, 
                public pharmName: string, 
                public pharmAddress: string, 
                public contact1: string, 
                public contact2: string, 
                
        ) { } 
}