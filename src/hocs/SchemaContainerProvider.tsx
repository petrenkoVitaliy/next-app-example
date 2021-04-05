import { ReactNode, useMemo } from 'react';
import { SkeletonSchema } from '@src/containers/schema_containers/SkeletonSchema/SkeletonSchema';

/**
 * after hours of pain, I understood that this pattern requires changes with type checking
 * containerProps type isn't valid, it can accept extra keys
 */

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
export { SchemaContainerProvider };
