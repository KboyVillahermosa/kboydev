import { NextResponse } from 'next/server';
import { matchIntent } from '@/utils/chatUtils';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid request: message is required' },
        { status: 400 }
      );
    }
    
    // Get appropriate response based on the message
    const response = matchIntent(message);
    
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error processing chat message:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}