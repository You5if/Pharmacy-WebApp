import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhInvoicePaymentModel {
constructor(


        public phInvoicePaymentId: number,
                public paymentType: number,
                public phInvoiceId: number,
                public amountPaid: number,
                public transferCode: string,
                public remarks: string,
                public accRemarks: string,
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

