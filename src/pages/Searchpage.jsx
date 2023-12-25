import React from 'react'
import { GoSearch } from "react-icons/go";
import { getArtists } from "../firebase"
import { Flex, Spinner } from '@chakra-ui/react';
import { ScrollRestoration } from "react-router-dom";


function Searchpage() {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [search, setSearch] = React.useState("")
    const [inputValue, setInputValue] = React.useState("")
    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        async function loadData(){
            setLoading(true)
            try{
                const data = await getArtists()
                setData(data)
            } catch (err){
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        setSearch(inputValue)
    }

    let searchedArtist = data.filter((artist)=>{
        if(artist.name.toLowerCase().includes(search.toLowerCase())){
            return artist
        }
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
    
  return (
    <Flex direction={"column"} mx={"auto"}>
    <form className="search" onSubmit={handleSubmit}>
      <input 
        className='search-input' 
      placeholder='Search an artist by name' 
      type="search"
      value={inputValue}
      onChange={(e)=>{setInputValue(e.target.value)}}
      />
      <button 
      className='search-btn'
      >
        <GoSearch/>
      </button >
    </form>
    <div className='search-gallery'>
        {searchedArtist.length > 0 ? 
        <>
            <img className='artist-img' src={searchedArtist[0].avatar} alt={searchedArtist[0].name} />
            <div className='artist-title'>
              <h1>{searchedArtist[0].name}</h1>
              <small>{searchedArtist[0].bio}</small>
            </div>
            <p>{searchedArtist[0].presentation}</p>
            <small>Source: Wikipedia</small>
        </>
        : <h5>We could not find the artist you are looking for</h5>
        }
    </div>
    </Flex>
  )
}

export default Searchpage

/*
  let [input, setInput] = React.useState("")
  let [search, setSearch] = React.useState("")
  function setQuery(e){
    setInput(e.target.value)
  }
  const posts = data.map((post)=>{
    return(
        <img key={post.id} width={150} src={post.photo} alt={post.description}/>
    )
  })
  function handleSubmit(e){
    e.preventDefault()
      fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=art&query=${input}`)
      .then(res => res.json())
      .then(data => setSearch(data.urls.small))
  }
 */
