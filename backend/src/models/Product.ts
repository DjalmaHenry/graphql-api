import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Product {
    @Field()
    supplier_ids: string;
    @Field(_type => ID)
    id: number;
    @Field()
    product_code: string;
    @Field()
    product_name: string;
    @Field()
    description: string;
    @Field()
    standard_cost: number;
    @Field()
    list_price: number;
    @Field()
    reorder_level: number;
    @Field()
    target_level: number;
    @Field({ nullable: true })
    quantity_per_unit: string;
    @Field()
    discontinued: number;
    @Field()
    minimum_reorder_quantity: number;
    @Field()
    category: string;
    @Field()
    attachments: string;
}