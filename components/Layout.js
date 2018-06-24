import Header from './Header'
import Footer from './Footer'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div className="container">
    <Header />
    <div style={layoutStyle}>
      {props.children}
    </div>
    <Footer />
  </div>
)

export default Layout