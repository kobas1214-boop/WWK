import { AppShell } from "@/components/AppShell";
import { customers, projects } from "@/lib/mock-data";

export default function CustomersPage() {
  return (
    <AppShell>
      <header className="topbar">
        <div>
          <h1>顧客管理</h1>
          <p className="muted">会社名、担当者、連絡先、案件履歴を管理します。</p>
        </div>
      </header>
      <section className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>会社名</th>
              <th>担当者</th>
              <th>電話番号</th>
              <th>メール</th>
              <th>案件履歴</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.companyName}</td>
                <td>{customer.contactName}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>{projects.filter((project) => project.customerName === customer.companyName).length}件</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </AppShell>
  );
}
