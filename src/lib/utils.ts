type GenerateVietQRInput = {
  accountNo: string; // Số TK nhận
  accountName?: string; // Tên TK (tùy chọn)
  acqId: string; // BIN ngân hàng (vd: MB=970422, VCB=970436...)
  amount?: number; // Số tiền (VND) - nếu bỏ trống => QR tĩnh
  addInfo?: string; // Nội dung chuyển khoản (mã đơn...)
  template?: 'compact' | 'print' | 'qr_only';
};

type GenerateVietQROutput = {
  // Tùy provider, thường trả base64 PNG/SVG và/hoặc link
  code: string;
  desc?: string;
  data?: {
    qrDataURL?: string; // data:image/png;base64,...
    qrCodeBase64?: string; // chỉ phần base64
    qrCodeURL?: string; // link ảnh
    // ...các trường khác
  };
};

// app/lib/createVietQR.ts
export async function createVietQR({
  accountNo,
  acqId,
  accountName,
  amount,
  addInfo,
  template = 'compact',
}: GenerateVietQRInput) {
  const res = await fetch('https://oauth.casso.vn/v2/payment-requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Apikey ${process.env.CASSO_API_KEY!}`, // 👈 chỉ cần key từ Casso
    },
    body: JSON.stringify({
      accountNo,
      accountName,
      acqId,
      amount,
      addInfo,
      template,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to create VietQR: ${res.status} ${res.statusText}`);
  }

  return res.json(); // trả về dữ liệu từ Casso (link QR, payload…)
}
