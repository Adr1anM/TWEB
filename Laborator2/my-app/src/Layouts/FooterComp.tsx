import {Layout} from 'antd'

const {Footer} = Layout

const FooterComp = () => {
    return (
        <Footer style={{textAlign: 'center',position: 'fixed', bottom: 0, right:750}}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    )
}

export default FooterComp