const PublicidadSM = () => {
  return (
    <div className="d-flex d-lg-none" style={{justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '2rem'}}>
        <div style={{display: 'grid',gridTemplateColumns: '1fr', gap: '10vw' ,alignContent: 'center', marginTop: '2rem'}}>
          <div style={{ background: 'rgb(183, 210, 252)', border: '.1rem solid white', boxShadow: '0 0 10px white', borderRadius: '10px', width: '15rem', height: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '1.1rem'}}>
              <img src="images/best_prices.jpg" alt="banner prices" style={{height: '12rem', width: 'auto'}} />
            </div>
            <div>
              <p style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '.9rem'}}>The best prices, always within your reach.</p>
            </div>
          </div>
          <div style={{ background: 'rgb(183, 210, 252)', border: '.1rem solid white', boxShadow: '0 0 10px white', borderRadius: '10px', width: '15rem', height: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '1.1rem'}}>
              <img src="images/velocidad.jpg" alt="speed and velocity" style={{height: '12rem', width: 'auto'}} />
            </div>
            <div>
              <p style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '.9rem'}}>Fast, reliable and secure: buy with peace of mind.</p>
            </div>
          </div>
          <div style={{ background: 'rgb(183, 210, 252)', border: '.1rem solid white', boxShadow: '0 0 10px white', borderRadius: '10px', width: '15rem', height: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '1.1rem'}}>
              <img src="images/devoluciones.jpg" alt="devolutions" style={{height: '12rem', width: 'auto'}} />
            </div>
            <div>
              <p style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: '.9rem'}}>Easy returns, worry-free shopping.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PublicidadSM