import React from 'react'
import preloader from '../assests/img/preloader.gif'
import s from '../assests/styles/Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.preloaderContainer}>
            <div className={s.preloader}>
                <img className={s.img_Preloader} alt='' src={preloader} />
            </div>
        </div>

    )
}

export default Preloader