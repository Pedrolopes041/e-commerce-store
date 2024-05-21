const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.trip.createMany({
    data: [
      {
        name: "Logitech G305 Lightspeed",
        location: "São Paulo, Brasil",
        countryCode: "US",
        coverImage:
          "https://utfs.io/f/3e2a7283-683f-43b5-a2c0-c64b5890a084-6pfvtn.png",
      },
      {
        name: "Epomaker TH80",
        location: "São Paulo, Brasil",
        countryCode: "IT",
        coverImage:
          "https://utfs.io/f/a9a8150a-0fd8-4fa8-a30f-f11aaf90e07d-t8tglh.png",
      },
      {
        name: "Hyperx Pulsefire Dart",
        location: "São Paulo, Brasil",
        countryCode: "CH",
        coverImage:
          "https://utfs.io/f/c5200bd8-10b5-49bd-be72-deca34b2335a-1xd5uq.png",
      },
      {
        name: "Razer Kraken X",
        location: "São Paulo, Brasil",
        countryCode: "ES",
        coverImage:
          "https://utfs.io/f/6c91e18d-4148-4495-955b-46281aaaaed0-pbckc3.png",
      },
      {
        name: "Force One Skyhawk Snow",
        location: "São Paulo, Brasil",
        countryCode: "CA",
        coverImage:
          "https://utfs.io/f/c076401e-8850-48bd-86f1-ed183473f03b-x7tx5v.png",
      },
      {
        name: "Dell S3222DGM",
        location: "São Paulo, Brasil",
        countryCode: "NO",
        coverImage:
          "https://utfs.io/f/dee01030-d114-4a76-8d85-8ad6d11d5304-yi0au.png",
      },
      {
        name: "Sony XB23 Extra Bass",
        location: "São Paulo, Brasil",
        countryCode: "NL",
        coverImage:
          "https://utfs.io/f/2576317e-a26b-4586-b7ad-7477031684be-f1tve5.png",
      },
      {
        name: "Hyperx Cloud Stinger 2",
        location: "São Paulo, Brasil",
        countryCode: "FR",
        coverImage:
          "https://utfs.io/f/0b8199d2-2cd8-4927-86e3-d10ffc364403-oxvmyz.png",
      },
    ],
  });
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
