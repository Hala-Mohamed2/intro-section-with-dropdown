import './Home.css';


const Home = () => {
  return(
    <div className="home">


      <div className="home-up">
        <h1>Make remote work</h1>
        <p>Get your team in sync, no matter your location. Streamline processes, 
        create team rituals, and watch productivity soar.</p>
        <button>Learn more</button>
        <div className="icons">
          <img src="./images/client-databiz.svg" alt="" />
          <img src="./images/client-audiophile.svg" alt="" />
          <img src="./images/client-meet.svg" alt="" />
          <img src="./images/client-maker.svg" alt="" />
        </div>
      </div>

      <img className='hero' src="./images/image-hero-desktop.png" alt="" />


    </div>
  )
}



export default Home;