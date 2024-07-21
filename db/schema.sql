-- ///////// Stanley code ////////////

/** Must add to disconnect session to this database execempt this one..
Note: this script is ONLY for psql
**/

SELECT 'Database rebuild started...';
DROP DATABASE IF EXISTS temp;
CREATE DATABASE temp;

\c temp;

SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'university'
AND pid <> pg_backend_pid();

-- /////// End Stanley code //////////

-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

\c ecommerce_db;