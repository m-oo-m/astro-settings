import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import astroEslintParser from 'astro-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';

export default [
  eslint.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        //dataLayer: false,
      },
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  },

  {
    files: ['**/*.{js,jsx,astro}'],
    rules: {
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    },
  },
  {
    // Define the configuration for `<script>` tag.
    // Script in `<script>` is assigned a virtual file name with the `.js` extension.
    files: ['**/*.{ts,tsx}', '**/*.astro/*.js'],
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      // コードの複雑さを制御するルール
      'no-extra-boolean-cast': 'error', // 不要なboolean型キャストを禁止
      'no-useless-constructor': 'error', // 不要なコンストラクタを禁止
      'no-useless-rename': 'error', // 不要な名前の再割り当てを禁止
      'no-useless-computed-key': 'error', // 不要な計算されたプロパティキーを禁止
      'prefer-object-has-own': 'error', // Object.prototype.hasOwnPropertyの代わりにObject.hasOwnを推奨
      //'@typescript-eslint/prefer-optional-chain': 'error', // 修正
      'no-constant-binary-expression': 'error', // 定数の二項式を禁止

      // コードの正確性を保証するルール
      'no-const-assign': 'error', // const宣言された変数への再代入を禁止
      'no-constant-condition': 'error', // 条件式での定数使用を禁止
      'no-empty-pattern': 'error', // 空のデストラクチャリングパターンを禁止
      'no-loss-of-precision': 'error', // 精度損失のある数値リテラルを禁止
      'no-self-assign': 'error', // 自己代入を禁止
      'no-setter-return': 'error', // setterからの値の返却を禁止
      'no-unreachable': 'error', // 到達不可能なコードを禁止
      'no-unsafe-optional-chaining': 'error', // 安全でないオプショナルチェーンを禁止
      'no-unused-vars': 'warn', // 未使用の変数を警告
      'use-isnan': 'error', // NaNとの比較にisNaN()の使用を強制
      'for-direction': 'error', // for文の不正なループ方向を禁止

      // パフォーマンス関連のルール
      'no-delete-var': 'error', // 変数に対するdelete演算子の使用を禁止

      // セキュリティ関連のルール
      //'react/no-danger': 'warn', // dangerouslySetInnerHTMLの使用を警告

      // コードスタイル関連のルール
      'no-var': 'error', // var宣言の使用を禁止
      'prefer-const': 'error', // 再代入されない変数にconstの使用を強制
      'prefer-exponentiation-operator': 'error', // Math.pow()の代わりに指数演算子(**)の使用を推奨
      //'react/self-closing-comp': 'error', // 子要素のない要素の自己閉じを強制
      'no-array-constructor': 'error', // Arrayコンストラクタの使用を禁止
      'prefer-template': 'error', // 文字列連結の代わりにテンプレートリテラルの使用を推奨

      // 疑わしい実装を検出するルール
      //'react/no-array-index-key': 'error', // 配列のインデックスをReactのkeyとして使用することを禁止
      'no-async-promise-executor': 'error', // Promise executorでの非同期関数の使用を禁止
      'no-class-assign': 'error', // クラス名への再代入を禁止
      'no-compare-neg-zero': 'error', // -0との比較を禁止
      'no-console': ['warn', { allow: ['warn', 'error'] }], // console.log()の使用を警告（warn, errorは許可）
      eqeqeq: ['error', 'always'], // 厳密等価演算子(===, !==)の使用を強制
      'no-dupe-class-members': 'error', // クラスメンバーの重複を禁止
      'no-duplicate-imports': 'error', // 重複したインポートを禁止
      'no-empty-function': 'error', // 空の関数を禁止
      'no-func-assign': 'error', // 関数宣言への再代入を禁止
      'no-import-assign': 'error', // インポートへの代入を禁止
      'no-redeclare': 'error', // 変数の再宣言を禁止
      'no-shadow': 'error', // 変数のシャドーイングを禁止
      'no-use-before-define': 'error', // 宣言前の使用を禁止
      'default-case-last': 'error', // switch文でのdefaultケースを最後に配置することを強制
      'getter-return': 'error', // getterでの値の返却を強制
      'valid-typeof': 'error', // typeof演算子との比較に有効な文字列の使用を強制
    },
  },
  {
    ignores: [
      // config files
      '.eslint.config.js',
      '.prettier.config.js',
      'tsconfig.json',
      'postcss.config.js',
      'tailwind.config.js',
      'astro.config.mjs',
      'dist',
      'node_modules',
      '.github',
      'types.generated.d.ts',
      '.astro',
    ],
  },
];
