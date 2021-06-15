import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getToken } from '../../utils'
import { getProfile, updateProfileImageDB, updateProfile } from './profileSlice'
import Loader from '../../Svg/Loader.svg'
import { ImageIcon } from '../../Svg'
import './Profile.css'
export function Profile() {
    const { user, imageUrl, status } = useSelector(state => state.profileSlice)
    const dispatch = useDispatch()
    const [isOverlay, setOverlay] = useState(true)
    const [uploadedImage, setUploadedImage] = useState('')
    const [profileImage, setProfileImage] = useState() //Background
    const [isBtnDisabled, setBtnDisabled] = useState(true)
    const { token, user_id } = getToken()
    const uploadImageRef = useRef()
    console.log(imageUrl)


    function handleFileUpload(e) {
        if (e.target.files?.length > 0) {
            setOverlay(false)
            setUploadedImage(e.target.files[0])
            setProfileImage(URL.createObjectURL(e.target.files[0]))
            setBtnDisabled(false)
        }
    }
    useEffect(() => {
        return dispatch(getProfile({ token: token, userId: user_id }))
    }, [])
    useEffect(() => {
        if (status === "fulfilled") {
            return setProfileImage(user?.profile_image)
        }
        return
    }, [status])
    useEffect(() => {
        if(imageUrl !==""){
             dispatch(updateProfileImageDB({ token: token, userId: user_id, profileImg: imageUrl }))
             setProfileImage(imageUrl)
        }
        return 
    }, [imageUrl])

    function updateProfilePhoto() {
        console.log(uploadedImage)
        dispatch(updateProfile({ image: uploadedImage }))
    }
    return (
        <>
            <div className="bio-wrapper">
                <div className="bio-profile-wrapper">
                    <input type="file" className="file-upload" ref={uploadImageRef} accept="image/png,image/jpeg,image/jpg" onChange={handleFileUpload} />
                    {isOverlay && <div className="profile-overlay" onClick={() => uploadImageRef.current.click()}><ImageIcon /></div>}
                    <img src={profileImage} className='bio-profile' alt="" />
                </div>
                <div className="details-wrapper">
                    <table>
                        <tr><td className="table-header"><strong>Username</strong></td><td>{user?.username}</td></tr>
                        <tr><td className="table-header"><strong>Bio</strong></td><td>{user?.bio}</td></tr>
                    </table>
                </div>
                <button className="primary-btn" disabled={isBtnDisabled} onClick={updateProfilePhoto}>Update Profile</button>
            </div>
            {status === "pending" && <div className="profile-loader"><img src={Loader} className="loader" alt="" /></div>}
        </>
    )
}


