import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  // Check for secret to confirm this is a valid request
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "Invalid token" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { path } = body;

    if (path) {
      // Revalidate specific path
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path });
    }

    // Revalidate all main pages
    revalidatePath("/");
    revalidatePath("/deals");
    revalidatePath("/blog");
    
    return NextResponse.json({
      revalidated: true,
      message: "All pages revalidated",
    });
  } catch {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
