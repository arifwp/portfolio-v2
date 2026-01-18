import { ContainerLayout } from "@/components/containers/ContainerLayout";
import { SectionAbout } from "@/sections/SectionAbout";
import { SectionHome } from "@/sections/SectionHome";
import { SectionProjectsV2 } from "@/sections/SectionProjectsV2";

export default function Home() {
  return (
    <ContainerLayout>
      <SectionHome />

      <SectionAbout />

      {/* <SectionProjects /> */}

      <SectionProjectsV2 />
    </ContainerLayout>
  );
}
