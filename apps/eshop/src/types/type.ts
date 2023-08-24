export type LogoPropsType = {
  logoimage: string;
  logoname: string;
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

export type servicesProptype = {
  imagegallery: string
  title: string;
  companyImage: string;
  passenger: string
  luggage: string
  wifi: string
};

export type BrandsProptype = {
  title: string;
  logo: string
};

export type TechnologiesPropType = {
  _key: string
  _ref: string
  _type: string
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

export type ResumeType = {
  cvname: string;
  resume: any;
  url: string;
};

export type FooterSloganType = {
  img: string;
  slogan: string;
};

export type FooterTopBrandsType = {
  topBrands: string[];
};
