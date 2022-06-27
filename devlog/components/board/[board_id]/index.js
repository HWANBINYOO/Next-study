import { useRouter } from "next/router";
import Image from "next/image";
import catImg from "../../public/Img/cat.jpg";
import * as S from "./Styled";

export default function BoardItem() {
  const router = useRouter();
  //   const board_id = router.query.boardId;
  //   const redirect = (url) => router.push(url);

  useEffect(() => {
    async function getblog() {
      try {
        const { data } = await customAxios.get(`/board_image/${board_id}`);
        setBlogImg(respone.data);
        const respone2 = await myProfileImgReqeuset(user_id);
        setProfileImg(respone2.data);
      } catch (e) {
        const { data } = e.response;
        console.error(data.message);
        console.error("data : ", data);
      }
    }
    getblog();
  }, []);

  return (
    <S.BlogItem onClick={(e) => redirect(`/board/${board_id}`)}>
      <S.Image src={blogImg} />
      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.desc>{content}</S.desc>
        <S.ItemBottom>
          <S.BottomLeft>
            <S.MemberImg onClick={(e) => redirect(`/profile/${user_id}`)}>
              {profileImg ? (
                <Image width={20} height={20} src={profileImg} />
              ) : (
                <Image width={20} height={20} src={catImg} />
              )}
            </S.MemberImg>
            <S.MemberId>{user_name}</S.MemberId>
          </S.BottomLeft>
          <S.date>{date}</S.date>
        </S.ItemBottom>
      </S.TextBox>
    </S.BlogItem>
  );
}
