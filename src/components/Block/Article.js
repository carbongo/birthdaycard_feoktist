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
                        padding-bottom: 10vw;
                    }
                    p {
                        font-size: 3vw;
                        width: 80vw;
                        margin-left: 10vw;
                        font-family: ‘Maven Pro’, sans-serif;
                        color: rgb(77, 77, 77);
                    }
                    @media (max-width: 767px) {
                        p {
                            font-size: 6vw;
                        }
                    }
                `}
            </style>
        </>
    )
}