const App = () => {
    return (
    <div>
        <FirstComponent />    
        <NamedComponent name="lucas"/>
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root")); 
