'use client';

import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";
import { useParams } from 'next/navigation';

export async function GET() {
    try {
        await serverAuth();
        const params = useParams()
        const movieId  = params.movieId;

        if (typeof movieId !== 'string') {
            throw new Error('Invalid ID')
        }

        if (!movieId) {
            throw new Error('Invalid ID')
        }

        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        });

        if (!movie) {
            throw new Error('Invalid ID')
        }
    
        return Response.json(movie, {
            status:200
          });
    
      } catch (error) {
        console.log(error);
        return Response.json({ error: `Something went wrong: ${error}` }, {
            status:400
        });
      }
}