import styles from "./Cabecalho.module.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import CabecalhoLink from "../CabecalhoLink";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo do Cine Tag" />
      </Link>
      <nav>
        <CabecalhoLink url="./">
            Home
        </CabecalhoLink>
        <CabecalhoLink url="./favoritos">
            Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
