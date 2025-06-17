
const ManagementPage = async() => {
  const response = await fetch(`${process.env.ENDPOINT}/sites`,{
    method: "HEAD"
});

  return (
   <div className="px-10 py-10">
    <p className="text-3xl font-bold">
      {response.status == 200 ? "現場を選択してください" : "現場を追加してください"}
    </p>
   </div>
  );
}

export default ManagementPage;