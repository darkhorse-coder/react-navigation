import * as React from 'react';
import { ParamListBase } from '@react-navigation/routers';
import { NavigationHelpers } from './types';

/**
 * Context which holds the navigation helpers of the parent navigator.
 * Navigators should use this context in their view component.
 */
const NavigationHelpersContext = React.createContext<
  NavigationHelpers<ParamListBase> | undefined
>(undefined);

export default NavigationHelpersContext;
