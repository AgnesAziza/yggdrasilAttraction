BEGIN;

TRUNCATE TABLE "attraction", "incident", "visitor", "attraction_has_visitor" RESTART IDENTITY;

INSERT INTO "attraction" ("name", "capacity", "open_time", "closer_time")
VALUES
        ('la grande roue', 40, '2022-03-04 08:00', '2022-03-04 21:00'),
        ('le grand huit', 20, '2022-03-04 08:00', '2022-03-04 21:00'),
        ('space mountain', 30, '2022-03-04 08:00', '2022-03-04 20:00'),
        ('la castagne', 10, '2022-03-04 10:00', '2022-03-04 19:00');

INSERT INTO "incident" ("incident_number", "nature", "technical","attraction_id", "failure_date", "repair_date")
VALUES
        (12, 'fuite', 'michel', 2, '2022-02-04', '2022-03-02'),
        (23, 'elec', 'gérard', 1, '2022-02-15', '2022-03-15'),
        (45, 'traverse le toit', 'celestin', 2, '2022-02-21', '2022-03-13'),
        (50, 'fuite de gaz', 'remi', 2, '2022-03-15', '2022-03-15');

INSERT INTO "visitor" ("billet_number", "starting_time", "ending_time", "place_requested", "reservation_time")
VALUES
        ('a25', '2022-03-04 08:00', '2022-03-04 23:00', 9, '2022-03-04 08:42'),
        ('b152', '2022-03-04 09:00', '2022-03-04 17:00',12, '2022-02-10 9:42'),
        ('u65', '2022-03-04 08:00', '2022-03-04 19:00', 20, '2022-03-12 9:12'),
        ('v12', '2022-03-04 08:00', '2022-03-04 19:00', 30, '2022-03-25 08:10');

INSERT INTO "attraction_has_visitor" ("attraction_id", "visitor_id")
VALUES
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (1, 1),
        (3, 4),
        (4, 3),
        (2, 2);

COMMIT;







