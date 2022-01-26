// region imports

import * as React from 'react';
import {isValidElement} from 'react';

// endregion

// region type

/**
 * {@link UFReact} implements static support method for React.
 */
export class UFReact {
  /**
   * Converts a node to a string.
   *
   * Code based on:
   * https://github.com/sunknudsen/react-node-to-string
   *
   * @param aNode
   *   React node to convert.
   *
   * @returns Convert node
   */
  static nodeToString(aNode: React.ReactNode): string {
    if (typeof aNode === 'string') {
      return aNode as string;
    }
    if (typeof aNode === 'number') {
      return aNode.toString();
    }
    if (Array.isArray(aNode)) {
      return aNode.reduce((previous: string, child) => previous + UFReact.nodeToString(child), '');
    }
    if (isValidElement(aNode)) {
      return `<${aNode.type}>${UFReact.nodeToString(aNode.props.children)}</${aNode.type}>`;
    }
    return '';
  }
}

// endregion