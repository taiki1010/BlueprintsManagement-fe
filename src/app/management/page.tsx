
const ManagementPage = async() => {
  const response = await fetch(`${process.env.ENDPOINT}/sites`,{
    method: "HEAD"
});

  return (
   <div className="px-10 py-10">
    <p className="text-3xl font-bold">
      {response.status == 200 ? "図面を選択してください" : "図面を追加してください"}
    </p>
   </div>
  );
}

export default ManagementPage;