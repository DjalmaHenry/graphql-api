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
        async deleteCustomer(@Arg("id") id: number): Promise<boolean> {
            try {
                await db("customers").where("id", id).del();
                return true;
            } catch (error) {
                return false;
            }
        }
    
    }