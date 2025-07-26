// Example product data for Men, Women, and Kids categories
const products = [
  // Men's Products
  {
    id: 1,
    name: 'Classic Cotton T-Shirt',
    category: 'Men',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop',
    ],
    variants: {
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Navy', 'Gray'],
    },
    price: 24.99,
    description: 'Premium cotton t-shirt with a comfortable fit and classic design.'
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    category: 'Men',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    ],
    variants: {
      sizes: ['30x32', '32x32', '34x32', '36x32'],
      colors: ['Blue', 'Black', 'Gray'],
    },
    price: 59.99,
    description: 'Modern slim fit jeans with stretch comfort and durable construction.'
  },
  {
    id: 3,
    name: 'Casual Blazer',
    category: 'Men',
    images: [
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=400&fit=crop',
    ],
    variants: {
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Navy', 'Charcoal', 'Black'],
    },
    price: 89.99,
    description: 'Versatile casual blazer perfect for both office and evening wear.'
  },

  // Women's Products
  {
    id: 4,
    name: 'Floral Summer Dress',
    category: 'Women',
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=400&fit=crop',
    ],
    variants: {
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Blue Floral', 'Pink Floral', 'White Floral'],
    },
    price: 79.99,
    description: 'Beautiful floral print dress perfect for summer occasions.'
  },
  {
    id: 5,
    name: 'High-Waist Leggings',
    category: 'Women',
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=400&fit=crop',
    ],
    variants: {
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray', 'Burgundy'],
    },
    price: 34.99,
    description: 'Comfortable high-waist leggings with moisture-wicking technology.'
  },
  {
    id: 6,
    name: 'Silk Blouse',
    category: 'Women',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop',
    ],
    variants: {
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['White', 'Black', 'Blush', 'Light Blue'],
    },
    price: 64.99,
    description: 'Elegant silk blouse with a sophisticated design for professional wear.'
  },

  // Kids' Products
  {
    id: 7,
    name: 'Cartoon Hoodie',
    category: 'Kids',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop',
    ],
    variants: {
      sizes: ['2T', '3T', '4T', '5T', '6T'],
      colors: ['Blue', 'Red', 'Green', 'Yellow'],
    },
    price: 29.99,
    description: 'Fun and comfortable hoodie with cartoon prints for kids.'
  },
  {
    id: 8,
    name: 'Denim Overalls',
    category: 'Kids',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    ],
    variants: {
      sizes: ['2T', '3T', '4T', '5T'],
      colors: ['Blue Denim', 'Light Blue Denim'],
    },
    price: 39.99,
    description: 'Classic denim overalls perfect for active kids.'
  },
  {
    id: 9,
    name: 'Rainbow T-Shirt',
    category: 'Kids',
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop',
    ],
    variants: {
      sizes: ['2T', '3T', '4T', '5T', '6T'],
      colors: ['Rainbow', 'Pink', 'Blue', 'Purple'],
    },
    price: 19.99,
    description: 'Colorful and comfortable t-shirt with fun rainbow designs.'
  },
];

export default products;
