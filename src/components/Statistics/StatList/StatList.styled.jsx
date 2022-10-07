import styled from 'styled-components';

export const StatisticsCard = styled.section`
  display: inline-block;
  overflow: hidden;
  margin: ${props => `${props.theme.spacing(4)}`} auto 0px auto;
  text-align: center;
  border-radius: 5px;
  border: ${props => `1px solid ${props.theme.colors.grey}`};
  box-shadow: 2px 2px 5px ${props => `${props.theme.colors.grey}`};
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  text-transform: uppercase;
  color: ${p => `${p.theme.colors.grey}`};
  padding: ${p => `${p.theme.spacing(2)}`};
`;

export const ListElement = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;
