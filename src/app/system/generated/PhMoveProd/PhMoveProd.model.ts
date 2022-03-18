import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhMoveProdModel {
constructor(


        public phMoveProdId: number,
                public phStockMoveId: number,
                public phProductId: number,
                public phProdUnitId: number,
                public quantity: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

