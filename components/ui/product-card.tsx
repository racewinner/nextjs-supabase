// "use client";

import Link from "next/link";
import { inter } from '@/components/ui/fonts'
import { Button } from "./button";
import { ProductAvatar } from './product-avatar';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CardProps = {
  itm: any;
  idx: number;
};

const ProductCard = ({itm, idx}: CardProps) => {
  return (
    <div className="group" >
      <img src="/assets/img/products/a4878d8ec2553ff759c35b68259c45564d6d1ab2.jpg" 
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." 
            className="aspect-[16/9] w-full object-cover rounded-tl-2xl rounded-tr-2xl group-hover:opacity-75"  />
      <ProductAvatar width={60} />
      <div className='bg-white aspect-[16/9] w-full rounded-bl-2xl rounded-br-2xl px-[40px] py-[40px]
                      md:px-[40px] md:py-[40px]
                      xl:px-[40px] xl:py-[40px] 
                      flex flex-col gap-[5px]'>
        <div>
          <h3 className={`${inter.className} text-[#008ADD] truncate
                          text-[14px] font-[500]`}>{itm.title}</h3>
        </div>
        <div className="grow shrink">
          <p  className={`${inter.className} text-black line-clamp-2
                          text-[22px] font-[500] leading-[1]
                          md:leading-[1.1]
                          xl:leading-[1.2]
                          `}>{itm.desc}</p>
        </div>
        
        <div className="flex justify-between items-center 
                        
                        ">
          <Button className="bg-[#ff0000] rounded-full" asChild size="sm" variant={"outline"}>
            <Link href="/auth/login">Coperate</Link>
          </Button>
          <div className="text-black">
            Tue, May 2
          </div>
        </div>
      </div>
      
    </div>

   
  )
}

export { ProductCard }