import { useEffect, useState } from "react";
import classes from "./TryLorenz.module.css";
import Button from "../../UI/Button/Button";
import Head from "next/head";
import StepProgressBar from "../../components/StepProgressBar/StepProgressBar";
import { Container } from "@mui/material";
import Link from "next/link";

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
          si può trovare{" "}
          <Link href="https://lorenz.virtualcolossus.co.uk/LorenzSZ/">
            <a className={classes.link} target="_blank">
              qui
            </a>
          </Link>
        </p>
        <h2 className="subtitle">Primo passo</h2>
        <p className="description">
          Come primo passo, prima di comunicare, dobbiamo spegnere la macchina
          Lorenz, premendo sulla levetta centrale la quale deve trovarsi su{" "}
          <b>Aus</b>.
          <br />
          Così facendo saremo in grando di comunicare in plain text.
        </p>
        <h2 className="subtitle">Secondo passo</h2>
        <p className="description">
          Ora passo bisogna selezionare una posizione iniziale per ogni rotori
          utilizzando la tabella chiamata <b> Spruchtafel</b> che abbiamo visto
          nella pagina precedente.
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
          precedente. <br /> Tale configurazione viene chiamata <b>{"'QEP'"}</b>
          , quindi scriviamo QEP seguito dall{"'"}alfabeto fonico tedesco
          corrispondente alle lettere della configurazione, sul simulatore, per
          fare più velocemente possiamo cliccare sul tasto{" "}
          <b>{"'Send key letters'"}</b> sotto alla Spruchtafel, in modo che tale
          procedura venga fatta automaticamente dal simulatore.
        </p>
        <h2 className="subtitle">Quinto passo</h2>
        <p className="description">
          A questo punto sia mittente che destinatario devono impostare le
          posizioni della configurazione sui dodici rotori, anche qui, per fare
          più velocemente si può direttamente cliccare sul tasto{" "}
          
        </p>
        <h2 className="subtitle">Sesto passo</h2>
        <p className="description">
          Infine, accendiamo la macchina Lorenz, scriviamo il nostro testo e
          potremo vedere il testo cifrato nella riga <b>{"'Send/Recv'"}</b>
        </p>
        <div className="btn-container">
          <Button path="../Algorithm/prev" action="prev" />
        </div>
      </Container>
    </>
  );
}

export default TryLorenz;
