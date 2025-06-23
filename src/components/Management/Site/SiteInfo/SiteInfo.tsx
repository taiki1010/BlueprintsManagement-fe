import EditOrDeleteModal from "../Modal/EditOrDeleteModal";
import ShareButton from "../ShareButton/ShareButton";

export interface SiteInfoType {
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
  const {name, address, remark} = siteInfo;

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex gap-5 mb-8">
          <h2 className="text-6xl font-bold">{name}</h2>
          <ShareButton id={id} name={name}/>
        </div>
        <p className="text-4xl mb-4">{address}</p>
        <p className="text-2xl whitespace-pre-line">{remark}</p>
      </div>
      
      <EditOrDeleteModal siteInfo={siteInfo}/>
    </div>
  )
}

export default SiteInfo