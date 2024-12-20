import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
function setCorsHeaders(response) {
  response.headers.set('Access-Control-Allow-Origin', '*'); // Replace '*' with a specific domain in production
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS ,PUT');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
}
export async function GET(req, { params }) {
  try {
    const { id } = params; // Extract 'id' from the dynamic route

    if (!id) {
      return NextResponse.json({ error: 'Devis ID is required' }, { status: 400 });
    }
    const devis = await prisma.devis.findUnique({
      where: { id: Number(id) },
      include: {
        surface: true,  
        Facture: true,
      },
    });

    if (!devis) {
      return NextResponse.json({ error: 'Devis not found' }, { status: 404 });
    }

    return NextResponse.json(devis, { status: 200 });
  } catch (error) {
    console.error('Error fetching Devis:', error);
    return NextResponse.json({ error: 'Failed to fetch Devis', details: error.message }, { status: 500 });
  }
}
export async function PUT(req, { params }) {
  try {
    const { id } = params; // Extract 'id' from the dynamic route

    if (!id) {
      return setCorsHeaders(NextResponse.json({ error: 'Devis ID is required' }, { status: 400 }));
    }

    const {
      nameEntreprise,
      namePersone,
      email,
      VotreFonction,
      Adress,
      codePostall,
      message,
      etage,
      numberPhon,
      ville,
      surfaceId,
      status,
      datecalendrier,
    } = await req.json();
    if (
      !nameEntreprise ||
      !namePersone ||
      !email ||
      !VotreFonction ||
      !Adress ||
      !codePostall ||
      !message ||
      !etage ||
      !numberPhon ||
      !ville ||
      !surfaceId ||
      !status ||
      !datecalendrier
    ) {
      throw new Error("All fields are required and must not be null or undefined.");
    }
    const updatedDevis = await prisma.devis.update({
      where: { id: Number(id) },
      data: {
        nameEntreprise,
        namePersone,
        email,
        VotreFonction,
        Adress,
        codePostall,
        message,
        etage,
        numberPhon,
        ville,
        surfaceId,
        status,
        datecalendrier,
      },
    });

    return setCorsHeaders(NextResponse.json(updatedDevis, { status: 200 }))  ;
  } catch (error) {
    console.error('Error updating Devis:', error);
    return setCorsHeaders(NextResponse.json({ error: 'Failed to update Devis', details: error.message }, { status: 500 })) ;
  }
}


export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: 'Devis ID is required' }, { status: 400 });
    }

    await prisma.devis.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: 'Devis deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting Devis:', error);
    return NextResponse.json({ error: 'Failed to delete Devis', details: error.message }, { status: 500 });
  }
}
