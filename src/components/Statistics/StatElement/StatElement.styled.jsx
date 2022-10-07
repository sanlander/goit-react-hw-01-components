import styled from 'styled-components';
import { getRandomHexColor } from 'utils';

export const ListItem = styled.li`
  min-height: 100px;
  min-width: 100px;
  background-color: ${getRandomHexColor};
  color: ${props => `${props.theme.colors.white}`};
`;

export const Label = styled.span`
  display: block;
  margin: ${p => `${p.theme.spacing(5)}`} auto 0px auto;
`;

export const Percentage = styled.span`
  display: block;
  margin: ${p => `${p.theme.spacing(3)}`} auto ${p => `${p.theme.spacing(5)}`}
    auto;
  font-size: 22px;
  font-weight: 500;
`;
