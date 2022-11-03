import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Order {
    @Field(_type => ID)
    id: number;
    @Field()
    employee_id: number;
    @Field()
    customer_id: number;
    @Field()
    order_date: string;
    @Field()
    shipped_date: string;
    @Field()
    shipper_id: number;
    @Field()
    ship_name: string;
    @Field()
    ship_address: string;
    @Field()
    ship_city: string;
    @Field()
    ship_state_province: string;
    @Field()
    ship_zip_postal_code: string;
    @Field()
    ship_country_region: string;
    @Field()
    shipping_fee: number;
    @Field()
    taxes: number;
    @Field()
    payment_type: string;
    @Field()
    paid_date: string;
    @Field()
    notes: string;
    @Field()
    tax_rate: number;
    @Field()
    tax_status_id: number;
    @Field()
    status_id: number;
}

@InputType()
export class OrderInput {
    @Field()
    customer_id: number;
    @Field()
    order_date: string;
    @Field()
    shipping_fee: number;
    @Field()
    taxes: number;
}