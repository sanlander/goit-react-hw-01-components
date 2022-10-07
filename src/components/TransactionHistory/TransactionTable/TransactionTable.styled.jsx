import styled from 'styled-components';

export const TransactionSection = styled.section`
  margin: ${props => `${props.theme.spacing(2)}`} auto 0px auto;
`;

export const TransactionTable = styled.table`
  margin: 0 auto;
  width: 80%;
  border-collapse: collapse;
  border-radius: 5px;
  border: ${props => `1px solid ${props.theme.colors.grey}`};
  box-shadow: 2px 2px 5px ${props => `${props.theme.colors.grey}`};

  th {
    text-transform: uppercase;
    background: #00bcd5;
    color: ${p => `${p.theme.colors.white}`};
    padding: ${props => `${props.theme.spacing(3)}`};
    border: 1px solid ${p => `${p.theme.colors.lightGrey}`};
  }
  td,
  tr {
    color: ${p => `${p.theme.colors.grey}`};
    padding: ${props => `${props.theme.spacing(3)}`};
    border: 1px solid ${p => `${p.theme.colors.lightGrey}`};
  }
  tr:nth-child(even) {
    background: ${p => `${p.theme.colors.lightGrey}`};
  }
  tr:hover {
    background: #d0edd0;
  }
`;
