CREATE TABLE recruits(
    id SERIAL,
    full_name text,
    gender text,
    email text,
    phone_number text,
    major text,
    birth_place text,
    birth_date text,
    residence_address text,
    motivation text
);

INSERT INTO recruits(full_name, gender, email, phone_number, major, birth_place, birth_date, residence_address, motivation)
VALUES
('Azizah Mahdi', 'Wanita', 'azizahmahdi@gmail.com', '0811111111111', 'IPA', 'Bogor', '12-12-2005', 'Jalan Cinta Damai Bogor', 'Mantaps'),
('Azizah MahdiX', 'Pria', 'azizahmahdiX@gmail.com', '081231312321', 'IPA', 'Bogor', '12-12-2005', 'Jalan Cinta Damai Bogor', 'Mantaps');
