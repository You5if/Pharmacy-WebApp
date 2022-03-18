import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhSaleConfModel {
constructor(


        public phSaleConfId: number,
                public confName: string,
                public description: string,
                public confQuery: string,
                public confQuery2: string,
                public confQuery3: string,
                public confQuery4: string,
                public confQuery5: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

