import Head from "next/head";
import Button from "../../UI/Button/Button";
import classes from "./Algorithm.module.css";
import StepProgressBar from "../../components/StepProgressBar/StepProgressBar";
import Container from "@mui/material/Container";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function Algorithm() {
  const router = useRouter();
  const action = router.query.action;
  let startPercent;
  if (action === "prev") {
    startPercent = 100;
  } else {
    startPercent = 0;
  }

  const [percent, setPercent] = useState(startPercent);

  useEffect(() => {
    setPercent(50);
  }, []);

  return (
    <>
      <Head>
        <title>Algoritmo</title>
      </Head>
      <StepProgressBar percent={percent} />
      <Container maxWidth="lg">
        <h1 className="title">Algoritmo</h1>

        <h2 className="subtitle">Che cos{"'"}è una telescrivente</h2>
        <p className="description">
          Abbiamo detto che Lorenz è una telescrivente, ma come funzionano le
          <b> telescriventi</b>? <br />
          <br />
          Le telescriventi utilizzavano il codice <b>Baudot</b>, una tecnica che
          permetteva loro di inviare impulsi elettrici per rappresentare le
          lettere dell’alfabeto. <br /> Ogni lettera può essere rappresentata da
          un codice a <b>5 bit,</b> ogni bit può essere un <b>impulso</b> oppure
          il
          <b> nulla</b>
        </p>
        <div className={classes["img-container"]}>
          <Image
            className={classes["img"]}
            src="/baudot.jpg"
            alt="Codice Baudot"
            width={950}
            height={270}
          />
        </div>

        <p className="description">
          Essendo quindi la lunghezza del codice pari a 5 e il numero di simboli
          pari a 2, il numero massimo di simboli codificabili sarebbero{" "}
          <b>
            2<sup>5</sup> = 32.
          </b>{" "}
          <br /> <br />
          32 simboli non sono abbastanza per codificare sia l’alfabeto che i
          numeri e per questo venivano utilizzati due codici di controllo
          speciali che permettevano di passare dalla modalità lettera alla
          modalità numero. <br /> <br />
          Pertanto, a seconda dell{"'"}ultimo codice di controllo inviato, il
          segnale <b> x····· </b> potrebbe essere E oppure 3. <br /> A{" "}
          <b> Bletchley Park</b>, registrarono gli impulsi come una <b>‘ X ’</b>{" "}
          mentre il nulla come un <b>‘ . ’</b>
        </p>

        <h2 className="subtitle">Il cifrario di Vernam</h2>
        <p className="description">
          Le macchine cifranti Lorenz SZ utilizzavano il cifrario di{" "}
          <b>Vernam.</b>
          <br />
          <br />
          Il <b>cifrario di Vernam</b>, inventato nel 1918, permetteva di
          cifrare le informazioni di una telescrivente semplicemente facendo
          modulo-2 tra esse e una stringa casuale di lettere. Modulo-2 è uguale
          allo XOR.
          <br />
          <br />
          Per esempio se volessimo cifrare la lettera <b>{"' O '"}</b> usando la
          lettera <b>{"' F '"}</b> riceviamo la <b>{"' Y '"}:</b>
        </p>

        <table className={classes.table}>
          <tr>
            <th align="right">Lettera</th>
            <th colSpan="5">Impulsi</th>
          </tr>
          <tr>
            <td>O</td>
            <td>.</td>
            <td>.</td>
            <td>.</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>F</td>
            <td>X</td>
            <td>.</td>
            <td>X</td>
            <td>X</td>
            <td>.</td>
          </tr>
          <tr>
            <td>Y</td>
            <td>X</td>
            <td>.</td>
            <td>X</td>
            <td>.</td>
            <td>X</td>
          </tr>
        </table>

        <h2 className="subtitle">Come funzionava Lorenz SZ</h2>

        <p className="description">
          Inizialmente c{"'"}era un problema, ovvero quello di garantire che
          ciascuna estremità del collegamento avesse a disposizione lo stesso
          set di nastri codificati casualmente, ciò era praticamente
          impossibile, per questo decisero di creare una macchina che avrebbe
          generato una sequenza casuale di caratteri che avrebbe poi aggiunto al
          messaggio da inviare.
        </p>
        <div className={`${classes.container} img-container`}>
          <p className={`description ${classes.book} img-text`}>
            Il ricevente avrebbe direttamento visto il <b>plain text</b>, nel
            caso in cui stesse utilizzando una macchina simile e abbia impostato
            lo stesso punto di partenza dei rotori del mittente. <br />
            <br /> Così facendo, la macchina del ricevente avrebbe generato la
            stessa stringa generata dalla macchina del mittente, per poi fare
            modulo-2 tra essa e il testo crittografato ricevuto. <br />
            <br />
            Il punto di inizio lo si sceglieva basandosi su una tabella con 12
            colonne (una per ogni rotore), nell{"'"}esempio in foto, il primo
            rotore doveva essere impostato su <b>{"' 1 '"}</b>, il secondo su{" "}
            <b>{"' 42 '"}</b> e così via... <br /> <br />
            Successivamente bisognava trasmettere al ricevente le lettere, in
            chiaro, corrispondenti ai numeri quindi H, L, E ma utilizzando l
            {"'"}alfabeto fonetico tedesco, quindi invieremo: Heinrich, Ludwig,
            Emil ecc...
          </p>
          <div className={`${classes["img-container"]} ${classes["img-text"]}`}>
            <Image
              className={classes["img"]}
              src="/spruchtafel.png"
              alt="Spruchtafel"
              width={450}
              height={550}
            />
            <p className={classes["container__text"]}>
              Tabella chiamata <b>Spruchtafel</b>, letteralmente: bacheca.
            </p>
          </div>
        </div>

        <p className="description">
          Ogni carattere della stringa casuale veniva generato da un insieme di
          cinque <b>rotori</b> che aggiungevano un <b>{"' . '"}</b> o una
          <b>{"' X '"}</b> per ciascuno dei cinque impulsi. <br />
          Ogni lettera del plain text inserita avrebbe mosso i cinque rotori di
          una posizione, cambiando quindi il prossimo carattere generato.
        </p>

        <p className="description">
          Per evitare che la stringa generata non si ripetesse troppo spesso,
          decisero di creare due set da cinque rotori ciascuno, quindi
          essenzialmente, venivano generati due caratteri, in base alla
          posizioen iniziale dei rotori, che poi venivano aggiunti al carattere
          in chiaro tramite modulo-2. <br />
          <br />
          Infine per un maggior miscuglio vennero aggiunti due rotori che
          cambiavano ogni volta che il secondo set di rotori cambiava.
        </p>

        <h2 className="subtitle">I rotori</h2>

        <p className="description">
          A <b>Bletchley Park</b>, il primo set di cinque rotori venne chiamato{" "}
          <b>Psi,</b> tali rotori si muovevano in modo sfalsato a seconda del
          risultato dei due rotori del motore. <br />
          <br />L{"'"}altro set di rotori venne chiamato <b>Chi</b>, tali rotori
          si muovevano tutti insieme per ogni carattere codificato. <br />{" "}
          <br />
          Il primo rotore del motore girava per ogni carattere, mentre il
          secondo si muoveva solo quando il risultato del primo rotore conteneva
          una {"' X '"}.
        </p>
        <div className={classes["img-container"]}>
          <Image
            className={classes["img"]}
            src="/lorenz_wheels.jpg"
            alt="Rotori della Lorenz SZ42"
            width={850}
            height={550}
          />
        </div>

        <div className="btn-container">
          <Button path="../" action="prev" />

          <Button path="../TryLorenz" action="next" />
        </div>
      </Container>
    </>
  );
}

export default Algorithm;
