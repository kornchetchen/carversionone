import { PartialType } from '@nestjs/mapped-types';
import { CreateCartypeDto } from './create-cartype.dto';

export class UpdateCartypeDto extends PartialType(CreateCartypeDto) {}
