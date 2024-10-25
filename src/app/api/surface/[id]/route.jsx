import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
    try {
      const { id } = params; 
      if (!id) {
        return NextResponse.json({ error: 'Surface ID is required' }, { status: 400 });
      }
      const surface = await prisma.surface.findUnique({
        where: { id: Number(id) },
        include: {
          Devis: true, 
        },
      });
  
      if (!surface) {
        return NextResponse.json({ error: 'Surface not found' }, { status: 404 });
      }
  
      return NextResponse.json(surface, { status: 200 });
    } catch (error) {
      console.error('Error fetching Surface:', error);
      return NextResponse.json({ error: 'Failed to fetch Surface', details: error.message }, { status: 500 });
    }
  }

export async function PUT(req) {
  try {
    const {
      id,
      valeur,
    } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'Surface ID is required' }, { status: 400 });
    }
    const updatedSurface = await prisma.surface.update({
      where: { id: Number(id) },
      data: {
        valeur,
      },
    });
    return NextResponse.json(updatedSurface, { status: 200 });
  } catch (error) {
    console.error('Error updating Surface:', error);
    return NextResponse.json({ error: 'Failed to update Surface', details: error.message }, { status: 500 });
  }
}

export async function DELETE(req,{params}) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: 'Surface ID is required' }, { status: 400 });
    }

    await prisma.surface.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: 'Surface deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting Surface:', error);
    return NextResponse.json({ error: 'Failed to delete Surface', details: error.message }, { status: 500 });
  }
}
