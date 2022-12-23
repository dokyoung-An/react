import { useParams } from "react-router-dom";

function Coin() {

interface Params {
    coinId:string;
}

    const {coinId} = useParams<Params>();

    return <h1>Coin:{coinId}</h1>;
}

export default Coin;