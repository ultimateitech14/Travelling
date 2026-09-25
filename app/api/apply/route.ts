import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.whatsapp || !body.email) {
      return NextResponse.json(
        { success: false, message: 'Missing required application fields.' },
        { status: 400 }
      );
    }

    console.log('[Being Traveller Application Received]:', {
      name: body.name,
      trip: body.trip,
      gender: body.gender,
      travelStyle: body.travelStyle,
      whatsapp: body.whatsapp,
      timestamp: body.submittedAt || new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Application successfully received.',
    });
  } catch (error) {
    console.error('API /api/apply error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error processing application.' },
      { status: 500 }
    );
  }
}
