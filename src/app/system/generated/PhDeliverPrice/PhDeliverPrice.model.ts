import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhDeliverPriceModel {
constructor(


        public phDeliverPriceId: number,
                public phLocId: number,
                public price: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

