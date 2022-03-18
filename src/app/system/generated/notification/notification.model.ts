import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class NotificationModel {
constructor(


        public notificationId: number,
                                public notification: string,
                public notifDate: Date,
                public pharmUserId: number,
                public remarks: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

