/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: 1001,
    title: 'Dell XPS 13',
    description:
      'The Dell XPS 13 is a sleek and powerful laptop with a beautiful display and long battery life.',
    price: 94999,
    category: 'laptop',
    imageURL:
      'https://www.dell.com/en-in/shop/laptops/dell-laptops/xps-13-laptop/spd/xps-13-9310-laptop/yn9306',
    RAM: 16,
    Storage: 512,
  },
  {
    _id: 1002,
    title: 'Apple MacBook Pro 16-inch',
    description:
      'The Apple MacBook Pro 16-inch is a powerful laptop with a stunning Retina display and up to 64GB of RAM.',
    price: 204900,
    category: 'laptop',
    imageURL: 'https://www.apple.com/in/macbook-pro-16/',
    RAM: 32,
    Storage: 1024,
  },
  {
    _id: 1003,
    title: 'HP Spectre x360',
    description:
      'The HP Spectre x360 is a versatile laptop with a 360-degree hinge and long battery life.',
    price: 129999,
    category: 'laptop',
    imageURL:
      'https://store.hp.com/in-en/default/laptops-tablets/hp-spectre-x360-laptop-14-eb0024tu-9tt61pa.html',
    RAM: 16,
    Storage: 1024,
  },
  {
    _id: 1004,
    title: 'Lenovo ThinkPad X1 Carbon',
    description:
      'The Lenovo ThinkPad X1 Carbon is a durable and lightweight laptop with a powerful processor and long battery life.',
    price: 127490,
    category: 'laptop',
    imageURL:
      'https://www.lenovo.com/in/en/laptops/thinkpad/thinkpad-x1/ThinkPad-X1-Carbon-Gen-9/p/22TP2X1X1C9',
    RAM: 16,
    Storage: 1024,
  },
  {
    _id: 1005,
    title: 'ASUS ROG Zephyrus G14',
    description:
      'The ASUS ROG Zephyrus G14 is a powerful gaming laptop with an AMD Ryzen processor and NVIDIA graphics.',
    price: 104990,
    category: 'laptop',
    imageURL:
      'https://www.asus.com/Laptops/For-Gaming/ROG-Zephyrus/ROG-Zephyrus-G14/',
    RAM: 16,
    Storage: 512,
  },
  {
    _id: 1006,
    title: 'Acer Swift 5',
    description:
      'The Acer Swift 5 is a lightweight and slim laptop with a long battery life and fast SSD storage.',
    price: 74999,
    category: 'laptop',
    imageURL: 'https://www.acer.com/ac/en/IN/content/model/NX.A6RSI.001',
    RAM: 8,
    Storage: 512,
  },
  {
    _id: 1007,
    title: 'Microsoft Surface Laptop 4',
    description:
      'The Microsoft Surface Laptop 4 is a premium laptop with a beautiful display and up to 19 hours of battery life.',
    price: 84999,
    category: 'laptop',
    imageURL:
      'https://www.microsoft.com/en-in/surface/devices/surface-laptop-4',
    RAM: 16,
    Storage: 512,
  },
  {
    _id: 1008,
    title: 'Dell Inspiron 15 7000',
    description:
      'The Dell Inspiron 15 7000 is a powerful and versatile laptop with a large display and NVIDIA graphics.',
    price: 91999,
    category: 'laptop',
    imageURL:
      'https://www.dell.com/en-in/shop/laptops/new-15-inch-2-in-1-laptop-features-up-to-11th-gen-intel-core-processor/spd/inspiron-15-7506-laptop/ysnha3',
    RAM: 16,
    Storage: 1024,
  },
  {
    _id: 1009,
    title: 'HP Envy 13',
    description:
      'The HP Envy 13 is a stylish and powerful laptop with a long battery life and fast SSD storage.',
    price: 89999,
    category: 'laptop',
    imageURL:
      'https://store.hp.com/in-en/default/laptops-tablets/hp-envy-laptop-13-ba1045tu-374g7pa.html',
    RAM: 16,
    Storage: 512,
  },
  {
    _id: 1010,
    title: 'Asus VivoBook S14',
    description:
      'The Asus VivoBook S14 is a slim and lightweight laptop with a colorful design and long battery life.',
    price: 59999,
    category: 'laptop',
    imageURL: 'https://www.asus.com/Laptops/ASUS-VivoBook-S14-S433-Series/',
    RAM: 8,
    Storage: 512,
  },
  {
    _id: 1011,
    title: 'Apple iPhone 13',
    description:
      'The latest iPhone from Apple, with a faster A15 Bionic chip, improved cameras, and 5G connectivity.',
    price: 79900,
    category: 'mobile',
    imageURL: 'https://www.apple.com/in/iphone-13/',
    RAM: 6,
    Storage: 128,
  },
  {
    _id: 1012,
    title: 'Samsung Galaxy S21',
    description:
      'The Samsung Galaxy S21 is a flagship smartphone with a powerful Exynos 2100 processor and a stunning 6.2-inch display.',
    price: 69999,
    category: 'mobile',
    imageURL: 'https://www.samsung.com/in/smartphones/galaxy-s21-5g/',
    RAM: 8,
    Storage: 128,
  },
  {
    _id: 1013,
    title: 'OnePlus 9 Pro',
    description:
      'The OnePlus 9 Pro is a premium smartphone with a 120Hz Fluid AMOLED display and Hasselblad-tuned cameras.',
    price: 64999,
    category: 'mobile',
    imageURL: 'https://www.oneplus.in/oneplus-9-pro',
    RAM: 12,
    Storage: 256,
  },
  {
    _id: 1014,
    title: 'Xiaomi Mi 11X',
    description:
      'The Xiaomi Mi 11X is a powerful mid-range smartphone with a Snapdragon 870 processor and a 120Hz AMOLED display.',
    price: 29999,
    category: 'mobile',
    imageURL: 'https://www.mi.com/in/mi-11x/',
    RAM: 6,
    Storage: 128,
  },
  {
    _id: 1015,
    title: 'Realme Narzo 30 Pro',
    description:
      'The Realme Narzo 30 Pro is a budget smartphone with a MediaTek Dimensity 800U processor and a 120Hz display.',
    price: 16999,
    category: 'mobile',
    imageURL: 'https://www.realme.com/in/realme-narzo-30-pro-5g',
    RAM: 6,
    Storage: 64,
  },
  {
    _id: 1016,
    title: 'Google Pixel 6',
    description:
      'The Google Pixel 6 is a premium smartphone with a new Tensor processor and an impressive 50MP camera.',
    price: 59999,
    category: 'mobile',
    imageURL: 'https://store.google.com/in/product/pixel_6',
    RAM: 8,
    Storage: 128,
  },
  {
    _id: 1017,
    title: 'Apple iPhone SE (2020)',
    description:
      'The iPhone SE (2020) is a compact and affordable smartphone with the latest A13 Bionic chip and a 12MP camera.',
    price: 31999,
    category: 'mobile',
    imageURL: 'https://www.apple.com/in/iphone-se/',
    RAM: 3,
    Storage: 64,
  },
  {
    _id: 1018,
    title: 'Samsung Galaxy A52s 5G',
    description:
      'The Samsung Galaxy A52s 5G is a mid-range smartphone with a Snapdragon 778G processor and a 120Hz AMOLED display.',
    price: 35999,
    category: 'mobile',
    imageURL: 'https://www.samsung.com/in/smartphones/galaxy-a/galaxy-a52s-5g/',
    RAM: 6,
    Storage: 128,
  },
  {
    _id: 1019,
    title: 'OnePlus Nord 2',
    description:
      'The OnePlus Nord 2 is a mid-range smartphone with a MediaTek Dimensity 1200-AI processor and a 90Hz AMOLED display.',
    price: 29999,
    category: 'mobile',
    imageURL: 'https://www.oneplus.in/nord-2',
    RAM: 8,
    Storage: 128,
  },
  {
    _id: 1020,
    title: 'Xiaomi Redmi Note 11 Pro',
    description:
      'The Xiaomi Redmi Note 11 Pro is a budget smartphone with a MediaTek Dimensity 920 processor and a 120Hz IPS display.',
    price: 15999,
    category: 'mobile',
    imageURL: 'https://www.mi.com/in/redmi-note-11-pro/',
    RAM: 6,
    Storage: 128,
  },
  {
    _id: 1021,
    title: 'Sony Bravia XR A90J',
    description:
      'The Sony Bravia XR A90J is a premium OLED TV with impressive picture quality, 4K resolution and support for HDR and Dolby Vision.',
    price: 279999,
    category: 'Television',
    imageURL: 'https://www.sony.co.in/electronics/televisions/a90j-series',
    'Screen Size': 65,
    'Display Technology': 'OLED',
    'Highest Resolution supported': '4K',
  },
  {
    _id: 1022,
    title: 'Samsung QN90A Neo QLED',
    description:
      'The Samsung QN90A Neo QLED is a high-end TV with a slim design, 4K resolution and support for HDR10+ and Dolby Vision.',
    price: 259999,
    category: 'Television',
    imageURL: 'https://www.samsung.com/in/tvs/qled-4k-tv/qn90a/',
    'Screen Size': 75,
    'Display Technology': 'QLED',
    'Highest Resolution supported': '4K',
  },
  {
    _id: 1023,
    title: 'LG CX Series OLED',
    description:
      'The LG CX Series OLED is a high-quality TV with a sleek design, 4K resolution and support for HDR10 and Dolby Vision.',
    price: 239999,
    category: 'Television',
    imageURL: 'https://www.lg.com/in/tvs/lg-oled55cxpta-oled-tv',
    'Screen Size': 55,
    'Display Technology': 'OLED',
    'Highest Resolution supported': '4K',
  },
  {
    _id: 1024,
    title: 'TCL 6-Series QLED',
    description:
      'The TCL 6-Series QLED is a mid-range TV with a slim design, 4K resolution and support for HDR10 and Dolby Vision.',
    price: 79999,
    category: 'Television',
    imageURL: 'https://www.tcl.com/in/en/products/6-series/qled65c825.html',
    'Screen Size': 65,
    'Display Technology': 'QLED',
    'Highest Resolution supported': '4K',
  },
  {
    _id: 1025,
    title: 'OnePlus TV U1S',
    description:
      'The OnePlus TV U1S is a budget TV with a 4K resolution, HDR10+ support and a sleek design with minimal bezels.',
    price: 64999,
    category: 'Television',
    imageURL: 'https://www.oneplus.in/tv/u1s-series',
    'Screen Size': 55,
    'Display Technology': 'LED',
    'Highest Resolution supported': '4K',
  },
  {
    _id: 1026,
    title: 'Sony X90J',
    description:
      'The Sony X90J is a mid-range TV with a 4K resolution, support for HDR and Dolby Vision and a powerful X1 4K HDR processor.',
    price: 129999,
    category: 'Television',
    imageURL: 'https://www.sony.co.in/electronics/televisions/x90j-series',
    'Screen Size': 55,
    'Display Technology': 'LED',
    'Highest Resolution supported': '4K',
  },
  {
    _id: 1027,
    title: 'Samsung AU8000 Crystal UHD',
    description:
      'The Samsung AU8000 Crystal UHD is a budget-friendly TV with a 4K resolution, HDR support and a sleek design with slim bezels.',
    price: 55999,
    category: 'Television',
    imageURL: 'https://www.samsung.com/in/tvs/crystal-uhd-tv/au8000/',
    'Screen Size': 50,
    'Display Technology': 'LED',
    'Highest Resolution supported': '4K',
  },
  {
    _id: 1028,
    title: 'LG NANO81 Series',
    description:
      'The LG NANO81 Series is a mid-range TV with a 4K resolution, support for HDR10 and Dolby Vision and a slim design.',
    price: 79999,
    category: 'Television',
    imageURL: 'https://www.lg.com/in/tvs/lg-55nano81tv',
    'Screen Size': 55,
    'Display Technology': 'NanoCell',
    'Highest Resolution supported': '4K',
  },
  {
    _id: 1029,
    title: 'VIZIO M-Series Quantum',
    description:
      'The VIZIO M-Series Quantum is a mid-range TV with a 4K resolution, support for HDR and a sleek design with a thin bezel.',
    price: 99999,
    category: 'Television',
    imageURL: 'https://www.vizio.com/en/tv/m-series/M55Q6-J',
    'Screen Size': 55,
    'Display Technology': 'Quantum',
    'Highest Resolution supported': '4K',
  },
  {
    _id: 1030,
    title: 'Hisense U7G Series',
    description:
      'The Hisense U7G Series is a budget-friendly TV with a 4K resolution, support for HDR10+ and Dolby Vision and a slim design.',
    price: 69999,
    category: 'Television',
    imageURL:
      'https://www.hisense-usa.com/televisions/all-tvs/65-class-uled-4k-120hz-android-smart-tv-with-hdr-and-voice-remote-65u7g',
    'Screen Size': 65,
    'Display Technology': 'ULED',
    'Highest Resolution supported': '4K',
  },
];
