import { Arg, Mutation, Query, Resolver } from "type-graphql";
import db from "../config/db";
import { Order, OrderInput } from "../models/Order";

@Resolver()
export class OrderResolver {

    @Query(() => [Order])
    async orders() {
        return await db("orders").select("*");
    }

    @Query(() => Order)
    async order(@Arg("id") id: number) {
        return await db("orders").where("id", id).first();
    }

    @Mutation(() => Order)
    async createOrder(
        @Arg("order") order: OrderInput
    ): Promise<Order> {
        const [id] = await db("orders").insert(order);
        return await db("orders").where("id", id).first();
    }

    @Mutation(() => Order)
    async updateOrder(
        @Arg("id") id: number,
        @Arg("order") order: OrderInput
    ): Promise<Order> {
        await db("orders").where("id", id).update(order);
        return await db("orders").where("id", id).first();
    }

    @Mutation(() => Boolean)
    async deleteOrder(@Arg("id") id: number): Promise<boolean> {
        try {
            await db("orders").where("id", id).del();
            return true;
        } catch (error) {
            return false;
        }
    }

}