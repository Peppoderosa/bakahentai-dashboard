import React from "react";
import DropZone from "../DropZone";
import Button from "../../components/MenuButton";
import DropZoneCount from "../DropZoneCount";
import * as ButtonHover from "../ButtonHover";
//css
import "./styles.scss";
//assets
import closeIcon from "../../assets/icons/close.svg";

function DropZoneContainer({ title, limit = 100, poptext }) {
  const [files, setFiles] = React.useState([]);
  const [blob, setBlob] = React.useState([]);
  const [selectedChip, setSelectedChip] = React.useState(-1);
  const [starred, setStarred] = React.useState(-1);
  const [showPopOver, setShowPopOver] = React.useState(false);

  const link = "RegisterEpisodes/" + title;

  React.useEffect(() => {
    if (files.length >= 1) {
      setSelectedChip(files.length - 1);
    }
    console.log(files);
    ToBase64();
    setShowPopOver(files.length === 1 ? true : false);
    setTimeout(() => {
      setShowPopOver(false);
    }, 10000);
  }, [files]);

  const divStyle =
    selectedChip !== -1
      ? {
          backgroundImage: "url(" + blob[selectedChip] + ")",
        }
      : null;

  const fileInputRef = React.useRef();
  const fileInputReplaceRef = React.useRef();

  // function handleFiletoBase64(file) {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function (e) {
  //     setBase64((prev) => [...prev, reader.result]);
  //   };
  // }

  // function handleReplaceBase64(file) {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function (e) {
  //     setBase64((prev) => prev.slice(selectedChip, 1, reader.result));
  //   };
  // }
  // function handleDeleteBase64() {
  //   const newArray = Array.from(base64);
  //   newArray.splice(selectedChip, 1);
  //   setBase64(newArray);
  // }

  function ToBase64() {
    setBlob([]);
    files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setBlob((prev) => [...prev, reader.result]);
      };
    });
  }

  function handleClickInput() {
    fileInputRef.current.click();
  }
  function handleClickInputReplace() {
    fileInputReplaceRef.current.click();
  }

  function handleDelete() {
    // handleDeleteBase64();
    const newFiles = files.slice();
    newFiles.splice(selectedChip, 1);
    setFiles(newFiles);
    setSelectedChip(-1);
  }

  function handleReplace() {
    const filestemp = fileInputReplaceRef.current.files;
    const newFiles = Object.values(filestemp);
    if (fileInputReplaceRef.current.files.length) {
      if (fileInputReplaceRef.current.files[0].type.includes("image")) {
        setFiles((prev) => prev.slice(selectedChip, 1, newFiles[0]));
      } else {
        console.log("Erro: formato não suportado");
      }
    }
  }

  async function handleFile() {
    const filestemp = fileInputRef.current.files;
    const newFiles = Object.values(filestemp);
    let count = files.length;

    newFiles.map((file) => {
      if (file.type.includes("image") && count < limit) {
        count = count + 1;
        // handleFiletoBase64(file);
        setFiles((prev) => [...prev, file]);
      } else {
        console.log("Erro: formato não suportado");
      }
      return null;
    });
  }
  function handleStarred() {
    setStarred(selectedChip);
  }

  function handleUnStarred() {
    setStarred(-1);
  }

  return (
    <section className="dragndrop-container">
      <input
        ref={fileInputReplaceRef}
        className="file-input"
        type="file"
        onChange={handleReplace}
      />
      <input
        multiple
        ref={fileInputRef}
        className="file-input"
        type="file"
        onChange={handleFile}
      />
      <article
        className="dragndrop-main-container"
        style={
          selectedChip === -1
            ? { border: "2px dotted grey" }
            : { border: "2px dotted #2f2e2e" }
        }
      >
        {selectedChip === -1 ? (
          <DropZone
            text="Clique ou arraste uma imagem"
            setFiles={setFiles}
            limit={limit}
            files={files}
          />
        ) : (
          <div style={divStyle} className="image-container" alt="">
            <div className="pop-over-warning">
              {showPopOver ? (
                <>
                  <img
                    src={closeIcon}
                    alt=""
                    onClick={() => setShowPopOver(false)}
                  />
                  <p>{poptext}</p>
                </>
              ) : null}
            </div>
            <ButtonHover.Container>
              <ButtonHover.Button
                text="Substituir"
                onClick={handleClickInputReplace}
              />

              {starred === selectedChip ? (
                <ButtonHover.Button
                  text="Desfavoritar"
                  onClick={handleUnStarred}
                />
              ) : (
                <ButtonHover.Button text="Favoritar" onClick={handleStarred} />
              )}
              <ButtonHover.Button text="Excluir" onClick={handleDelete} />
            </ButtonHover.Container>
          </div>
        )}
      </article>

      <article className="count-group">
        {files.map((data, i) => (
          <DropZoneCount
            key={i}
            index={i}
            className="chip"
            onClick={setSelectedChip}
            starred={starred}
          />
        ))}

        <span className="last-span" onClick={handleClickInput}>
          +
        </span>
      </article>
      <Button
        className="button-dragndrop"
        to={link}
        text="Cadastrar Episódios"
      />
    </section>
  );
}

export default DropZoneContainer;
