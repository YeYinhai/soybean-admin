import type { KebabCase } from '../../types';
import type { LayoutProps } from './types';

type Prefix = '--soy-';

export type CssVarsProps = Pick<
  LayoutProps,
  'headerHeight' | 'tabHeight' | 'siderWidth' | 'siderCollapsedWidth' | 'footerHeight' | 'breadcrumbHeight'
> & {
  headerZIndex?: number;
  tabZIndex?: number;
  siderZIndex?: number;
  footerZIndex?: number;
  tabTop?: number;
};

type CssVars = {
  [K in keyof CssVarsProps as `${Prefix}${KebabCase<K>}`]: string | number;
};

export function createCssVars(props: CssVarsProps) {
  const cssVars: CssVars = {
    '--soy-header-height': `${props.headerHeight}px`,
    '--soy-header-z-index': props.headerZIndex,
    '--soy-tab-height': `${props.tabHeight}px`,
    '--soy-tab-z-index': props.tabZIndex,
    '--soy-sider-width': `${props.siderWidth}px`,
    '--soy-sider-collapsed-width': `${props.siderCollapsedWidth}px`,
    '--soy-sider-z-index': props.siderZIndex,
    '--soy-footer-height': `${props.footerHeight}px`,
    '--soy-footer-z-index': props.footerZIndex,
    '--soy-breadcrumb-height': `${props.breadcrumbHeight}px`,
    '--soy-tab-top': `${props.tabTop}px`
  };

  return cssVars;
}