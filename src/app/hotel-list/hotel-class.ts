export class HotelClass {
    public constructor(
        public hotel_id: number,
        public hotel_name: string,
        public owner_name: string,
        public contact_no: string,
        public email: string,
        public star_category: string,
        public group_name: string,
        public copyright_by: string,
        public ownership_type: string,
        public address: string,
        public landmark: string,
        public pincode: number,
        public city: string,
        public state: string,
        public country: string,
        public website: string,
        public pfirstname: string,
        public plastname: string,
        public pdesignation: string,
        public pemail: string,
        public pcontact_no: number,
        public package_type: string,
        public pay_charge: number,
        public package_name: string,
        public valid_form: string,
        public valid_to: string,
        public days: number
    ) { }
}
