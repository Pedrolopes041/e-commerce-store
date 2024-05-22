/*
  Warnings:

  - You are about to drop the column `tripId` on the `ProductReservation` table. All the data in the column will be lost.
  - Added the required column `productId` to the `ProductReservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductReservation" DROP CONSTRAINT "ProductReservation_tripId_fkey";

-- AlterTable
ALTER TABLE "ProductReservation" DROP COLUMN "tripId",
ADD COLUMN     "productId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductReservation" ADD CONSTRAINT "ProductReservation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
