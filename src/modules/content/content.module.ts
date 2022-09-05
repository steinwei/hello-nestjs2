import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreModule } from '../core/core.module';
import { PostEntity } from './entities/post.entity';
import { RepositoryMaps } from './repositories';
import { PostRepository } from './repositories/post.repository';

const repositories = Object.values(RepositoryMaps)

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    CoreModule.forRepository(repositories),
  ],
  exports: [CoreModule.forRepository([PostRepository])],
})
export class ContentModule {}
