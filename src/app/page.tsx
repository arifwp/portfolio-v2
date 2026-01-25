import { ContainerLayout } from "@/components/containers/ContainerLayout";
import { SectionAbout } from "@/sections/SectionAbout";
import { SectionContact } from "@/sections/SectionContact";
import { SectionHome } from "@/sections/SectionHome";
import { SectionProjectsV2 } from "@/sections/SectionProjectsV2";

export default function Home() {
  return (
    <ContainerLayout>
      <SectionHome />

      <SectionAbout />

      <SectionProjectsV2 />

      <SectionContact />
    </ContainerLayout>
  );
}
