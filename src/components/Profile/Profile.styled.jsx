import styled from 'styled-components';

export const ProfileCard = styled.section`
  overflow: hidden;
  width: 300px;
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  border: ${props => `1px solid ${props.theme.colors.grey}`};
  box-shadow: 2px 2px 5px ${props => `${props.theme.colors.grey}`};
`;

export const Description = styled.div`
  padding: ${p => `${p.theme.spacing(6)}`};
  background-color: ${props => `${props.theme.colors.white}`};
`;

export const Avatar = styled.img`
  display: block;
  height: auto;
  width: 125px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const UserName = styled.p`
  margin-top: ${p => `${p.theme.spacing(5)}`};
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
`;

export const UserInfo = styled.p`
  margin-top: ${p => `${p.theme.spacing(2)}`};
  font-size: 18px;
  line-height: 1.2;
  color: ${props => `${props.theme.colors.grey}`};
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
`;

export const StatsItem = styled.li`
  background-color: ${props => `${props.theme.colors.lightGrey}`};
  border-top: ${props => `1px solid ${props.theme.colors.grey}`};
  width: calc(100% / 3);
  &:not(:last-child) {
    border-right: ${props => `1px solid ${props.theme.colors.grey}`};
  }
`;

export const Label = styled.span`
  display: block;
  margin: ${p => `${p.theme.spacing(5)}`} auto 0px auto;
  color: ${props => `${props.theme.colors.grey}`};
`;

export const Quantity = styled.span`
  display: block;
  margin: ${p => `${p.theme.spacing(1)}`} auto ${p => `${p.theme.spacing(5)}`}
    auto;
  font-size: 18px;
  font-weight: 700;
`;
