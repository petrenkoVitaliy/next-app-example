import { useMemo } from 'react';
import classnames from './index.module.scss';

interface TagsTableProps {
  tags: { id: number; key: string; value: string }[];
}

export const TagsTable: React.FunctionComponent<TagsTableProps> = (props) => {
  const { tags } = props;

  const tagsArrayHalfSize = useMemo(() => Math.round(tags.length / 2), [tags]);

  return (
    <section className={classnames.tags_wrapper}>
      <div className={classnames.tags_block}>
        {tags.slice(0, tagsArrayHalfSize).map((tag) => (
          <div className={classnames.tags_item} key={tag.id}>
            <div className={classnames.tags_item_key}>{`${tag.key}:`}</div>
            <div className={classnames.tags_item_value}>{tag.value}</div>
          </div>
        ))}
      </div>
      <div className={classnames.tags_block}>
        {tags.slice(tagsArrayHalfSize).map((tag) => (
          <div className={classnames.tags_item} key={tag.id}>
            <div className={classnames.tags_item_key}>{`${tag.key}:`}</div>
            <div className={classnames.tags_item_value}>{tag.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
