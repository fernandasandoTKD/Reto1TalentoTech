import {useEffect, useState} from 'react';
export const ListsWines = () => {
const [data, setData] = useState([]);
const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/wines/reds');
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setData(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='container text-center mb-4'>
         <h1>Wines List</h1>
         <div className="row justify-content-center">
            {data.map((item, index) => {
                return (
                    <div className="col-md-4" key={index} >
                        <div className="card mb-4 shadow-sm">
                           <div className="img-container">
                            <img src={item.image} className="card-img-top" alt="..." style={{ height: '100px', objectFit: 'cover' }}/>
                           </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.wine}</h5>
                                <p className="card-text">{item.winery}</p>
                                <p className="card-text text-muted">{item.location}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">{item.rating.average} / 5</small>
                                    <small className="text-muted">{item.rating.reviews} reviews</small>
                                </div>
                            </div>
                        </div>
                    </div>
                                )
                                })}
         </div>
    </div>
  )
}
