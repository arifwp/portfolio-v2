import { Project, projects } from "@/constants/project";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data: Project | undefined = projects.find((item) => item.slug === slug);

  if (!data) {
    notFound();
  }

  return <div>{data.title}</div>;
}
