import Web3 from 'web3';
import dotenv from 'dotenv';
import {config} from "../../../settings";
import { IUnDelegateOptions, IUnDelegateRetValues } from '../Model/UndelegateAmountResult';
dotenv.config();

export const unDelegate = async (params:IUnDelegateOptions): Promise<IUnDelegateRetValues> => {{
 /*//Call Validators Array const validatorArrayObj = await funcGetValidatorContractAddress(); //Using Linq Library to filter the data using Enumerable const validatorInfo = Enumerable.from(validatorArrayObj).firstOrDefault((element)=>element.validatorId===params.validatorId); */
     const web3 = new Web3(new Web3.providers.HttpProvider(config.MumbaiTestnet.providerURL)); 
     const unDelegateABI = require('../../abi/validatorShareContract.json'); 
     let encoded_tx; 
     // Get contract instance 
     const validatorShareContract = new web3.eth.Contract(unDelegateABI, params.validatorContractAddress);
 try { 
    //Capturing the receipt for "Encoded ABI" 
    const amount = web3.utils.toWei(params.amount.toString(), 'ether'); 
    encoded_tx = await validatorShareContract.methods.sellVoucher_new(amount,amount).encodeABI(); 
    let retVal:IUnDelegateRetValues = { To:Web3.utils.toChecksumAddress(params.validatorContractAddress), 
    // It's a validator Address used for transaction 
    Value: 0,
     //It's a ether value required to make transaction on blockchain.
    data:encoded_tx 
    //It's a input data required to perform the transaction. 
}
 return retVal; 
} catch (error) { 
    throw (error); 
}}};
unDelegate({validatorContractAddress:'0x29f5406e20219f7e46806837e820cf7c2fa6d3ee',amount:0.180750000000000000})
.then((result)=>(console.log(result.data)))