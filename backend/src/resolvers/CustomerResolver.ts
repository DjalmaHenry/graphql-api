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
    async customer(@Arg("id") id: string) {
        return await db("customers").where("id", id).first();
    }

    @Mutation(() => Customer)
    async createCustomer(
        @Arg("first_name") first_name: string,
        @Arg("company") company: string,
        @Arg("email_address") email_address: string,
        @Arg("business_phone") business_phone: string,
        @Arg("address") address: string,
    ): Promise<Customer> {
        const customer = {
            first_name,
            company,
            email_address,
            business_phone,
            address,
        } as CustomerInput;
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