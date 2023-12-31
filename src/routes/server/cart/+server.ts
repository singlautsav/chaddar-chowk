import { CartService } from '$lib/services'

export async function GET({ request, locals, cookies }) {
	let cart: any = {}
	cart = await CartService.fetchMyCart({
		cartId: cookies.get('cartId'),
		origin: locals.origin,
		sid: cookies.get('connect.sid'),
		storeId: locals.store?.id
	})
	locals.cartId = cart.cart_id
	locals.cartQty = cart.qty
	locals.cart = cart
	// cookies.set('cartId', cart.cart_id, { path: '/' })
	cookies.set('cartQty', cart.qty, { path: '/' })
	return new Response(JSON.stringify(cart))
}
