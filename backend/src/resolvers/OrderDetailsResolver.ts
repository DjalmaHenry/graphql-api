import { Arg, Mutation, Query, Resolver } from "type-graphql";
import db from "../config/db";
import { OrderDetails, OrderDetailsInput } from "../models/OrderDetails";

@Resolver()
export class OrderDetailsResolver {
    @Query(() => [OrderDetails])
    async orderDetails() {
        return await db("order_details").select("*");
    }

    @Query(() => OrderDetails)
    async orderDetail(@Arg("id") id: number) {
        return await db("order_details").where("id", id).first();
    }

    @Mutation(() => OrderDetails)
    async createOrderDetail(
        @Arg("orderDetail") orderDetail: OrderDetailsInput
    ): Promise<OrderDetails> {
        const [id] = await db("order_details").insert(orderDetail);
        return await db("order_details").where("id", id).first();
    }

    @Mutation(() => OrderDetails)
    async updateOrderDetail(
        @Arg("id") id: number,
        @Arg("orderDetail") orderDetail: OrderDetailsInput
    ): Promise<OrderDetails> {
        await db("order_details").where("id", id).update(orderDetail);
        return await db("order_details").where("id", id).first();
    }

    @Mutation(() => Boolean)
    async deleteOrderDetail(@Arg("id") id: number): Promise<boolean> {
        try {
            await db("order_details").where("id", id).del();
            return true;
        } catch (error) {
            return false;
        }
    }
}