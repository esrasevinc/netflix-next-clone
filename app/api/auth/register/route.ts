import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb'

export async function POST(req: Request) {
  try {
    const res = await req.json();
    const { email, name, password } = res;

    const existingUser = await prismadb.user.findUnique({
      where: {
        email
      }
    })

    if (existingUser) {
      return Response.json({ error: 'Email taken' }, {
        status: 422
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: '',
        emailVerified: new Date(),
      }
    })

    return Response.json(user, {
        status:200
    });

  } catch (error) {
    return Response.json({ error: `Something went wrong: ${error}` }, {
        status:400
    });
  }
}

