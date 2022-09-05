import { CustomRepository } from 'src/modules/core/decorators';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';

@CustomRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {}
