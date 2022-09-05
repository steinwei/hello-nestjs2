import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';

@Entity('content_posts')
export class PostEntity extends BaseEntity {
  @CreateDateColumn({
    comment: '创建时间',
  })
  createAt!: Date;

  @UpdateDateColumn({
    comment: '更新时间',
  })
  updateAt!: Date;
    comments: any;
}
