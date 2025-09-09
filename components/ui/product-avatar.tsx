

const ProductAvatar = ({...props}) => {
  return (
    <img src="/assets/img/products/321887574e6f0b7fd7dadb3d8182a01fe61a2bcd.jpg" 
        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." 
        className={`relative rounded-full my-[-${props.width/2}px] x-10
                    xl:ml-[40px]` }
        width={props.width} />
  )
}

export { ProductAvatar }