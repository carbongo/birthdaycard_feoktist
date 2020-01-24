import React from "react"
import Helmet from "react-helmet"

export default () => {
    return (
    <>
        <Helmet title="Happy Birthday, Feo!"/>
        <style jsx global>
            {`
                * {
                    margin: 0;
                    padding: 0;
                }
                @font-face {
                    font-family: 'Maven Pro';
                    font-style: normal;
                    font-weight: 400;
                    font-display: swap;
                    src: url(https://fonts.gstatic.com/s/mavenpro/v19/7Auup_AqnyWWAxW2Wk3swUz56MS91Eww8SX21nejpBh8CvRBOA.woff) format('woff');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
            `}
        </style>
    </>)
}