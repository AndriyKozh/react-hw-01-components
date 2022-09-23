import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 300px;
  margin-right: 20px;
  padding-top: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const Photo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const InfoContent = styled.div`
  text-align: center;
  padding: 30px 0 30px 0;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
`;

export const TagLocation = styled.p`
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.3);
`;

export const ProfilItem = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Profillist = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px 0 10px 0;
  background-color: #f0f8ff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const RatingTitl = styled.span`
  color: rgba(0, 0, 0, 0.3);
`;
export const Rating = styled.span`
  font-weight: bold;
`;
