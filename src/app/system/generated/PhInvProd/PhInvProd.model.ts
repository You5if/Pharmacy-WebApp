import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhInvProdModel {
constructor(


        public phInvProdId: number,
                public phInvoiceId: number,
                public phProductId: number,
                public quantity: number,
                public phProdUnitId: number,
                public unitPrice: number,
                public totalPrice: number,
                public journalEntryId: number,
                public journalDetailId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

