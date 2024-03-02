import Lottie from 'react-lottie'
const LottienAnimation = ({alto,ancho,animacion}) => {
    const defaultOptions={
        loop: true,
        autoplay: true,
        animationData: animacion
    }
    return(
        <Lottie options={defaultOptions} height={`${alto}`} width={`${ancho}`} isClickToPauseDisabled/>
    )
}

export default LottienAnimation