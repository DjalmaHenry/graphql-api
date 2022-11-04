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
        @Arg("order_id") order_id: string,
        @Arg("product_id") product_id: string,
        @Arg("quantity") quantity: number,
        @Arg("unit_price") unit_price: number
    ): Promise<OrderDetails> {
        const order_id_refactored = parseInt(order_id);
        const product_id_refactored = parseInt(product_id);
        const order = {
            order_id: order_id_refactored,
            product_id: product_id_refactored,
            quantity,
            unit_price,
            discount: 0,
        } as OrderDetailsInput;
        const [id] = await db("order_details").insert(order);
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