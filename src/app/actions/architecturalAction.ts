"use server";

export const getArchitecturalDrawingsByBlueprintId = async(blueprintId: string) => {
  const response = await fetch(`${process.env.ENDPOINT}/architecturalDrawings/${blueprintId}`);
  const architecturalDrawings = await response.json();
  console.log(architecturalDrawings);
}