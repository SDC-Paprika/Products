CREATE TABLE IF NOT EXISTS products (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR,
    "slogan" VARCHAR,
    "description" TEXT,
    "category" VARCHAR,
    "default_price" VARCHAR
);

CREATE TABLE IF NOT EXISTS styles (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "product_id" INTEGER REFERENCES products(id),
    "name" VARCHAR,
    "original_price" VARCHAR,
    "sale_price" VARCHAR,
    "default" BOOLEAN
);

CREATE TABLE IF NOT EXISTS features (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "product_id" INTEGER REFERENCES products(id),
    "feature" VARCHAR,
    "value" VARCHAR
);

CREATE TABLE IF NOT EXISTS photos (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "style_id" INTEGER REFERENCES styles(id),
    "thumbnail_url" VARCHAR,
    "url" VARCHAR
);

CREATE TABLE IF NOT EXISTS skus (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "style_id" INTEGER REFERENCES styles(id),
    "quantity" INTEGER,
    "size" VARCHAR
);

CREATE TABLE IF NOT EXISTS related (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "current_product_id" INTEGER REFERENCES products(id),
    "related_product_id" INTEGER
);

-- Individual csv files not committed to GitHub
COPY products
FROM '/home/addison/hackreactor/RFE2202/capstone/SDC-Paprika/Products/csv/product.csv'
csv header;

COPY styles ("id", "product_id", "name", "sale_price", "original_price", "default")
FROM '/home/addison/hackreactor/RFE2202/capstone/SDC-Paprika/Products/csv/styles.csv'
csv header;

COPY features ("id", "product_id", "feature", "value")
FROM '/home/addison/hackreactor/RFE2202/capstone/SDC-Paprika/Products/csv/features.csv'
csv header;

COPY photos ("id", "style_id", "url", "thumbnail_url")
FROM '/home/addison/hackreactor/RFE2202/capstone/SDC-Paprika/Products/csv/photos.csv'
csv header;

COPY skus ("id", "style_id", "size", "quantity")
FROM '/home/addison/hackreactor/RFE2202/capstone/SDC-Paprika/Products/csv/skus.csv'
csv header;

COPY related
FROM '/home/addison/hackreactor/RFE2202/capstone/SDC-Paprika/Products/csv/related.csv'
csv header;

-- Create indexes used for Products API endpoints
CREATE INDEX styles_product_index ON styles (product_id);
CREATE INDEX features_product_index ON features (product_id);
CREATE INDEX photos_style_index ON photos (style_id);
CREATE INDEX skus_style_index ON skus (style_id);
CREATE INDEX related_product_index ON related (current_product_id);
