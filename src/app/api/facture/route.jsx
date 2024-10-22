import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { dateReaserver, dateFacture, price, DevisId } = await req.json();

    if (!dateReaserver || !dateFacture || !price || !DevisId) {
      return NextResponse.json({ error: 'All fields (dateReaserver, dateFacture, price, DevisId) must be provided' }, { status: 400 });
    }

    const newFacture = await prisma.facture.create({
      data: {
        dateReaserver: new Date(dateReaserver),
        dateFacture: new Date(dateFacture),
        price,
        DevisId,
      },
    });

    return NextResponse.json(newFacture, { status: 201 });
  } catch (error) {
    console.error('Error creating facture:', error);
    return NextResponse.json({ error: 'Failed to create facture', details: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const factures = await prisma.facture.findMany({
      include: {
        Devis: true, 
      },
    });
    return NextResponse.json(factures, { status: 200 });
  } catch (error) {
    console.error('Error fetching factures:', error);
    return NextResponse.json({ error: 'Failed to fetch factures', details: error.message }, { status: 500 });
  }
}
