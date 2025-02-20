export interface TermSection {
  title: string;
  content: string;
}

export const terms: TermSection[] = [
  {
    title: "Defined Terms",
    content: "Key terms used throughout the agreement including definitions for Agreement, Company, Services, Site, User, and other important concepts."
  },
  {
    title: "Prohibited Content & Consents",
    content: "Users are prohibited from posting content that: is illegal, harmful, defamatory, obscene, infringes intellectual property rights, contains viruses, or violates any laws. Users must obtain all necessary consents and permissions for their listings."
  },
  {
    title: "Agreement between User and Company",
    content: "The Site provides hosting services with user-generated content. Use of the Site constitutes agreement to all terms. Some features may require payment. Company reserves right to deny access or limit features."
  },
  {
    title: "Warranties and Disclaimer",
    content: "Company provides the Site and Services 'as is' without warranties. Not responsible for accuracy of information, quality of items, or user interactions. Users advised to verify other parties independently."
  },
  {
    title: "Membership Eligibility",
    content: "Users must be able to form legally binding contracts and be at least 18 years old. Business entities must have authority to bind the organization."
  },
  {
    title: "Electronic Communications",
    content: "Users consent to receive electronic communications from Company. Communications via email or site notices satisfy legal writing requirements."
  },
  {
    title: "Platform for Communication",
    content: "Site is a venue for user interactions. Company is not party to transactions between users and not responsible for performance of contracts between users."
  },
  {
    title: "Privacy and Data Protection",
    content: "Company does not collect sensitive personal data. User information may be used for marketing. Data may be transferred globally and in case of company mergers/acquisitions."
  },
  {
    title: "Intellectual Property",
    content: "All intellectual property rights related to the Services remain Company property. User contributions become Company property."
  },
  {
    title: "Limitation of Liability",
    content: "Company not liable for indirect damages, service interruptions, or force majeure events. Maximum liability limited to lesser of fees paid or Rs. 10,000."
  },
  {
    title: "Indemnification",
    content: "Users must indemnify Company against claims arising from their use of services, content posted, or products/services offered."
  }
];

export const privacyPolicy = {
  title: "Privacy Policy",
  sections: [
    {
      title: "Information Collection",
      content: "We collect registration data and non-sensitive personal information. We do not collect sensitive personal data/information."
    },
    {
      title: "Information Usage",
      content: "Information may be used for service provision, marketing, and communication. Data may be transferred globally."
    },
    {
      title: "Data Protection",
      content: "We implement reasonable security practices to protect user data. Users advised not to share sensitive information."
    }
  ]
};
