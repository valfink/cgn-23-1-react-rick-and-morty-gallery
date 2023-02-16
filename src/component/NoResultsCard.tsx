import "./NoResultsCard.css";

export default function NoResultsCard() {
    return (
        <div className={`card empty`}>
            <h2>No results</h2>
            <img src={"/scared-morty.jpg"} alt={"No results"}/>
            <p>Please try another search!</p>
        </div>
    );
}