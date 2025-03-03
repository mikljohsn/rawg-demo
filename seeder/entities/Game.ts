import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Store } from "./Store";
import { Genre } from "./Genre";
import { ParentPlatform } from "./ParentPlatform";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    metacritic?: number;

    @Column({ nullable: true })
    background_image?: string;

    @ManyToMany(() => Store, store => store.games)
    @JoinTable()
    stores?: Store[];

    @ManyToMany(() => Genre, genre => genre.games)
    @JoinTable()
    genres?: Genre[];

    @ManyToMany(() => ParentPlatform, platform => platform.games)
    @JoinTable()
    parentPlatforms?: ParentPlatform[];
}