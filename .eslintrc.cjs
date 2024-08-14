module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // アクセシビリティ（A11y）関連のルール
    "jsx-a11y/aria-unsupported-elements": "error", // サポートされていない要素でのARIA属性使用を禁止
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "error", // 非インタラクティブ要素への不適切なロール割り当てを禁止
    "jsx-a11y/no-redundant-roles": "error", // 冗長なロールの使用を禁止
    "jsx-a11y/alt-text": "error", // 画像要素に代替テキストを要求
    "jsx-a11y/iframe-has-title": "error", // iframeにタイトルを要求
    "jsx-a11y/media-has-caption": "error", // メディア要素にキャプションを要求
    "jsx-a11y/valid-aria-props": "error", // 有効なARIA属性の使用を強制
    "jsx-a11y/valid-aria-values": "error", // 有効なARIA値の使用を強制

    // コードの複雑さを制御するルール
    "no-extra-boolean-cast": "error", // 不要なboolean型キャストを禁止
    "no-useless-constructor": "error", // 不要なコンストラクタを禁止
    "no-useless-rename": "error", // 不要な名前の再割り当てを禁止
    "no-useless-computed-key": "error", // 不要な計算されたプロパティキーを禁止
    "prefer-object-has-own": "error", // Object.prototype.hasOwnPropertyの代わりにObject.hasOwnを推奨
    "prefer-optional-chain": "error", // オプショナルチェーンの使用を推奨
    "no-constant-binary-expression": "error", // 定数の二項式を禁止

    // コードの正確性を保証するルール
    "no-const-assign": "error", // const宣言された変数への再代入を禁止
    "no-constant-condition": "error", // 条件式での定数使用を禁止
    "no-empty-pattern": "error", // 空のデストラクチャリングパターンを禁止
    "no-loss-of-precision": "error", // 精度損失のある数値リテラルを禁止
    "no-self-assign": "error", // 自己代入を禁止
    "no-setter-return": "error", // setterからの値の返却を禁止
    "no-unreachable": "error", // 到達不可能なコードを禁止
    "no-unsafe-optional-chaining": "error", // 安全でないオプショナルチェーンを禁止
    "no-unused-vars": "warn", // 未使用の変数を警告
    "use-isnan": "error", // NaNとの比較にisNaN()の使用を強制
    "for-direction": "error", // for文の不正なループ方向を禁止

    // パフォーマンス関連のルール
    "no-delete-var": "error", // 変数に対するdelete演算子の使用を禁止

    // セキュリティ関連のルール
    "react/no-danger": "warn", // dangerouslySetInnerHTMLの使用を警告

    // コードスタイル関連のルール
    "no-var": "error", // var宣言の使用を禁止
    "prefer-const": "error", // 再代入されない変数にconstの使用を強制
    "prefer-exponentiation-operator": "error", // Math.pow()の代わりに指数演算子(**)の使用を推奨
    "react/self-closing-comp": "error", // 子要素のない要素の自己閉じを強制
    "no-array-constructor": "error", // Arrayコンストラクタの使用を禁止
    "prefer-template": "error", // 文字列連結の代わりにテンプレートリテラルの使用を推奨

    // 疑わしい実装を検出するルール
    "react/no-array-index-key": "error", // 配列のインデックスをReactのkeyとして使用することを禁止
    "no-async-promise-executor": "error", // Promise executorでの非同期関数の使用を禁止
    "no-class-assign": "error", // クラス名への再代入を禁止
    "no-compare-neg-zero": "error", // -0との比較を禁止
    "no-console": ["warn", { allow: ["warn", "error"] }], // console.log()の使用を警告（warn, errorは許可）
    eqeqeq: ["error", "always"], // 厳密等価演算子(===, !==)の使用を強制
    "no-dupe-class-members": "error", // クラスメンバーの重複を禁止
    "no-duplicate-imports": "error", // 重複したインポートを禁止
    "no-empty-function": "error", // 空の関数を禁止
    "no-func-assign": "error", // 関数宣言への再代入を禁止
    "no-import-assign": "error", // インポートへの代入を禁止
    "no-redeclare": "error", // 変数の再宣言を禁止
    "no-shadow": "error", // 変数のシャドーイングを禁止
    "no-use-before-define": "error", // 宣言前の使用を禁止
    "default-case-last": "error", // switch文でのdefaultケースを最後に配置することを強制
    "getter-return": "error", // getterでの値の返却を強制
    "valid-typeof": "error", // typeof演算子との比較に有効な文字列の使用を強制
  },
};
