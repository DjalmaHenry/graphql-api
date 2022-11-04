import { Arg, Mutation, Query, Resolver } from "type-graphql";
import db from "../config/db";
import { Customer, CustomerInput } from "../models/Customer";

@Resolver()
export class CustomerResolver {

    @Query(() => [Customer])
    async customers() {
        return await db("customers").select("*");
    }

    @Query(() => Customer)
    async customer(@Arg("id") id: number) {
        return await db("customers").where("id", id).first();
    }

    @Mutation(() => Customer)
    async createCustomer(
        @Arg("customer") customer: CustomerInput
    ): Promise<Customer> {
        const [id] = await db("customers").insert(customer);
        return await db("customers").where("id", id).first();
    }

    @Mutation(() => Customer)
    async updateCustomer(
        @Arg("id") id: number,
        @Arg("customer") customer: CustomerInput
    ): Promise<Customer> {
        await db("customers").where("id", id).update(customer);
        return await db("customers").where("id", id).first();
    }

    @Mutation(() => Boolean)
    async deleteCustomer(@Arg("id") id: string): Promise<boolean> {
        const id_refactored = parseInt(id);
        try {
            await db("order_details").whereIn("order_id", db("orders").where("customer_id", id_refactored).select("id")).del();
            await db("invoices").whereIn("order_id", db("orders").where("customer_id", id_refactored).select("id")).del();
            await db("orders").where("customer_id", id_refactored).del();
            await db("customers").where("id", id_refactored).del();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

}