import { ReactNode, useMemo } from 'react';
import { SkeletonSchema } from 'schema_containers/SkeletonSchema/SkeletonSchema';

enum Schemas {
  SKELETON,
}

const SCHEMAS_CONTAINER_MAP = {
  [Schemas.SKELETON]: SkeletonSchema,
};

type Prototype = { Schemas: typeof Schemas };

interface SchemaContainerProviderProps<
  Schema extends keyof typeof SCHEMAS_CONTAINER_MAP = keyof typeof SCHEMAS_CONTAINER_MAP
> {
  schema: Schema;
  containerProps: React.ComponentProps<typeof SCHEMAS_CONTAINER_MAP[Schema]>;
  children?: ReactNode;
}

const SchemaContainerProvider: React.FunctionComponent<SchemaContainerProviderProps> & Prototype = (
  props,
) => {
  const { schema, containerProps, children } = props;

  const SchemaContainer = useMemo(() => SCHEMAS_CONTAINER_MAP[schema], [schema]);

  return <SchemaContainer {...containerProps}>{children}</SchemaContainer>;
};

SchemaContainerProvider.Schemas = Schemas;
export default SchemaContainerProvider;
