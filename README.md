[![Get invited](https://slack.developers.italia.it/badge.svg)](https://slack.developers.italia.it/)

# I template HTML del modello per i siti web e i servizi digitali dei Comuni Italiani
 
## ⌨️ Il codice pronto all'uso

In questo repository è possibile trovare alcune pagine statiche esemplificative del [modello di sito web per i Comuni Italiani](https://designers.italia.it/kit/comuni/). È possibile visualizzare e scaricare il codice HTML/CSS e Javascript dei template, già pronto all’uso e validato in termini di accessibilità e conformità alle [Linee guida di design per i servizi web della PA](https://docs.italia.it/italia/design/lg-design-servizi-web/), e costruiti sulle fondamenta fornite dallo [UI Kit](https://github.com/italia/design-ui-kit) e dalla libreria [Bootstrap Italia](https://italia.github.io/bootstrap-italia/).

## 📖 Come usare i template

Per l'esecuzione del repository, è necessario avere installato una versione di node >= 14.18.0

Come _templating language_ è stato usato Handlebars, insieme a fogli di stile in SCSS e Javascript. Il progetto viene compilato tramite Webpack.

### Installazione

Per iniziare, è necessario installare le dipendenze del progetto:

```node

npm i

```

In seguito puoi avviare il repository in modalità sviluppo:

```node

npm run start

```

Infine, compila i templates generando la cartella "dist": 

```node

npm run build

```

## 🔧 Segnalazione bug e richieste di aiuto

Per segnalare un bug apri un issue qui su GitHub. Se invece vuoi discutere delle scelte fatte o qualcosa non ti è chiaro, puoi farlo su [Slack](https://slack.developers.italia.it/) nel canale `#design-siti-dei-comuni` o scrivere su [Forum Italia](https://forum.italia.it/c/design) di Designers Italia.

## ✨ Come contribuire

Vorresti dare una mano contribuendo allo sviluppo del progetto?

Se non l'hai già fatto, inizia spendendo qualche minuto per approfondire la tua conoscenza su l'[Architettura dell'Informazione dei siti web dei Comuni Italiani](https://docs.google.com/spreadsheets/d/1D4KbaA__xO9x_iBm08KvZASjrrFLYLKX/edit#gid=1529184526) e fai riferimento alle [indicazioni su come contribuire](https://github.com/italia/design-comuni-wordpress-theme/blob/main/CONTRIBUTING.md).

A questo punto, è necessario scaricare una copia in locale del tema tramite il comando `git fork https://github.com/italia/design-comuni-pagine-statiche.git` da terminale o cliccando sul pulsante Fork <br>
![fork](https://user-images.githubusercontent.com/69706/188419656-21fa5b0e-c52a-4168-a1d1-8ea9a149da6a.png)

Una volta terminate le modifiche, è necessario aprire una _pull request_ per sottoporle alla revisione del team.
