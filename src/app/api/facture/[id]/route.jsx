import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
    try {
      const { id } = params; 
  
      if (!id) {
        return NextResponse.json({ error: 'Facture ID is required' }, { status: 400 });
      }
  
      
      const facture = await prisma.facture.findUnique({
        where: { id: Number(id) },
        include: {
          Devis: true,  // Include related Devis information
        },
      });
  
      if (!facture) {
        return NextResponse.json({ error: 'Facture not found' }, { status: 404 });
      }
  
      return NextResponse.json(facture, { status: 200 });
    } catch (error) {
      console.error('Error fetching Facture:', error);
      return NextResponse.json({ error: 'Failed to fetch Facture', details: error.message }, { status: 500 });
    }
  }

export async function PUT(req) {
  try {
    const {
      id, 
      dateReaserver,
      dateFacture,
      price,
      DevisId,
    } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'Facture ID is required' }, { status: 400 });
    }

    const updatedFacture = await prisma.facture.update({
      where: { id: Number(id) },
      data: {
        dateReaserver: new Date(dateReaserver),
        dateFacture: new Date(dateFacture),
        price,
        DevisId,
      },
    });

    return NextResponse.json(updatedFacture, { status: 200 });
  } catch (error) {
    console.error('Error updating Facture:', error);
    return NextResponse.json({ error: 'Failed to update Facture', details: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'Facture ID is required' }, { status: 400 });
    }

    await prisma.facture.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: 'Facture deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting Facture:', error);
    return NextResponse.json({ error: 'Failed to delete Facture', details: error.message }, { status: 500 });
  }
}
