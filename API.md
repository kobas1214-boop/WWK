# API設計

## 案件

- `GET /api/projects`
  - 次回案件番号のプレビューを返します。
- `POST /api/projects`
  - 案件を作成します。
  - 本番ではSupabase RPC `issue_project_no()` を呼び出して採番します。

## 図面AI解析

- `POST /api/drawings/analyze`
  - `multipart/form-data`
  - `text`: PDF OCRやCADメタデータから抽出した文字列
  - 戻り値: `dimensions`, `woodSpecies`, `productName`, `notes`

実運用ではアップロード後に次の処理を行います。

1. Supabase Storageへ保存
2. PDFはOCR、DXF/DWGは変換サービスまたはサーバー処理でテキスト化
3. OpenAI APIで寸法、材種、商品名を抽出
4. `drawings.extracted_dimensions` と `drawings.extracted_wood_species` に保存

## 見積PDF

- `GET /api/estimates/:id/pdf`
  - 見積PDFを生成して返します。
  - 本番では生成済みPDFをSupabase Storage `estimates` bucketへ保存し、履歴として保持します。
