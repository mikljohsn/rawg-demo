import "reflect-metadata";
import { DataSource } from "typeorm";
import { Game } from "../entities/Game";
import { Store } from "../entities/Store";
import { Genre } from "../entities/Genre";
import { ParentPlatform } from "../entities/ParentPlatform";
import "dotenv/config";
import { Publisher } from "../entities/Publisher";

export const AppDataSource = new DataSource({
    type: "mysql",
    url: process.env.CONNECTION_STRING,
    synchronize: false,  // Set to false in production, use migrations instead
    logging: true,
    entities: [Game, Store, Genre, ParentPlatform, Publisher],
    migrations: [],
    subscribers: [],
});
