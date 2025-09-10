

const ProductAvatar = ({...props}) => {
  return (
    <img src="/assets/img/products/321887574e6f0b7fd7dadb3d8182a01fe61a2bcd.jpg" 
        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." 
        className={`relative rounded-full my-[-30px] x-10 ml-[40px]
                    md:ml-[40px]
                    xl:ml-[40px]` }
        width={props.width} />
  )
}

export { ProductAvatar }