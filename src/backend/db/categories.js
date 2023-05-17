import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: 'Laptops',
    description:
      'Laptops are portable personal computers designed for on-the-go computing. They come in various sizes and configurations, ranging from lightweight ultrabooks to powerful gaming laptops.',
  },
  {
    _id: uuid(),
    category: 'Phones',
    description:
      'Mobile phones, also known as smartphones, are portable electronic devices used for communication, browsing the internet, taking photos, and accessing apps. They come in various sizes and operating systems.',
  },
  {
    _id: uuid(),
    category: 'Televisions',
    description:
      'Televisions are electronic devices used for displaying visual content, such as TV shows, movies, and video games. They come in various sizes, resolutions, and display technologies, from LED to OLED and QLED.',
  },
];
