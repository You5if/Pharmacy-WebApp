import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhPromoModel {
constructor(


        public phPromoId: number,
                public promoCode: string,
                public discountType: number,
                public discountAmount: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

