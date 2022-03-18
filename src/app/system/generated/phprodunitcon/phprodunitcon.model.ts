import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhProdUnitConModel {
constructor(


        public phProdUnitConId: number,
                public fromUnitId: number,
                public toUnitId: number,
                public quantity: number,
                public description: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

