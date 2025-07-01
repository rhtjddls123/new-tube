import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    const eventType = evt.type;

    if (eventType === "user.created") {
      const data = evt.data;

      await db.insert(usersTable).values({
        clerkId: data.id,
        name: `${data.first_name} ${data.last_name}`,
        imageUrl: data.image_url,
      });
    }

    if (eventType === "user.deleted") {
      const data = evt.data;

      if (!data.id) {
        return new Response("사용자 id가 존재하지 않습니다!", { status: 400 });
      }

      await db.delete(usersTable).where(eq(usersTable.clerkId, data.id));
    }

    if (eventType === "user.updated") {
      const data = evt.data;

      await db
        .update(usersTable)
        .set({
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        })
        .where(eq(usersTable.clerkId, data.id));
    }

    return new Response("Webhook received", { status: 200 });
  } catch {
    return new Response("Error verifying webhook", { status: 400 });
  }
}
