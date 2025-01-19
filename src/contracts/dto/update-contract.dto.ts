import { PartialType } from '@nestjs/swagger';
import { CreateContractDto } from './create-contract.dto';

/**
 * Dont think this is needed.
 * 
 * 
 */

export class UpdateContractDto extends PartialType(CreateContractDto) {}
