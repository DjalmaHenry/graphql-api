import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Customer {
    @Field()
    customer_type: string;
    @Field()
    phone: string;
    @Field()
    fax: string;
    @Field()
    website: string;
    @Field()
    notes: string;
    @Field()
    attachments: string;
    @Field(_type => ID)
    id: number;
    @Field()
    name: string;
    @Field()
    email: string;
    @Field()
    billing_address: string;
    @Field()
    shipping_address: string;
}

@InputType()
export class CustomerInput {
    @Field()
    customer_type: string;
    @Field()
    phone: string;
    @Field()
    fax: string;
    @Field()
    website: string;
    @Field()
    notes: string;
    @Field()
    attachments: string;
    @Field()
    name: string;
    @Field()
    email: string;
    @Field()
    billing_address: string;
    @Field()
    shipping_address: string;
}