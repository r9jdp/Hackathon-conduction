-- Create ENUM Types first
CREATE TYPE "Degrees" AS ENUM (
  'High School',
  'Bachelors',
  'Masters',
  'Phd',
  'Null'
);

CREATE TYPE "Genders" AS ENUM (
  'Male',
  'Female',
  'Other'
);

CREATE TYPE "Diet" AS ENUM (
  'Veg',
  'Non-veg',
  'Jain'
);

CREATE TYPE "ProgrammingLanguages" AS ENUM (
  'JavaScript',
  'Python',
  'Java',
  'C',
  'C++',
  'Ruby',
  'PHP',
  'Swift',
  'Kotlin',
  'TypeScript',
  'Go',
  'Rust',
  'Dart',
  'R',
  'Scala',
  'SQL',
  'HTML',
  'CSS',
  'MATLAB',
  'Lua',
  'Elixir',
  'Haskell',
  'Shell',
  'ObjectiveC',
  'F#',
  'Groovy',
  'Perl',
  'VBA',
  'VisualBasic',
  'ActionScript'
);

CREATE TYPE "HackathonStatus" AS ENUM (
  'Open',
  'Ongoing',
  'Closed',
  'Registration Closed'
);

CREATE TYPE "ModeOfConduction" AS ENUM (
  'Offline',
  'Online'
);

CREATE TYPE "StatusOfApplication" AS ENUM (
  'Pending',
  'Rejected',
  'Selected'
);

-- Create the Tables in the Correct Order

-- Organisations Table
CREATE TABLE "Organisations" (
  "orgID" INT PRIMARY KEY,
  "name" VARCHAR,
  "about" VARCHAR,
  "location" VARCHAR,
  "linkedin_profile" VARCHAR
);

-- Individuals Table (must be created before tables that reference it)
CREATE TABLE "Individuals" (
  "indID" INT PRIMARY KEY,
  "fname" VARCHAR,
  "lname" VARCHAR,
  "gender" "Genders",
  "age" INT,
  "dob" DATE,
  "contact" VARCHAR,
  "email" VARCHAR,
  "github" VARCHAR,
  "linkedin" VARCHAR,
  "location" VARCHAR,
  "description" VARCHAR,
  "degree_type" "Degrees",
  "educational_institute" VARCHAR,
  "yearofStart_degree" varchar,
  "graduation_year" varchar,
  "grade" FLOAT,
  "country_preferences" JSONB,
  "diet_preference" "Diet",
  "resume" BYTEA
);

-- OrgMembers Table
CREATE TABLE "OrgMembers" (
  "id" INT PRIMARY KEY,
  "orgID" INT,
  "name" VARCHAR,
  "linkedin" VARCHAR,
  "pfp" BYTEA,
  FOREIGN KEY ("orgID") REFERENCES "Organisations" ("orgID")
);

-- Skills Table
CREATE TABLE "Skills" (
  "id" INT PRIMARY KEY,
  "indID" INT,
  "skill" "ProgrammingLanguages",
  "preference_number" INT,
  FOREIGN KEY ("indID") REFERENCES "Individuals" ("indID")
);

-- CityPreference Table
CREATE TABLE "CityPreference" (
  "id" INT PRIMARY KEY,
  "indID" INT,
  "cityname" VARCHAR,
  "preference_number" INT,
  FOREIGN KEY ("indID") REFERENCES "Individuals" ("indID")
);

-- CountryPreference Table
CREATE TABLE "CountryPreference" (
  "id" INT PRIMARY KEY,
  "indID" INT,
  "countryname" VARCHAR,
  FOREIGN KEY ("indID") REFERENCES "Individuals" ("indID")
);

-- BestDescribes Table
CREATE TABLE "BestDescribes" (
  "id" INT PRIMARY KEY,
  "indID" INT,
  "bestdescribes" VARCHAR,
  FOREIGN KEY ("indID") REFERENCES "Individuals" ("indID")
);

-- EmergencyContact Table
CREATE TABLE "EmergencyContact" (
  "id" INT PRIMARY KEY,
  "indID" INT,
  "name" VARCHAR,
  "contact" VARCHAR,
  "email" VARCHAR,
  FOREIGN KEY ("indID") REFERENCES "Individuals" ("indID")
);

-- Projects Table
CREATE TABLE "Projects" (
  "id" INT PRIMARY KEY,
  "indID" INT,
  "project_name" VARCHAR,
  "description" TEXT,
  "technologies_used" VARCHAR,
  "role" VARCHAR,
  "start_date" DATE,
  "end_date" DATE,
  "project_url" VARCHAR,
  FOREIGN KEY ("indID") REFERENCES "Individuals" ("indID")
);

-- WorkExperience Table
CREATE TABLE "WorkExperience" (
  "id" INT PRIMARY KEY,
  "indID" INT,
  "job_title" VARCHAR,
  "company_name" VARCHAR,
  "job_description" TEXT,
  "start_date" DATE,
  "end_date" DATE,
  "location" VARCHAR,
  "technologies_used" VARCHAR,
  FOREIGN KEY ("indID") REFERENCES "Individuals" ("indID")
);

-- Hackathons Table (must be created before dependent tables)
CREATE TABLE "Hackathons" (
  "hackathonID" INT PRIMARY KEY,
  "organiserID" INT,
  "name" VARCHAR,
  "description" TEXT,
  "start_date" DATE,
  "end_date" DATE,
  "registration_start_date" DATE,
  "registration_end_date" DATE,
  "status" "HackathonStatus",
  "linkedin" VARCHAR,
  "instagram" VARCHAR,
  "website" VARCHAR,
  "facebook" VARCHAR,
  "location" VARCHAR,
  "google_map" VARCHAR,
  "min_team_size" INT,
  "max_team_size" INT,
  "duration" INT,
  "prize_pool_in_usd" INT,
  "mode" "ModeOfConduction",
  "registration_cost" INT,
  FOREIGN KEY ("organiserID") REFERENCES "Organisations" ("orgID")
);

-- Domains Table
CREATE TABLE "Domains" (
  "domainID" INT PRIMARY KEY,
  "hackathonID" INT,
  "domainName" VARCHAR,
  "description" VARCHAR,
  "prizePoolForDomain" INT,
  FOREIGN KEY ("hackathonID") REFERENCES "Hackathons" ("hackathonID")
);

-- Sponsors Table
CREATE TABLE "Sponsors" (
  "sponsorID" INT PRIMARY KEY,
  "hackathonID" INT,
  "name" VARCHAR,
  "photo" BYTEA,
  "amount_in_USD" INT,
  "description" VARCHAR,
  "link" VARCHAR,
  FOREIGN KEY ("hackathonID") REFERENCES "Hackathons" ("hackathonID")
);

-- Teams Table
CREATE TABLE "Teams" (
  "teamID" INT PRIMARY KEY,
  "hackathonID" INT,
  "team_name" VARCHAR,
  "indID_team_leader" INT,
  FOREIGN KEY ("hackathonID") REFERENCES "Hackathons" ("hackathonID"),
  FOREIGN KEY ("indID_team_leader") REFERENCES "Individuals" ("indID")
);

-- TeamMembers Table
CREATE TABLE "TeamMembers" (
  "membermappingID" INT PRIMARY KEY,
  "teamID" INT,
  "indID" INT,
  FOREIGN KEY ("teamID") REFERENCES "Teams" ("teamID"),
  FOREIGN KEY ("indID") REFERENCES "Individuals" ("indID")
);

-- TeamsInHackathons Table
CREATE TABLE "TeamsInHackathons" (
  "teamhackathonmappingID" INT PRIMARY KEY,
  "teamID" INT,
  "hackathonID" INT,
  "domainID" INT,
  "status" "StatusOfApplication",
  "dateOfApplication" DATE,
  FOREIGN KEY ("teamID") REFERENCES "Teams" ("teamID"),
  FOREIGN KEY ("hackathonID") REFERENCES "Hackathons" ("hackathonID")
);

-- ProjectMadeInHackathon Table
CREATE TABLE "ProjectMadeInHackathon" (
  "projectMadeID" INT PRIMARY KEY,
  "hackathonID" INT,
  "teamID" INT,
  "domainID" INT,
  "projectname" VARCHAR,
  "projectDescription" VARCHAR,
  "techStack" VARCHAR,
  "github" VARCHAR,
  "youtube" VARCHAR,
  "likes" INT,
  "tags" VARCHAR,
  FOREIGN KEY ("teamID") REFERENCES "Teams" ("teamID"),
  FOREIGN KEY ("domainID") REFERENCES "Domains" ("domainID"),
  FOREIGN KEY ("hackathonID") REFERENCES "Hackathons" ("hackathonID")
);

-- Feedback Table
CREATE TABLE "Feedback" (
  "feedbackID" INT PRIMARY KEY,
  "hackathonID" INT,
  "teamID" INT,
  "participantID" INT,
  "rating" INT,
  "comments" TEXT,
  FOREIGN KEY ("hackathonID") REFERENCES "Hackathons" ("hackathonID"),
  FOREIGN KEY ("teamID") REFERENCES "Teams" ("teamID"),
  FOREIGN KEY ("participantID") REFERENCES "Individuals" ("indID")
);

-- HackathonRatings Table
CREATE TABLE "HackathonRatings" (
  "ratingID" INT PRIMARY KEY,
  "hackathonID" INT,
  "indID" INT,
  "rating" INT,
  "comments" TEXT,
  FOREIGN KEY ("hackathonID") REFERENCES "Hackathons" ("hackathonID"),
  FOREIGN KEY ("indID") REFERENCES "Individuals" ("indID")
);

-- Mentors Table
CREATE TABLE "Mentors" (
  "mentorID" INT PRIMARY KEY,
  "indID" INT,
  "hackathonID" INT,
  "teamID" INT,
  "expertise" VARCHAR,
  FOREIGN KEY ("indID") REFERENCES "Individuals" ("indID"),
  FOREIGN KEY ("hackathonID") REFERENCES "Hackathons" ("hackathonID"),
  FOREIGN KEY ("teamID") REFERENCES "Teams" ("teamID")
);

-- HackathonWinners Table
CREATE TABLE "HackathonWinners" (
  "hackathonID" INT,
  "teamID" INT,
  "domainID" INT,
  "rank" INT,
  "title" VARCHAR,
  PRIMARY KEY ("hackathonID", "teamID", "domainID"),
  FOREIGN KEY ("hackathonID") REFERENCES "Hackathons" ("hackathonID"),
  FOREIGN KEY ("teamID") REFERENCES "Teams" ("teamID"),
  FOREIGN KEY ("domainID") REFERENCES "Domains" ("domainID")
);
