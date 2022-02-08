-- Revert oparc:createDb from pg

BEGIN;

DROP TABLE "attraction_has_visitor", "visitor", "incident", "attraction";

COMMIT;
