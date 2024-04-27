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
    electric_cost) VALUES
      (
          'Reparaciones del Sistema de Frenos',
          'Incluye el reemplazo de pastillas de freno, discos, tambores, líneas de freno y reparación o reemplazo del cilindro maestro de frenos.',
          120000,
          120000,
          180000,
          220000
      ),
      (
          'Servicio del Sistema de Refrigeración',
          'Reparación o reemplazo de radiadores, bombas de agua, termostatos y mangueras, así como la solución de problemas de sobrecalentamiento.',
          130000,
          130000,
          190000,
          230000
      ),
      (
          'Reparaciones del Motor',
          'Desde reparaciones menores como el reemplazo de bujías y cables, hasta reparaciones mayores como la reconstrucción del motor o la reparación de la junta de la culata.',
          350000,
          450000,
          700000,
          800000
      ),
      (
          'Reparaciones de la Transmisión',
          'Incluyen la reparación o reemplazo de componentes de la transmisión manual o automática, cambios de líquido y solución de problemas de cambios de marcha.',
          210000,
          210000,
          300000,
          300000
      ),
      (
          'Reparación del Sistema Eléctrico',
          'Solución de problemas y reparación de alternadores, arrancadores, baterías y sistemas de cableado, así como la reparación de componentes eléctricos como faros, intermitentes y sistemas de entretenimiento.',
          150000,
          150000,
          200000,
          250000
      ),
      (
          'Reparaciones del Sistema de Escape',
          'Incluye el reemplazo del silenciador, tubos de escape, catalizador y la solución de problemas relacionados con las emisiones.',
          100000,
          120000,
          450000,
          0
      ),
      (
          'Reparación de Neumáticos y Ruedas',
          'Reparación de pinchazos, reemplazo de neumáticos, alineación y balanceo de ruedas.',
          100000,
          100000,
          100000,
          100000
      ),
      (
          'Reparaciones de la Suspensión y la Dirección',
          'Reemplazo de amortiguadores, brazos de control, rótulas y reparación del sistema de dirección asistida.',
          180000,
          180000,
          210000,
          250000
      ),
      (
          'Reparación del Sistema de Aire Acondicionado y Calefacción',
          'Incluye la recarga de refrigerante, reparación o reemplazo del compresor, y solución de problemas del sistema de calefacción.',
          150000,
          150000,
          180000,
          180000
      ),
      (
          'Reparaciones del Sistema de Combustible',
          'Limpieza o reemplazo de inyectores de combustible, reparación o reemplazo de la bomba de combustible y solución de problemas de suministro de combustible.',
          130000,
          140000,
          220000,
          0
      ),
      (
          'Reparación y Reemplazo del Parabrisas y Cristales',
          'Reparación de pequeñas grietas en el parabrisas o reemplazo completo de parabrisas y ventanas dañadas.',
          80000,
          80000,
          80000,
          80000
      );
