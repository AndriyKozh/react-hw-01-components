import styled from 'styled-components';

export const Card = styled.section`
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  margin-right: 20px;
`;

export const Title = styled.h1`
  padding: 30px 0 30px 0;
  color: rgba(0, 0, 0, 0.5);
`;

export const StatisticContent = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;

  background-color: #f0f8ff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
`;

export const StatisticList = styled.ul`
  height: 40%;
  padding: 20px;
  border: 1px solid #000;
  background-color: ${function getRandomDarkColor() {
    let color = '#';
    for (var i = 0; i < 6; i += 1) {
      color += Math.floor(Math.random() * 10);
    }
    return color;
  }};
`;

export const StatisticItem = styled.li`
  margin-bottom: 10px;
  color: #fff;
`;
