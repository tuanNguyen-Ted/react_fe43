const initialSate = {
    totalMoney: 100,
    listBet: [
        { id: 'bau', imgSrc: './img/bau.png', bet: 0 },
        { id: 'cua', imgSrc: './img/cua.png', bet: 0 },
        { id: 'nai', imgSrc: './img/nai.png', bet: 0 },
        { id: 'tom', imgSrc: './img/tom.png', bet: 0 },
        { id: 'ca', imgSrc: './img/ca.png', bet: 0 },
        { id: 'ga', imgSrc: './img/ga.png', bet: 0 },
    ],
    dices: [
        { id: 'bau', imgSrc: './img/bau.png' },
        { id: 'bau', imgSrc: './img/bau.png' },
        { id: 'bau', imgSrc: './img/bau.png' },
    ]
}

const GameBauCuaReducer = (state = initialSate, action) => {
    switch (action.type) {
        case 'SET_BET':
            let { totalMoney } = state;
            let listBet = [...state.listBet];
            let index = listBet.findIndex((item) => item.id === action.id);

            if (index !== -1) {
                if (action.increaseDecrease) {
                    if (totalMoney >= 10) {
                        totalMoney -= 10;
                        listBet[index].bet += 10;
                    }
                } else {
                    if (listBet[index].bet > 0) {
                        totalMoney += 10;
                        listBet[index].bet -= 10;
                    }
                }
            }
            return { ...state, listBet, totalMoney }
        default:

            break;
    }
    return { ...state };
}

export default GameBauCuaReducer;