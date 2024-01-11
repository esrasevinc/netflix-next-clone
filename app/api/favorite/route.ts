import { without } from "lodash";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export async function POST(req: Request) {
    try {
  
      const { currentUser } = await serverAuth();

      const res = await req.json();
      const { movieId } = res;

      const existingMovie = await prismadb.movie.findUnique({
        where: {
            id: movieId
        }
      });

      if (!existingMovie) {
        throw new Error('Invalid ID')
      }

      const user = await prismadb.user.update({
        where: {
            email: currentUser.email || '',
        },
        data: {
            favoriteIds: {
                push: movieId
            }
        }
      });
  
      return Response.json(user, {
          status:200
      });
  
    } catch (error) {
      console.log(error);
      return Response.json({ error: `Something went wrong: ${error}` }, {
          status:400
      });
    }
  }


  export async function DELETE(req: Request) {

    const { currentUser } = await serverAuth();

    const res = await req.json();
    const { movieId } = res;

    const existingMovie = await prismadb.movie.findUnique({
        where: {
            id: movieId
        }
      });

      if (!existingMovie) {
        throw new Error('Invalid ID')
      }

      const updatedMovieIds = without(currentUser.favoriteIds, movieId)

      const updatedUser = await prismadb.user.update({
        where: {
            email: currentUser.email || '',
        },
        data: {
            favoriteIds: updatedMovieIds
        }
      });

      return Response.json(updatedUser, {
        status:200
      });





  }