import { AppShell } from "@/components/AppShell";
import { SearchFilters } from "@/components/SearchFilters";
import { StatusBadge } from "@/components/StatusBadge";
import { projects } from "@/lib/mock-data";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <AppShell>
      <header className="topbar">
        <div>
          <h1>案件一覧</h1>
          <p className="muted">案件番号は WWK-年下2桁-連番 で自動発行します。</p>
        </div>
        <button className="button primary">
          <Plus size={17} aria-hidden />
          新規案件
        </button>
      </header>
      <SearchFilters />
      <section className="panel" style={{ marginTop: 16 }}>
        <table className="table">
          <thead>
            <tr>
              <th>案件番号</th>
              <th>顧客名</th>
              <th>商品名</th>
              <th>材種</th>
              <th>状態</th>
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
