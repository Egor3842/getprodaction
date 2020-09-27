import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Context } from '../Context/Context';
import Preloader from '../Preloader/Preloader';
import s from '../assests/styles/InfoPage.module.css'
import Thing from '../Components/Thing';
import { graphql } from 'react-apollo';
import { FlatQuery } from '../GraphQL/GraphQL';


const InfoPage = (props) => {
    const StateContext = useContext(Context);
    useEffect(() => {
        if (!props.data.loading) {
            StateContext.dispatch({ type: 'setData', infoData: [...props.data.flat] })
        }
    }, [props.data.loading])

    if (!StateContext.state.isAuth) return <Redirect to={'/login'} />;
    if (props.data.loading) return <Preloader />
    return (
        <div className={s.container + ' ' + s.container_Height}>
            {props.data.error ? <div>Ошибка при загрузке данных</div> :
                <div className={s.content_Container + ' ' + s.content_Container_Width}>
                    {StateContext.state.infoData.map((x, key) => <Thing key={x.id} id={key}
                        title={x.title}
                        city={x.city}
                        street={x.street}
                        house={x.house}
                        room={x.room}
                        description={x.description}
                        first_name={x.first_name}
                        last_name={x.last_name}
                        middle_name={x.middle_name} />)}
                </div>
            }
            <button className={s.LogOut} onClick={() => StateContext.dispatch({ type: 'logout' })}>Выйти</button>
        </div>

    )

}


const PageWithData = graphql(FlatQuery)(InfoPage)


export default PageWithData
