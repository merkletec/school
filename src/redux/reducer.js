import { combineReducers } from 'redux'

function discounts(state = [], action) {
  switch (action.type) {
    case 'ADD_Discount': {
      return [
        ...state,
        {
          discount: action.payload.discount,
        },
      ]
    }
    default:
      return state
  }
}
function informations(state = [], action) {
  switch (action.type) {
    case 'ADD_Information': {
      return [
        ...state,
        {
          information: action.payload.information,
        },
      ]
    }
    default:
      return state
  }
}

const discountsApp = combineReducers({
  discounts,
  informations,
})
export default discountsApp
