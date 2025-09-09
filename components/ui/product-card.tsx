"use client";

import { inter } from '@/components/ui/fonts'

type CardProps = {
  itm: any;
  idx: number;
};

const ProductCard = ({itm, idx}: CardProps) => {
  return (
    <a href="#" className="group" >
          {/* <img src="/assets/img/products/a4878d8ec2553ff759c35b68259c45564d6d1ab2.jpg" 
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." 
            className="aspect-2/1 w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-1/2" /> */}
          <img src="/assets/img/products/a4878d8ec2553ff759c35b68259c45564d6d1ab2.jpg" 
            className="aspect-[16/9] w-full object-cover rounded-tl-2xl rounded-tr-2xl"  />
          <div className='bg-white aspect-[16/9] w-full rounded-bl-2xl rounded-br-2xl
                          xl:px-[40px] xl:pt-[50px]'>
            <h3 className={`${inter.className} text-[#008ADD] 
                            text-[16px] font-[500]
                            `}>{itm.title}</h3>
            <p className={`${inter.className} text-black 
                           text-[24px] font-[500] 
                           xl:mt-[15px] xl:leading-[1.2]`}>{itm.desc}</p>
          </div>
          
        </a>
  )
}

export { ProductCard }