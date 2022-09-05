import { BaseEntity, ManyToOne } from "typeorm";
import { PostEntity } from "./post.entity";

export class CommentEntity extends BaseEntity {
    @ManyToOne(() => PostEntity, (post) => post.comments, {
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    post!: PostEntity
}