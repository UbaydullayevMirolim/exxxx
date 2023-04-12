CREATE DATABASE examine;

CREATE EXTENSION "uuid-ossp";


CREATE TABLE users(
    user_id uuid  default uuid_generate_v4() ,
    user_username VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    create_at TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
    is_active boolean NULL
);