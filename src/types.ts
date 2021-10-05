export type User = {
	id: number;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	description: string;
	adress: Address;
};

type Address = {
	streetAddress: string;
	city: string;
	state: string;
	zip: string;
};
