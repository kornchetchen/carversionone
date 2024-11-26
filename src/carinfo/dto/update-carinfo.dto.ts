import { PartialType } from '@nestjs/mapped-types';
import { CreateCarinfoDto } from './create-carinfo.dto';

export class UpdateCarinfoDto extends PartialType(CreateCarinfoDto) {}
