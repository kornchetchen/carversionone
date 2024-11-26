import { PartialType } from '@nestjs/mapped-types';
import { CreateSellhistoryDto } from './create-sellhistory.dto';

export class UpdateSellhistoryDto extends PartialType(CreateSellhistoryDto) {}
