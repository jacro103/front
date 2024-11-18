import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProtectedPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:37000/api/protected-route', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data', error);
                alert('No autorizado');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Datos Protegidos</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Cargando...</p>}
        </div>
    );
}

export default ProtectedPage;
