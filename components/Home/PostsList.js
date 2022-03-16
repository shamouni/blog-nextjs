import React from 'react'
import Heading from './Heading'
import Pagination from './Pagination'
import PostBox from './PostBox'
import PostItem from './PostItem'

const PostsList = ({ posts = [], trends= [], pages, page }) => {

    return (
        <section id="posts" className='py-4'>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <Heading title="Latest Posts" />
                        { posts.map(i => <PostItem post={i} key={i.id} />) }
                        <Pagination pages={pages} page={page} />
                    </div>

                    <div className="col col-lg-4 d-none d-lg-block">
                        <div className='pl-5'>
                            <Heading title="Trends" />
                            { trends.map(i => <PostBox post={i} key={i.id} />) }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostsList
