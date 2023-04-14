import { React, useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import './Blogs.css'
import { useStateContext } from '../../contexts/ContextProvider'
import { ChevronRightIcon } from '@chakra-ui/icons'
import blogimage from './blog image.png'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator, Image, Stack, Heading, Text, Button, Menu,
    MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const blogs = [
    {
        id: 1,
        title: "Blog Title",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Digital Research',
        image: blogimage
    },
    {
        id: 2,
        title: "Blog Title",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'DevOps',
        image: blogimage
    },
    {
        id: 3,
        title: "Blog Title",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Sales Intelligence',
        image: blogimage
    },
    {
        id: 4,
        title: "Blog Title",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Legal Consultant',
        image: blogimage
    },
    {
        id: 5,
        title: "Blog Title",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Digital Research',
        image: blogimage
    },
    {
        id: 6,
        title: "Blog Title",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Marketing Automation',
        image: blogimage
    },
    {
        id: 7,
        title: "Blog Title",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'DevOps',
        image: blogimage
    },
    {
        id: 8,
        title: "Blog Title",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Sales Intelligence',
        image: blogimage
    },
    {
        id: 9,
        title: "Blog Title",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Legal Consultant',
        image: blogimage
    },
    {
        id: 10,
        title: "Blog Title",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Marketing Automation',
        image: blogimage
    },
]

const Blogs = (props) => {
    const { mode } = useStateContext()
    const [category, setCategory] = useState(props.page)
    
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    
    return (
        <Layout>
            <div className='blogs-container' style={{ color: mode === "dark" ? "white" : "black" }}>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/Blogs'>Blogs</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <Menu>
                            <MenuButton>{category}</MenuButton>
                            <MenuList>
                                {/* MenuItems are not rendered unless Menu is open */}
                                <Link to='/Blogs' >
                                    <MenuItem onClick={() => { setCategory('All') }} color='black'>All</MenuItem>
                                </Link>
                                <Link to='/Blogs/Digital Research' >

                                    <MenuItem color='black' onClick={() => { setCategory('Digital Research') }}>Digital Research</MenuItem>
                                </Link>
                                <Link to='/Blogs/DevOps' >

                                    <MenuItem color='black' onClick={() => { setCategory('DevOps') }}>DevOps</MenuItem>
                                </Link>
                                <Link to='/Blogs/Sales Intelligence' >

                                    <MenuItem color='black' onClick={() => { setCategory('Sales Intelligence') }}>Sales Intelligence</MenuItem>
                                </Link>
                                <Link to='/Blogs/Legal Consultant' >

                                    <MenuItem color='black' onClick={() => { setCategory('Legal Consultant') }}>Legal Consultant</MenuItem>
                                </Link>
                                <Link to='/Blogs/Marketing Automation' >
                                    <MenuItem color='black' onClick={() => { setCategory('Marketing Automation') }}>Marketing Automation</MenuItem>

                                </Link>
                            </MenuList>
                        </Menu>
                        {/* <BreadcrumbLink href='#'>All</BreadcrumbLink> */}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="blogs-grid">

                    {category==='All'?
                    blogs.map((ele) => {
                        const { id, title, description, category, image } = ele
                        return (
                            <div className='blogs-grid-item'>
                                <Card maxW='sm' boxShadow='0px 0px 10px 3px rgba(0, 0, 0, 0.75)'>
                                    <CardBody >
                                        <Image
                                            src={image}
                                            alt='blog image'
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md' color={mode === 'dark' ? 'white' : 'black'}>{title}</Heading>
                                            <Text border='1px solid red' width='fit-content
                                            ' borderRadius='13px' color='red' padding='0px 5px' size='xs'> {category} </Text>
                                            <Text color={mode === 'dark' ? 'white' : 'black'}>
                                                <p style={{display:'-webkit-box',WebkitLineClamp:'2',WebkitBoxOrient:'vertical',overflow:'hidden'}}>{description}</p>
                                            </Text>

                                        </Stack>
                                    </CardBody>

                                    <CardFooter>

                                        <Link to={`/Blogs/${category}/posts/${title}/${id}`} className='text-red-500'>
                                            Read More
                                        </Link>


                                    </CardFooter>
                                </Card>
                            </div>

                        )

                    })
                :
                blogs.filter(Element=> Element.category===category).map((ele) => {
                    const { id, title, description, category, image } = ele
                    return (
                        <div className='blogs-grid-item'>
                            <Card maxW='sm' boxShadow='0px 0px 10px 3px rgba(0, 0, 0, 0.75)'>
                                <CardBody >
                                    <Image
                                        src={image}
                                        alt='blog image'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md' color={mode === 'dark' ? 'white' : 'black'}>{title}</Heading>
                                        <Text border='1px solid red' width='fit-content
                                        ' borderRadius='13px' color='red' padding='0px 5px' size='xs'> {category} </Text>
                                        <Text color={mode === 'dark' ? 'white' : 'black'}>
                                            {description}
                                        </Text>

                                    </Stack>
                                </CardBody>

                                <CardFooter>

                                    <Link to={`/Blogs/${category}/posts/${title}/${id}`} className='text-red-500'>
                                        Read More
                                    </Link>


                                </CardFooter>
                            </Card>
                        </div>

                    )

                })}
                </div>
            </div>
        </Layout>
    )
}

export default Blogs
