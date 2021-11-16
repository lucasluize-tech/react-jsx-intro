const App = () => {
    return (
        <div>
        <Person name='lucas' age='31' hobbies={['soccer','games']}/>
        <Person name='Anelise' age='25' hobbies={['reading','instagram']}/>
        <Person name='theodoro' age='5' hobbies={['ball','treats','naps']}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))