import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhFeedbackModel {
constructor(


        public phFeedbackId: number,
                public phInvoiceId: number,
                public remarks: string,
                public feedbackStatus: number,
                public rating: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

