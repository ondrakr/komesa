import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '../auth';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  try {
    console.log('Check-auth: Kontrola autentizace');
    const cookieStore = cookies();
    const token = cookieStore.get('admin_token')?.value;

    if (!token) {
      console.log('Check-auth: Token nenalezen');
      return NextResponse.json(
        { error: 'Není přihlášen' },
        { 
          status: 401,
          headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    const isValid = verifyToken(token);
    if (!isValid) {
      console.log('Check-auth: Neplatný token');
      return NextResponse.json(
        { error: 'Neplatný token' },
        { 
          status: 401,
          headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    console.log('Check-auth: Token validní');
    return NextResponse.json(
      { authenticated: true },
      {
        headers: {
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error) {
    console.error('Check-auth: Chyba při kontrole autentizace:', error);
    return NextResponse.json(
      { error: 'Chyba při kontrole autentizace' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
} 