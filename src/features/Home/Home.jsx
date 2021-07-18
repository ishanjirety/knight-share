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
        console.log(posts)
    }, [posts, status])

    return (
        <div className="home ">
            <div className="heading p-18">
                <h1 className="page-heading">KnightShare</h1>
            </div>
            <div className="wrapper">
                {posts.map(({ id, img_url, like_count, content, comment_count, User: { profile_image, username }, likes }) => {
                    if (likes.find(like => like.liked_by === user_id)) {
                        return <PostCard imgUrl={img_url} content={content} like_count={like_count} comment_count={comment_count} profileImg={profile_image} username={username} postId={id} liked={true} key={id} />
                    } return <PostCard imgUrl={img_url} content={content} like_count={like_count} comment_count={comment_count} profileImg={profile_image} username={username} postId={id} liked={false} key={id} />
                })}
            </div>
        </div>
    )
}


