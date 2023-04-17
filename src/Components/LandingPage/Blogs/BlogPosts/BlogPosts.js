import {React, useEffect} from 'react'
import Layout from '../../../Layout/Layout'
import { useParams } from 'react-router-dom'
import { blogs } from '../../../Blogs/Blogs';
import './BlogPosts.css'
function BlogPosts() {

    const { id } = useParams()
    const blog = blogs.filter(blog => {
        if(id)
        return blog.id === parseInt(id)
    });
    console.log(blog, blogs)
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <Layout>
            <div className='grid grid-cols-3 blogpost-container'>

                <div className='md:col-span-2 col-span-3 blogpost-content-container'>
                    <div className='blogpost-title'>
                        {blog[0].title}
                    </div>
                    <span className="blogpost-category">
                        {blog[0].category}
                    </span>
                    <div className='blogpost-description'>
                        {blog[0].description}
                    </div>
                    <div className="blogpost-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, soluta consequatur ab quibusdam laboriosam excepturi autem enim voluptatem earum molestias. Consequatur enim aspernatur est libero, nam deleniti porro repellat ratione officia sapiente error sed eum nisi soluta ea laboriosam repellendus aperiam esse. Qui neque at architecto aspernatur porro obcaecati tempore dolore praesentium blanditiis?
                        <br/>
                        <br/>
                        Facere, similique eum! Illum deserunt eos ex modi eius inventore esse expedita blanditiis aperiam repellendus. Atque totam, ut aliquam autem quo enim doloremque. Libero totam eligendi cum explicabo eos corporis id, dolor maiores iusto odio voluptate sint placeat molestiae qui atque tenetur adipisci, aut quod aperiam cumque! Ullam asperiores quidem sequi laudantium numquam, sed aut, eaque quis explicabo quam tenetur ad architecto neque. Aspernatur vero atque asperiores, explicabo debitis consequuntur quisquam iure magni cum blanditiis placeat, esse amet expedita aut voluptas perferendis perspiciatis quaerat vitae a dignissimos minima ea voluptatibus assumenda? Tempore deserunt fugit quia temporibus quaerat eum hic nulla quae laudantium, vitae nostrum eos, corporis, assumenda quibusdam dolore.
                        <br/>
                        <br/>
                        Laborum soluta cum aliquid a molestiae molestias dolor temporibus, impedit esse. Perferendis nesciunt possimus necessitatibus eius repellat natus adipisci veritatis molestiae in architecto maxime iusto earum obcaecati eos aspernatur cumque laborum aliquam, odit accusamus vitae doloremque dolores corporis deserunt dignissimos! Natus nulla omnis sit dicta quia repellendus debitis fuga, et incidunt molestias reprehenderit voluptates fugit quisquam illo dolorum veritatis ipsam molestiae amet alias modi esse. Quasi et fugiat quod asperiores quo earum necessitatibus voluptatibus perferendis! Minus doloremque numquam alias amet quaerat, eveniet porro repellat tempore? Quam, eligendi quasi consequuntur molestiae quibusdam numquam! Itaque placeat eveniet assumenda delectus? Excepturi aliquam enim distinctio aspernatur tempora molestias, vitae nesciunt similique esse maxime.
                        <br/>
                        <br/>
                        
                         Consequatur minus ratione veniam quidem obcaecati voluptates commodi iure tenetur. Quia itaque, facilis corporis rem dolorum laborum! Fuga minima nulla adipisci, quaerat sint nesciunt vitae eos assumenda molestias explicabo tempore repellat rerum dignissimos corrupti cupiditate. Deleniti dolorem iusto nam incidunt numquam ipsa. Quisquam perferendis, recusandae accusantium libero hic minima maiores, suscipit quasi aperiam dolorem mollitia consequatur sapiente laboriosam architecto numquam vero officiis ut tempora quos corrupti? Eveniet quod modi sequi magnam, assumenda nulla, dolorem minima facilis reprehenderit hic soluta. Provident quidem nisi exercitationem dolorem non ducimus tempora impedit quo est perspiciatis quae voluptatibus iusto adipisci, sapiente neque repellat quod ipsa sit veritatis. Molestiae magni soluta, quo minus laudantium in nisi consectetur delectus. Nam maiores commodi earum tempora amet nulla explicabo, modi aut neque, eligendi nihil et ratione provident reiciendis odio, adipisci praesentium officiis laborum est aperiam non. 
                         <br/>
                         <br/>
                         Voluptatum animi similique reprehenderit quas quia, consequuntur cumque mollitia distinctio, expedita beatae nemo magnam nihil ab, neque earum porro perspiciatis repellat cupiditate. Molestiae temporibus quibusdam porro incidunt, nisi et non soluta error eum expedita vero a placeat, unde, sed explicabo fugit aspernatur doloremque corporis minima? Labore veniam veritatis provident asperiores hic repellendus dolores officiis earum reiciendis in magnam sint consectetur ipsa omnis, cumque aspernatur velit dicta quam assumenda qui itaque delectus facere. Fugit delectus obcaecati quas vero dolores, laudantium dolorem ipsa repudiandae unde qui ab natus ex adipisci ea est sint velit!
                    </div>
                </div>

                <div className='col-span-1'>

                </div>

            </div>
        </Layout>
    )
}

export default BlogPosts