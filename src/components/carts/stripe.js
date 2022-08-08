import StripeCheckout from 'react-stripe-checkout';


const Stripe = ({total}) => {

    console.log('IN STRIPE ',total);


    return(
        <>

        <div>
 
                <StripeCheckout
                    stripeKey = "pk_test_51LUZ1VBiP5RJVuISbJ5woJ2ONE6CzCuzmX2lhy72gawpunhS9CXEsUop9WvyJ92IEsxv52y2NKfmS9rcl1ogpEZ900A0HIoyMl"
                    // token = {total}
                    amount = {total * 100}

                    label = "Purchase"
                    shippingAddress
                />
        </div>


        </>
    )
}


export default Stripe


    // GOES INSIDE RENDER
//     <StripeCheckout
//     stripeKey = "pk_test_51LUZ1VBiP5RJVuISbJ5woJ2ONE6CzCuzmX2lhy72gawpunhS9CXEsUop9WvyJ92IEsxv52y2NKfmS9rcl1ogpEZ900A0HIoyMl"
//     token = {handleToken}
//     amount = {1 * 100}
//     label = "ButtonLabel"
//     shippingAddress
//     // can add image
//     // use 42424242 four twos for CC number always


// />