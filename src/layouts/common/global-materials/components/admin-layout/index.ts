import { install } from '../../shared';
import AdminLayout, { SCROLL_EL_ID } from './layout';

AdminLayout.install = install;

export { AdminLayout, SCROLL_EL_ID };

export type { LayoutProps, LayoutMode, ScrollMode } from './types';
