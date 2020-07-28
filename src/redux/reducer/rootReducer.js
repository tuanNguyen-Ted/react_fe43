import { combineReducers } from 'redux';

// eslint-disable-next-line
import BaiTapGioHangReducer from './BaiTapGioHangReducer'

import GameBauCuaReducer from './GameBauCuaReducer';


// Store tổng của ứng dụng chứa tất cả các state của ứng dụng
const rootReducer = combineReducers({
    // Nơi khai báo các state theo từng nghiệp vụ
    // stateBaiTapGioHang: BaiTapGioHangReducer

    GameBauCuaReducer,

});

export default rootReducer;