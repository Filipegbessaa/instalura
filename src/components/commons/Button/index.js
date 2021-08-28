/* eslint-disable react/jsx-props-no-spreading */
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import React from 'react';
import PropTypes from 'prop-types';
import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from "../Link";

const ButtonGhost = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)}; 
  background: transparent;
`;
const ButtonDefault = css`
  background-color: ${(props) => {
    const { variant } = props;
    return get(props.theme, `colors.${variant}.color`);
  }};
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;
// eslint-disable-next-line import/prefer-default-export
const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;

  ${breakpointsMedia({
  xs: css`
      ${TextStyleVariantsMap.smallestException}
        /* all devices */
    `,
  md: css`
      ${TextStyleVariantsMap.paragraph1}
        /* from md breakpoint */
    `,
})}

${TextStyleVariantsMap.smallestException}

${(props) => {
    if (props.ghost) {
      return ButtonGhost;
    }

    return ButtonDefault;
  }}
transition: opacity ${({ theme }) => theme.transition};
border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
  opacity: .5;
}

&:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

${propToStyle('display')}
${propToStyle('margin')}
`;

function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';
  return (
    <ButtonWrapper
      as={tag}
      href={href}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}
Button.defaultProps = {
  href: null,
  children: null,
}
Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};
export default Button;
