// region imports

import * as React from 'react';
import {UFTT, UFTTProps} from "./UFTT";

// endregion

// region component

export const UFTTDiv: React.FC<UFTTProps> = (
  {ttid, html, children, ...other}
) => (
  <div {...other}>
    <UFTT ttid={ttid} html={html}>{children}</UFTT>
  </div>
);

// endregion