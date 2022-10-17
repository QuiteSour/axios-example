class Menu extends React.Component
{
    constructor() {
        super()
        this.state = {
            sResponse: "Response will show here."
        }

        
        // NOTE: Functions need to be bind to be used.
        this.TestGet = this.TestGet.bind(this);
        this.DisplayResponse = this.DisplayResponse.bind(this);
    }

    render()
    {
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        );
    }

    /////////////////////////////////////////////////////////////////////
    // Function to Test GET with Server
    /////////////////////////////////////////////////////////////////////
    TestGet()
    {
        axios.get('http://localhost:3000/api', { params: { message: "Hello World!" } })
        .then((response) => {
            console.log(response.data); //View in Browser's Developer Tools

            this.DisplayResponse(response.data);
        })
        .catch(function (error) {
            this.DisplayResponse(error);
            console.log(error);
        });
    }

    /////////////////////////////////////////////////////////////////////
    // Function to Display Server Response
    /////////////////////////////////////////////////////////////////////
    DisplayResponse(objData)
    {
        console.log("DisplayResponse: " + JSON.stringify(objData));
        this.setState({
            sResponse: JSON.stringify(objData)
        });
    }

}

ReactDOM.render(
    React.createElement(Menu, {}),
    document.getElementById('root')
);


