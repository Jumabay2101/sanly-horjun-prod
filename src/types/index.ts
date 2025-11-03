export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Feature {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    youtube: string;
    telegram: string;
  };
}

export interface AppStore {
  name: string;
  url: string;
  icon: string;
}