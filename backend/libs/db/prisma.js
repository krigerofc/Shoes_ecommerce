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
  
//products

  static async CreateProduct(name, price, category, size, image, description){
    try{
      const product = await prisma.product.create({
        data:{
          name:name, 
          price: Number(price),
          category:category,
          size: Number(size),
          imageUrl:image,
          description:description,
        }
      })

      if (product){
        return product;
      }
      return null;

    } catch(error){
      return error;
    }
  }

  static async Productlist(){
    try{
      return await prisma.product.findMany({
        orderBy: {createdAt:"desc"}
      })
    } catch(erro){
      return error;
    }
  }

  static async DeleteProduct(IDPRODUCT){
    try{
      const deleted = await prisma.product.delete({
        where: {
        id: IDPRODUCT,
      }
      })
      return deleted;
    }catch(error){
      return error;
    }
  }


  static async ProductEdit(id, name, price, category, size, image, description){
    try{
    const Edit_product = await prisma.product.update({
      where: {id},
      data:{
        name,
        price,
        category,
        size,
        imageUrl:image,
        description,
      },
    });
    return edit_product;
    }catch(error){
      return error;
    }
  }

  static async Newshoes(){
    try{
      const shoes = await prisma.product.findMany({
        orderBy: {createdAt: 'desc'}
      });
      return shoes;
    } catch(error){
      return error;
    }
  }

  static async GetShoeById(id) {
    try {
      const shoe = await prisma.product.findUnique({
        where: { id: Number(id) }
      });
      return shoe;
    } catch (error) {
      return null; // Melhor retornar null do que o erro diretamente
    }
  }
}



export default Database;