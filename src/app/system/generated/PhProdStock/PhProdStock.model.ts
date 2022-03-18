import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhProdStockModel {
constructor(


        public phProdStockId: number,
                public phProductId: number,
                public quantity: number,
                public phProdUnitId: number,
                public phWarehouseId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

