import {
  BingeWatchCategory,
  BingeWatchChannel,
  BingeWatchGenre,
  SkillCategory,
} from "@prisma/client";
import { prisma } from "../src/services/prisma";

async function createProfile() {
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      title: "Software Engineer",
      description:
        "From Mumbai, India. I have rich experience in web development, also I am good at web design.",
      image: "profile_1.jpg",
      experience: 5,
      projects: 10,
      linkedinUrl: "https://www.linkedin.com/",
      githubUrl: "https://www.github.com/",
    },
  });

  console.log("profile data seeded...");
}

async function createBio() {
  await prisma.biography.deleteMany();

  await prisma.biography.create({
    data: {
      intro: "Hello, I'm John Doe",
      summary: [
        "I am a software engineer",
        "I have 5 years of experience in web development",
        "I have worked on 10 projects",
        "I am good at web design",
        "I am from Mumbai, India",
      ],
      closing: "Let's connect and discuss your project!",
    },
  });

  console.log("bio data seeded...");
}

async function createSkills() {
  await prisma.skill.deleteMany();

  await prisma.skill.createMany({
    data: [
      {
        name: "react",
        category: SkillCategory.PRIMARY,
        percentage: 90,
      },
      {
        name: "node",
        category: SkillCategory.PRIMARY,
        percentage: 80,
      },
      {
        name: "typescript",
        category: SkillCategory.PRIMARY,
        percentage: 85,
      },
      {
        name: "javascript",
        category: SkillCategory.SECONDARY,
      },
      {
        name: "html",
        category: SkillCategory.SECONDARY,
      },
      {
        name: "css",
        category: SkillCategory.SECONDARY,
      },
      {
        name: "mongodb",
        category: SkillCategory.SECONDARY,
      },
    ],
  });

  console;
}

async function createPortfolio() {
  await prisma.portfolio.deleteMany();

  await prisma.portfolio.create({
    data: {
      title: "Project 1",
      description: "This is a project description",
      image: "portfolio_1.jpg",
      content: "This is a project content",
      previewUrl: "http://localhost:3000",
    },
  });

  console.log("portfolio data seeded...");
}

async function createBingeWatchList() {
  await prisma.bingeWatch.deleteMany();

  await prisma.bingeWatch.createMany({
    data: [
      {
        title: "Money Heist",
        description: "This is a series description",
        category: BingeWatchCategory.WEB_SERIES,
        channel: BingeWatchChannel.NETFLIX,
        genre: BingeWatchGenre.ACTION,
        rating: 8.5,
      },
      {
        title: "The Witcher",
        description: "This is a series description",
        category: BingeWatchCategory.WEB_SERIES,
        channel: BingeWatchChannel.NETFLIX,
        genre: BingeWatchGenre.ACTION,
        rating: 8.0,
      },
      {
        title: "The Mandalorian",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore praesentium deserunt repellendus nemo reiciendis officia cumque magni libero itaque dolor. Deserunt id eaque cumque architecto deleniti eveniet veritatis quos voluptatibus error et? Est dolore ipsa aut illo temporibus, laboriosam, quisquam error at, beatae consectetur labore laborum! Hic animi blanditiis soluta.",
        category: BingeWatchCategory.WEB_SERIES,
        channel: BingeWatchChannel.HOTSTAR,
        genre: BingeWatchGenre.THRILLER,
        rating: 8.0,
      },
      {
        title: "The Office",
        description: "This is a series description",
        category: BingeWatchCategory.WEB_SERIES,
        channel: BingeWatchChannel.NETFLIX,
        genre: BingeWatchGenre.COMEDY,
        rating: 8.0,
      },
      {
        title: "Friends",
        description: "This is a series description",
        category: BingeWatchCategory.WEB_SERIES,
        channel: BingeWatchChannel.NETFLIX,
        genre: BingeWatchGenre.COMEDY,
        rating: 8.0,
      },
      {
        title: "The Shawshank Redemption",
        description: "This is a movie description",
        category: BingeWatchCategory.MOVIES,
        channel: BingeWatchChannel.AMAZON_PRIME,
        genre: BingeWatchGenre.DRAMA,
        rating: 9.0,
      },
      {
        title: "React - The Complete Guide",
        description: "This is a course description",
        category: BingeWatchCategory.COURSES,
        channel: BingeWatchChannel.UDACITY,
        genre: BingeWatchGenre.EDUCATIONAL,
        rating: 8.0,
      },
      {
        title: "Node - The Complete Guide",
        description: "This is a course description",
        category: BingeWatchCategory.COURSES,
        channel: BingeWatchChannel.UDACITY,
        genre: BingeWatchGenre.EDUCATIONAL,
        rating: 8.0,
      },
      {
        title: "Typescript - The Complete Guide",
        description: "This is a course description",
        category: BingeWatchCategory.COURSES,
        channel: BingeWatchChannel.UDACITY,
        genre: BingeWatchGenre.EDUCATIONAL,
        rating: 8.0,
      },
    ],
  });

  console.log("binge watch list data seeded...");
}

async function createFavorites() {
  await prisma.favoriteCategory.deleteMany();
  await prisma.favoriteCategory.deleteMany();

  await prisma.favoriteCategory.createMany({
    data: [
      {
        name: "Web Series",
        description: "This is a web series category",
      },
    ],
  });
}

async function main() {
  await createProfile();
  await createBio();
  await createSkills();
  await createPortfolio();
  await createBingeWatchList();
  await createFavorites();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
