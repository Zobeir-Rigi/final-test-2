exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
    CREATE TABLE public.cohorts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        start_date DATE NOT NULL,
      m_1 DATE NOT NULL,
      m_2 DATE NOT NULL,
      m_3 DATE NOT NULL,
      m_4 DATE NOT NULL,
      m_5 DATE NOT NULL,
      m_6 DATE NOT NULL,
      m_7 DATE NOT NULL,
      m_8 DATE NOT NULL
    );
  `);
	pgm.sql(`
    CREATE TABLE public.trainees (
        id SERIAL PRIMARY KEY,
        gitHub_user_name VARCHAR(50) NOT NULL,
        full_name VARCHAR(50),
        cohort_id INT NOT NULL,
        FOREIGN KEY (cohort_id) REFERENCES cohorts (id)
    );
  `);

};

exports.down = (pgm) => {
	pgm.sql(`
    DROP TABLE public.cohorts;
  `);
  pgm.sql(`
    DROP TABLE public.trainees;
  `);
};
