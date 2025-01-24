/*
  Warnings:

  - The values [V,NV,J] on the enum `Diet` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `Domains` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `domainID` column on the `Domains` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hackathonID` column on the `Domains` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Feedback` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `feedbackID` column on the `Feedback` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hackathonID` column on the `Feedback` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `teamID` column on the `Feedback` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `participantID` column on the `Feedback` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `HackathonRatings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `ratingID` column on the `HackathonRatings` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hackathonID` column on the `HackathonRatings` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `indID` column on the `HackathonRatings` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `HackathonWinners` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Hackathons` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `hackathonID` column on the `Hackathons` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `organiserID` column on the `Hackathons` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Individuals` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `indID` column on the `Individuals` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Mentors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `mentorID` column on the `Mentors` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `indID` column on the `Mentors` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hackathonID` column on the `Mentors` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `teamID` column on the `Mentors` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `OrgMembers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `OrgMembers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `orgID` column on the `OrgMembers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Organisations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `orgID` column on the `Organisations` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ProjectMadeInHackathon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `projectMadeID` column on the `ProjectMadeInHackathon` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hackathonID` column on the `ProjectMadeInHackathon` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `teamID` column on the `ProjectMadeInHackathon` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `domainID` column on the `ProjectMadeInHackathon` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Sponsors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `sponsorID` column on the `Sponsors` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hackathonID` column on the `Sponsors` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `TeamMembers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `membermappingID` column on the `TeamMembers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `teamID` column on the `TeamMembers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `indID` column on the `TeamMembers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Teams` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `teamID` column on the `Teams` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hackathonID` column on the `Teams` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `indID_team_leader` column on the `Teams` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `TeamsInHackathons` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `teamhackathonmappingID` column on the `TeamsInHackathons` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `teamID` column on the `TeamsInHackathons` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hackathonID` column on the `TeamsInHackathons` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `domainID` column on the `TeamsInHackathons` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `hackathonID` on the `HackathonWinners` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `teamID` on the `HackathonWinners` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `domainID` on the `HackathonWinners` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Diet_new" AS ENUM ('Veg', 'Non-veg', 'Jain');
ALTER TABLE "Individuals" ALTER COLUMN "diet_preference" TYPE "Diet_new" USING ("diet_preference"::text::"Diet_new");
ALTER TYPE "Diet" RENAME TO "Diet_old";
ALTER TYPE "Diet_new" RENAME TO "Diet";
DROP TYPE "Diet_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Domains" DROP CONSTRAINT "Domains_hackathonID_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_hackathonID_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_participantID_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_teamID_fkey";

-- DropForeignKey
ALTER TABLE "HackathonRatings" DROP CONSTRAINT "HackathonRatings_hackathonID_fkey";

-- DropForeignKey
ALTER TABLE "HackathonRatings" DROP CONSTRAINT "HackathonRatings_indID_fkey";

-- DropForeignKey
ALTER TABLE "HackathonWinners" DROP CONSTRAINT "HackathonWinners_domainID_fkey";

-- DropForeignKey
ALTER TABLE "HackathonWinners" DROP CONSTRAINT "HackathonWinners_hackathonID_fkey";

-- DropForeignKey
ALTER TABLE "HackathonWinners" DROP CONSTRAINT "HackathonWinners_teamID_fkey";

-- DropForeignKey
ALTER TABLE "Hackathons" DROP CONSTRAINT "Hackathons_organiserID_fkey";

-- DropForeignKey
ALTER TABLE "Mentors" DROP CONSTRAINT "Mentors_hackathonID_fkey";

-- DropForeignKey
ALTER TABLE "Mentors" DROP CONSTRAINT "Mentors_indID_fkey";

-- DropForeignKey
ALTER TABLE "Mentors" DROP CONSTRAINT "Mentors_teamID_fkey";

-- DropForeignKey
ALTER TABLE "OrgMembers" DROP CONSTRAINT "OrgMembers_orgID_fkey";

-- DropForeignKey
ALTER TABLE "ProjectMadeInHackathon" DROP CONSTRAINT "ProjectMadeInHackathon_domainID_fkey";

-- DropForeignKey
ALTER TABLE "ProjectMadeInHackathon" DROP CONSTRAINT "ProjectMadeInHackathon_hackathonID_fkey";

-- DropForeignKey
ALTER TABLE "ProjectMadeInHackathon" DROP CONSTRAINT "ProjectMadeInHackathon_teamID_fkey";

-- DropForeignKey
ALTER TABLE "Sponsors" DROP CONSTRAINT "Sponsors_hackathonID_fkey";

-- DropForeignKey
ALTER TABLE "TeamMembers" DROP CONSTRAINT "TeamMembers_indID_fkey";

-- DropForeignKey
ALTER TABLE "TeamMembers" DROP CONSTRAINT "TeamMembers_teamID_fkey";

-- DropForeignKey
ALTER TABLE "Teams" DROP CONSTRAINT "Teams_hackathonID_fkey";

-- DropForeignKey
ALTER TABLE "Teams" DROP CONSTRAINT "Teams_indID_team_leader_fkey";

-- DropForeignKey
ALTER TABLE "TeamsInHackathons" DROP CONSTRAINT "TeamsInHackathons_hackathonID_fkey";

-- DropForeignKey
ALTER TABLE "TeamsInHackathons" DROP CONSTRAINT "TeamsInHackathons_teamID_fkey";

-- AlterTable
ALTER TABLE "Domains" DROP CONSTRAINT "Domains_pkey",
DROP COLUMN "domainID",
ADD COLUMN     "domainID" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "hackathonID",
ADD COLUMN     "hackathonID" UUID,
ADD CONSTRAINT "Domains_pkey" PRIMARY KEY ("domainID");

-- AlterTable
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_pkey",
DROP COLUMN "feedbackID",
ADD COLUMN     "feedbackID" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "hackathonID",
ADD COLUMN     "hackathonID" UUID,
DROP COLUMN "teamID",
ADD COLUMN     "teamID" UUID,
DROP COLUMN "participantID",
ADD COLUMN     "participantID" UUID,
ADD CONSTRAINT "Feedback_pkey" PRIMARY KEY ("feedbackID");

-- AlterTable
ALTER TABLE "HackathonRatings" DROP CONSTRAINT "HackathonRatings_pkey",
DROP COLUMN "ratingID",
ADD COLUMN     "ratingID" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "hackathonID",
ADD COLUMN     "hackathonID" UUID,
DROP COLUMN "indID",
ADD COLUMN     "indID" UUID,
ADD CONSTRAINT "HackathonRatings_pkey" PRIMARY KEY ("ratingID");

-- AlterTable
ALTER TABLE "HackathonWinners" DROP CONSTRAINT "HackathonWinners_pkey",
DROP COLUMN "hackathonID",
ADD COLUMN     "hackathonID" UUID NOT NULL,
DROP COLUMN "teamID",
ADD COLUMN     "teamID" UUID NOT NULL,
DROP COLUMN "domainID",
ADD COLUMN     "domainID" UUID NOT NULL,
ADD CONSTRAINT "HackathonWinners_pkey" PRIMARY KEY ("hackathonID", "teamID", "domainID");

-- AlterTable
ALTER TABLE "Hackathons" DROP CONSTRAINT "Hackathons_pkey",
DROP COLUMN "hackathonID",
ADD COLUMN     "hackathonID" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "organiserID",
ADD COLUMN     "organiserID" UUID,
ADD CONSTRAINT "Hackathons_pkey" PRIMARY KEY ("hackathonID");

-- AlterTable
ALTER TABLE "Individuals" DROP CONSTRAINT "Individuals_pkey",
DROP COLUMN "indID",
ADD COLUMN     "indID" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Individuals_pkey" PRIMARY KEY ("indID");

-- AlterTable
ALTER TABLE "Mentors" DROP CONSTRAINT "Mentors_pkey",
DROP COLUMN "mentorID",
ADD COLUMN     "mentorID" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "indID",
ADD COLUMN     "indID" UUID,
DROP COLUMN "hackathonID",
ADD COLUMN     "hackathonID" UUID,
DROP COLUMN "teamID",
ADD COLUMN     "teamID" UUID,
ADD CONSTRAINT "Mentors_pkey" PRIMARY KEY ("mentorID");

-- AlterTable
ALTER TABLE "OrgMembers" DROP CONSTRAINT "OrgMembers_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "orgID",
ADD COLUMN     "orgID" UUID,
ADD CONSTRAINT "OrgMembers_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Organisations" DROP CONSTRAINT "Organisations_pkey",
DROP COLUMN "orgID",
ADD COLUMN     "orgID" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Organisations_pkey" PRIMARY KEY ("orgID");

-- AlterTable
ALTER TABLE "ProjectMadeInHackathon" DROP CONSTRAINT "ProjectMadeInHackathon_pkey",
DROP COLUMN "projectMadeID",
ADD COLUMN     "projectMadeID" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "hackathonID",
ADD COLUMN     "hackathonID" UUID,
DROP COLUMN "teamID",
ADD COLUMN     "teamID" UUID,
DROP COLUMN "domainID",
ADD COLUMN     "domainID" UUID,
ADD CONSTRAINT "ProjectMadeInHackathon_pkey" PRIMARY KEY ("projectMadeID");

-- AlterTable
ALTER TABLE "Sponsors" DROP CONSTRAINT "Sponsors_pkey",
DROP COLUMN "sponsorID",
ADD COLUMN     "sponsorID" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "hackathonID",
ADD COLUMN     "hackathonID" UUID,
ADD CONSTRAINT "Sponsors_pkey" PRIMARY KEY ("sponsorID");

-- AlterTable
ALTER TABLE "TeamMembers" DROP CONSTRAINT "TeamMembers_pkey",
DROP COLUMN "membermappingID",
ADD COLUMN     "membermappingID" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "teamID",
ADD COLUMN     "teamID" UUID,
DROP COLUMN "indID",
ADD COLUMN     "indID" UUID,
ADD CONSTRAINT "TeamMembers_pkey" PRIMARY KEY ("membermappingID");

-- AlterTable
ALTER TABLE "Teams" DROP CONSTRAINT "Teams_pkey",
DROP COLUMN "teamID",
ADD COLUMN     "teamID" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "hackathonID",
ADD COLUMN     "hackathonID" UUID,
DROP COLUMN "indID_team_leader",
ADD COLUMN     "indID_team_leader" UUID,
ADD CONSTRAINT "Teams_pkey" PRIMARY KEY ("teamID");

-- AlterTable
ALTER TABLE "TeamsInHackathons" DROP CONSTRAINT "TeamsInHackathons_pkey",
DROP COLUMN "teamhackathonmappingID",
ADD COLUMN     "teamhackathonmappingID" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "teamID",
ADD COLUMN     "teamID" UUID,
DROP COLUMN "hackathonID",
ADD COLUMN     "hackathonID" UUID,
DROP COLUMN "domainID",
ADD COLUMN     "domainID" UUID,
ADD CONSTRAINT "TeamsInHackathons_pkey" PRIMARY KEY ("teamhackathonmappingID");

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
