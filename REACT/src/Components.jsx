
function Biryani(props) {
    return (
        <>
        <center>
           <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
</center>
<center>
            <div>
               <center> <h1 style={{ color: 'red' }}>Biryani</h1></center>
                <p>{props.name} is a popular Indian dish.</p>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://tse2.mm.bing.net/th/id/OIP.0csI89pXHQSxumqiZz_tIwHaE8?r=0&pid=Api&P=0&h=180" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Garam Garam Biryani re ..</p>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://tse2.mm.bing.net/th/id/OIP.0csI89pXHQSxumqiZz_tIwHaE8?r=0&pid=Api&P=0&h=180" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Eat and Tear ur Shirts.</p>
                </div>
            </div>
            </center>
        </>
    );
}  
export default Biryani;