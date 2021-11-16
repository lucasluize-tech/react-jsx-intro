const Person = ({name, age, hobbies}) =>{
    let short;
    if (name.length > 8){
        short = name.slice(0,6)
    }else short = name
    return (
        <div>
            <p>Learn some information about this person</p>
            <h2>{short}</h2>
            <h3>{age > 18 ? "please go vote": "you must be 18"}</h3>
            <ul> Hobbies:
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
    
}