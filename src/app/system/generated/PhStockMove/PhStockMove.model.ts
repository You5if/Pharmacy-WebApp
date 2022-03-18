import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhStockMoveModel {
constructor(


        public phStockMoveId: number,
                public moveDate: Date,
                public moveCode: string,
                public description: string,
                public fPhWarehouseId: number,
                public tPhWarehouseId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

