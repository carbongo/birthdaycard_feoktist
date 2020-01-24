import React from 'react'

export default ({src, srcType, webp, alt, ...props}) => {
    return (
        <>
        {src ?
            (<picture {...props}>
                { webp ? <source srcset={webp} type="image/webp"/> : ''}
                <source srcset={src} type={srcType?srcType:"image/jpeg"}/> 
                <img src={src} alt={alt}/>
            </picture>)
            : ''}
        </>
    )
}