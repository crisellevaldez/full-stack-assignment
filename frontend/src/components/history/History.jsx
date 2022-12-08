import { useState, useEffect  } from 'react'

const History = () => {

    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const getHistory = async () =>{
            const response = await fetch('/api/logs')
            const json = await response.json()

            if (response.ok){
                setLogs(json)
            }
            
        }

        getHistory()
    }, [])

    return (
        <div>History</div>
    )
}

export default History