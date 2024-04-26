-- Crear la tabla vehicle_brand si no existe
CREATE TABLE IF NOT EXISTS vehicle_brand (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(100) NOT NULL
);

-- Insertar datos en la tabla vehicle_brand
INSERT INTO vehicle_brand (brand) VALUES
    ('Hyundai'),
    ('Toyota'),
    ('Honda'),
    ('Nissan'),
    ('Mitsubishi'),
    ('Tesla'),
    ('Ford'),
    ('Chevrolet'),
    ('Volkswagen'),
    ('BMW'),
    ('Audi');

-- Crear la tabla vehicle_engine si no existe
CREATE TABLE IF NOT EXISTS vehicle_engine (
    id SERIAL PRIMARY KEY,
    engine VARCHAR(100) NOT NULL
);

-- Insertar datos en la tabla vehicle_engine
INSERT INTO vehicle_engine (engine) VALUES
    ('Gasolina'),
    ('Diesel'),
    ('Hibrido'),
    ('Electrico');

-- Crear la tabla vehicle_type si no existe
CREATE TABLE IF NOT EXISTS vehicle_type (
    id SERIAL PRIMARY KEY,
    type VARCHAR(100) NOT NULL
);

-- Insertar datos en la tabla vehicle_type
INSERT INTO vehicle_type (type) VALUES
    ('Sedan'),
    ('Hatchback'),
    ('SUV'),
    ('Pickup'),
    ('Furgoneta');

-- Crear la tabla repair_type si no existe
CREATE TABLE IF NOT EXISTS repair_type (
    id SERIAL PRIMARY KEY,
    repair_type VARCHAR(100) NOT NULL,
    repair_description TEXT NOT NULL,
    gasoline_cost INTEGER NOT NULL,
    diesel_cost INTEGER NOT NULL,
    hybrid_cost INTEGER NOT NULL,
    electric_cost INTEGER NOT NULL
);

-- Insertar datos en la tabla repair_type
INSERT INTO repair_type (
    repair_type,
    repair_description,
    gasoline_cost,
    diesel_cost,
    hybrid_cost,
    electric_cost
) VALUES
    -- Tipos de reparación...
    (
        'Reparaciones del Sistema de Frenos',
        'Incluye el reemplazo de pastillas de freno, discos, tambores, líneas de freno y reparación o reemplazo del cilindro maestro de frenos.',
        120000,
        120000,
        180000,
        220000
    ),
    -- Otros tipos de reparación...
    (
        'Reparación de Neumáticos y Ruedas',
        'Reparación de pinchazos, reemplazo de neumáticos, alineación y balanceo de ruedas.',
        100000,
        100000,
        100000,
        100000
    );
