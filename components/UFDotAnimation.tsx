// region imports

import * as React from 'react';

// endregion

// region local types

/**
 * State for component
 */
interface UFDotAnimationState {
  dotCount: number;
}

// endregion

// region component

/**
 * {@link UFDotAnimation} shows an animation of 1 to 3 dots, changing every 500ms.
 */
export class UFDotAnimation extends React.Component<{},UFDotAnimationState> {
  // region private variables

  /**
   * Timer handle.
   *
   * @private
   */
  private m_timer: NodeJS.Timer | null;

  // endregion

  // region constructor

  constructor(aProps: any) {
    super(aProps);
    this.m_timer = null;
    this.state = {
      dotCount: 3
    }
  }

  // endregion

  // region event handlers

  handleTimerTick() {
    this.setState({
      dotCount: (this.state.dotCount + 1) % 4
    });
  }

  // endregion

  // region react callbacks

  componentDidMount() {
    this.m_timer = setInterval(() => this.handleTimerTick(), 500);
  }

  componentWillUnmount() {
    if (this.m_timer != null) {
      clearInterval(this.m_timer);
      this.m_timer = null;
    }
  }

  render() {
    const dots = '........'.substring(0, this.state.dotCount);
    return (
      <React.Fragment>
        {dots}
      </React.Fragment>
    );
  }

  // endregion
}

// endregion
