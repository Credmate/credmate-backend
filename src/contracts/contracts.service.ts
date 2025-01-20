import { Injectable, StreamableFile } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { PrismaService } from '../database/prisma/prisma.service';
import { createReadStream, readFile } from 'fs';
import { join } from 'path';
import {replaceInFile} from 'replace-in-file';


@Injectable()
export class ContractsService {

  constructor(private readonly prismaService: PrismaService){}

  create(createContractDto: CreateContractDto) {
    return 'This action adds a new contract';
  }

  
  findAll() {
    return `This action returns all contracts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contract`;
  }

  update(id: number, updateContractDto: UpdateContractDto) {
    return `This action updates a #${id} contract`;
  }

  remove(id: number) {
    return `This action removes a #${id} contract`;
  }
   
  async createTentativeContract(createContractDto: CreateContractDto): Promise<StreamableFile>  {

    const options = {
      files : 'template/Contract_Template.pdf',
      from : [
        /DATE/,
        /PLACE/,
        /LENDER_FULL_NAME/,
        /LENDER_AADHAAR/,
        /LENDER_PAN/,
        /LENDER_MOBILE/,
        /LENDER_EMAIL/,
        /BORROWER_FULL_NAME/,
        /BORROWER_AADHAAR/,
        /BORROWER_PAN/,
        /BORROWER_ADDRESS/,
        /BORROWER_MOBILE/,
        /BORROWER_EMAIL/,
        /AMOUNT_IN_FIGURES/,
        /AMOUNT_IN_WORDS/, 
        /INTEREST_RATE/,  
        /INTEREST_CALCULATION_METHOD/,
        /PROCESSING_FEE_IN_FIGURES/,
        /PROCESSING_FEE_IN_WORDS/, 
        /TOTAL_REPAYABLE_AMOUNT_IN_FIGURES/,
        /TOTAL_REPAYABLE_AMOUNT_IN_WORDS/, 
        /NUMBER_OF_EMIS/,
        /EMI_AMOUNT_IN_FIGURES/, 
        /EMI_AMOUNT_IN_WORDS/,
        /EMI_DUE_DATE/, 
        /DAY_OF_MONTH/, 
        /DUE_DATE/,
        /BORROWER_ACCOUNT_NAME/,
        /BORROWER_ACCOUNT_NUMBER/,
        /BORROWER_BANK_NAME/,
        /BORROWER_IFSC_CODE/,
        /LENDER_ACCOUNT_NAME/,
        /LENDER_ACCOUNT_NUMBER/,
        /LENDER_BANK_NAME/,
        /LENDER_IFSC_CODE/,
        /LATE_PAYMENT_FEE_PERCENTAGE/,
        /CITY/, 
        /TRANSACTION_ID/,
        /TIMESTAMP/,
        /VERIFICATION_HASH/,
        /LENDER_TIMESTAMP/,
        /BORROWER_TIMESTAMP/,
        /VERIFICATION_HASH/],
      to: 
        ['createContractDto.TIMESTAMP',
         'createContractDto.CITY',
         'createContractDto.lenderfullname',
         'createContractDto.lenderADHAR',
         'createContractDto.lenderPAN',
         'createContractDto.lendermobileNumber',
         'createContractDto.lenderEmail',
         'createContractDto.borrowerfullname',
         'createContractDto.borrowerADHAR',
         'createContractDto.borrowerPAN',
         'createContractDto.borrowermobileNumber',
         'createContractDto.borrowerEmail',
         'createContractDto.loanAmount',
         'createContractDto.loanAmountInWords',
         'createContractDto.interestRate',
         'createContractDto.interestCalculatedByMethod',
         'createContractDto.processingFee',
         'createContractDto.processingFeeInWords',
         'createContractDto.repayableAmount',
         'createContractDto.repayableAmountInWords',
         'createContractDto.isEMIBased',
         'createContractDto.numberOfEMIs',
         'createContractDto.emiAmount',
         'createContractDto.emiDueDate',
         'createContractDto.loanDueDate',
         'createContractDto.borrowerAccountName',
         'createContractDto.borrowerAccountNumber',
         'createContractDto.borrowerBankName',
         'createContractDto.borrowerIFSCCode',
         'createContractDto.lenderAccountName',
         'createContractDto.lenderAccountNumber',
         'createContractDto.lenderBankName',
         'createContractDto.lenderIFSCCode',
         'createContractDto.transactionId',
         'createContractDto.verificationHash']

    }
    
    try {
      const results = await replaceInFile(options);
      console.log('Replacement results:', results)
      
      const tentativeContract = createReadStream(join(process.cwd(),'./template/Contact_Template.pdf'));
      return new StreamableFile(tentativeContract, {
        type: 'application/pdf',
        disposition: 'attachment; filename="Contract_Template.pdf"',
      });
    }
    catch (error) {
      console.error('Error occurred:', error)
    }
    
  } 


}


