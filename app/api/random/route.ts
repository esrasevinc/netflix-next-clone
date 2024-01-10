import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function GET() {
  try {

    await serverAuth();

    const moviesCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * moviesCount);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex
    });

    return Response.json(randomMovies[0], {
        status:200
      });

  } catch (error) {
    console.log(error);
    return Response.json({ error: `Something went wrong: ${error}` }, {
        status:500
    });
  }
}