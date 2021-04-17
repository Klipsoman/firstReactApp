import React from 'react'
import style from './Profile.module.css'
import PropTypes from 'prop-types'
import Preloader from '../../Preloader/Preloader'

const Profile = (props) => {

    return <>  
    <div className={style.profileWrapp}>

    {props.isFetching ? <Preloader/> :
        <div className={style.profileItems}>
            <div className={style.profileInfo}>
                <h2>{props.profile.fullName}</h2>

                { props.profile.aboutMe ?
                <><h5>Информация</h5>
                <p>{props.profile.aboutMe}</p></>
                : <></>
            }
                
                { (props.profile.contacts?.facebook || props.profile.contacts?.vk || props.profile.contacts?.instagram || props.profile.contacts?.website ) ?
                    <h5>Контакты</h5> 
                    : <></>    
            }
                
                {props.profile.contacts?.facebook ?
                 <> <h6>Facebook:</h6>
                <p>{props.profile.contacts?.facebook}</p></> 
                : <></>
                }

                { props.profile.contacts?.vk ?
                <><h6>VK:</h6>
                <p>{props.profile.contacts?.vk}</p></>
                : <></>
                }

                { props.profile.contacts?.instagram ?
                <><h6>Instagram:</h6>
                <p>{props.profile.contacts?.instagram}</p></>
                : <></>
                }

                { props.profile.contacts?.website
                ? <> <h6>Site:</h6>
                <p>{props.profile.contacts?.website}</p>  </>
                :
                <></>
                }

                {props.vk}
 
                
                <img src={props.photoSmall} alt=""/>

            </div>
            <div className={style.profilePhoto}>
                <img src={props.profile.photos?.large} alt=""/>
            </div>
        </div>
        }
    </div>

    </>

}

Profile.propTypes = {
    profile: PropTypes.array.isRequired,
    isFetching: PropTypes.bool,
    vk: PropTypes.string,
    photoSmall: PropTypes.string
}
export default Profile