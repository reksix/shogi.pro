import bne from "./assets/bne.jpg";

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={bne} alt="shogi.pro"></img>
            <h2 className="card-title">Shogi.pro</h2>
            <p className="card-text">Shogi.Pro is a website makes billion of ppl connect.</p>
        </div>
    );
}

export default Card