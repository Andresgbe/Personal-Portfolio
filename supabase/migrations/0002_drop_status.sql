-- Drops the project/automation status. Tracking whether a piece of work is
-- "in progress" or "finished" turned out not to matter for the portfolio, and
-- the badge it powered was noise on every card.
--
-- 0001_init.sql is left as it was — it is history, not the current shape. A
-- fresh setup runs 0001 (which creates and seeds `status`) and then this file
-- (which removes it), and lands in the same place.

alter table software_projects drop column status;
alter table automations drop column status;
