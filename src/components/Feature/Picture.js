import React from 'react'

export default ({src, srcType, webp, alt, ...props}) => {
    return (
        <>
        {src ?
            (<picture {...props}>
                { webp ? <source srcSet={webp} type="image/webp"/> : ''}
                <source srcSet={src} type={srcType?srcType:"image/jpeg"}/> 
                <img src={src} alt={alt}/>
            </picture>)
            : ''}
        </>
    )
}