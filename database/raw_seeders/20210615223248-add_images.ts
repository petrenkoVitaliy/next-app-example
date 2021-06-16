import { QueryInterface } from 'sequelize/types';

enum ImageType {
  category = 'category',
  section = 'section',
  item = 'item',
}

export interface ImageAttributes {
  // id: number;
  name: string;
  url: string;

  ImageGatewayId: number;

  createdAt: Date;
  updatedAt: Date;
}

export interface ImageGatewayAttributes {
  id: number;
  reference_id: number;
  image_type: ImageType;

  createdAt: Date;
  updatedAt: Date;
}

const imagesMap: {
  id: number;
  reference_id: number;
  image_type: ImageType;
  images: { name: string; url: string }[];
}[] = [
  {
    id: 1,
    reference_id: 1,
    image_type: ImageType.section,
    images: [
      {
        name: 'dril1',
        url: 'https://storage.googleapis.com/next-storage-images/items/dril1.png',
      },
      {
        name: 'dril2',
        url: 'https://storage.googleapis.com/next-storage-images/items/dril2.png',
      },
    ],
  },
  {
    id: 2,
    reference_id: 2,
    image_type: ImageType.section,
    images: [
      {
        name: 'dril3',
        url: 'https://storage.googleapis.com/next-storage-images/items/dril3.jpg',
      },
    ],
  },
  {
    id: 3,
    reference_id: 1,
    image_type: ImageType.category,
    images: [
      {
        name: 'dril3',
        url: 'https://storage.googleapis.com/next-storage-images/items/dril3.jpg',
      },
      {
        name: 'dril4',
        url: 'https://storage.googleapis.com/next-storage-images/items/dril4.jpeg',
      },
    ],
  },
  {
    id: 4,
    reference_id: 2,
    image_type: ImageType.category,
    images: [
      {
        name: 'dril5',
        url: 'https://storage.googleapis.com/next-storage-images/items/dril5.png',
      },
      {
        name: 'dril6',
        url: 'https://storage.googleapis.com/next-storage-images/items/dril6.jpg',
      },
    ],
  },
  {
    id: 5,
    reference_id: 1,
    image_type: ImageType.item,
    images: [
      {
        name: 'dril3',
        url: 'https://storage.googleapis.com/next-storage-images/items/dril3.jpg',
      },
      {
        name: 'dril4',
        url: 'https://storage.googleapis.com/next-storage-images/items/dril4.jpeg',
      },
      {
        name: 'dril5',
        url: 'https://storage.googleapis.com/next-storage-images/items/dril5.png',
      },
      {
        name: 'dril6',
        url: 'https://storage.googleapis.com/next-storage-images/items/dril6.jpg',
      },
    ],
  },
  {
    id: 6,
    reference_id: 2,
    image_type: ImageType.item,
    images: [
      {
        name: 'dril1',
        url: 'https://storage.googleapis.com/next-storage-images/items/dril1.png',
      },
      {
        name: 'dril2',
        url: 'https://storage.googleapis.com/next-storage-images/items/dril2.png',
      },
    ],
  },
];

const addDates = <T>(data: T): T & { createdAt: Date; updatedAt: Date } => ({
  ...data,
  createdAt: new Date(),
  updatedAt: new Date(),
});

const getImageGateways = (): ImageGatewayAttributes[] => {
  const imageGateways: ImageGatewayAttributes[] = [];

  imagesMap.forEach(({ id, reference_id, image_type }) => {
    imageGateways.push(addDates({ id, reference_id, image_type }));
  });

  return imageGateways;
};

const getImages = (): ImageAttributes[] => {
  const images: ImageAttributes[] = [];

  imagesMap.forEach((imageGateway) => {
    imageGateway.images.forEach((image) => {
      images.push(addDates({ ...image, ImageGatewayId: imageGateway.id }));
    });
  });

  return images;
};

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const imageGateways = getImageGateways();
    const images = getImages();

    await queryInterface.bulkInsert('image_gateway', imageGateways);
    await queryInterface.bulkInsert('images', images);
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('image_gateway', {});
    return queryInterface.bulkDelete('images', {});
  },
};
