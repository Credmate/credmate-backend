import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file: Express.Multer.File, userId: string, borrowerId: string) {
    return this.contractsService.create(file,userId,borrowerId);
  }

  @Post('tentative')
  CreateTentative(@Body() createContractDto: CreateContractDto){
    return this.contractsService.createTentativeContract(createContractDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractsService.findContractsForOneLender(+id);
  }

    /*
  TODO: Two Methods are missing here. 
   1) Find All -> We need to think about what findall means here. 
   A. does it mean finding all contracts for a sepecific lender or all contracts?
   B. It does not seem like we need this method now. Future features might need this. 

  */

}
