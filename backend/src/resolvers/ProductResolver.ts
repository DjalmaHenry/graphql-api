import { Arg, Mutation, Query, Resolver } from "type-graphql";
import db from "../config/db";
import { Product, ProductInput } from "../models/Product";

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

    @Mutation(() => Product)
    async createProduct(
        @Arg("product") product: ProductInput
    ): Promise<Product> {
        const [id] = await db("products").insert(product);
        return await db("products").where("id", id).first();
    }

    @Mutation(() => Product)
    async updateProduct(
        @Arg("id") id: number,
        @Arg("product") product: ProductInput
    ): Promise<Product> {
        await db("products").where("id", id).update(product);
        return await db("products").where("id", id).first();
    }

    @Mutation(() => Boolean)
    async deleteProduct(@Arg("id") id: number): Promise<boolean> {
        try {
            await db("products").where("id", id).del();
            return true;
        } catch (error) {
            return false;
        }
    }

}