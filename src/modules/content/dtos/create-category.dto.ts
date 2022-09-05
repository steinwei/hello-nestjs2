import { Transform } from 'class-transformer';

export class CreateCategoryDto {
  @Transform(({ value }) => value)
  parent?: string;
}
