// import { RecentIdTTL } from '@/lib/RecentIdTTL'; // hoặc RecentIdTTL
// import crypto from 'crypto';
// import Nano from 'nano';
// import { NextRequest, NextResponse } from 'next/server';

// export const runtime = 'nodejs';

// interface ICouchDoc {
//   _id: string;
//   _rev: string;
//   updatedAt: string;
//   createdAt: string;
//   status: string;
// }

// // Tạo 1 instance ở scope module (in-memory, per process)
// const recent = new RecentIdTTL(100, 10 * 60 * 1000); // nếu muốn TTL

// const WEBHOOK_V2_SECRET = process.env.CASSO_WEBHOOK_V2_SECRET || '';

// function stableJSONStringifyData(data: Record<string, any>): string {
//   const sorted = Object.keys(data)
//     .sort()
//     .reduce((o, k) => ((o[k] = data[k]), o), {} as Record<string, any>);
//   return JSON.stringify(sorted);
// }

// function verifyCassoV2(header: string, dataObj: any): boolean {
//   if (!WEBHOOK_V2_SECRET) return false;
//   const parts = Object.fromEntries(
//     header.split(',').map((p) =>
//       p
//         .trim()
//         .split('=')
//         .map((s) => s.trim())
//     )
//   ) as Record<string, string>;
//   const t = parts['t'];
//   const v1 = parts['v1'];
//   if (!t || !v1) return false;
//   const payload = `${t}.${stableJSONStringifyData(dataObj)}`;
//   const mac = crypto
//     .createHmac('sha512', WEBHOOK_V2_SECRET)
//     .update(payload)
//     .digest('hex');
//   try {
//     return crypto.timingSafeEqual(Buffer.from(mac), Buffer.from(v1));
//   } catch {
//     return false;
//   }
// }

// const updateCoin = (id: string) => {
//   return Promise.resolve();
// };

// export async function POST(req: NextRequest) {
//   const raw = await req.text();
//   let body: any;
//   try {
//     body = JSON.parse(raw);
//   } catch {
//     return NextResponse.json({ error: 'invalid-json' }, { status: 400 });
//   }

//   const sig = req.headers.get('x-casso-signature');
//   if (!sig || !body?.data)
//     return NextResponse.json({ error: 'missing' }, { status: 400 });
//   if (!verifyCassoV2(sig, body.data))
//     return NextResponse.json({ error: 'bad-signature' }, { status: 401 });

//   const id = String(body.data.id ?? '');
//   if (!id) return NextResponse.json({ error: 'missing-id' }, { status: 400 });

//   // ✅ Idempotency: nếu id đã có trong queue → coi như đã xử lý
//   if (!recent.add(id)) {
//     return NextResponse.json(
//       { success: true, duplicate: true },
//       { status: 200 }
//     );
//   }

//   const { description } = body.data;
//   const [idCitizen, _id] = description.split('#');

//   // TODO: xử lý giao dịch (cộng coin, cập nhật đơn...)
//   const doc = (await db.get(_id).catch(() => null)) as ICouchDoc;
//   if (doc) {
//     doc.updatedAt = new Date().toISOString();
//     doc.status = 'SUCCESS';
//     await db.insert(doc);
//   }

//   //TODO: update coin
//   await updateCoin(idCitizen);

//   return NextResponse.json({ success: true }, { status: 200 });
// }
export {};
