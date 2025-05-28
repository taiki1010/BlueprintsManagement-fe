import SiteItem from "./SiteItem/SiteItem";

interface SiteItemType {
  id: string;
  name: string;
}

const NavList = async () => {
  const getAllSites = async (): Promise<SiteItemType[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/sites`);

    if(response.status !== 200) throw new Error("サーバーとの接続中にエラーが発生しました");

    const sites = await response.json();
    return sites as SiteItemType[];
  }

  const siteList = await getAllSites() || [];

  const renderSiteList = () => {
    if(siteList.length == 0) {
      return <p>現場が登録されていません</p>
    } else {
      return (
        siteList.map((site) => (
          <SiteItem key={site.id} id={site.id} name={site.name} />
        ))
      )
    }
  }

  return (
    <div className="flex flex-col">
      {renderSiteList()}
    </div>
  )
}

export default NavList