import { AppShell } from "@/components/AppShell";
import { StatusBadge } from "@/components/StatusBadge";
import { formatYen, projects } from "@/lib/mock-data";
import { FileUp, Plus } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const total = projects.reduce((sum, project) => sum + project.estimateTotal, 0);

  return (
    <AppShell>
      <header className="topbar">
        <div>
          <h1>今日の工房</h1>
          <p className="muted">案件、図面、見積、写真をひとつの流れで管理します。</p>
        </div>
        <div className="actions">
          <Link className="button" href="/drawings">
            <FileUp size={17} aria-hidden />
            図面登録
          </Link>
          <Link className="button primary" href="/projects">
            <Plus size={17} aria-hidden />
            案件作成
          </Link>
        </div>
      </header>
      <section className="grid cols-4">
        <div className="panel metric"><span className="muted">進行案件</span><strong>{projects.length}</strong></div>
        <div className="panel metric"><span className="muted">製作中</span><strong>{projects.filter((p) => p.status === "製作中").length}</strong></div>
        <div className="panel metric"><span className="muted">見積合計</span><strong>{formatYen(total)}</strong></div>
        <div className="panel metric"><span className="muted">今週の納期</span><strong>2</strong></div>
      </section>
      <section className="panel" style={{ marginTop: 16 }}>
        <h2>案件一覧</h2>
        <table className="table">
          <thead>
            <tr>
              <th>案件番号</th>
              <th>顧客名</th>
              <th>商品名</th>
              <th>材種</th>
              <th>ステータス</th>
              <th>納期</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td><Link href={`/projects/${project.id}`}>{project.projectNo}</Link></td>
                <td>{project.customerName}</td>
                <td>{project.productName}</td>
                <td>{project.woodSpecies}</td>
                <td><StatusBadge status={project.status} /></td>
                <td>{project.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </AppShell>
  );
}
