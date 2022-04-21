CREATE TABLE IF NOT EXISTS products (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR,
    "slogan" VARCHAR,
    "description" TEXT,
    "category" VARCHAR,
    "default_price" DECIMAL(12, 2)
);

CREATE TABLE IF NOT EXISTS styles (
    "style_id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "product_id" INTEGER REFERENCES Products(id),
    "name" VARCHAR,
    "original_price" DECIMAL(12, 2),
    "sale_price" VARCHAR,
    "default" BOOLEAN
);

CREATE TABLE IF NOT EXISTS features (
    "feature_id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "product_id" INTEGER REFERENCES Products(id),
    "feature" VARCHAR,
    "value" VARCHAR
);

CREATE TABLE IF NOT EXISTS photos (
    "photo_id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "style_id" INTEGER REFERENCES Styles(style_id),
    "thumbnail_url" VARCHAR,
    "url" VARCHAR
);

CREATE TABLE IF NOT EXISTS skus (
    "sku_id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "style_id" INTEGER REFERENCES Styles(style_id),
    "quantity" INTEGER,
    "size" VARCHAR
);

-- Individual csv files not committed to GitHub
COPY products
FROM '/home/addison/hackreactor/RFE2202/capstone/SDC-Paprika/Products/csv/product.csv'
csv header;

COPY styles ("style_id", "product_id", "name", "sale_price", "original_price", "default")
FROM '/home/addison/hackreactor/RFE2202/capstone/SDC-Paprika/Products/csv/styles.csv'
csv header;

COPY features ("feature_id", "product_id", "feature", "value")
FROM '/home/addison/hackreactor/RFE2202/capstone/SDC-Paprika/Products/csv/features.csv'
csv header;

COPY photos ("photo_id", "style_id", "url", "thumbnail_url")
FROM '/home/addison/hackreactor/RFE2202/capstone/SDC-Paprika/Products/csv/photos.csv'
csv header;

COPY skus ("sku_id", "style_id", "size", "quantity")
FROM '/home/addison/hackreactor/RFE2202/capstone/SDC-Paprika/Products/csv/skus.csv'
csv header;
