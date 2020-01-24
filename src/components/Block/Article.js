import React from 'react'

export default () => {
    return (
        <>
            <article id="article1">
                <p>Dear Feoktist,<br/>
                    Wishing a happy and colorful birthday to the most amazing Graphic Designer around. May this special day in your life be filled with joy and happiness and may all your wishes to come true!</p>
                <p>Best Regards,<br/>
                    George An.
                </p>
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
                        margin-bottom: 5vw;
                        margin-left: 10vw;
                        font-family: 'Maven Pro', sans-serif;
                        line-height: 150%;
                        color: #d6640d;
                        text-align: justify;
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