
import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.NEXT_PUBLIC_DATABASE_URL}/graphql`,
  documents: "src/**/*.ts",
  generates: {
    "src/utils/graphql/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
