import React, { Component } from 'react'

export default class RenderWithSate extends Component {

    //this.state: thuộc tính chứa những giá trị thay đổi khi người dùng thao tác trên giao diện. Đây là thuộc tính có sẵn của Component
    state = {
        isLogin: false
    }

    // isLogin = false;
    userName = 'admin';

    renderContent = () => {
        if (this.state.isLogin) {
            return <p>Hello {this.userName}</p>;
        }
        return <button onClick={() => {
            this.login();
        }}>Đăng Nhập</button>;
    }

    login = () => {
        let newState = {
            isLogin: true
        }
        // Phương thức this.setSate là 1 phuong thức có sẵn của component làm 2 nhiệm vụ, 1 là thay đổi giá trị state, 2 là gọi this.render lại giao diẹn
        // This.setState là một phương thức bất đồng bộ
        this.setState(newState, () => {
            console.log(this.state.isLogin);
        });
    }

    render() {
        return (
            <div>
                {/* {this.isLogin ? <p>Hello {this.userName}</p> : <button>Đăng Nhập</button>} */}
                {this.renderContent()}
            </div>
        )
    }
}
