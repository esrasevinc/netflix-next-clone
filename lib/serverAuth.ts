// import { NextApiRequest, NextApiResponse } from "next";
// import { getServerSession } from "next-auth";

// import prismadb from '@/lib/prismadb';
// import { GET, POST } from "@/app/api/auth/[...nextauth]/route";

// const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
//   const session = await getServerSession(req, res, GET);

//   if (!session?.user?.email) {
//     throw new Error('Not signed in');
//   }

//   const currentUser = await prismadb.user.findUnique({
//     where: {
//       email: session.user.email,
//     }
//   });
  
//   if (!currentUser) {
//     throw new Error('Not signed in');
//   }

//   return { currentUser };
// }

// export default serverAuth;