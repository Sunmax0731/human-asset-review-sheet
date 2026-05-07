# ユーザーガイド

## 基本操作

1. `samples/representative-suite.json` を開き、対象項目の `title`、`owner`、`source`、`status`、`decision`、`evidence` を確認する。
2. `npm run validate` を実行する。
3. `dist/human-asset-review-sheet-representative-report.json` の summary を確認する。
4. warn または fail の item では `issues` と `nextAction` を見て修正する。

## 判定の読み方

- pass: closed alpha の代表条件を満たす。
- warn: 手動確認または追加証跡が必要。
- fail: 必須項目が不足しており、release 判断に使えない。

## 利用上の注意

自動検査できない見た目や使用感の確認がチャットやメモに散らばりやすい。

この課題を軽減するため、判断の根拠は `evidence` と `notes` に残してください。
