// region imports

import * as React from 'react';

// endregion

// region local types

interface TTProps {
  ttid?: string;
}

// endregion

// region component

export const TT: React.FC<TTProps> = ({children}) => (
  <React.Fragment>
    {children}
  </React.Fragment>
);

// endregion