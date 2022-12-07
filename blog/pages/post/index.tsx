import CustomAxios from "../../utils/lib/CustomAxios";
import { PostIdType } from "../../types";
import { GetServerSideProps, NextPage } from "next";
import { Board, Header } from "../../components";
import { UseGetToken } from "../../Hooks/useToken";
import { SWRConfig } from 'swr';

const PostPage:NextPage<{blogs: PostIdType[]}> = ({blogs}) => {
  return (
  <SWRConfig value={{fallback: {"/post": {blogs}}}}>
    <Header HeaderColor={"skyblue"} />
    <Board />
  </SWRConfig>
  );
};

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await UseGetToken(ctx)
  
  try {
    const {data} = await CustomAxios.get(`/post`,{headers: {Authorization}});
    const blogs = data.list
    return { props: {blogs} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
}

export default PostPage;