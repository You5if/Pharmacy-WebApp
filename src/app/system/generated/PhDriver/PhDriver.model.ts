import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class PhDriverModel {
constructor(


        public phDriverId: number,
                public driverName: string,
                public driverDetails: string,
                public mobile1: string,
                public mobile2: string,
                public licenseNo: string,
                public licenseExpiry: Date,
                public vehicleAssigned: string,
                public vehReg: string,
                public vehRegExp: Date,
                public driverIdNumber: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

