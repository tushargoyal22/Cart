import React from 'react';

class CartItem extends React.Component {

    constructor (){
        super();

        this.state = {
            price: 999,
            title : 'Phone',
            qty : 1,
            img : ''
        }
    }

    increaseQuantity = () => {
        // setState form 1
        this.setState({
            qty: this.state.qty + 1 // shallow merging
        });
    }

    decreaseQuantity = () => {

        const { qty } = this.state;

        if(qty === 0){
            return;
        }
        
        // setState form 2
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1 // shallow merging
            }
        });
    }


    render(){
        const { price , title , qty} = this.state;

        return(

        <div className = "cart-item">
            <div className = "left-block">
                <img style={styles.image} />
            </div>

            <div className = "right-block">
                <div style={{ fontSize: 25}}> {title}</div>
                <div style={{ fontSize: '#777'}}> Rs {price} </div>
                <div style={{ fontSize: '#777'}}> Quantity: {qty} </div>

                <div className="cart-item-actions">
                     {/* Buttons */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/992/992651.png"
                        onClick = {this.increaseQuantity}    
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/128/992/992683.png"
                        onClick = {this.decreaseQuantity}
                    />
                    <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/512/3096/3096673.png"/>

                </div>
            </div>
        </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;
