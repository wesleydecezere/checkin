insert into "pupil" ("name", "belt", "grade", "active") values ('Cesar-1', 1, 1, true);
insert into "pupil" ("name", "belt", "grade", "active") values ('Cesar-2', 1, 1, true);

insert into "event" ("date") values (CURRENT_DATE);

insert into "checkin" ("event_id", "participant_id", "date") values (1, 1, CURRENT_TIMESTAMP);
