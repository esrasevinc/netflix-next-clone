import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export async function GET() {
    try {
  
      await serverAuth();
  
      const movies = await prismadb.movie.findMany();
  
      return Response.json(movies, {
          status:200
        });
  
    } catch (error) {
      console.log(error);
      return Response.json({ error: `Something went wrong: ${error}` }, {
          status:400
      });
    }
  }