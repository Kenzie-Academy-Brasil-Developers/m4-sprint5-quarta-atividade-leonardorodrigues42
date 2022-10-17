import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({
        length: 50
    })
    email: string

    @Column({
        length: 50
    })
    name: string

    @Column()
    age: number 
}