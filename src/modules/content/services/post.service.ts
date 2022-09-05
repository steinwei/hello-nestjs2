import { Injectable } from '@nestjs/common'
import { PostEntity } from '../entities/post.entity';

@Injectable()
export class PostService {
    async paginate(params: any, options: IPaginationOptions) { 
        const query = await this.getListQuery();
        return this.paginate<PostEntity>(query, options)
    }

    getListQuery() {
        return void 0
    }
}