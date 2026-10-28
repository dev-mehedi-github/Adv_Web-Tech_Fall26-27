import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm/repository/Repository.js";
import { Product } from "./entities/product.entity";
import { CreateProductDto, UpdateProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService{
    constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,) {}

    async getProducts(){
        try{
            const products = await this.productRepository.find();
            return products;
        }
        catch(error){
            throw error;
        }
    }

    async getProductById(id: string){
        try{
            const product = await this.productRepository.findOne({
                where: { id },
            });
            if(!product){
                throw new NotFoundException("Product not found");
            }
            return product;
        }
        catch(error){
            throw error;
        }
    }

    async createProduct(dto: CreateProductDto){
        try{
            if(!dto.name){
                throw new BadRequestException("Product Name is a mendatory Field");
            }
            if(!dto.category){
                throw new BadRequestException("Product Category is a mendatory Field");
            }
            if(!dto.price){
                throw new BadRequestException("Product Price IS A number ");
            }
            if(!dto.quantity){
                throw new BadRequestException("Product Quantity should be integer");
            }
            const response = await this.productRepository.create(dto);
            return await this.productRepository.save(response);
        }
        catch(error){
            throw error;
        }
    }

    async updateProduct(id:string, dto:UpdateProductDto){
        try{
            console.log("id",id);
            if(!id){
                throw new NotFoundException("Product not found");
            }
            const product = await  this.productRepository.findOne(
                {
                    where: {
                        id:id,
                    },
                }
            );
            if(!product){
                throw new NotFoundException("Product not found");
            }
            Object.assign(product, dto);
            const {id: uid, ...rest} = product;
            return await this.productRepository.update({id:id}, rest);
        }catch(error){
            throw error;
        }
    }

    async deleteProduct(id: string) {
        if (!id) {
            throw new NotFoundException("Product not found");
        }

        const product = await this.productRepository.findOne({
            where: { id },
        });

        if (!product) {
            throw new NotFoundException("Product not found");
        }

        return await this.productRepository.delete({ id });
    }
}


