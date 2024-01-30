import { NextRequest, NextResponse } from "next/server";

// Eksport fungsi GET
export async function GET(NextRequest) {
    console.log(NextRequest)
  const data = [
    { id: "1", name: "adidas", tipe: "A" }];

  return NextResponse.json({ status: 200, message: "success", data });
}
