export const initialState = {
  lights: [],
  turnedOn: false
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
            lights:
              state.lights.length > 0
                ? [
                    ...state.lights,
                    {
                      id: state.lights[state.lights.length - 1].id + 1,
                      color: action.color,
                      isTurnedOn: false
                    }
                  ]
                : [
                    {
                      id: 0,
                      color: action.color,
                      isTurnedOn: false
                    }
                  ]
          };
    case "REMOVE_LIGHT":
      return {
        ...state,
        lights: state.lights.filter(el => el.lightId !== action.id)
      };
    default:
      return state;
  }
};
