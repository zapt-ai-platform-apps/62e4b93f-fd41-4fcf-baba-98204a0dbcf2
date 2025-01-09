CREATE TABLE "products" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "price" DECIMAL(10, 2) NOT NULL,
  "image" TEXT NOT NULL,
  "size" TEXT,
  "color" TEXT,
  "created_at" TIMESTAMP DEFAULT NOW()
);