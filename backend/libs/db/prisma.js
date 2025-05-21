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
      return null; 
    }
  }

static async CartAdd(UserID, ProductID, Quantidade, Tamanho) {
  try {
    if (
      !UserID || !ProductID || !Quantidade || !Tamanho ||
      isNaN(Number(UserID)) || isNaN(Number(ProductID)) ||
      isNaN(Number(Quantidade)) || isNaN(Number(Tamanho))
    ) {
      return null;
    }

    const existing = await prisma.cartItem.findFirst({
      where: {
        userId: Number(UserID),
        productId: Number(ProductID),
        size: Number(Tamanho),
      }
    });

    if (existing) {
      // Se já existe, incrementa a quantidade
      return await prisma.cartItem.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + Number(Quantidade) }
      });
    }

    // Se não existe, cria novo item
    const Add_cart = await prisma.cartItem.create({
      data: {
        userId: Number(UserID),
        productId: Number(ProductID),
        quantity: Number(Quantidade),
        size: Number(Tamanho),
      }
    });

    return Add_cart || null;
  } catch (error) {
    return null;
  }
}

}
export default Database;