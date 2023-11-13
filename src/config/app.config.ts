interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Team',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage personal information', 'Book a car', 'Edit booking information', 'View booking history'],
  ownerAbilities: [
    'Manage business information',
    'Manage team information',
    'Manage customer information',
    'Manage car sharing information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/b7f8e149-a770-4721-84b0-2ec335cecd88',
};
