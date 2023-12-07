import { render } from "solid-js/web";
import AddToCart from "./AddToCart";

/**
 * making a solid-js component work in a react ctx
 * instead of adding addToCart to the app.jsx
 * create a render func to display the component
 * @param {*} el 
 * @param {*} id 
 */
export default function placeAddToCart(el, id) {
    render(() => <AddToCart id={id} />, el);
}