import React from 'react'
import Layout from '../../../Layout/Layout'
import { useParams } from 'react-router-dom'
import { blogs } from '../../../Blogs/Blogs';

function BlogPosts() {

    const { id } = useParams()
    const blog = blogs.filter(blog => {
        if(id)
        return blog.id === parseInt(id)
    });
    console.log(blog, blogs)

    return (
        <Layout>
            <div className='grid grid-cols-3'>

                <div className='col-span-2'>
                    <div>
                        {blog[0].title}
                    </div>
                    <div>
                        {blog[0].description}
                    </div>
                </div>

                <div className='col-span-1'>

                </div>

            </div>
        </Layout>
    )
}

export default BlogPosts