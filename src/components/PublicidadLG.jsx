const PublicidadLG = () => {
  return (
    <div className="d-none d-lg-flex" style={{justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '2rem'}}>
        <div style={{display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)', gap: '10vw' ,alignContent: 'center', marginTop: '2rem'}}>
          <div style={{ background: 'rgb(183, 210, 252)', border: '.1rem solid white', boxShadow: '0 0 10px white', borderRadius: '10px', width: '15rem', height: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '1.1rem'}}>
              <img src="images/best_prices.jpg" alt="banner prices" style={{height: '17rem', width: 'auto'}} />
            </div>
            <div>
              <p style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '1.1rem'}}>The best prices, always within your reach.</p>
            </div>
          </div>
          <div style={{ background: 'rgb(183, 210, 252)', border: '.1rem solid white', boxShadow: '0 0 10px white', borderRadius: '10px', width: '15rem', height: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '1.1rem'}}>
              <img src="images/velocidad.jpg" alt="speed and velocity" style={{height: '17rem', width: 'auto'}} />
            </div>
            <div>
              <p style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '1.1rem'}}>Fast, reliable and secure: buy with peace of mind.</p>
            </div>
          </div>
          <div style={{ background: 'rgb(183, 210, 252)', border: '.1rem solid white', boxShadow: '0 0 10px white', borderRadius: '10px', width: '16rem', height: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '1.1rem'}}>
              <img src="images/devoluciones.jpg" alt="devolutions" style={{height: '17rem', width: 'auto'}} />
            </div>
            <div>
              <p style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '1.1rem'}}>Easy returns, worry-free shopping.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PublicidadLG