redux toolkit work some what different from the core-redux 

in core redux we can get state by using :- 

useSelector(state=>state.value) ........... 

here we have to mention the name of the reducer after the state. like this :- 

useSelector(state=>state.cart.value) ...........

and the values passed to the addToCart should be in the form of the object like this :-

 addToCart({
                price: product.price,
                title: product.title,
                id: product.id,
                thumbnail: product.thumbnail,
                description: product.description,
          })
