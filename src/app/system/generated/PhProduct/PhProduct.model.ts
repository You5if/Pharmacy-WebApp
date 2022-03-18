import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhProductModel {
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
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

