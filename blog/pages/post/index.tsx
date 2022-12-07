import CustomAxios from "../../utils/lib/CustomAxios";
import { PostIdType } from "../../types";
import { GetServerSideProps } from "next";
import { Board, Header } from "../../components";
import { UseGetToken } from "../../Hooks/useToken";

export default function BoardPage({blogs} : {blogs : PostIdType[]}) {

  return (
    <>
      <Header HeaderColor={"skyblue"} />
      <Board blogs={blogs}/>
    </>
  );
}

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

// export const getStaticProps:GetStaticProps = async (ctx) => {
//   console.log(ctx);
//   // const [Authorization , setAuthorization] = useRecoilState(AuthorizationAtom)
//   // console.log(Authorization);
//   try {
//     //   const { data } = await CustomAxois.get(`/post`, {headers: {Authorization}});
//     // if (data) {
//     //   const blogIndata = data;
//     //   return { props: { blogIndata } };
//     // }
//     return { props: {} };
//   } catch (error) {
//     console.log(error);
//     return { props: {} };
//   }
// }