import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Customer {
    @Field(_type => ID)
    id: number;
    @Field()
    company: string;
    @Field()
    last_name: string;
    @Field()
    first_name: string;
    @Field()
    email_address: string;
    @Field()
    job_title: string;
    @Field()
    business_phone: string;
    @Field()
    home_phone: string;
    @Field()
    mobile_phone: string;
    @Field()
    fax_number: string;
    @Field()
    address: string;
    @Field()
    city: string;
    @Field()
    state_province: string;
    @Field()
    zip_postal_code: string;
    @Field()
    country_region: string;
    @Field()
    web_page: string;
    @Field()
    notes: string;
    @Field()
    attachments: string;
}

@InputType()
export class CustomerInput {
    @Field()
    company: string;
    @Field()
    last_name: string;
    @Field()
    first_name: string;
    @Field()
    email_address: string;
    @Field()
    job_title: string;
    @Field()
    business_phone: string;
    @Field()
    home_phone: string;
    @Field()
    mobile_phone: string;
    @Field()
    fax_number: string;
    @Field()
    address: string;
    @Field()
    city: string;
    @Field()
    state_province: string;
    @Field()
    zip_postal_code: string;
    @Field()
    country_region: string;
    @Field()
    web_page: string;
    @Field()
    notes: string;
    @Field()
    attachments: string;
}