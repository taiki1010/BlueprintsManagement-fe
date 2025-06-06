import BlueprintInfo from "@/components/Blueprint/BlueprintInfo/BlueprintInfo"

const BlueprintIdPage = async({
  params
}: {
  params: Promise<{ blueprintId: string}>
}) => {
  const {blueprintId} = await params;
  return (
    <div className="h-full py-10 px-10">
      <BlueprintInfo blueprintId={blueprintId}/>
    </div>
  )
}

export default BlueprintIdPage