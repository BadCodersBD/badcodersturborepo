export type LogoPropsType = {
	logoimage: string;
	logoname: string;
	description: string;
};

export type HeroType = {
	name: string;
	image: string;
	designation: string;
	gretting: string;
};

export type SocialIconType = {
	title: string;
	image: string;
	url: string;
};

export type PaymentIconType = {
	title: string;
	image: string;
	url: string;
};

export type ProductDetailsType = {
	product: servicesProptype[];
};

export type servicesProptype = {
	imagegallery: string;
	title: string;
	companyImage: string;
	passenger: string;
	luggage: string;
	dailyprice: string;
	hourlyprice: string;
	speed: string;
	wifi: string;
	slug: slugType;
};

export type slugType = {
	current: string;
	_type: string;
};

export type BrandsProptype = {
	title: string;
	logo: string;
};

export type cargallerytype = {
	title: string;
	imagegallery: string;
};

export type carimagestype = {
	cartitle: string;
	carimages: string;
	carprice: string;
	carcolor: string;
	carspeed: string;
};

export type TechnologiesPropType = {
	_key: string;
	_ref: string;
	_type: string;
};

export type ProjectType = {
	title: string;
	image: string;
	summary: string;
	technologies: TechnologiesPropType[];
	linkToBuild: string;
};

export type BrandContactFormType = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	message: string;
	policy: boolean;
};

export type FormElementProps = {
	register: any;
	errors: any;
};

export type FooterSloganType = {
	img: string;
	slogan: string;
};

export type FooterTopBrandsType = {
	topBrands: string[];
};

export type RegisterFormType = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	policy: boolean;
};

export type ResetPasswordFormType = {
	otp: string;
	password: string;
	confirmPassword: string;
};

export type ForgetPasswordFormType = {
	email: string;
};

export type LoginFormType = {
	email: string;
	password: string;
};

export type pageModalType = {
	open: boolean;
	modalName: string;
	triger?: boolean;
};

export type otpFormType = {
	otp: string[];
};
