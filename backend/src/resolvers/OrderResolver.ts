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

    // get all orders by customer_id
    @Query(() => [Order])
    async ordersByCustomer(@Arg("customer_id") customer_id: number) {
        return await db("orders").where("customer_id", customer_id).select("*");
    }

    @Mutation(() => Order)
    async createOrder(
        @Arg("customer_id") customer_id: string,
        @Arg("ship_name") ship_name: string
    ): Promise<Order> {
        const order = {
            customer_id,
            ship_name,
        } as OrderInput;
        const [id] = await db("orders").insert(order);
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