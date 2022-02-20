import { Layout } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'

import './App.css'

import CharsList from './components/CharsList/CharList'
import starsWarsLogo from './assets/swlogo.png'

function App() {
  return (
    <Layout className="container">
      <Header className="header">
        <img src={starsWarsLogo} alt="star wars logo" />
      </Header>
      <Content className="content">
        <CharsList />
      </Content>
    </Layout>
  )
}

export default App
