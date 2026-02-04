
import Wrapper from "@/layouts/Wrapper";
import HomeTwo from "@/components/homes/home-two";
import HomeFive from "@/components/homes/home-five";
import HomeFour from "@/components/homes/home-four";
import HomeOne from "@/components/homes/home-one";
import HomeThree from "@/components/homes/home-three";
export const metadata = {
  title: "HOZN - Real Estate React Next js",
};
const index = () => {
  return (
    <Wrapper>
      {/* <HomeTwo /> */}
      <HomeThree/>
    </Wrapper>
  )
}

export default index