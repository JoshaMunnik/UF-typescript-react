// region imports

import * as React from 'react';
import {UFTT, UFTTProps} from "./UFTT";

// endregion

// region component

export const UFTTSpan: React.FC<UFTTProps> = (
  {ttid, html, children, ...other}
) => (
  <span {...other}>
    <UFTT ttid={ttid} html={html}>{children}</UFTT>
  </span>
);

// endregion