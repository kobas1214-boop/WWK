import { AppShell } from "@/components/AppShell";
import { SearchFilters } from "@/components/SearchFilters";
import { UploadPanel } from "@/components/UploadPanel";
import { drawings } from "@/lib/mock-data";

export default function DrawingsPage() {
  return (
    <AppShell>
      <header className="topbar">
        <div>
          <h1>図面一覧</h1>
          <p className="muted">PDF、DXF、DWG、JPEG、PNGを案件に紐づけます。</p>
        </div>
      </header>
      <SearchFilters />
      <div className="grid cols-3" style={{ marginTop: 16 }}>
        <div style={{ gridColumn: "span 2" }} className="panel">
          <table className="table">
            <thead>
              <tr>
                <th>案件番号</th>
                <th>ファイル</th>
                <th>形式</th>
                <th>商品名</th>
                <th>材種</th>
              </tr>
            </thead>
            <tbody>
              {drawings.map((drawing) => (
                <tr key={drawing.id}>
                  <td>{drawing.projectNo}</td>
                  <td>{drawing.fileName}</td>
                  <td>{drawing.type}</td>
                  <td>{drawing.productName}</td>
                  <td>{drawing.woodSpecies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <UploadPanel />
      </div>
    </AppShell>
  );
}
