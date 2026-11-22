export interface CompanyLinks {
  linkedin: string;
  website: string;
}

export interface CompanyProfile {
  name: string;
  industry: string;
  location: string;
  size: string;
  founded: string;
  benefits: string[];
  about: string;
  links: CompanyLinks;
}
