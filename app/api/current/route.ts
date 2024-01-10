import serverAuth from "@/lib/serverAuth";

export async function GET() {
  try {
    const { currentUser } = await serverAuth();
    
    return Response.json(currentUser, {
      status:200
    });

  } catch (error) {
    return Response.json({ error: `Something went wrong: ${error}` }, {
        status:500
    });
  }
}