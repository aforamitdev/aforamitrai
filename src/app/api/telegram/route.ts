import { NextRequest, NextResponse } from 'next/server';
const POST = async (request: NextRequest, res: NextResponse) => {
  if (request.method === 'POST') {
    const requestBody = await request.json();
    const response = await fetch(
      `https://api.telegram.org/bot${
        process.env.NEXT_PUBLIC_TELEGRAM_API_KEY
      }/sendMessage?chat_id=${
        process.env.NEXT_PUBLIC_GROUP_ID
      }&text=${JSON.stringify(requestBody)}`
    );
    const data = await response.json();
    if (data.ok) {
      return NextResponse.json({ status: true });
    }
    return NextResponse.json({ status: false });
  }
};

export { POST };
