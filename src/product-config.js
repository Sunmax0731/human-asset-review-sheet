export const productConfig = {
  "product": {
    "rank": 1,
    "tier": "P0",
    "score": 72,
    "domain": "AssetPipeline",
    "ideaNo": 10,
    "ideaName": "素材レビュー・人間確認シート",
    "repository": "human-asset-review-sheet",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "自動検品ではなく人間確認を商品化でき、既存の検品系PICKUPと直結する。",
    "surface": "アセットパイプライン向け CLI、検証モデル、静的 HTML レビュー画面",
    "integration": "Unity Editor / Blender / Webレビュー画面",
    "overview": "素材差分、見た目、動作、手動QA項目、承認コメントをレビュー単位で管理する。",
    "problem": "自動検査できない見た目や使用感の確認がチャットやメモに散らばりやすい。",
    "differentiation": "DCCのプレビューと人間確認シートを同じレビュー画面に置く。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
