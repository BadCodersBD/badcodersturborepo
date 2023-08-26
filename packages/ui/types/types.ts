export type BaseLink = {
  href: string;
  text: string;
};

export type BaseImage = {
  src: string;
  alt: string;
};

export type FormField = {
  label: string;
  helpMessage?: string;
};

export type FormFieldWithValidation = FormField & {
  errorMessage: string;
};

export type FormOptionField = {
  label: string;
};

export type TrackLinkHandler = (event: {
  buttonName: string;
  buttonText: string;
  buttonCategory: string;
}) => void;

export type AddressLookupState = "loading" | "lookup" | "manual";

export type AddressSuggestion = {
  singleLineName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state?: string;
  zipCode: string;
};

export type ModalProps = {
  backgroundColor?: string;
  color?: string;
  buttonBackgroundColor?: string;
  buttonColor?: string;
  buttonText?: string;
  width?: number;
  children: any;
  open: boolean;
};

export type ModalImplementProps = {
  backgroundColor?: string;
  color?: string;
  width?: number;
  children: any;
};

export type ModalBackDropProps = {
  onClicked: Function;
  children: any;
};

export type ButtonPropsType = {
  isDisabled: boolean;
  variant: "outline" | "filled" | "text";
  shape: string;
  size: "small" | "medium" | "large";
  backgroundColor: string;
  textColor: string;
  children?: any;
};

type SocialLinkType = {
  backgroundColor: {
    hex: string;
  };
  _id: string;
  _ref: string;
  socialLinkIconColor: string;
  socialLinkIconWhite: string;
  url: string;
};

type FooterPageLinksType = {
  _id: string;
  _type: string;
  _ref: string;
  linkNameEng: string;
  linkNameBng: string;
  url: string;
};

export type FooterType = {
  _id: string;
  _type: string;
  SocialLinks: SocialLinkType[];
  companySlogan: string;
  CompanyPagesLinks: FooterPageLinksType[];
  headingEng?: string;
  headingBan?: string;
  subHeadingBan?: string;
  subHeadingEng?: string;
  signUp: boolean;
};

export type subscriberEmailType = {
  email: string;
};
