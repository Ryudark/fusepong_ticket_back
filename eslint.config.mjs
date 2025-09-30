import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier/recommended'

export default [
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      }
    }
  },
  {
    files: ["**/*.{js,ts}"]
  },
  {
    ignores: ["eslint.config.mjs"]
  },
  prettier,
  pluginJs.configs.recommended,
  ...tseslint.configs.stylisticTypeChecked,
]
