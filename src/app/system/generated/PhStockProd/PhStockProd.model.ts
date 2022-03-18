import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhStockProdModel {
constructor(


        public phStockProdId: number,
                public phStockInId: number,
                public phProductId: number,
                public quantity: number,
                public phProdUnitId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

