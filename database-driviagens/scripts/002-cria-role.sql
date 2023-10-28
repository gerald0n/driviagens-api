DO
$$
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_catalog.pg_roles WHERE rolname='driviagens_role'
  ) THEN
    CREATE ROLE driviagens_role WITH SUPERUSER CREATEDB CREATEROLE LOGIN ENCRYPTED PASSWORD 'admin_driviagens';
  END IF;
END
$$;