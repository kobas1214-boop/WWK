import { formatYen, projects } from "@/lib/mock-data";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const project = projects.find((item) => item.id === params.id || item.projectNo === params.id) || projects[0];
  const lines = [
    "%PDF-1.4",
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj",
    "4 0 obj << /Length 220 >> stream",
    "BT /F1 18 Tf 56 780 Td (WWK Works Cloud Estimate) Tj ET",
    `BT /F1 12 Tf 56 740 Td (Project: ${project.projectNo}) Tj ET`,
    `BT /F1 12 Tf 56 720 Td (Customer: ${project.customerName}) Tj ET`,
    `BT /F1 12 Tf 56 700 Td (Product: ${project.productName}) Tj ET`,
    `BT /F1 12 Tf 56 680 Td (Total: ${formatYen(project.estimateTotal)}) Tj ET`,
    "endstream endobj",
    "5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
    "xref",
    "0 6",
    "0000000000 65535 f ",
    "trailer << /Root 1 0 R /Size 6 >>",
    "startxref",
    "0",
    "%%EOF"
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "application/pdf",
      "content-disposition": `attachment; filename="${project.projectNo}-estimate.pdf"`
    }
  });
}
