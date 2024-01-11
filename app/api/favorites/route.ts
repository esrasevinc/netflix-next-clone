import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export async function GET(req: Request) {
    try {
        const { currentUser } = await serverAuth();

        const favoriteMovies = await prismadb.movie.findMany({
            where: {
                id: {
                    in: currentUser?.favoriteIds
                }
            }
        });
        
        return Response.json(favoriteMovies, {
          status:200
        });
    
      } catch (error) {
        return Response.json({ error: `Something went wrong: ${error}` }, {
            status:400
        });
      }
}