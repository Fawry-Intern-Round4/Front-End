import { State, Action, StateContext } from '@ngxs/store';
import { OrderRequestItem } from '../../models/OrderRequestItem/order-request-item';

export class AddToCart {
  static readonly type = '[Cart] Add item';
  constructor(public payload: OrderRequestItem) {}
}

export class RemoveFromCart {
  static readonly type = '[Cart] Remove item';
  constructor(public payload: number) {} 
}

@State<OrderRequestItem[]>({
  name: 'cart',
  defaults: []
})

export class CartState {
  @Action(AddToCart)
  add({ getState, setState }: StateContext<OrderRequestItem[]>, { payload }: AddToCart) {
    const state = getState();
    setState([...state, payload]);
  }

  @Action(RemoveFromCart)
  remove({ getState, setState }: StateContext<OrderRequestItem[]>, { payload }: RemoveFromCart) {
    setState(getState().filter(item => item.productId !== payload));
  }
}
