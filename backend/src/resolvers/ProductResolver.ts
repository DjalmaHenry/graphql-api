import { Arg, Query, Resolver } from "type-graphql";
import db from "../config/db";
import { Product } from "../models/Product";

@Resolver()
export class ProductResolver {

    @Query(() => [Product])
    async products() {
        return await db("products").select("*");
    }

    @Query(() => Product)
    async product(@Arg("id") id: number) {
        return await db("products").where("id", id).first();
    }
}