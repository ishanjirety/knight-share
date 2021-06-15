import React, { useState, useEffect, useRef } from 'react'
import './CreatePost.css'
import { updateImage, updatePost, addCaption, addUserId, resetInitialState } from './creeatePostSlice'
import { useSelector, useDispatch } from 'react-redux'
import { ImageIcon } from '../../Svg'
import { getToken } from '../../utils'
import Loader from '../../Svg/Loader.svg'
export function CreatePost() {
    const [isOverlay, setOverlay] = useState(true)
    const [uploadedImage, setUploadedImage] = useState('')
    const [profileImage, setProfileImage] = useState() //Background
    const { token } = getToken()
    const dispatch = useDispatch()
    const { image, caption, userId, imageUploadStatus, postUploadStatus } = useSelector(state => state.postSlice)
    const uploadImageRef = useRef()

    function handleFileUpload(e) {
        if (e.target.files?.length > 0) {
            setOverlay(false)
            setUploadedImage(e.target.files[0])
            setProfileImage(URL.createObjectURL(e.target.files[0]))

        }
    }
    useEffect(() => {
        if (image !== "") {
            console.log('here')
            dispatch(updatePost({ image: image, caption: caption, userId: userId, token: token }))
            dispatch(resetInitialState())
        }
    }, [image])

    useEffect(() => {
        const { user_id } = getToken()
        dispatch(addUserId(user_id))
    }, [])
    function addPost() {
        console.log('here')
        dispatch(updateImage({ image: uploadedImage }))
        // 
    }

    return (
        <>
            <div className="heading">
                <h1 className="page-title">New Post</h1>
            </div>
            <div className="create-post">
                <div className="image-container">
                    <input type="file" className="file-upload" ref={uploadImageRef} accept="image/png,image/jpeg,image/jpg" onChange={handleFileUpload} />
                    {isOverlay && <div className="overlay" onClick={() => uploadImageRef.current.click()}><ImageIcon /><p>Add Post</p></div>}
                    <img src={profileImage} className='uploaded-image' alt="" />
                </div>
                <textarea className="caption-container" placeholder="Create caption" rows={5} columns={5} onChange={(e) => dispatch(addCaption(e.target.value))} />
                <div className="post-action">
                    <button className="primary-btn" onClick={addPost}>Post</button>
                </div>
                {postUploadStatus === 'pending' || imageUploadStatus === 'pending' && <div className="post-loader"><img src={Loader} className="loader" alt="" /></div>}
            </div>
        </>
    )
}


