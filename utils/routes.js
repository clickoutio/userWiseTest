const flowRoutes = {
  flows: '/flows',
  createFlow: '/flows/create',
  flow: (flow) => `/flows/${flow}`,
  editFlow: (flow) => `/flows/${flow}/edit`,
  previewFlow: (flow) => `/flows/${flow}/preview`,
};

const settings = {
  settings: '/settings',
  settingsConfiguration: '/settings/configuration',
  settingsConfigurationCompany: '/settings/company',
  settingsDomains: '/settings/domains',
  settingsPlan: '/settings/my-plan',
  settingsHelp: '/settings/help',
  settingsIntegration: '/settings/integration',
  settingsIntegrationDetail: (id) => `/settings/integration/${id}`,
  settingsScript: '/settings/script',
};

const routes = {
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  home: '/',
  stats: '/',
  ...flowRoutes,
  ...settings,
};

export default routes;
