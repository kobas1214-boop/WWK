# フォルダ構成

```text
WWK-Works-Cloud/
  src/app/                    Next.js App Router画面とAPI
  src/components/             UIコンポーネント
  src/lib/                    型、Supabase、AI、採番ロジック
  supabase/schema.sql         DBテーブル、RLS、案件番号発行関数
  supabase/storage-policies.sql
  docs/                       設計、API、セットアップ、デプロイ
```

本番では `src/lib/mock-data.ts` をSupabase取得処理へ置き換えます。画面とコンポーネントはそのまま利用できます。
