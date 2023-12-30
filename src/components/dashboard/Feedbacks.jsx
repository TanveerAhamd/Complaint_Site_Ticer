import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feedbacks = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://server-delta-mocha.vercel.app/api/feedbacks'); // Replace with your API endpoint
                setData(response.data.feedbacks);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container my-5'>
            <h2 className='text-center mb-2'>Fedbacks from our valuable students</h2>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.Name}</td>
                                <td>{item.Contact}</td>
                                <td style={{ width: "70%" }}>{item.FeedbackMessage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Feedbacks;
