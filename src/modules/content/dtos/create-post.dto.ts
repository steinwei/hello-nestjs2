import { Injectable } from '@nestjs/common';
import { IsNotEmpty, MaxLength } from 'class-validator';

@Injectable()
export class CreatePostDto {
  @MaxLength(255, {
    always: true,
    message: '文章标题长度为$constraint1',
  })
  @IsNotEmpty({ groups: ['create'], message: '文章标题必须填写' })
  @IsNotEmpty({ groups: ['update'] })
  title!: string;
}
