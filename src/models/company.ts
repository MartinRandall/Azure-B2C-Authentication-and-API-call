import {Address} from './address';

export interface Company {
    id: number;
    name: string;
    isActive: boolean;
    isDeleted: boolean;
    addressId: number;
    address: Address;
    agents: any[];
    jobs: any[];
    coreLogicIntegrationId?: any;
    coreLogicIntegration?: any;
    createdOn: Date;
    updatedOn: Date;
    createdBy: string;
    updatedBy: string;
}