import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhStockInModel {
constructor(


        public phStockInId: number,
                public stockInDate: Date,
                public stockInCode: string,
                public description: string,
                public phWarehouseId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

export class PhStockinproductModel {
        constructor(
                public phStockProdId: number, 
                public phStockInId: number, 
                public phProductId: number, 
                public quantity: number, 
                public phProdUnitId: number, 
                public expiryDate: Date, 
                public active: boolean, 
    public entryMode: string, 
    public readOnly: boolean, 
    public auditColumns: any, 
        ) { }
}



