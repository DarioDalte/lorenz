import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import classes from "../styles/Home.module.css";
import Head from "next/head";
import Container from "@mui/material/Container";

import StepProgressBar from "../components/StepProgressBar/StepProgressBar";
import Image from "next/image";

export default function Home() {
  const [percent, setPercent] = useState(50);

  useEffect(() => {
    setPercent(0);
  }, []);

  return (
    <>
      <Head>
        <title>Introduzione</title>
      </Head>
      <StepProgressBar percent={percent} />
      <Container maxWidth="lg">
        <h1 className='title'>Lorenz SZ</h1>

        <h2 className='subtitle'>{"Cos'è"} Lorenz SZ</h2>
        <p className='description'>
          Le Lorenz SZ erano una serie di telescriventi per comunicazioni
          segrete realizzate durante la seconda guerra mondiale su richiesta
          delle autorità militari del Terzo Reich
        </p>
        <div className={`${classes.container} img-container`}>
          <div className={`${classes["container__left"]} img-text `}>
            <p className='text'>Esistevano due principali modelli:</p>
            <ul className={classes["model-list"]}>
              <li className={classes["model"]}>
                <b>Lorenz SZ40,</b> prima versione con 10 rotori
              </li>
              <li className={classes["model"]}>
                <b>Lorenz SZ42 a/b,</b> versione definitiva con 12 rotori
              </li>
            </ul>
          </div>
          <div className={`${classes["container__right"]}`}>
            <Image
              className={classes["img"]}
              src="/lorenz.jpg"
              alt="Lorenz SZ42"
              width={525}
              height={400}
            />
            <p className={classes["container__text"]}>Lorenz SZ42</p>
          </div>
        </div>

        <h2 className='subtitle'>Come e quando è nata</h2>
        <p className='description'>
          La macchina di cifratura <b>Enigma</b> era abbastanza portatile per le truppe
          in prima linea, ma richiedeva due operatori a ciascuna estremità del
          collegamento: uno per cifrare il messaggio una lettera alla volta e un
          altro per trasmetterlo tramite codice Morse
        </p>
        <p className='description'>
          Ciò che era richiesto dall{"'"}alto comando tedesco era qualcosa di
          più veloce e ancora più sicuro per trasmettere messaggi direttamente
          tra Berlino e i generali in prima linea, così, nel 1941, nasce <b>Lorenz SZ40, </b>
          l’evoluzione di <b>Enigma.</b> <br/>
          Tale modello venne successivamente potenziato con la creazione di <b>Lorenz SZ42/a</b> nel 1943 e infine <b>Lorenz SZ42/b</b> nel 1944.
        </p>
      </Container>

      <div className="btn-container">
        <Button path="/Algorithm/next" action="next" />
      </div>
    </>
  );
}
