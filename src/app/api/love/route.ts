import { createVietQR } from '@/lib/utils';
import Nano from 'nano';
import { nanoid } from 'nanoid';
import { NextRequest, NextResponse } from 'next/server';

const nano = Nano('http://admin:Duonghanh1610!@198.186.130.67:5984');
const db = nano.db.use('tyrian');

export async function POST(req: NextRequest) {
  try {
    // Parse body JSON
    const body = await req.json();
    const { idCitizen, amount } = body;

    // Validate input
    if (!idCitizen || !amount || isNaN(amount)) {
      return NextResponse.json(
        {
          error: 'Invalid payload. Must include id citizen and amount (number)',
        },
        { status: 400 }
      );
    }

    // TODO: xử lý logic nghiệp vụ, ví dụ:
    // - Lưu DB
    // payment intend
    const nanoID = nanoid();
    await db.insert({
      _id: nanoID,
      ...body,
      status: 'PENDING',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // - Gọi service khác (payment, QR, v.v.)
    const out = await createVietQR({
      accountNo: '201326869', // số tài khoản thật của bạn
      accountName: 'TRAN KIM HUNG',
      acqId: '970416', // ACB
      amount: amount,
      addInfo: nanoID,
      template: 'compact',
    });

    // - Trả về trạng thái

    const result = {
      message: 'Payment request received',
      idCitizen,
      amount: +amount,
      status: 'PENDING',
      paymentInfo: out,
    };

    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    console.error('Error in POST /api/payment:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, ping: 'ok' });
}
