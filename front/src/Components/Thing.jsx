import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../assests/styles/Thing.module.css'
import flatImg from '../assests/img/flat.jpg'
const Thing = (props) => {
    return (
        <div className={s.container + ' ' + s.container_Height}>
            <NavLink className={s.NavLink} to={'/product/' + props.id}>
                <div className={s.content_Container}>
                    <div className={s.info_About_Container + ' ' + s.info_About_Container_Display}>
                        <div className={s.img_container} >
                            <img alt='квартира' className={s.img} src={flatImg} />
                        </div>
                        <div className={s.description_Container}>
                            <div className={s.title_Container}>
                                <div className={s.title}>{props.title}</div>
                            </div>
                            <div className={s.about_Flat_Container}>
                                <div className={s.about_Flat}>{props.description}</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.footer_Container}>
                        <div className={s.footer_Address_Container}>
                            <div className={s.footer_Address}>г.{props.city},ул.{props.street},
                        д.{props.house}, кв.{props.room}
                            </div>
                        </div>
                        <div className={s.footer_Contacts_Container}>
                            <div className={s.footer_Contacts}>{props.first_name} {props.middle_name} {props.last_name}</div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Thing