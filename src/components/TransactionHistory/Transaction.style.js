import styled from 'styled-components';

export const TableContent = styled.table`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  height: 200px;
`;

export const TableTitle = styled.th`
  background-color: #00ffff;
  padding: 20px;
  width: 200px;
  color: white;
`;

export const TableInfo = styled.td`
  text-align: center;
  padding: 20px;
`;

export const TableList = styled.tr`
  &:nth-child(odd) {
    background-color: #f0f8ff;
  }
  &:nth-child(even) {
    background-color: #f5f5dc;
  }
`;
