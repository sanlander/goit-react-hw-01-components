import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 200px;
  margin: ${p => `${p.theme.spacing(2)}`};
  padding: ${p => `${p.theme.spacing(3)}`};
  border-radius: 5px;
  border: ${props => `1px solid ${props.theme.colors.grey}`};
  box-shadow: 2px 2px 5px ${props => `${props.theme.colors.grey}`};
`;

export const FriendStatus = styled.span`
  margin-right: ${p => `${p.theme.spacing(2)}`};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${({ isOnline }) => `${isOnline ? '#48B14B' : '#FF514E'}`};
`;

export const FriendAvatar = styled.img`
  margin-right: ${p => `${p.theme.spacing(2)}`};
  border-radius: 8px;
`;

export const FriendName = styled.p`
  font-size: 22px;
  font-weight: 700;
`;
