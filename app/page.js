import Banner from "@/components/banners/Banner";
import PhoneBanner from "@/components/banners/PhoneBanner";
import ServiceButtons from "@/components/banners/ServiceButtons";
import BlogPost from "@/components/content/BlogPost";
import ButtonApi from "@/components/content/ButtonApi";
import Form2 from "@/components/content/Form2";
import HomeInfo from "@/components/content/HomeInfo";
import Info from "@/components/content/Info";
import Hero from "@/components/layout/Hero";


export default function Home() {
  return (
    <>
    <Hero children="TAXI-VTC SALAMANCA - SERVICIOS DE CHÓFER EN SALAMANCA" />
      <Info/>
      <HomeInfo/>
      {/* <Featured/>  */}
      <ServiceButtons/>
      <Banner/>
      <PhoneBanner/>
      <BlogPost/>
      <ButtonApi/>
      <Form2/>
    </>
  );
}