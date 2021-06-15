import React from 'react'
import './Post.css'
import { Comment, Like, LikeFilled } from '../../Svg'
export function PostCard({ imgUrl, content, like_count, comment_count, profileImg, username }) {
    return (
        <div className="post-card">
            <div className="user-info">
                <img className="user-profile-card" src={profileImg} alt="" />
                <p className="username">{username}</p>
            </div>
            <img src={imgUrl} alt="" className="post-image" />
            <div className="post-actions">
                <Like />
                <Comment />
            </div>
            <div className="caption">

                <p className="caption-content"><span className="username">{username}</span>{content}</p>
            </div>
        </div>
    )
}


