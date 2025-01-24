-- CreateEnum
CREATE TYPE "Degrees" AS ENUM ('High School', 'Bachelors', 'Masters', 'Phd', 'Null');

-- CreateEnum
CREATE TYPE "Diet" AS ENUM ('V', 'NV', 'J');

-- CreateEnum
CREATE TYPE "Genders" AS ENUM ('Male', 'Female', 'Other');

-- CreateEnum
CREATE TYPE "HackathonStatus" AS ENUM ('Open', 'Ongoing', 'Closed', 'Registration Closed');

-- CreateEnum
CREATE TYPE "ModeOfConduction" AS ENUM ('Offline', 'Online');

-- CreateEnum
CREATE TYPE "ProgrammingLanguages" AS ENUM ('JavaScript', 'Python', 'Java', 'C', 'C++', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'TypeScript', 'Go', 'Rust', 'Dart', 'R', 'Scala', 'SQL', 'HTML', 'CSS', 'MATLAB', 'Lua', 'Elixir', 'Haskell', 'Shell', 'ObjectiveC', 'F#', 'Groovy', 'Perl', 'VBA', 'VisualBasic', 'ActionScript');

-- CreateEnum
CREATE TYPE "StatusOfApplication" AS ENUM ('Pending', 'Rejected', 'Selected');

-- CreateTable
CREATE TABLE "Domains" (
    "domainID" INTEGER NOT NULL,
    "hackathonID" INTEGER,
    "domainName" VARCHAR,
    "description" VARCHAR,
    "prizePoolForDomain" INTEGER,

    CONSTRAINT "Domains_pkey" PRIMARY KEY ("domainID")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "feedbackID" INTEGER NOT NULL,
    "hackathonID" INTEGER,
    "teamID" INTEGER,
    "participantID" INTEGER,
    "rating" INTEGER,
    "comments" TEXT,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("feedbackID")
);

-- CreateTable
CREATE TABLE "HackathonRatings" (
    "ratingID" INTEGER NOT NULL,
    "hackathonID" INTEGER,
    "indID" INTEGER,
    "rating" INTEGER,
    "comments" TEXT,

    CONSTRAINT "HackathonRatings_pkey" PRIMARY KEY ("ratingID")
);

-- CreateTable
CREATE TABLE "HackathonWinners" (
    "hackathonID" INTEGER NOT NULL,
    "teamID" INTEGER NOT NULL,
    "domainID" INTEGER NOT NULL,
    "rank" INTEGER,
    "title" VARCHAR,

    CONSTRAINT "HackathonWinners_pkey" PRIMARY KEY ("hackathonID","teamID","domainID")
);

-- CreateTable
CREATE TABLE "Hackathons" (
    "hackathonID" INTEGER NOT NULL,
    "organiserID" INTEGER,
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
    "min_team_size" INTEGER,
    "max_team_size" INTEGER,
    "duration" INTEGER,
    "prize_pool_in_usd" INTEGER,
    "mode" "ModeOfConduction",
    "registration_cost" INTEGER,

    CONSTRAINT "Hackathons_pkey" PRIMARY KEY ("hackathonID")
);

-- CreateTable
CREATE TABLE "Individuals" (
    "indID" INTEGER NOT NULL,
    "fname" VARCHAR,
    "lname" VARCHAR,
    "gender" "Genders",
    "age" INTEGER,
    "dob" DATE,
    "contact" VARCHAR,
    "email" VARCHAR NOT NULL,
    "github" VARCHAR,
    "linkedin" VARCHAR,
    "location" VARCHAR,
    "description" VARCHAR,
    "degree_type" "Degrees",
    "educational_institute" VARCHAR,
    "yearofStart_degree" VARCHAR,
    "graduation_year" VARCHAR,
    "grade" DOUBLE PRECISION,
    "diet_preference" "Diet",
    "projects" VARCHAR(2000),
    "work_experience" VARCHAR(2000),
    "bestdescribes" VARCHAR(500),
    "skills" VARCHAR(1000),

    CONSTRAINT "Individuals_pkey" PRIMARY KEY ("indID")
);

-- CreateTable
CREATE TABLE "Mentors" (
    "mentorID" INTEGER NOT NULL,
    "indID" INTEGER,
    "hackathonID" INTEGER,
    "teamID" INTEGER,
    "expertise" VARCHAR,

    CONSTRAINT "Mentors_pkey" PRIMARY KEY ("mentorID")
);

-- CreateTable
CREATE TABLE "OrgMembers" (
    "id" INTEGER NOT NULL,
    "orgID" INTEGER,
    "name" VARCHAR,
    "linkedin" VARCHAR,
    "pfp" BYTEA,

    CONSTRAINT "OrgMembers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organisations" (
    "orgID" INTEGER NOT NULL,
    "name" VARCHAR,
    "about" VARCHAR,
    "location" VARCHAR,
    "linkedin_profile" VARCHAR,
    "orgemail" VARCHAR(255) NOT NULL,

    CONSTRAINT "Organisations_pkey" PRIMARY KEY ("orgID")
);

-- CreateTable
CREATE TABLE "ProjectMadeInHackathon" (
    "projectMadeID" INTEGER NOT NULL,
    "hackathonID" INTEGER,
    "teamID" INTEGER,
    "domainID" INTEGER,
    "projectname" VARCHAR,
    "projectDescription" VARCHAR,
    "techStack" VARCHAR,
    "github" VARCHAR,
    "youtube" VARCHAR,
    "likes" INTEGER,
    "tags" VARCHAR,

    CONSTRAINT "ProjectMadeInHackathon_pkey" PRIMARY KEY ("projectMadeID")
);

-- CreateTable
CREATE TABLE "Sponsors" (
    "sponsorID" INTEGER NOT NULL,
    "hackathonID" INTEGER,
    "name" VARCHAR,
    "photo" BYTEA,
    "amount_in_USD" INTEGER,
    "description" VARCHAR,
    "link" VARCHAR,

    CONSTRAINT "Sponsors_pkey" PRIMARY KEY ("sponsorID")
);

-- CreateTable
CREATE TABLE "TeamMembers" (
    "membermappingID" INTEGER NOT NULL,
    "teamID" INTEGER,
    "indID" INTEGER,

    CONSTRAINT "TeamMembers_pkey" PRIMARY KEY ("membermappingID")
);

-- CreateTable
CREATE TABLE "Teams" (
    "teamID" INTEGER NOT NULL,
    "hackathonID" INTEGER,
    "team_name" VARCHAR,
    "indID_team_leader" INTEGER,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("teamID")
);

-- CreateTable
CREATE TABLE "TeamsInHackathons" (
    "teamhackathonmappingID" INTEGER NOT NULL,
    "teamID" INTEGER,
    "hackathonID" INTEGER,
    "domainID" INTEGER,
    "status" "StatusOfApplication",
    "dateOfApplication" DATE,

    CONSTRAINT "TeamsInHackathons_pkey" PRIMARY KEY ("teamhackathonmappingID")
);

-- CreateIndex
CREATE UNIQUE INDEX "unique_Useremail" ON "Individuals"("email");

-- CreateIndex
CREATE UNIQUE INDEX "unique_orgemail" ON "Organisations"("orgemail");

-- AddForeignKey
ALTER TABLE "Domains" ADD CONSTRAINT "Domains_hackathonID_fkey" FOREIGN KEY ("hackathonID") REFERENCES "Hackathons"("hackathonID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_hackathonID_fkey" FOREIGN KEY ("hackathonID") REFERENCES "Hackathons"("hackathonID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_participantID_fkey" FOREIGN KEY ("participantID") REFERENCES "Individuals"("indID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_teamID_fkey" FOREIGN KEY ("teamID") REFERENCES "Teams"("teamID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "HackathonRatings" ADD CONSTRAINT "HackathonRatings_hackathonID_fkey" FOREIGN KEY ("hackathonID") REFERENCES "Hackathons"("hackathonID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "HackathonRatings" ADD CONSTRAINT "HackathonRatings_indID_fkey" FOREIGN KEY ("indID") REFERENCES "Individuals"("indID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "HackathonWinners" ADD CONSTRAINT "HackathonWinners_domainID_fkey" FOREIGN KEY ("domainID") REFERENCES "Domains"("domainID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "HackathonWinners" ADD CONSTRAINT "HackathonWinners_hackathonID_fkey" FOREIGN KEY ("hackathonID") REFERENCES "Hackathons"("hackathonID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "HackathonWinners" ADD CONSTRAINT "HackathonWinners_teamID_fkey" FOREIGN KEY ("teamID") REFERENCES "Teams"("teamID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Hackathons" ADD CONSTRAINT "Hackathons_organiserID_fkey" FOREIGN KEY ("organiserID") REFERENCES "Organisations"("orgID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Mentors" ADD CONSTRAINT "Mentors_hackathonID_fkey" FOREIGN KEY ("hackathonID") REFERENCES "Hackathons"("hackathonID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Mentors" ADD CONSTRAINT "Mentors_indID_fkey" FOREIGN KEY ("indID") REFERENCES "Individuals"("indID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Mentors" ADD CONSTRAINT "Mentors_teamID_fkey" FOREIGN KEY ("teamID") REFERENCES "Teams"("teamID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OrgMembers" ADD CONSTRAINT "OrgMembers_orgID_fkey" FOREIGN KEY ("orgID") REFERENCES "Organisations"("orgID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProjectMadeInHackathon" ADD CONSTRAINT "ProjectMadeInHackathon_domainID_fkey" FOREIGN KEY ("domainID") REFERENCES "Domains"("domainID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProjectMadeInHackathon" ADD CONSTRAINT "ProjectMadeInHackathon_hackathonID_fkey" FOREIGN KEY ("hackathonID") REFERENCES "Hackathons"("hackathonID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProjectMadeInHackathon" ADD CONSTRAINT "ProjectMadeInHackathon_teamID_fkey" FOREIGN KEY ("teamID") REFERENCES "Teams"("teamID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Sponsors" ADD CONSTRAINT "Sponsors_hackathonID_fkey" FOREIGN KEY ("hackathonID") REFERENCES "Hackathons"("hackathonID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TeamMembers" ADD CONSTRAINT "TeamMembers_indID_fkey" FOREIGN KEY ("indID") REFERENCES "Individuals"("indID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TeamMembers" ADD CONSTRAINT "TeamMembers_teamID_fkey" FOREIGN KEY ("teamID") REFERENCES "Teams"("teamID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Teams" ADD CONSTRAINT "Teams_hackathonID_fkey" FOREIGN KEY ("hackathonID") REFERENCES "Hackathons"("hackathonID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Teams" ADD CONSTRAINT "Teams_indID_team_leader_fkey" FOREIGN KEY ("indID_team_leader") REFERENCES "Individuals"("indID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TeamsInHackathons" ADD CONSTRAINT "TeamsInHackathons_hackathonID_fkey" FOREIGN KEY ("hackathonID") REFERENCES "Hackathons"("hackathonID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TeamsInHackathons" ADD CONSTRAINT "TeamsInHackathons_teamID_fkey" FOREIGN KEY ("teamID") REFERENCES "Teams"("teamID") ON DELETE NO ACTION ON UPDATE NO ACTION;
