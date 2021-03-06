import {initialState, allLightsReducer} from "./allLightsReducer";

describe("big reducer test", () => {
  it("should return changed state", () => {
    let firstState = allLightsReducer(initialState, {
      type: "ADD_LIGHT",
      color: "red"
    });
    expect(firstState.lights).toEqual([
      ...initialState.lights,
      {id: firstState.lights.length - 1, color: "red", isTurnedOn: false}
    ]);
    let secondState = allLightsReducer(firstState, {
      type: "ADD_LIGHT",
      color: "blue"
    });
    expect(secondState.lights).toEqual([
      ...firstState.lights,
      {id: secondState.lights.length - 1, color: "blue", isTurnedOn: false}
    ]);
    let thirdState = allLightsReducer(firstState, {
      type: "REMOVE_LIGHT",
      id: secondState.lights.length - 1
    });
    expect(thirdState.lights).toEqual(firstState.lights);
  });
});
