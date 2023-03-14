INSERT INTO Sud("id", "naziv", "adresa")
VALUES (nextval('SUD_SEQ'), 'Osnovni sud', 'Sutjeska 3');
INSERT INTO Sud("id", "naziv", "adresa")
VALUES (nextval('SUD_SEQ'), 'Peti sud', 'Bulevar Oslobodjenja 25');
INSERT INTO Sud("id", "naziv", "adresa")
VALUES (nextval('SUD_SEQ'), 'Visi sud', 'Bulevar Evrope 51');
INSERT INTO Sud("id", "naziv", "adresa")
VALUES (nextval('SUD_SEQ'), 'Prvi sud', 'Kataniceva 15');
INSERT INTO Sud("id", "naziv", "adresa")
VALUES (nextval('SUD_SEQ'), 'Upravni sud', 'Kneza Mihaila 2');

INSERT INTO Ucesnik("id", "ime", "prezime", "mbr", "status")
VALUES (nextval('UCESNIK_SEQ'), 'Marko', 'Markovic', '0212992389931', 'u procesu');
INSERT INTO Ucesnik("id", "ime", "prezime", "mbr", "status")
VALUES (nextval('UCESNIK_SEQ'), 'Petar', 'Petrovic', '0212992389931', 'aktivan');
INSERT INTO Ucesnik("id", "ime", "prezime", "mbr", "status")
VALUES (nextval('UCESNIK_SEQ'), 'Janko', 'Jankovic', '0212992389931', 'u procesu');
INSERT INTO Ucesnik("id", "ime", "prezime", "mbr", "status")
VALUES (nextval('UCESNIK_SEQ'), 'Pera', 'Peric', '0212992389931', 'zavrsen');
INSERT INTO Ucesnik("id", "ime", "prezime", "mbr", "status")
VALUES (nextval('UCESNIK_SEQ'), 'Stefan', 'Stefanovic', '0212992389931', 'aktivan');

INSERT INTO Predmet("id", "broj_pr", "opis", "datum_pocetka", "aktivan", "sud")
VALUES (nextval('PREDMET_SEQ'), '124', 'opis predmeta 124', to_date('12.03.2020.', 'dd.mm.yy'), true, '1');
INSERT INTO Predmet("id", "broj_pr", "opis", "datum_pocetka", "aktivan", "sud")
VALUES (nextval('PREDMET_SEQ'), '617', 'opis predmeta 617', to_date('15.11.2021.', 'dd.mm.yy'), false, '2');
INSERT INTO Predmet("id", "broj_pr", "opis", "datum_pocetka", "aktivan", "sud")
VALUES (nextval('PREDMET_SEQ'), '521', 'opis predmeta 521', to_date('26.08.2022.', 'dd.mm.yy'), true, '3');

INSERT INTO Rociste("id", "datum_rocista", "sudnica", "ucesnik", "predmet")
VALUES (nextval('ROCISTE_SEQ'), to_date('22.02.2020.', 'dd.mm.yy'), '2', '1', '3');
INSERT INTO Rociste("id", "datum_rocista", "sudnica", "ucesnik", "predmet")
VALUES (nextval('ROCISTE_SEQ'), to_date('15.11.2018.', 'dd.mm.yy'), '1', '2', '1');
INSERT INTO Rociste("id", "datum_rocista", "sudnica", "ucesnik", "predmet")
VALUES (nextval('ROCISTE_SEQ'), to_date('27.10.2019.', 'dd.mm.yy'), '3', '3', '2');

