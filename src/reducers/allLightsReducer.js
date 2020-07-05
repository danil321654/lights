import {randomHexColor} from "./../other_funcs/randomHexColor";
export const initialState = {
  lights: [
    {id: 0, color: randomHexColor()},
    {id: 1, color: randomHexColor()},
    {id: 2, color: randomHexColor()},
    {id: 3, color: randomHexColor()},
    {id: 4, color: randomHexColor()}
  ],
  turnedOn: false,
  timer: 1000,
  quantity: 5
};
export const allLightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TURN_ON/OFF":
      return {...state, turnedOn: !state.turnedOn};
    case "ADD_LIGHT":
      return state.turnedOn
        ? state
        : {
            ...state,
            quantity: state.quantity + 1,
            lights:
              state.lights.length > 0
                ? [
                    ...state.lights,
                    {
                      id: state.lights[state.lights.length - 1].id + 1,
                      color: action.color
                    }
                  ]
                : [
                    {
                      id: 0,
                      color: action.color
                    }
                  ]
          };
    case "CHANGE_COLOR":
      console.log(action);
      return {
        ...state,
        lights: state.lights.map(el =>
          el.id === action.id ? {...el, color: action.color} : el
        )
      };
    case "REMOVE_LIGHT":
      return {
        ...state,
        lights: state.lights.filter(el => el.lightId !== action.id),
        quantity: state.quantity - 1
      };
    default:
      return state;
  }
};
