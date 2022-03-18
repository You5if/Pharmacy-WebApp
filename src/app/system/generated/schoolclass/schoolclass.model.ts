import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class SchoolClassModel {
constructor(


        public schoolClassId: number,
                public scClassName: string,
                public remarks: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

