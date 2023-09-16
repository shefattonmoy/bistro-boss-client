import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="Check It Out" heading="Featured Items"></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImage} />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam vel eos laudantium aut consequuntur illo culpa sequi reprehenderit minus eveniet et consequatur soluta necessitatibus obcaecati cum, debitis animi saepe quae omnis numquam veniam odit! Aliquam qui quod, amet beatae at est consequuntur, non earum deleniti autem molestiae quisquam nam?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;