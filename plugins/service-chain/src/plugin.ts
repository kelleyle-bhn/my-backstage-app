import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const serviceChainPlugin = createPlugin({
  id: 'service-chain',
  routes: {
    root: rootRouteRef,
  },
});

export const ServiceChainPage = serviceChainPlugin.provide(
  createRoutableExtension({
    name: 'ServiceChainPage',
    component: () =>
      import('./components/ServiceChainCaller').then(m => m.ServiceChainCaller),
    mountPoint: rootRouteRef,
  }),
);
