import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

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
export const Button = styled.button`
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
${propToStyle('display')}
${propToStyle('margin')}
`;
