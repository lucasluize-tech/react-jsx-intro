const Tweet = (props) => {
    return (
        <div class="card w-75">
            <div class="card-body">
                <h3 class="card-title">{props.username}</h3>
                <p class="card-text">{props.msg}</p>
                <a href="#" class="btn btn-primary">Like</a>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{props.name}</li>
                <li class="list-group-item">{props.date}</li>
            </ul>
        </div>
    )
}