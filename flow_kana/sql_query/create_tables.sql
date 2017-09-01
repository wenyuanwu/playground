DROP TABLE IF EXISTS vendors;

CREATE TABLE vendors (
  id INTEGER PRIMARY KEY, 
  name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS products;
CREATE TABLE products(
  id INTEGER PRIMARY KEY, 
  name VARCHAR(255) NOT NULL,
  vendor_id INTEGER NOT NULL,
  FOREIGN KEY (vendor_id) REFERENCES vendors(id)
);

INSERT INTO
  vendors(name)
VALUES
  ('Hmbldt'), ('Valhalla'),('Kiva'),('Pax'),('Himalaya');

INSERT INTO 
  products(name, vendor_id)
VALUES
  ('Sleep Pan', (SELECT id FROM vendors WHERE name = 'Hmbldt')),
  ('Relax Pan', (SELECT id FROM vendors WHERE name = 'Hmbldt')),
  ('CBD Gummies', (SELECT id FROM vendors WHERE name = 'Valhalla')),
  ('Indica Gummies', (SELECT id FROM vendors WHERE name = 'Valhalla')),
  ('Sativa Gummies', (SELECT id FROM vendors WHERE name = 'Valhalla')),
  ('Era Vape Pen', (SELECT id FROM vendors WHERE name = 'Pax')),
  ('Blue Dream Cartridge', (SELECT id FROM vendors WHERE name = 'Himalaya')),
  ('Sour Diesel Cartridge', (SELECT id FROM vendors WHERE name = 'Himalaya'));
