export const OptimizedImage = ({src,alt, className}) => {
    return (
        <picture>
            <source
                type="image/avif"
                srcSet={`
                      ${src.replace('.jpg', '.avif')} 1x,
                      ${src.replace('.jpg', '@2x.avif')} 2x,
                      ${src.replace('.jpg', '@3x.avif')} 3x
                    `}
            />
            <source
                type="image/jpeg"
                srcSet={`
                      ${src} 1x,
                      ${src.replace('.jpg', '@2x.jpg')} 2x,
                      ${src.replace('.jpg', '@3x.jpg')} 3x
                    `}
            />
            <img className={className} src={src} alt={alt} />
        </picture>
    )
}