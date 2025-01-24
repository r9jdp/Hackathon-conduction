const { PrismaClient } = require("@prisma/client");
const data = require("./OrganisationsData.json");
const hackathonData = require("./DevPostHackathonsData.json");
const judgesImg = require("./JudgesPfp.json");
const faq = require("./faq.json");
const domainsdescription = require("./domainsdescription.json");
const prisma = new PrismaClient();

(async () => {
  for (let index = 0; index < 314; index++) {
    try {
      const orgid = await prisma.organisations.findFirst({
        where: { name: hackathonData[index].Organiser },
      });

      const haclathonidfind = await prisma.hackathons.findFirst({
        where: { name: hackathonData[index].Name },
      });

      const organiserID = orgid ? String(orgid.orgID) : null;

      const hackathondataAdded = await prisma.hackathons.create({
        data: {
          name: hackathonData[index].Name,
          description: hackathonData[index].Descriptions,
          mode:
            hackathonData[index].ModeOfConduction == "Online"
              ? "Online"
              : "Offline",
          location: hackathonData[index].ModeOfConduction,
          start_date: hackathonData[index].HackathonStarts,
          end_date: hackathonData[index].HackathonEnds,
          registration_start_date: hackathonData[index].RegistrationStarts,
          registration_end_date: hackathonData[index].RegistrationDeadline,
          duration: 24,
          min_team_size: hackathonData[index].MinimumTeamSize,
          max_team_size: hackathonData[index].MaximumTeamSize,
          prize_pool_in_usd: parseInt(hackathonData[index].PrizeAmount),
          website: "https://www.linkedin.com/in/rajdeep-pandey-bb8a682ab/",
          registration_cost: 0,
          prizedescription: hackathonData[index].PrizeDescription,
          img: hackathonData[index].Images,
          youtubelink: hackathonData[index].YoutubeLinks,
          status: "Open",
          linkedin: "https://www.linkedin.com/in/rajdeep-pandey-bb8a682ab/",
          instagram: hackathonData[index].Instagram
            ? hackathonData[index].Instagram
            : null,
          facebook: hackathonData[index].Facebook
            ? hackathonData[index].Facebook
            : null,
          website: hackathonData[index].Website
            ? hackathonData[index].Website
            : null,
          google_map: "https://maps.app.goo.gl/i8Md6vE17VsKibQf9",
          prizeamountbyorganisation: 1000,
          requirements: hackathonData[index].Requirements,
          eligibility: hackathonData[index].Eligibility,
          judgingcriteria: hackathonData[index].JudgingCriteria,
          organiserID: organiserID, // Use the resolved organiserID directly
          faq: JSON.stringify(faq.faq, null, 2),
          eligibility : hackathonData[index].Eligibility,
        },
      });

      await Promise.all(
        hackathonData[index].JudgeNames.map(async (judges, i) => {
          // console.log(judges , index);
          if (judges != 0) {
            const haclathonidfind = await prisma.hackathons.findFirst({
              where: { name: hackathonData[index].Name },
            });

            const judgedataadded = await prisma.mentors.createMany({
              data: {
                name: judges,
                linkedin:
                  "https://www.linkedin.com/in/rajdeep-pandey-bb8a682ab/",
                img: hackathonData[index].Images,
                hackathonID: haclathonidfind.hackathonID,
                subtitle: hackathonData[index].JudgesSpecialities[i] != 0 ? hackathonData[index].JudgesSpecialities[i] : null,
              },
            });
          }
        })
      );

      await Promise.all(
        hackathonData[index].Themes.map(async (theme, i) => {
          const haclathonidfind = await prisma.hackathons.findFirst({
            where: { name: hackathonData[index].Name },
          });
          const themeDataUpload = await prisma.domains.createMany({
            data: {
              domainName: theme,
              description: domainsdescription[theme].description,
              hackathonID: haclathonidfind ? haclathonidfind.hackathonID : null,
            },
          });
          return themeDataUpload; // Ensures the promise is returned
        })
      );
    } catch (error) {
      console.error(error);
    }
  }
})();

// (async () => {
//   for (let index = 0; index < data.length; index++) {
//     try {
//       const dataAdded = await prisma.organisations.createMany({
//         data: {
//           orgemail: data[index].emails,
//           about: data[index].About,
//           name: data[index].Organisations,
//           location: data[index].Location,
//           linkedin_profile: data[index].LinkedIn,
//         },
//       });
//     } catch (error) {
//       console.error(error);
//     } finally {
//       await prisma.$disconnect();
//     }
//   }
// })();
