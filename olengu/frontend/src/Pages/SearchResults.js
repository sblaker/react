import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SearchItemBox from '../Components/SearchItemBox';
import SearchResultsPopup from '../Components/SearchResultsPopup';
import SearchItemPage from './SearchItemPage';
import axios from 'axios';

function SearchResults() {

    const [alert, setAlertVisibility] = useState(false);
    const onClosingAlert = () => {
        setAlertVisibility(false);
    }

    var filter
    if (alert) {
        filter = <SearchResultsPopup onClosing={onClosingAlert}/>
    }
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        var citta = localStorage.getItem("citta");
        await axios.get(`http://localhost:3500/api/getAnnunciByLuogo/${citta}`, {"Access-Control-Allow-Origin":"http://localhost:3500"})
        .then(function (response) {
            console.log(response.data)
            setItems(response.data);
          }
        ).catch(function (error) {
          alert(error);
      });
    };
    
    const filter_popup = () => {
        setAlertVisibility(true);
    }
    
    return(
        <div className="containerFluid">
            <div className="row">
                <button onClick={filter_popup} className="btn-gradient searchresults-filter">Filtri</button>
            </div>
            <div className="row">
                <div className="col">
                    {filter}
                    {items.map(item => (
                        <h5 key={item.id}>
                            <Link to={`/SearchResults/${item.id_ann}`} >
                                <SearchItemPage item={item} />
                            </Link>
                        </h5>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchResults;