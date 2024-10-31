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
    const body = await req.json();
    const {
      nameEntreprise,
      namePersone,
      email,
      VotreFonction,
      Adress,
      codePostall,
      message,
      etage,
      surfaceId,
      status,
      numberPhon,
      ville
    } = body;

    // Validate required fields
    if (!namePersone || !email || !Adress || !codePostall || !message || !etage || !status) {
      return setCorsHeaders(
        NextResponse.json({ error: 'All required fields must be provided' }, { status: 400 })
      );
    }

    // Create a new Devis entry in the database
    const newDevis = await prisma.devis.create({
      data: {
        nameEntreprise,
        namePersone,
        email,
        VotreFonction,
        Adress,
        codePostall,
        message,
        etage,
        surfaceId,
        status,
        numberPhon,
        ville
      },
    });

    return setCorsHeaders(NextResponse.json(newDevis, { status: 201 }));
  } catch (error) {
    console.error('Error creating Devis:', error);
    return setCorsHeaders(
      NextResponse.json({ error: 'Failed to create Devis', details: error.message }, { status: 500 })
    );
  }
}

export async function GET() {
  try {
    const devis = await prisma.devis.findMany({
      include: {
        surface: true,
        Facture: true,
      },
      orderBy: {
        id: 'desc',
      },
    });

    return setCorsHeaders(NextResponse.json(devis, { status: 200 }));
  } catch (error) {
    console.error('Error fetching Devis:', error);
    return setCorsHeaders(
      NextResponse.json({ error: 'Failed to fetch Devis', details: error.message }, { status: 500 })
    );
  }
}


export function OPTIONS() {
  return setCorsHeaders(new NextResponse(null, { status: 204 }));
}
