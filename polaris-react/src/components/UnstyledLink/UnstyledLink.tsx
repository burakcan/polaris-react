import React, {memo} from 'react';

import {unstyled} from '../shared';
import {useLink} from '../../utilities/link';
import type {LinkLikeComponentProps} from '../../utilities/link';

// The script in the styleguide that generates the Props Explorer data expects
// that the interface defining the props is defined in this file, not imported
// from elsewhere. This silly workaround ensures that the Props Explorer table
// is generated correctly.
export interface UnstyledLinkProps extends LinkLikeComponentProps {}

export const UnstyledLink = memo(
  function UnstyledLink({ref, ...props}: UnstyledLinkProps & {ref?: React.Ref<any>}) {
    const LinkComponent = useLink();
    if (LinkComponent) {
      return <LinkComponent {...unstyled.props} {...props} ref={ref} />;
    }

    const {external, url, target: targetProp, ...rest} = props;

    let target;

    if (external) {
      target = '_blank';
    } else {
      target = targetProp ?? undefined;
    }

    const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

    return (
      <a
        target={target}
        {...rest}
        href={url}
        rel={rel}
        {...unstyled.props}
        ref={ref}
      />
    );
  },
);
