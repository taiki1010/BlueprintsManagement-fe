import SiteItem from "./SiteItem/SiteItem";

interface SiteItemType {
  id: string;
  name: string;
}

const NavList = async() => {

  const response = await fetch(`${process.env.ENDPOINT}/sites`, {cache: "no-cache"});
  if(response.status == 404) return [];
  if(response.status !== 200) throw new Error("サーバーとの接続中にエラーが発生しました");

  const sites = await response.json() as SiteItemType[];

  return (
    <div className="flex flex-col">
      {sites.length === 0
        ? <p className="px-2">現場が登録されていません</p>
        : sites.map((site) => (
          <SiteItem key={site.id} id={site.id} name={site.name}/>
        ))}
    </div>
  )
}

export default NavList
