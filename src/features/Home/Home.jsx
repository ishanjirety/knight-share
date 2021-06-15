import React, { useEffect } from 'react'
import './Home.css'
import { PostCard } from '../Posts/Post'
import { useDispatch, useSelector } from 'react-redux'
import { setRoute } from '../globalSlice'
import { getPosts } from './homeSlice'
import { getToken } from '../../utils'
export function Home() {
    const dispatch = useDispatch();
    const { posts, status } = useSelector(state => state.home)
    const { token, user_id } = getToken()

    useEffect(() => {
        dispatch(setRoute("Home"))
        dispatch(getPosts({ token: token, userId: user_id }))
    }, [])
    useEffect(() => {
        console.log(posts, status)
    }, [posts, status])

    return (
        <div className="home">
            <div className="heading">
                <h1 className="page-heading">KnightShare</h1>
            </div>
            <div className="wrapper">
                {posts.map(({ img_url, like_count, content, comment_count, User: { profile_image, username } }) => {
                    return <PostCard imgUrl={img_url} content={content} like_count={like_count} comment_count={comment_count} profileImg={profile_image} username={username} />
                })}
            </div>
        </div>
    )
}


