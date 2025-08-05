import { portfolioList } from '../data/DataPortfolio'
import { Link } from 'react-router-dom'
import '../styles/Portfolio.css'

function Portfolio() {
  return (
    <section id='Portfolio'>
      <div className="wrapper">
        <h3>Portfolio</h3>
        <div className="grid">
          {
            portfolioList.map((item) => (
              <div className="item" key={item.id}>
                <Link to={`/portfolio/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio