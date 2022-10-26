import { __Field } from "graphql";
import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class OrderDetails {
    @Field()
    discount: number;
    @Field()
    product_id: number;
    @Field()
    unit_price: number;
    @Field()
    quantity: number;
    @Field(_type => ID)
    id: number;
    @Field()
    order_id: number;
}

@InputType()
export class OrderDetailsInput {
    @Field()
    discount: number;
    @Field()
    product_id: number;
    @Field()
    unit_price: number;
    @Field()
    quantity: number;
    @Field()
    order_id: number;
}