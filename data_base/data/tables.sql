-- painting_index,title,date,season,episode,img_src,num_of_colors,colors,hex_list,subject,yt_src,notes

CREATE TABLE "episodes" (
  "episode_id" integer PRIMARY KEY,
  "title" varchar,
  "date" varchar,
  "season" integer,
  "episode" integer,
  "img_src" varchar,
  "num_of_colors" integer,
  "colors" varchar,
  "hex_list" varchar,
  "subjects" varchar,
  "yt_src" varchar,
  "notes" varchar
);