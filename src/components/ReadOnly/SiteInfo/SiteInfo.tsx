
interface SiteInfoType {
  id: string;
  name: string;
  address: string;
  remark: string;
}

interface Props {
  id: string
}

const SiteInfo = async({id}: Props) => {

  const response = await fetch(`${process.env.ENDPOINT}/sites/${id}`);
  const siteInfo = await response.json() as SiteInfoType;
  
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <h2 className="text-6xl font-bold mb-8">{siteInfo.name}</h2>
        <p className="text-4xl mb-4">{siteInfo.address}</p>
        <p className="text-2xl">{siteInfo.remark}</p>
      </div>
    </div>
  )
}

export default SiteInfo