import {React, useState, useEffect} from 'react'

function RightPane(){
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

return(
    <>
    <div className="rightpane-container">
            <ul>
                {data.map((element) => (
                    
                    <li key={element.id} className="iterate-right">
                                Surname: {element.surname}{"   "}
                                Firstname: {element.name} 
                                <button className="right-but">Delete</button>
                            </li>))}
            </ul>

    </div>
    
    </>

)

}
export default RightPane