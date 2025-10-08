-- Seed data for QuickErrand Marketplace

-- Insert sample categories
INSERT INTO categories (name, description, image_url) VALUES
  ('Electronics', 'Phones, laptops, and gadgets', '/placeholder.svg?height=200&width=200'),
  ('Fashion', 'Clothing, shoes, and accessories', '/placeholder.svg?height=200&width=200'),
  ('Home & Garden', 'Furniture, decor, and tools', '/placeholder.svg?height=200&width=200'),
  ('Sports', 'Equipment and athletic wear', '/placeholder.svg?height=200&width=200'),
  ('Books', 'New and used books', '/placeholder.svg?height=200&width=200')
ON CONFLICT DO NOTHING;

-- Insert sample users (buyers, sellers, admin)
INSERT INTO users (email, full_name, phone, user_type, address, city, state, zip_code) VALUES
  ('admin@quickerrand.com', 'Admin User', '555-0100', 'admin', '123 Admin St', 'San Francisco', 'CA', '94102'),
  ('seller1@example.com', 'John Seller', '555-0101', 'seller', '456 Market St', 'San Francisco', 'CA', '94103'),
  ('seller2@example.com', 'Jane Merchant', '555-0102', 'seller', '789 Commerce Ave', 'Oakland', 'CA', '94601'),
  ('buyer1@example.com', 'Alice Buyer', '555-0103', 'buyer', '321 Customer Ln', 'Berkeley', 'CA', '94704'),
  ('buyer2@example.com', 'Bob Customer', '555-0104', 'buyer', '654 Shopper Rd', 'San Jose', 'CA', '95110')
ON CONFLICT DO NOTHING;

-- Insert sample products
INSERT INTO products (seller_id, category_id, title, description, price, stock_quantity, image_urls, status) 
SELECT 
  (SELECT id FROM users WHERE email = 'seller1@example.com'),
  (SELECT id FROM categories WHERE name = 'Electronics'),
  'iPhone 14 Pro',
  'Gently used iPhone 14 Pro in excellent condition. 256GB storage, space black color.',
  799.99,
  1,
  ARRAY['/placeholder.svg?height=400&width=400'],
  'active'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE title = 'iPhone 14 Pro');

INSERT INTO products (seller_id, category_id, title, description, price, stock_quantity, image_urls, status) 
SELECT 
  (SELECT id FROM users WHERE email = 'seller1@example.com'),
  (SELECT id FROM categories WHERE name = 'Electronics'),
  'MacBook Air M2',
  'Brand new MacBook Air with M2 chip. 8GB RAM, 256GB SSD. Still in original packaging.',
  1099.99,
  2,
  ARRAY['/placeholder.svg?height=400&width=400'],
  'active'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE title = 'MacBook Air M2');

INSERT INTO products (seller_id, category_id, title, description, price, stock_quantity, image_urls, status) 
SELECT 
  (SELECT id FROM users WHERE email = 'seller2@example.com'),
  (SELECT id FROM categories WHERE name = 'Fashion'),
  'Designer Leather Jacket',
  'Authentic leather jacket from premium brand. Size M, black color, barely worn.',
  249.99,
  1,
  ARRAY['/placeholder.svg?height=400&width=400'],
  'active'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE title = 'Designer Leather Jacket');

INSERT INTO products (seller_id, category_id, title, description, price, stock_quantity, image_urls, status) 
SELECT 
  (SELECT id FROM users WHERE email = 'seller2@example.com'),
  (SELECT id FROM categories WHERE name = 'Home & Garden'),
  'Modern Coffee Table',
  'Minimalist wooden coffee table. Perfect condition, no scratches. 48" x 24".',
  179.99,
  1,
  ARRAY['/placeholder.svg?height=400&width=400'],
  'active'
WHERE NOT EXISTS (SELECT 1 FROM products WHERE title = 'Modern Coffee Table');
