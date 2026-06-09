import { formatYen, projects } from "@/lib/mock-data";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id || item.projectNo === id) || projects[0];
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595, 842]);
  const font = await pdf.embedFont(StandardFonts.Helvetica);

  page.drawText("WWK Works Cloud Estimate", { x: 56, y: 780, size: 22, font, color: rgb(0.12, 0.14, 0.13) });
  page.drawText(`Project: ${project.projectNo}`, { x: 56, y: 735, size: 12, font });
  page.drawText(`Customer: ${project.customerName}`, { x: 56, y: 714, size: 12, font });
  page.drawText(`Product: ${project.productName}`, { x: 56, y: 693, size: 12, font });
  page.drawText(`Wood: ${project.woodSpecies}`, { x: 56, y: 672, size: 12, font });
  page.drawText(`Total: ${formatYen(project.estimateTotal)}`, { x: 56, y: 630, size: 16, font, color: rgb(0.35, 0.24, 0.13) });

  const bytes = await pdf.save();
  return new Response(bytes, {
    headers: {
      "content-type": "application/pdf",
      "content-disposition": `attachment; filename="${project.projectNo}-estimate.pdf"`
    }
  });
}
