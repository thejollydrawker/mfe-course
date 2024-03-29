import { createEffect, createSignal, Show } from "solid-js";
import { jwt, addToCart } from "cart/cart";

export default ({id}) => {
    const [loggedIn, setLoggedIn] = createSignal(false);

    createEffect(() => {
        jwt.subscribe((value) => {
            setLoggedIn(value);
        })
        return () => jwt.unsubscribe();
    });

    return (
        <Show when={loggedIn()}>
            <button 
                onClick={() => addToCart(id)}
                className="bg-blue-500 text-white rounded-md py-2 px-5 text-sm transform transition hover:scale-125 duration-300 ease-in"
            >
                Add to cart
            </button>
        </Show>
    );
}