import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 350px;
  margin-bottom: 20px;
  margin-right: 20px;
  padding: 10px 20px 10px 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Online = styled.div`
  width: 20px;
  height: 20px;
  background-color: green;
  border-radius: 50%;
`;

export const NotOnline = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  margin: 0 20px 0 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;
