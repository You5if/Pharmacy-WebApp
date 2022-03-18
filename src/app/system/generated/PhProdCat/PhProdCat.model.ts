import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhProdCatModel {
constructor(


        public phProdCatId: number,
                public categoryCode: string,
                public categoryName: string,
                public description: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

