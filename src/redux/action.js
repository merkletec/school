export function AddDiscount(discount) {
  return {
    type: 'ADD_Discount',
    payload: {
      discount,
    },
  }
}
export function AddInformation(information) {
  return {
    type: 'ADD_Information',
    payload: {
      information,
    },
  }
}
export function AddLoginState(state) {
  return {
    type: 'ADD_LoginState',
    payload: {
      state,
    },
  }
}
