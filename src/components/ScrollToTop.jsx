// import { useEffect } from "react"
// import { useLocation } from "react-router-dom"

// export const scrollToTop = ()=>{
//     const { location } = useLocation()
//     useEffect(()=>{
//         window.scrollTo(0, 0)
//     }, [location])
// }

export const scrollToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}