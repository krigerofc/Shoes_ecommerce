import { PrismaClient } from "@/generated/prisma"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

class Database{
  

  static async CreateUser(name, email, password){
    try{

    const HashedPass = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data:{
        name:name,
        email:email,
        password:HashedPass,
      }
    });

    if (user){
      return user;
    }

    return null;
    } catch(error){
      return error;
    }
  }



  static async FindUserByEmail(email){
    try{

    const user = await prisma.user.findUnique({
      where: {
        email:email
      }
    });

    if (user){
      return user;
    }

    return null;
    } catch(error){
      return error;
    }
  }
  
}

export default Database;