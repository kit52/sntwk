let state = {
    messageData: {
        11: [{ "f": "x" }],
        22: []
    }
}
// for (let i of state.messageData) {
//     if (i == 1) {
//         console.log('well')
//     }
// }
for (let key in state.messageData) {
    if (key == 11) {
        state = {
            ...state,
            messageData: { ...state.messageData, ...state.messageData[key].push({ x: "fdf" }) }
        }

    } else {
        state = {
            ...state,
            messageData: { ...state.messageData, "x": [{ else: true }] }
        }

    }
}

console.log(state.messageData);
console.log(state.messageData[22]);