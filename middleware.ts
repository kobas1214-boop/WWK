import { QRCodeCard } from "@/components/QRCodeCard";
import { AppShell } from "@/components/AppShell";
import { StatusBadge } from "@/components/StatusBadge";
import { UploadPanel } from "@/components/UploadPanel";
import { drawings, formatYen, projects } from "@/lib/mock-data";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id || item.projectNo === id) || projects[0];
  const projectDrawings = drawings.filter((drawing) => drawing.projectNo === project.projectNo);

  return (
    <AppShell>
      <header className="topbar">
        <div>
          <h1>{project.projectNo}</h1>
          <p className="muted">{project.customerName} / {project.productName}</p>
        </div>
        <StatusBadge status={project.status} />
      </header>
      <div className="detail-layout">
        <div className="grid">
          <section className="panel">
            <h2>案件情報</h2>
            <div className="form-grid">
              <div><span className="muted">商品名</span><p>{project.productName}</p></div>
              <div><span className="muted">材種</span><p>{project.woodSpecies}</p></div>
              <div><span className="muted">納期</span><p>{project.dueDate}</p></div>
              <div><span className="muted">見積金額</span><p>{formatYen(project.estimateTotal)}</p></div>
            </div>
          </section>
          <section className="panel">
            <h2>図面</h2>
            <table className="table">
              <tbody>
                {projectDrawings.map((drawing) => (
                  <tr key={drawing.id}>
                    <td>{drawing.fileName}</td>
                    <td>{drawing.type}</td>
                    <td>{drawing.uploadedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <section className="panel">
            <h2>写真</h2>
            <div className="media-grid">
              <div className="media-tile">製作前</div>
              <div className="media-tile">製作中</div>
              <div className="media-tile">完成後</div>
            </div>
          </section>
          <UploadPanel />
        </div>
        <QRCodeCard projectNo={project.projectNo} />
      </div>
    </AppShell>
  );
}
