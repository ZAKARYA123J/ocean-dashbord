import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'; 
const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, password, phone, name } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Email, password, and name are required.' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        phone,
        name,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error creating User:', error);
    return NextResponse.json({ error: 'Failed to create User', details: error.message }, { status: 500 });
  }
}

// GET
export async function GET(req) {
    try {
      const users = await prisma.user.findMany();
  
      const usersWithoutPassword = users.map(({ password, ...userWithoutPassword }) => userWithoutPassword);
  
      return NextResponse.json(usersWithoutPassword, { status: 200 });
    } catch (error) {
      console.error('Error fetching Users:', error);
      return NextResponse.json({ error: 'Failed to fetch Users', details: error.message }, { status: 500 });
    }
  }
  
