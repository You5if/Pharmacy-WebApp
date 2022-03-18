import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhProdGroupModel {
constructor(


        public phProdGroupId: number,
                public groupCode: string,
                public groupName: string,
                public description: string,
                public phProdCatId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

