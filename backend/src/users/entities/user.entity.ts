import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    login: string;
    
    @Column({unique:true})
    email: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    fullname: string;

    @Column({default: 0})
    stars: number;

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}