import React from 'react';

import {useToggle} from '../../../../utilities/use-toggle';
import {classNames} from '../../../../utilities/css';
import styles from '../../ButtonGroup.module.css';

export interface ItemProps {
  button: React.ReactElement;
}

export function Item({button}: ItemProps) {
  const {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused,
  } = useToggle(false);

  const className = classNames(
    styles.Item,
    focused && styles['Item-focused'],
    (button.props as any).variant === 'plain' && styles['Item-plain'],
  );

  return (
    <div
      className={className}
      onFocus={forceTrueFocused}
      onBlur={forceFalseFocused}
    >
      {button}
    </div>
  );
}
