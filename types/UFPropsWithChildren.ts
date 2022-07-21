import * as React from 'react';

/**
 * A simple interface that defines the children property (which needs to be defined from React v18+).
 */
export interface UFPropsWithChildren {
  /**
   * The children of the component.
   */
  readonly children?: React.ReactNode;
}
