import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { serviceChainPlugin, ServiceChainPage } from '../src/plugin';

createDevApp()
  .registerPlugin(serviceChainPlugin)
  .addPage({
    element: <ServiceChainPage />,
    title: 'Root Page',
    path: '/service-chain',
  })
  .render();
