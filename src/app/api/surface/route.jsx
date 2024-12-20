import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
function setCorsHeaders(response) {
  response.headers.set('Access-Control-Allow-Origin', '*'); // Replace '*' with a specific domain in production
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
}
export async function POST(req) {
  try {
    const { valeur } = await req.json();

    if (!valeur) {
      return NextResponse.json({ error: 'Field "valeur" is required' }, { status: 400 });
    }

    const newSurface = await prisma.surface.create({
      data: {
        valeur,
      },
    });

    return NextResponse.json(newSurface, { status: 201 });
  } catch (error) {
    console.error("Failed to create surface:", error);
    return setCorsHeaders(NextResponse.json({ error: 'Failed to create surface' }, { status: 500 })) ;
  }
}

export async function GET() {
  try {
    const surfaces = await prisma.surface.findMany();

    return NextResponse.json(surfaces, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch surfaces:", error);
    return setCorsHeaders( NextResponse.json({ error: 'Failed to fetch surfaces' }, { status: 500 }));
  }
}
