let today = new Date()


const App = () => {
    return (
        <div>
        <Tweet username="lucas" name="lucas" date={today.toString()}
        msg="This is the first Tweet 🥳"/>
        <Tweet username="lise" name="Anelise" date={today.toString()}
        msg="This is the second Tweet 🙋"/>
        <Tweet username="Theo" name="Theo" date={today.toString()}
        msg="This is the Third Tweet 🔥"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))