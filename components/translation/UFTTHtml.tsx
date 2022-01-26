// region imports

import * as React from 'react';
import {UFTT, UFTTProps} from "./UFTT";

// endregion

// region component

export const UFTTHtml: React.FC<Omit<UFTTProps, 'html'>> = (aProps) =>
  <UFTT html={true} {...aProps} />
;

// endregion