
CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(50)UNIQUE,
  date_created timestamp not null default CURRENT_TIMESTAMP,
  last_login DATE
);

CREATE TABLE page (
  pid SERIAL PRIMARY KEY,
  title VARCHAR(200),
  issues VARCHAR(200),
  body VARCHAR(10000),
  user_id INT REFERENCES users(uid),
  date_created timestamp not null default CURRENT_TIMESTAMP
);