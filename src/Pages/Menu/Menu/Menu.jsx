import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg';
import dessertImage from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImage from '../../../assets/menu/pizza-bg.jpg';
import saladImage from '../../../assets/menu/salad-bg.jpg';
import soupImage from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImage} title="Our Menu"></Cover>
            {/* Main Cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* Offered Menu Items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert Menu Items */}
            <MenuCategory
                items={dessert}
                title="Dessert"
                img={dessertImage}
            ></MenuCategory>
            {/* Pizza Menu Items */}
            <MenuCategory
                items={pizza}
                title="Pizza"
                img={pizzaImage}
            ></MenuCategory>
            {/* Salad Menu Items */}
            <MenuCategory
                items={salad}
                title="Salad"
                img={saladImage}
            ></MenuCategory>
            {/* Soup Menu Items */}
            <MenuCategory
                items={soup}
                title="Soup"
                img={soupImage}
            ></MenuCategory>
        </div>
    );
};

export default Menu;