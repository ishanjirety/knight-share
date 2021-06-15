import React, { useState } from 'react'
import './Post.css'
import { Comment, Like, LikeFilled } from '../../Svg'
import { addLike, deleteLike } from './postSlice'
import { getToken } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'


export function PostCard({ postId, imgUrl, content, like_count, comment_count, profileImg, username, liked }) {
    const { token, user_id } = getToken()
    const { status } = useSelector(state => state.likeSlice)
    const [isLiked, setIsLiked] = useState(liked)
    const dipatch = useDispatch()
    function LikeHandler() {
        dipatch(addLike({ token: token, userId: user_id, postId: postId }))
        setIsLiked(true)
    }
    function unLikeHandler() {
        dipatch(deleteLike({ token: token, userId: user_id, postId: postId }))
        setIsLiked(false)
    }


    return (
        <div className="post-card">
            <div className="user-info">
                <img className="user-profile-card" src={profileImg} alt="" />
                <p className="username">{username}</p>
            </div>
            <img src={imgUrl} alt="" className="post-image" />
            <div className="post-actions">
                {isLiked ? <span onClick={unLikeHandler}><LikeFilled /></span> : <span onClick={LikeHandler}><Like /></span>}
                <Comment />
            </div>
            <div className="caption">
                <p className="caption-content"><span className="username">{username}</span>{content}</p>
            </div>
        </div>
    )
}


