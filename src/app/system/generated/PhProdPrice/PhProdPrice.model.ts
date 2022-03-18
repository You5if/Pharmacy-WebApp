import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhProdPriceModel {
constructor(


        public phProdPriceId: number,
                public phProductId: number,
                public priceType: number,
                public phProdUnitId: number,
                public fromDate: Date,
                public toDate: Date,
                public price: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

