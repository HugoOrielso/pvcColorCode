import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
const CustomHook = (refDivs = null) => {
    const thisDivs = refDivs
    useEffect(()=>{
        if(thisDivs !== null){
            thisDivs.current.forEach((div)=>{
                div.classList.add('animation-scroll')
            })
            const handleScroll=()=>{
                const scrollPosition = window.scrollY
                thisDivs.current.forEach((div)=>{
                    const offSetTop = div.getBoundingClientRect().top + scrollPosition

                    if(scrollPosition > offSetTop - (window.innerHeight / 4 * 3.6)){
                        div.classList.add('active')
                    }else{
                        div.classList.remove('active')
                    }
                })
            }
            window.addEventListener('scroll', handleScroll)
        }
    },[])
}

export default CustomHook