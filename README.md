# **💰 TaxCalculator - 給与計算ツール**  
給与から税金や保険料を自動計算し、手取り額を算出する Next.js アプリケーション。  

![TaxCalculator](https://via.placeholder.com/800x400?text=TaxCalculator+Screenshot)

## **📌 特徴**
- **税金・保険料の詳細計算** (所得税、住民税、健康保険、厚生年金、雇用保険)
- **会社負担分の明示**
- **リアルタイム計算**
- **ダークモード対応**
- **Vercel による CI/CD 自動デプロイ**

---

## **🚀 デモ**
🔗 **[本番環境で試す](https://taxcalculator.vercel.app/)**  

---

## **📂 ディレクトリ構成**
```plaintext
tax/
 ┣ 📂 app/            # Next.js App Router
 ┣ 📂 components/     # UI コンポーネント
 ┣ 📂 lib/            # ロジック・型定義
 ┣ 📂 public/         # 静的ファイル
 ┣ 📂 .github/workflows/  # GitHub Actions CI/CD
 ┣ 📜 README.md       # このファイル
 ┣ 📜 package.json    # 依存関係
 ┣ 📜 tsconfig.json   # TypeScript 設定
 ┗ 📜 tailwind.config.ts  # Tailwind 設定
```

---

## **🛠️ セットアップ**
### **1️⃣ 必要な環境**
- Node.js `^18.x`
- npm / yarn
- Vercel アカウント (デプロイ用)

### **2️⃣ クローン & インストール**
```sh
git clone https://github.com/KoenigWolf/TaxCalculator.git
cd TaxCalculator
npm install
```

### **3️⃣ ローカル開発**
```sh
npm run dev
```
➡ `http://localhost:3000` にアクセス

---

## **📊 計算ロジック**
計算ロジックは `lib/calculation.ts` に定義されており、以下の数式で算出されます。

| 項目 | 計算方法 |
|------|---------|
| **所得税** | `salary * 0.1` |
| **住民税** | `salary * 0.054` |
| **健康保険** | `salary * 0.0538 (会社負担あり)` |
| **厚生年金** | `salary * 0.091 (会社負担あり)` |
| **雇用保険** | `salary * 0.003` |

✅ 会社負担分も補足として表示