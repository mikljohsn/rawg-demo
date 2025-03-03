import "reflect-metadata";
import { DataSource } from "typeorm";
import { Game } from "../entities/Game";
import { Store } from "../entities/Store";
import { Genre } from "../entities/Genre";
import { ParentPlatform } from "../entities/ParentPlatform";
import "dotenv/config";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,  // Set to false in production, use migrations instead
    logging: false,
    entities: [Game, Store, Genre, ParentPlatform],
    migrations: [],
    subscribers: [],
});
