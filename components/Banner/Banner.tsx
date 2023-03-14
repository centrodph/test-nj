import Image from "next/image";
import * as S from "./Banner.styles";

interface IBanner {
  data: ArticleContentStack.Banner;
}

const Banner = ({ data }: IBanner) => (
  <S.Wrapper>
    <Image src={data?.url} layout="fill" objectFit="cover" />
  </S.Wrapper>
);

export default Banner;
