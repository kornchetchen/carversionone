import { PartialType } from '@nestjs/mapped-types';
import { CreateCartpeDTO } from './create-cartype.dto';

export class UpdateCartypeDto extends PartialType(CreateCartpeDTO) {}
