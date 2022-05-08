const useDeliverQuantity = (props) => {
    const data = props.info;

    fetch(`https://boiling-taiga-43544.herokuapp.com/`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        return data;
}

export default useDeliverQuantity;