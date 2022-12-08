import styled from "@emotion/styled";

export const CommentWapper = styled.div`
  width: 700px;
  height: 120px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
`;
export const Profile = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
`;
export const ProfileBox = styled.div`
    width: 150px;
    display: flex;
    justify-content: flex-start;
`;

export const ControlBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
`;

export const ProfileImg = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
    border-radius: 50%;
`;
export const UserName = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
`;
export const Content = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;