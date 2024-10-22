import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    console.log('Received body:', body); // Log the received body

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
    } = body;

    if (!namePersone || !email || !Adress || !codePostall || !message || !etage || !status) {
      return NextResponse.json({ error: 'All required fields must be provided' }, { status: 400 });
    }

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
      },
    });

    return NextResponse.json(newDevis, { status: 201 });
  } catch (error) {
    console.error('Error creating Devis:', error); // Log the error
    return NextResponse.json({ error: 'Failed to create Devis', details: error.message }, { status: 500 });
  }
}
export async function GET() {
  try {
    const devis = await prisma.devis.findMany({
      include: {
        surface: true,  
        Facture: true,  
      },
    });

    return NextResponse.json(devis, { status: 200 });
  } catch (error) {
    console.error('Error fetching Devis:', error); // Log the error
    return NextResponse.json({ error: 'Failed to fetch Devis', details: error.message }, { status: 500 });
  }
}
