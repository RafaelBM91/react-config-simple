import * as React from 'react';
import Axios from 'axios';

export const Component: React.FunctionComponent<{}> = ({}) => {
    const [count, setCount] = React.useState(0);
    const [phone, setPhone] = React.useState('');
    const [result, setResult] = React.useState('');

    React.useEffect(() => {
        if (count > 0) {
            Axios.post(process.env.API + 'find_user', {
                id: '',
                email: '',
                phone: phone
            })
            .then(({data}) => {
                setResult(JSON.stringify(data))
            });
        }
    }, [count]);

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <button onClick={() => setCount(count + 1)}>Test Server ({count})</button>
            <br/>
            <div className="result-content">
                <p>{result}</p>
            </div>
        </div>
    );
}
