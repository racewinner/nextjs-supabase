'use client';
import { ProductCard } from "@/components/ui/product-card";

export default () => {

  const postList = [
    {
      title: 'Uduak Asuquo - Founder',
      desc: 'The ultimate operating system for hotels',
      price: 48
    },
    {
      title: 'Uduak Asuquo - Founder',
      desc: 'The ultimate operating system for hotels',
      price: 48
    },
    {
      title: 'Uduak Asuquo - Founder',
      desc: 'The ultimate operating system for hotels',
      price: 48
    },
    {
      title: 'Uduak Asuquo - Founder',
      desc: 'The ultimate operating system for hotels',
      price: 48
    },
    {
      title: 'Uduak Asuquo - Founder',
      desc: 'The ultimate operating system for hotels',
      price: 48
    },
    {
      title: 'Uduak Asuquo - Founder',
      desc: 'The ultimate operating system for hotels',
      price: 48
    },
    {
      title: 'Uduak Asuquo - Founder',
      desc: 'The ultimate operating system for hotels',
      price: 48
    },
    {
      title: 'Uduak Asuquo - Founder',
      desc: 'The ultimate operating system for hotels',
      price: 48
    },
    {
      title: 'Uduak Asuquo - Founder',
      desc: 'The ultimate operating system for hotels',
      price: 48
    },
    {
      title: 'Uduak Asuquo - Founder',
      desc: 'The ultimate operating system for hotels',
      price: 48
    },
    {
      title: 'Uduak Asuquo - Founder',
      desc: 'The ultimate operating system for hotels',
      price: 48
    },
    {
      title: 'Uduak Asuquo - Founder',
      desc: 'The ultimate operating system for hotels',
      price: 48
    },
    {
      title: 'Uduak Asuquo - Founder',
      desc: 'The ultimate operating system for hotels',
      price: 48
    },
   
  ]
  const arrangePostList = () => {
    return postList && postList.map((itm, idx, arr) => {
      return (
        <ProductCard key={`blog-${idx}`} itm={itm} idx={idx} />
      )
    })
  }
  return <div className="bg-[#F3F3F9]">
  <div className="mx-auto 
                  max-w-sm px-4 py-16 bg-red-100
                  md:max-w-3xl md:px-4 md:py-16 md:bg-red-300
                  xl:max-w-7xl xl:px-4 xl:py-16 xl:bg-red-500
                  ">

    <h2 className="sr-only">Products</h2>

    <div className="grid grid-cols-1 gap-x-6 gap-y-10 
                    md:grid-cols-2
                    xl:grid-cols-3
                    ">
      { arrangePostList() }
    </div>
  </div>
</div>
}

// sm:grid-cols-2 
//                     lg:grid-cols-3 
//                     xl:grid-cols-4 xl:gap-x-8"