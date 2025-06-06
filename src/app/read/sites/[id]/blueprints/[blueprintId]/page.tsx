import BlueprintInfo from "@/components/ReadOnly/Blueprint/BlueprintInfo/BlueprintInfo";

const ReadBlueprintIdPage = async({params}: {params: Promise<{blueprintId: string}>}) => {

  const {blueprintId} = await params;

  return (
   <div className="h-full px-10 py-10">
      <BlueprintInfo blueprintId={blueprintId} />
   </div>
  );
}

export default ReadBlueprintIdPage;