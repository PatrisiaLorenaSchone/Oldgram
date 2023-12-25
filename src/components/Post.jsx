import React from 'react'
// import { Link, useSearchParams } from "react-router-dom"
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
// import { GoComment } from "react-icons/go";
import { GoBookmark } from "react-icons/go";
import { GoBookmarkFill } from "react-icons/go";
import { getArtists } from "../firebase"
import PostFooter from './PostFooter';
import { Spinner } from '@chakra-ui/react';

function Post() {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [artworks, setArtworks] = React.useState([])
    const [isLiked, setIsLiked] = React.useState(false)
    const [isSaved, setIsSaved] = React.useState(false)

    React.useEffect(()=>{
        async function loadData(){
            setLoading(true)
            try{
                const data = await getArtists()
                setArtworks(data)
            } catch (err){
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [])

    const postsElements = artworks.map((post)=>{
        function likePost(){
            setIsLiked(!isLiked);
            post.artworks[0].likes = post.artworks[0].likes + 1;
            post.artworks[0].isLiked = !post.artworks[0].isLiked
            
        }
        function dislikePost(){
            setIsLiked(!isLiked);
            post.artworks[0].likes = post.artworks[0].likes - 1;
            post.artworks[0].isLiked = !post.artworks[0].isLiked
        }
        function savePost(){
            setIsSaved(!isSaved)
            post.artworks[0].isSaved = !post.artworks[0].isSaved
        }
      return (
        <main key={post.id} className="post">
            <div className="post-header">
                <img className="avatar-img" src={post.avatar}/>
                <div className="post-header-txt">
                    <b>{post.name}</b>
                    <p>{post.location}</p>
                </div>
            </div>
            <div className={`painting-frame-${post.artworks[0].orientation}`}>
                <img className={`painting-${post.artworks[0].orientation}`} src={post.artworks[0].photo} onDoubleClick={post.artworks[0].isLiked ? dislikePost : likePost}/>
            </div>
            <div className="post-details">
            <div className="post-icons">
            {post.artworks[0].isLiked ? 
              <GoHeartFill className='heart-icon' fill="brown" onClick={dislikePost}/> 
            : <GoHeart className='heart-icon' fill='#232323' onClick={likePost}/>}
            {post.artworks[0].isSaved ? 
            <GoBookmarkFill className='heart-icon' fill="black" onClick={savePost}/>
            : <GoBookmark className='heart-icon' fill='#232323'  onClick={savePost}/>}
            </div>
            <b>{post.artworks[0].likes} likes</b>
            <p className="post-description"> <b>{post.name}: </b> "{post.artworks[0].description}"</p>
            </div>
            {/* <PostFooter/> */}
        </main>
      )
    })

    if (loading) {
        return( 
            <Spinner
            mt={300}
            mx={"auto"}
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='gold'
            size='xl'
          />
        )
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return(
        <div>{postsElements}</div>
    )

}

export default Post



              
    