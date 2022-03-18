import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhTrackModel {
constructor(


        public phTrackId: number,
                public phInvoiceId: number,
                public trackStatus: number,
                public remarks: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

