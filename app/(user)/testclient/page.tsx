
import { createClient } from "@/lib/supabase/server";
import { ProductCard } from "@/components/ui/product-card";

export default async () => {

  const supabase = await createClient();

  const { data, error } = await supabase.from('blogs').select('*')
  const postList = data

  const arrangePostList = () => {
    return postList && postList.map((itm, idx, arr) => {
      return (
        <ProductCard key={`blog-${idx}`} itm={itm} idx={idx} />
      )
    })
  }
  return <div>
  <div className="mx-auto 
                  max-w-sm px-4 py-16 
                  md:max-w-3xl md:px-4 md:py-16 
                  xl:max-w-7xl xl:px-4 xl:py-16 
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