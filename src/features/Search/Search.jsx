import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRoute } from '../globalSlice'
import { search, fetchUser, resetProfiles } from './searchSlice'
import { SearchLight } from '../../Svg'
import { ProfileListCard } from '../../Components'
import { getToken } from '../../utils'
import Loader from '../../Svg/Loader.svg'

import './Search.css'
import './Responsive.css'
export function Search() {
    const dispatch = useDispatch()
    const { status, profiles } = useSelector((state) => state.search);
    const [searchQuery, setSearchQuery] = useState('')
    const [timeOutRef, setTimeoutRef] = useState(0)
    const { token } = getToken()

    useEffect(() => {
        dispatch(setRoute("Search"))
        dispatch(fetchUser())
    }, [])

    useEffect(() => {
        if (searchQuery !== "") {
            clearTimeout(timeOutRef)
            const ref = setTimeout(() => {
                dispatch(fetchUser({ query: searchQuery, token: token }))
            }, 500)
            return setTimeoutRef(ref)
        } if (searchQuery === " " || searchQuery === "") {
            return dispatch(resetProfiles())
        }

    }, [searchQuery])
    return (
        <div className="search">
            <div className="search-wrapper">
                <div className="search-bar">
                    <SearchLight />
                    <input type="text" className="search-input" placeholder='Try "john alex" ' onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} />
                </div>
            </div>
            <div className="profile-listing">
                {status === "fulfilled" && profiles.map(({ username, profile_image, id }) => {
                    return <ProfileListCard imgUrl={profile_image} username={username} key={id}/>
                })}
                {status === "pending" && <div className="banner-loader p-56"><img src={Loader} className="loader" alt="" /></div>}
            </div>
        </div>
    )
}


