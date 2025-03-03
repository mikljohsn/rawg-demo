import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Game } from "./Game";

@Entity("parent_platform")
export class ParentPlatform {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    slug: string;

    @ManyToMany(() => Game, game => game.parent_platforms)
    games?: Game[];
}