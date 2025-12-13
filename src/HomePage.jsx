import { useState, useEffect } from 'react';
import ControlPane from './ControlPane.jsx';
import RightPane from './RightPane.jsx';

function HomePage() {
    const [data, setData] = useState([]);
    const API_ENDPOINT = "http://127.0.0.1:8000";

    useEffect(() => {
        fetch(`${API_ENDPOINT}/api/playdata`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                return res.json();
            })
            .then((json) => setData(json.data))
            .catch((err) => console.error(err));
    }, []);

    console.log(data);

    return (
        <div className="main">
            <div className="control-pane">
                <ControlPane />
            </div>

            <div className="home-container">
                <div className="iteration">
                    
                </div>
            </div>

            <div className="control-pane">
                <RightPane />
            </div>
        </div>
    );
}

export default HomePage;
