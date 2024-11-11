import { NextResponse, NextRequest } from 'next/server';

export async function POST (request: NextRequest) {
    const body = await request.json();
    const res = await fetch(process.env.BACKEND_URL+'/api/v1/auth/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    const data = await res.text()
    console.log(data)
   
    return NextResponse.json({ data: data }, { status: 200 });
}