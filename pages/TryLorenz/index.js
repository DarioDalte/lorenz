import { useEffect, useState } from "react";
import classes from "./TryLorenz.module.css";
import Button from "../../UI/Button/Button";
import Head from "next/head";
import StepProgressBar from "../../components/StepProgressBar/StepProgressBar";
import { Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

function TryLorenz() {
  const [percent, setPercent] = useState(50);

  useEffect(() => {
    setPercent(100);
  }, []);
  return (
    <>
      <Head>
        <title>Procedura di invio dati</title>
      </Head>
      <StepProgressBar percent={percent} />

      <Container maxWidth="md">
        <h1 className="title">Procedura di invio dati</h1>
        <p className="description">
          Dopo aver capito come funziona la cifrante Lorenz SZ40/42, proviamo a
          vedere la procedura che i tedeschi seguivano per scambiarsi dati
          crittografati. <br />
          <br />
          Tale procedura si può provare direttamente su un simulatore online che
          è possibile trovare{" "}
          <Link href="https://lorenz.virtualcolossus.co.uk/LorenzSZ/">
            <a className={classes.link} target="_blank">
              qui
            </a>
          </Link>
        </p>
        <h2 className="subtitle">Primo passo</h2>
        <p className="description">
          Come primo passo, prima di comunicare, dobbiamo spegnere la macchina
          Lorenz, premendo la levetta centrale in modo tale da portarla su{" "}
          <b>Aus</b>.
          <br />
          Così facendo saremo in grado di comunicare in plain text.
        </p>
        <h2 className="subtitle">Secondo passo</h2>
        <p className="description">
          Dopo averla spenta, bisogna selezionare una posizione iniziale per
          ogni rotore utilizzando la tabella chiamata <b> Spruchtafel</b> che
          abbiamo visto nella pagina precedente.
        </p>
        <h2 className="subtitle">Terzo passo</h2>
        <p className="description">
          A questo punto dovremmo stabilire la connessione con il destinatario,
          cosa che sul simulatore non si può fare.
        </p>
        <h2 className="subtitle">Quarto passo</h2>
        <p className="description">
          Successivamente dobbiamo trasmettere la configurazione iniziale dei
          nostri rotori al destinatario, come avevamo visto nella pagina
          precedente. <br /> <br />
          Tale configurazione viene chiamata <b>{"'QEP'"}</b>, quindi scriviamo
          QEP seguito dall{"'"}alfabeto fonico tedesco corrispondente alle
          lettere della configurazione, sul simulatore, per fare più velocemente
          possiamo cliccare sul tasto <b>{"'Send key letters'"}</b> sotto alla
          Spruchtafel, in modo che tale procedura venga fatta automaticamente
          dal simulatore.
        </p>
        <h2 className="subtitle">Quinto passo</h2>
        <p className="description">
          A questo punto sia mittente che destinatario devono impostare le
          posizioni della configurazione sui dodici rotori, anche qui, per fare
          più velocemente si può direttamente cliccare sul tasto{" "}
          <b>{"'Set wheels'"}</b>
        </p>
        <h2 className="subtitle">Sesto passo</h2>
        <p className="description">
          Infine, accendiamo la macchina Lorenz, scriviamo il nostro testo e
          potremo vedere il risultato cifrato nella riga <b>{"'Send/Recv'"}</b>.
        </p>
        <div className={classes["img-text"]}>
          <p className={classes["paragraph"]}>Nella foto vediamo i campi:</p>
          <ul className={classes["list"]}>
            <li className={classes["item"]}>
              <b>Input character:</b> Lettera inserita dal mittente
            </li>
            <li className={classes["item"]}>
              <b>Psi Key Letter:</b> Lettera generata dai rotori Psi
            </li>
            <li className={classes["item"]}>
              <b>Chi Key Letter:</b> Lettera generata dai rotori Chi
            </li>
            <li className={classes["item"]}>
              <b>Output character:</b> Lettera crittografata inviata al destinatario, ottenuta
              facendo modulo-2 tra la lettera inserita e le due lettere generate dai rotori Psi e Chi
            </li>
          </ul>
        </div>

        <div className={`${classes["img-container"]}`}>
          <Image
            className={classes["img"]}
            src="/tapes.png"
            alt="Lorenz simulator UI"
            width={900}
            height={600}
          />
        </div>
        <div className="btn-container">
          <Button path="../Algorithm/prev" action="prev" />
        </div>
      </Container>
    </>
  );
}

export default TryLorenz;
