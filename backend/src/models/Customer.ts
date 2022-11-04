import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Customer {
    @Field(_type => ID)
    id: number;
    @Field()
    company: string;
    @Field({ nullable: true })
    last_name: string;
    @Field()
    first_name: string;
    @Field()
    email_address: string;
    @Field({ nullable: true })
    job_title: string;
    @Field()
    business_phone: string;
    @Field({ nullable: true })
    home_phone: string;
    @Field({ nullable: true })
    mobile_phone: string;
    @Field({ nullable: true })
    fax_number: string;
    @Field()
    address: string;
    @Field({ nullable: true })
    city: string;
    @Field({ nullable: true })
    state_province: string;
    @Field({ nullable: true })
    zip_postal_code: string;
    @Field({ nullable: true })
    country_region: string;
    @Field({ nullable: true })
    web_page: string;
    @Field({ nullable: true })
    notes: string;
    @Field({ nullable: true })
    attachments: string;
}

@InputType()
export class CustomerInput {
    @Field()
    company: string;
    @Field()
    first_name: string;
    @Field()
    email_address: string;
    @Field()
    business_phone: string;
    @Field()
    address: string;
}