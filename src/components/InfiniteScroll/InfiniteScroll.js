import {useState, useRef, useCallback} from 'react'
import usePosts from '../../hooks/usePosts'
import Post from '../Post/Post'
import Stack from "@mui/material/Stack"
import Button from '@mui/material/Button'


const InfiniteScroll = () => {
    const [pageNum, setPageNum] = useState(0)
    const {
        isLoading,
        isError,
        error,
        results,
        hasNextPage
    } = usePosts(pageNum)

    const intObserver = useRef()
    const lastPostRef = useCallback(post => {
        if (isLoading) return

        if (intObserver.current) intObserver.current.disconnect()

        intObserver.current = new IntersectionObserver(posts => {
            if (posts[0].isIntersecting && hasNextPage) {
                console.log('We are near the last post!')
                setPageNum(prev => prev + 1)
            }
        })

        if (post) intObserver.current.observe(post)
    }, [isLoading, hasNextPage])

    if (isError) return <p className='center'>Error: {error.message}</p>

    const content = results.map((post, i) => {
        if (results.length === i + 1) {
            return <Post ref={lastPostRef} key={i} post={post}/>
        }
        return <Post key={i} post={post}/>
    })

    return (
        <Stack alignItems="center" spacing={2}>
            <ul>
                <li>
                    {content}
                </li>
            </ul>
            {isLoading && <p className="center">Loading More Posts...</p>}
            <Button variant="outlined" href="#top" sx={{color: "#7A939C", width: "14rem"}}>
                Back to Top
            </Button>
        </Stack>
    )
}
export default InfiniteScroll