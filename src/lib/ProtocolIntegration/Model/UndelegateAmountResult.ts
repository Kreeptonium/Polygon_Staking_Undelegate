export interface IUnDelegateOptions{ 
    validatorContractAddress:string; 
    //They can send validator Id rather than address 
    amount:number;
    }
export interface IUnDelegateRetValues{ 
    To:string; 
    Value:number; 
    data:string;
    }