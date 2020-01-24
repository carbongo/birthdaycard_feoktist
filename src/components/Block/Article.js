import React from 'react'

export default () => {
    return (
        <>
            <article id="article1">
                <p>Lorem ipsum sit amet dolor</p>
            </article>
            <style jsx>
                {`
                    #article1 {
                        z-index: 99;
                        position: absolute;
                        top: 100vw;
                    }
                `}
            </style>
        </>
    )
}