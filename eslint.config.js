import gitignore from 'eslint-config-flat-gitignore'
import config from '@tpluscode/eslint-config'

export default [
  gitignore(),
  ...config,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]
