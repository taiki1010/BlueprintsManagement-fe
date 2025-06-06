import SiteInfo from "@/components/ReadOnly/SiteInfo/SiteInfo";

const ReadSitePage = async({params}: {params: Promise<{id: string}>}) => {

  const {id} = await params;

  return (
   <div className="px-10 py-10">
    <SiteInfo id={id} />
   </div>
  );
}

export default ReadSitePage;