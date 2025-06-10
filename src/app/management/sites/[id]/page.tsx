
import SiteInfo from "@/components/Management/Site/SiteInfo/SiteInfo";
import { redirect } from "next/navigation";

const SitePage = async({
  params
}: {
  params: Promise<{ id: string }>
}) => {
  const {id} = await params;

  if(!id) {
    redirect("/management");
  }

  return (
    <div className="h-full px-10 py-10">
      <SiteInfo id={id}/>
    </div>
  )
}

export default SitePage