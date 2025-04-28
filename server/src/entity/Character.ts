import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Character {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    //relation avec les classes

    //relations avec les items.

}
