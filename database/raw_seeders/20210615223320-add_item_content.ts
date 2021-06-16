import { QueryInterface } from 'sequelize/types';

export enum ItemContentType {
  single = 'single',
  named = 'named',
}

export interface ItemContentAttributes {
  ItemId: number;

  key: string;
  value: string;
  content_type: ItemContentType;

  createdAt: Date;
  updatedAt: Date;
}
const itemContentMap: {
  ItemId: number;
  contents: { key: string; value: string; content_type: ItemContentType }[];
}[] = [
  {
    ItemId: 1,
    contents: [
      // ---------------- named
      {
        key: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        value:
          'Curabitur commodo tortor id nisi rutrum semper. Vestibulum varius nisi vel arcu semper congue. Donec venenatis metus eget lorem lacinia fringilla. Maecenas at felis tellus. Donec eget pretium libero, at sollicitudin neque. Phasellus scelerisque ligula commodo rhoncus semper. Integer turpis augue, egestas ac urna a, consectetur mattis justo. Donec ullamcorper mattis egestas. Praesent sed lectus consequat, laoreet justo at, ultricies sapien.',
        content_type: ItemContentType.named,
      },
      {
        key: 'Pellentesque in ex scelerisque massa aliquam dictum.',
        value:
          'Curabitur sapien libero, hendrerit a consectetur in, porta ut sapien. Maecenas porttitor eget libero eu euismod. Nulla consectetur a neque eu semper. Sed et ante quis nunc bibendum accumsan in eget neque. Ut fringilla dui sed massa pretium pellentesque eu sit amet turpis. ',
        content_type: ItemContentType.named,
      },
      {
        key: 'In sit amet bibendum augue, in fringilla tortor.',
        value:
          'Nullam condimentum pulvinar dolor, et commodo odio euismod nec. Suspendisse potenti. Etiam id condimentum lectus. Nam facilisis lorem metus. Morbi blandit dignissim congue. Pellentesque nibh turpis, fringilla nec placerat sit amet, venenatis eget tortor. In a felis interdum, pretium lacus ornare, dignissim est. Proin scelerisque cursus posuere. Donec ut enim sed leo vestibulum fringilla at et erat. Duis iaculis consequat nisi, nec lobortis sem ullamcorper id.',
        content_type: ItemContentType.named,
      },
      {
        key: 'Morbi vel lacinia libero.',
        value:
          'Praesent fermentum est a nibh eleifend scelerisque. Proin posuere risus aliquam, lobortis orci sagittis, congue metus.',
        content_type: ItemContentType.named,
      },
      {
        key: 'Nulla scelerisque, ipsum id sollicitudin varius, nisl orci faucibus nibh, sit amet sagittis massa est non risus.',
        value:
          'Nullam ipsum quam, sagittis vitae mi eget, tincidunt laoreet libero. Integer volutpat sodales convallis. Morbi ac pretium justo, ut varius quam. Pellentesque eget mi et lorem fringilla malesuada quis a arcu. Mauris lobortis, erat at elementum varius, nisi sem semper augue, sed rhoncus nulla justo vel lacus. Fusce imperdiet mi augue, nec dapibus mi euismod id. In eu augue quam. Suspendisse potenti. Nulla finibus facilisis ante, in hendrerit augue pulvinar id. Pellentesque ullamcorper, odio eget elementum euismod, enim diam cursus nisi, a rhoncus massa lacus eget neque. Sed hendrerit porttitor lacus. Fusce rutrum nisl non tempor malesuada. In hendrerit aliquam odio, in scelerisque urna tristique ac.',
        content_type: ItemContentType.named,
      },
      // ---------------- single
      {
        key: 'key1',
        value:
          'Nulla scelerisque, ipsum id sollicitudin varius, nisl orci faucibus nibh, sit amet sagittis massa est non risus. Nullam ipsum quam, sagittis vitae mi eget, tincidunt laoreet libero. Integer volutpat sodales convallis. Morbi ac pretium justo, ut varius quam. Pellentesque eget mi et lorem fringilla malesuada quis a arcu. Mauris lobortis, erat at elementum varius, nisi sem semper augue, sed rhoncus nulla justo vel lacus. Fusce imperdiet mi augue, nec dapibus mi euismod id. In eu augue quam. Suspendisse potenti. Nulla finibus facilisis ante, in hendrerit augue pulvinar id. Pellentesque ullamcorper, odio eget elementum euismod, enim diam cursus nisi, a rhoncus massa lacus eget neque. Sed hendrerit porttitor lacus. Fusce rutrum nisl non tempor malesuada. In hendrerit aliquam odio, in scelerisque urna tristique ac.',
        content_type: ItemContentType.single,
      },
      {
        key: 'key2',
        value:
          'In sit amet bibendum augue, in fringilla tortor. Ut ornare pharetra urna et blandit. Vivamus nec sem urna. Aenean ultricies sem convallis, finibus diam ac, rhoncus ex. Cras sed velit ultricies, elementum enim vitae, efficitur quam. Phasellus sapien sem, vulputate a tortor at, pulvinar dignissim tortor.',
        content_type: ItemContentType.single,
      },
      {
        key: 'key3',
        value:
          'Nullam ipsum quam, sagittis vitae mi eget, tincidunt laoreet libero. Integer volutpat sodales convallis. Morbi ac pretium justo, ut varius quam. Pellentesque eget mi et lorem fringilla malesuada quis a arcu. Mauris lobortis, erat at elementum varius, nisi sem semper augue, sed rhoncus nulla justo vel lacus. Fusce imperdiet mi augue, nec dapibus mi euismod id. In eu augue quam. Suspendisse potenti. Nulla finibus facilisis ante, in hendrerit augue pulvinar id. Pellentesque ullamcorper, odio eget elementum euismod, enim diam cursus nisi, a rhoncus massa lacus eget neque. Sed hendrerit porttitor lacus. Fusce rutrum nisl non tempor malesuada. In hendrerit aliquam odio, in scelerisque urna tristique ac.',
        content_type: ItemContentType.single,
      },
    ],
  },
  {
    ItemId: 2,
    contents: [
      {
        key: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        value:
          'Curabitur commodo tortor id nisi rutrum semper. Vestibulum varius nisi vel arcu semper congue. Donec venenatis metus eget lorem lacinia fringilla. Maecenas at felis tellus. Donec eget pretium libero, at sollicitudin neque. Phasellus scelerisque ligula commodo rhoncus semper. Integer turpis augue, egestas ac urna a, consectetur mattis justo. Donec ullamcorper mattis egestas. Praesent sed lectus consequat, laoreet justo at, ultricies sapien.',
        content_type: ItemContentType.named,
      },
      {
        key: 'Pellentesque in ex scelerisque massa aliquam dictum.',
        value:
          'Curabitur sapien libero, hendrerit a consectetur in, porta ut sapien. Maecenas porttitor eget libero eu euismod. Nulla consectetur a neque eu semper. Sed et ante quis nunc bibendum accumsan in eget neque. Ut fringilla dui sed massa pretium pellentesque eu sit amet turpis. ',
        content_type: ItemContentType.named,
      },
      {
        key: 'In sit amet bibendum augue, in fringilla tortor.',
        value:
          'Nullam condimentum pulvinar dolor, et commodo odio euismod nec. Suspendisse potenti. Etiam id condimentum lectus. Nam facilisis lorem metus. Morbi blandit dignissim congue. Pellentesque nibh turpis, fringilla nec placerat sit amet, venenatis eget tortor. In a felis interdum, pretium lacus ornare, dignissim est. Proin scelerisque cursus posuere. Donec ut enim sed leo vestibulum fringilla at et erat. Duis iaculis consequat nisi, nec lobortis sem ullamcorper id.',
        content_type: ItemContentType.named,
      },
      {
        key: 'Morbi vel lacinia libero.',
        value:
          'Praesent fermentum est a nibh eleifend scelerisque. Proin posuere risus aliquam, lobortis orci sagittis, congue metus.',
        content_type: ItemContentType.named,
      },
      {
        key: 'Nulla scelerisque, ipsum id sollicitudin varius, nisl orci faucibus nibh, sit amet sagittis massa est non risus.',
        value:
          'Nullam ipsum quam, sagittis vitae mi eget, tincidunt laoreet libero. Integer volutpat sodales convallis. Morbi ac pretium justo, ut varius quam. Pellentesque eget mi et lorem fringilla malesuada quis a arcu. Mauris lobortis, erat at elementum varius, nisi sem semper augue, sed rhoncus nulla justo vel lacus. Fusce imperdiet mi augue, nec dapibus mi euismod id. In eu augue quam. Suspendisse potenti. Nulla finibus facilisis ante, in hendrerit augue pulvinar id. Pellentesque ullamcorper, odio eget elementum euismod, enim diam cursus nisi, a rhoncus massa lacus eget neque. Sed hendrerit porttitor lacus. Fusce rutrum nisl non tempor malesuada. In hendrerit aliquam odio, in scelerisque urna tristique ac.',
        content_type: ItemContentType.named,
      },
    ],
  },
];

const addDates = <T>(data: T): T & { createdAt: Date; updatedAt: Date } => ({
  ...data,
  createdAt: new Date(),
  updatedAt: new Date(),
});

const getItemContent = (): ItemContentAttributes[] => {
  const itemContent: ItemContentAttributes[] = [];

  itemContentMap.forEach(({ ItemId, contents }) => {
    contents.forEach((content) => {
      itemContent.push(addDates({ ItemId, ...content }));
    });
  });

  return itemContent;
};

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const itemTags = getItemContent();

    await queryInterface.bulkInsert('item_content', itemTags);
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('item_content', {});
  },
};
