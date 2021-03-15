import { ReactNode, useMemo } from 'react';
import BlogContainer from '@src/content_containers/BlogContainer/BlogContainer';

enum Schemas {
  BLOG,
}

const CONTENT_CONTAINER_MAP = {
  [Schemas.BLOG]: BlogContainer,
};

type Prototype = { Schemas: typeof Schemas };

interface ContentContainerProviderProps<
  Schema extends keyof typeof CONTENT_CONTAINER_MAP = keyof typeof CONTENT_CONTAINER_MAP
> {
  schema: Schema;
  containerProps: React.ComponentProps<typeof CONTENT_CONTAINER_MAP[Schema]>;
  children?: ReactNode;
}

const ContentContainerProvider: React.FunctionComponent<ContentContainerProviderProps> &
  Prototype = (props) => {
  const { schema, containerProps, children } = props;

  const ContentContainer = useMemo(() => CONTENT_CONTAINER_MAP[schema], [schema]);

  return <ContentContainer {...containerProps}>{children}</ContentContainer>;
};

ContentContainerProvider.Schemas = Schemas;
export default ContentContainerProvider;
