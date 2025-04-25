import "reflect-metadata"
import {Column, Entity, PrimaryGeneratedColumn,PrimaryColumn} from "typeorm"

@Entity()
export class Bob{

    constructor(name:string = "bob") {
        this.name = name; // name is undefined, but since it's JS, all is good.
    }

    @PrimaryColumn()
    id: number
    @Column()
    name: string
    @Column()
    discordID: string
}