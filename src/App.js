import { Component } from 'react';
import ProductList from './components/ProducList/ProductList';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ClassCounter from './components/ClassCounter/ClassCounter';
import FunctionalCounter from './components/ClassCounter/FunctionalCounter';
import ClassTimer from './components/ClassTimer';
import FuncionalTimer from './components/FunctionalTimer';
import wrapper from './components/Hoc/Wrapper';
import ClickCounter from './components/hocExample/ClickCounter';
import HoverCounter from './components/hocExample/HoverCounter';
class App extends Component {
    state = {
        products: [
            {
                title: "React.js",
                id: 1,
                price: "99 $",
                quantity: 1
            },
            {
                title: "Next.js",
                id: 2,
                price: "89 $",
                quantity: 2
            },
            {
                title: "Javascript",
                id: 3,
                price: "79 $",
                quantity: 3
            },
        ],
        isShow: true,
    }
    deleteHandler = (id) => {
        const filterProduct = this.state.products.filter((value) => value.id !== id);
        this.setState({ products: filterProduct });
    }
    incrementHandler = (id) => {
        const productsClone = [...this.state.products]
        const selectedItem = productsClone.find((value) => value.id === id);
        selectedItem.quantity++;
        this.setState({ products: productsClone });
    }
    changeHandler = (event, id) => {
        const productsClone = [...this.state.products]
        const selectedItem = productsClone.find((value) => value.id === id);
        selectedItem.title = event.target.value;
        this.setState({ products: productsClone });
    }
    decrementHandler = (id) => {
        const productsClone = [...this.state.products];
        const selectedItem = productsClone.find((value) => value.id === id);
        selectedItem.quantity--;
        if (selectedItem.quantity <= 0) {
            const filterProduct = productsClone.filter((value) => value.id !== id);
            this.setState({ products: filterProduct });
        } else {
            this.setState({ products: productsClone });
        }
    }
    render() {
        return (
            <>
                <ClickCounter />
                <HoverCounter />
                {/* <NavBar componentCounting={this.state.products.filter(value => value.quantity > 0).length} />
                <h1>Shoping App</h1>
                <ProductList
                    products={this.state.products}
                    remove={this.deleteHandler} inceement={this.incrementHandler}
                    change={this.changeHandler} decremnet={this.decrementHandler} /> */}
            </>
        )
    }
}
export default wrapper(App, 'container');