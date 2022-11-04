import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Order {
    @Field(_type => ID)
    id: number;
    @Field({ nullable: true })
    employee_id: number;
    @Field()
    customer_id: number;
    @Field({ nullable: true })
    order_date: Date;
    @Field({ nullable: true })
    shipped_date: Date;
    @Field({ nullable: true })
    shipper_id: number;
    @Field()
    ship_name: string;
    @Field({ nullable: true })
    ship_address: string;
    @Field({ nullable: true })
    ship_city: string;
    @Field({ nullable: true })
    ship_state_province: string;
    @Field({ nullable: true })
    ship_zip_postal_code: string;
    @Field({ nullable: true })
    ship_country_region: string;
    @Field({ nullable: true })
    shipping_fee: number;
    @Field({ nullable: true })
    taxes: number;
    @Field({ nullable: true })
    payment_type: string;
    @Field({ nullable: true })
    paid_date: Date;
    @Field({ nullable: true })
    notes: string;
    @Field({ nullable: true })
    tax_rate: number;
    @Field({ nullable: true })
    tax_status_id: number;
    @Field({ nullable: true })
    status_id: number;
}

@InputType()
export class OrderInput {
    @Field()
    customer_id: string;
    @Field()
    ship_name: string;
}