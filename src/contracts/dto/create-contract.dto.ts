import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsUUID, length, min } from "class-validator";

export class CreateContractDto {
  
@ApiProperty({
description: 'User ID of the lender on our platform',
example: '123e4567-e89b-12d3-a456-426614174000',
 })
@IsUUID()
@IsNotEmpty()
lenderUserId: string;

@ApiProperty({
description: 'Name of the lender',
example: 'Balasubramanyam Kanisetti',
})
@IsNotEmpty()
lenderfullname: string;

@ApiProperty({
    description: 'Uid/AAdhar id of the lender',
    example: 'XXXX XXXX XXXX' 
})
@IsNotEmpty()
lenderUID: string;

@ApiProperty({
    description: 'PAN id of the lender',
    example: 'XXXX XXXX XXXX' 
})
@IsNotEmpty()
lenderPAN: string;

@ApiProperty({
    description: 'mobile number of the lender',
    example: 'XXXX XXXX XXXX' 
})
@IsNotEmpty()
lendermobileNumber: string;

@ApiProperty({
    description: 'email of the lender',
    example: 'XXXX XXXX XXXX' 
})
@IsNotEmpty()
lenderEmail: string;
  
@ApiProperty({
description: 'User ID of the borrower on credmate platform',
example: '123e4567-e89b-12d3-a456-426614174000',
})
@IsUUID()
@IsNotEmpty()
borrowerUserId: string;


@ApiProperty({
description: 'Name of the borrower',
example: 'Balasubramnaym Kanisetti',
})
@IsNotEmpty()
borrowerfullname: string;

@ApiProperty({
description: 'Uid/AAdhar id of the borrower',
example: 'XXXX XXXX XXXX' 
})
@IsNotEmpty()
borrowerUID: string;

@ApiProperty({
description: 'PAN id of the borrower',
example: 'XXXX XXXX XXXX' 
})
@IsNotEmpty()
borrowerPAN: string;

@ApiProperty({
description: 'mobile number of the borrower',
example: 'XXXX XXXX XXXX' 
})
@IsNotEmpty()
borrowermobileNumber: string;

@ApiProperty({
description: 'email of the borrower',
example: 'XXXX XXXX XXXX' 
})
@IsNotEmpty()
borrowerEmail: string;

@ApiProperty({
description: 'This indicates the the city under which this loan agreement is legally binding. Never Empty.'    
})
@IsNotEmpty()
city: string;

@ApiProperty({
description: 'The Loan amount as stipulated on this Contract in INR'
})
@IsNotEmpty() 
@IsNumber() 
loanAmount: number; 

@ApiProperty({
description: 'The Loan amount as stipulated on this Contract in INR. in Words'
})
@IsNotEmpty()  
loanAmountInWords: string; 

@ApiProperty({
description: 'interest rate for this loan amount'
})
@IsNotEmpty() 
@IsNumber() 
interestRate: number; 
@ApiProperty({
description: 'Method with which interst is calculated.'    
})
@IsNotEmpty()
interestCalculatedByMethod: string;

@ApiProperty({
description: 'Processing fee for this loan. Could be Zero.'
})
@IsNotEmpty() 
@IsNumber() 
processingFee: number; 
@ApiProperty({
description : 'Processing fee for this loan in words. Could be Zero'
})
@IsNotEmpty()
processingFeeInWords: string;
    
@ApiProperty({
description: 'Total Repayable Amount in INR. Is Never Zero'
})
@IsNotEmpty() 
@IsNumber() 
repayableAmount: number; 

@ApiProperty({
description: 'Total Repayable Amount in words. Is Never Zero'
})
@IsNotEmpty()
repayableAmountInWords: string; 

@ApiProperty({
description: 'This is true only if the loan is EMI based.'
})
@IsNotEmpty()
@IsBoolean() 
isEMIBased: boolean; 

 @ApiProperty({
description: 'Only applicable if isEMIBased is true.'
})
@IsNotEmpty()
@IsNumber()
numberOfEMIs: number;
@ApiProperty({
description: 'Only applicable if isEMIBased is true. Indicates the EMI amount each month.'
})
@IsNotEmpty()
@IsNumber()
emiAmount: number;
@ApiProperty({
description: 'Only applicable if isEMIBased is true. Indicates the EMI amount each month.'
})
@IsNotEmpty()
@IsNumber()
emiDueDate: number; 
@ApiProperty({
description: 'Only applicable if isEMIBased is false. This is for Bullet Payment.'
})
@IsNotEmpty()
@IsNumber()
loanDueDate: number; 
 
@ApiProperty({
description: 'borrower account name.'
})
@IsNotEmpty()
@IsString()
borrowerAccountName: string; 
 
@ApiProperty({
description: 'borrower account name.'
})
@IsNotEmpty()
@IsNumber()
borrowerAccountNumber: Number; 
 
@ApiProperty({
description: 'borrower account name.'
})
@IsNotEmpty()
@IsString()
borrowerBankName: string; 
@ApiProperty({
description: 'borrower account name.'
})
@IsNotEmpty()
@IsString()
borrowerIFSCCode: string; 
@ApiProperty({
description: 'lender account name.'
})
@IsNotEmpty()
@IsString()
lenderAccountName: string; 
 
@ApiProperty({
description: 'lender account name.'
})
@IsNotEmpty()
@IsNumber()
lenderAccountNumber: Number; 

@ApiProperty({
description: 'lender account name.'
})
@IsNotEmpty()
@IsString()
 lenderBankName: string; 

 @ApiProperty({
description: 'lender account name.'
 })
@IsNotEmpty()
@IsString()
lenderIFSCCode: string; 
 
 @ApiProperty({
description: 'transaction ID is created by the platform.'
})
@IsNotEmpty()
@IsString()
transactionId : string; 

 @ApiProperty({
description: 'verification hash is a digital hashsignature.'
 })
 @IsNotEmpty()
 @IsUUID()
 @IsString()
 verificationHash : string; 
}