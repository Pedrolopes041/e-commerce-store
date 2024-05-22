import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  const { userId, productId } = req;

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "PRODUCT_NOT_FOUND",
        },
      })
    );
  }

  await prisma.productReservation.create({
    data: {
      userId,
      productId,
    },
  });

  return new NextResponse(
    JSON.stringify({
      success: true,
    }),
    { status: 201 }
  );
}
