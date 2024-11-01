import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'a5f719ac8b4b73f2a620fd73c85a7d5f79b52fcfcdc5d57c8e8f749ad7e315c47230483d7db1525f20c5c4fd65423e9c9c8244d4f7bc9cfd5753fbb4f8439f60';

// Internal function to set CORS headers
function setCorsHeaders(response) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  return response;
}

// Handle OPTIONS request
// Handle OPTIONS request
export async function OPTIONS(req) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}


// Handle POST request
export async function POST(req) {
    try {
      const { email, password } = await req.json();
  
      const user = await prisma.user.findUnique({
        where: { email },
      });
  
      if (!user) {
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }
  
      const isValid = await bcrypt.compare(password, user.password);
  
      if (!isValid) {
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }
  
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
  
      let response = NextResponse.json(
        { token, user: { email } }, 
        { status: 200 }
      );
  
      response = setCorsHeaders(response);
  
      return response;
  
    } catch (error) {
      console.error('Error during login:', error);
      return NextResponse.json({ error: 'Error logging in' }, { status: 500 });
    }
  }
  