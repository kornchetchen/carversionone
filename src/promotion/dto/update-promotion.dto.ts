import { PartialType } from '@nestjs/mapped-types';
import { CreatePromotionDTO } from './create-promotion.dto';

export class UpdatePromotionDto extends PartialType(CreatePromotionDTO) {}
