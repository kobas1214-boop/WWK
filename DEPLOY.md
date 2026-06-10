# データベース設計

中心は `projects` です。`customers`、`drawings`、`photos`、`estimates` が案件に紐づきます。

主要テーブル:

- `customers`: 会社名、担当者、電話番号、メール
- `projects`: 案件番号、顧客、商品名、材種、ステータス、納期
- `drawings`: 図面ファイル、形式、Storageパス、AI抽出結果
- `photos`: 製作前、製作中、完成後の写真
- `estimates`: 見積ヘッダ、合計、PDF保存先、履歴バージョン
- `estimate_items`: 見積明細
- `project_sequences`: 年ごとの連番管理

案件番号は `issue_project_no()` で `WWK-260001` 形式を発行します。

RLSは従業員1〜20名の社内利用を想定し、まずは `authenticated` 全員が読み書き可能な運用にしています。将来、管理者、設計、製作、閲覧のみの権限へ分割できます。
