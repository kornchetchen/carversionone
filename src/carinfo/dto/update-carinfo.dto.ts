import { PartialType } from '@nestjs/mapped-types';
import { CreateCarinfoDTO } from './create-carinfo.dto';

export class UpdateCarinfoDto extends PartialType(CreateCarinfoDTO) {}
